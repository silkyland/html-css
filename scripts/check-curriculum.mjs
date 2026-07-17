import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { extname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))
const docsRoot = join(projectRoot, 'docs')
const publicRoot = join(docsRoot, 'public')
const configPath = join(docsRoot, '.vitepress', 'config.ts')
const errors = []

function walkMarkdown(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith('.') || entry.name === 'public') return []
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return walkMarkdown(path)
    return entry.isFile() && extname(entry.name) === '.md' ? [path] : []
  })
}

function learnerMarkdownFiles() {
  const excluded = new Set(['ARCHITECTURE.md', 'PLAN.md', 'CONTRIBUTING.md', 'ILLUSTRATION-BACKLOG.md'])
  return walkMarkdown(docsRoot).filter((path) => !excluded.has(relative(docsRoot, path)))
}

function withoutCodeFences(markdown) {
  return markdown.replace(/^(```|~~~)[\s\S]*?^\1.*$/gm, '')
}

function routeTarget(route) {
  const clean = route.split(/[?#]/, 1)[0]
  if (clean === '/') return join(docsRoot, 'index.md')
  const routePath = clean.replace(/^\//, '').replace(/\/$/, '')
  const markdownFile = join(docsRoot, `${routePath}.md`)
  if (existsSync(markdownFile)) return markdownFile
  return join(docsRoot, routePath, 'index.md')
}

function reportMissing(sourcePath, kind, target) {
  errors.push(`${relative(projectRoot, sourcePath)}: ${kind} ไม่พบ ${target}`)
}

function checkMarkdownLinks(path) {
  const content = withoutCodeFences(readFileSync(path, 'utf8'))
  const markdownLink = /(!?)\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g
  const htmlAsset = /<(?:img|source)\b[^>]*\b(?:src|srcset)=["']([^"']+)["'][^>]*>/gi

  for (const match of content.matchAll(markdownLink)) {
    const isImage = match[1] === '!'
    const target = match[2].replace(/^<|>$/g, '')
    if (/^(?:https?:|mailto:|tel:|data:)/i.test(target) || target.startsWith('#')) continue

    const clean = decodeURIComponent(target.split(/[?#]/, 1)[0])
    if (isImage || clean.startsWith('/images/') || /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(clean)) {
      const assetPath = clean.startsWith('/')
        ? join(publicRoot, clean.replace(/^\//, ''))
        : resolve(path, '..', clean)
      if (!existsSync(assetPath)) reportMissing(path, 'asset', target)
      continue
    }

    if (clean.startsWith('/')) {
      const destination = routeTarget(clean)
      if (!existsSync(destination)) reportMissing(path, 'route', target)
      continue
    }

    if (clean.endsWith('.md') || clean.includes('/')) {
      const destination = resolve(path, '..', clean)
      if (!existsSync(destination)) reportMissing(path, 'ลิงก์ไฟล์', target)
    }
  }

  for (const match of content.matchAll(htmlAsset)) {
    const candidate = match[1].split(/\s+/)[0]
    if (/^(?:https?:|data:)/i.test(candidate)) continue
    const clean = candidate.split(/[?#]/, 1)[0]
    const assetPath = clean.startsWith('/')
      ? join(publicRoot, clean.replace(/^\//, ''))
      : resolve(path, '..', clean)
    if (!existsSync(assetPath)) reportMissing(path, 'asset HTML', candidate)
  }
}

function extractLinks(source) {
  return [...source.matchAll(/\blink:\s*['"]([^'"]+)['"]/g)].map((match) => match[1])
}

function checkConfigRoutes() {
  const config = readFileSync(configPath, 'utf8')
  const navStart = config.indexOf('nav:')
  const sidebarStart = config.indexOf('sidebar:')
  const sidebarEnd = config.indexOf('outline:', sidebarStart)
  const navLinks = extractLinks(config.slice(navStart, sidebarStart))
  const sidebarLinks = extractLinks(config.slice(sidebarStart, sidebarEnd))

  for (const [label, links] of [['nav', navLinks], ['sidebar', sidebarLinks]]) {
    const duplicates = [...new Set(links.filter((route, index) => links.indexOf(route) !== index))]
    for (const route of duplicates) errors.push(`docs/.vitepress/config.ts: route ซ้ำใน ${label}: ${route}`)
    for (const route of links) {
      if (route.startsWith('/') && !existsSync(routeTarget(route))) {
        errors.push(`docs/.vitepress/config.ts: ${label} route ไม่พบไฟล์: ${route}`)
      }
    }
  }

  const requiredRoutes = [
    '/intro/setup',
    '/intro/web-history',
    '/html/accessibility-validation',
    '/workshop/troubleshooting',
    '/workshop/instructor-checklist',
  ]
  const configured = new Set([...navLinks, ...sidebarLinks])
  for (const route of requiredRoutes) {
    if (!configured.has(route)) errors.push(`docs/.vitepress/config.ts: ยังไม่ได้ประกาศ route ที่จำเป็น ${route}`)
  }
}

function checkCoreLessonBlocks() {
  const coreLessons = [
    'intro/setup.md',
    'intro/web-history.md',
    'intro/how-web-works.md',
    'html/structure.md',
    'html/tags.md',
    'html/links-images.md',
    'html/semantic.md',
    'html/accessibility-validation.md',
    'css/intro.md',
    'css/selectors.md',
    'css/box-model.md',
    'css/colors-fonts.md',
    'css/flexbox.md',
    'css/responsive.md',
    'git/version-control.md',
    'git/init.md',
    'git/add.md',
    'git/commit.md',
    'git/github.md',
    'git/push.md',
    'workshop/project.md',
  ]
  const blocks = [
    ['เป้าหมาย', /^## เป้าหมาย/m],
    ['สถานะเริ่มต้น/เริ่มจาก', /^## (?:สถานะเริ่มต้น|เริ่มจาก)/m],
    ['ลงมือ', /^## ลงมือ/m],
    ['ผลที่ควรเห็น', /^## ผลที่ควรเห็น/m],
    ['Checkpoint', /^## Checkpoint/m],
  ]

  for (const relativePath of coreLessons) {
    const path = join(docsRoot, relativePath)
    if (!existsSync(path)) {
      errors.push(`docs/${relativePath}: ไม่พบบทเรียนหลัก`)
      continue
    }
    const content = readFileSync(path, 'utf8')
    for (const [label, pattern] of blocks) {
      if (!pattern.test(content)) errors.push(`docs/${relativePath}: ขาดหัวข้อ ${label}`)
    }
  }
}

function checkCanonicalSource(files) {
  const forbidden = /(?:^|[\s('"`])\/?workshop-html-css-git\.md\b/m
  for (const path of files) {
    if (forbidden.test(readFileSync(path, 'utf8'))) {
      errors.push(`${relative(projectRoot, path)}: อ้างถึง legacy root workshop-html-css-git.md`)
    }
  }
}

const files = learnerMarkdownFiles()
for (const path of files) checkMarkdownLinks(path)
checkConfigRoutes()
checkCoreLessonBlocks()
checkCanonicalSource(files)

if (errors.length > 0) {
  console.error(`Curriculum check failed (${errors.length}):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exitCode = 1
} else {
  console.log(`Curriculum check passed: ${files.length} learner pages, routes, assets, and core lesson blocks verified.`)
}
