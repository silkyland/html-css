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

function isExternalReference(target) {
  return /^(?:https?:|mailto:|tel:|data:)/i.test(target) || target.startsWith('#')
}

function checkLocalReference(sourcePath, target, kind, forceAsset = false) {
  if (isExternalReference(target)) return
  const clean = decodeURIComponent(target.split(/[?#]/, 1)[0])
  const looksLikeAsset = forceAsset || clean.startsWith('/images/') ||
    /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(clean)

  if (looksLikeAsset) {
    const assetPath = clean.startsWith('/')
      ? join(publicRoot, clean.replace(/^\//, ''))
      : resolve(sourcePath, '..', clean)
    if (!existsSync(assetPath)) reportMissing(sourcePath, kind, target)
    return
  }

  if (clean.startsWith('/')) {
    const publicPath = join(publicRoot, clean.replace(/^\//, ''))
    if (existsSync(publicPath)) return
    const destination = routeTarget(clean)
    if (!existsSync(destination)) reportMissing(sourcePath, kind, target)
    return
  }

  const filePath = resolve(sourcePath, '..', clean)
  if ((clean.endsWith('.md') || clean.includes('/')) && !existsSync(filePath)) {
    reportMissing(sourcePath, kind, target)
  }
}

function checkMarkdownLinks(path) {
  const content = withoutCodeFences(readFileSync(path, 'utf8'))
  const markdownLink = /(!?)\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g
  const htmlReference = /<(a|img|source)\b[^>]*\b(href|src|srcset)=["']([^"']+)["'][^>]*>/gi
  const htmlImage = /<img\b(?=[^>]*\bsrc\s*=)[^>]*>/gi

  for (const match of content.matchAll(markdownLink)) {
    const isImage = match[1] === '!'
    const target = match[2].replace(/^<|>$/g, '')
    checkLocalReference(path, target, isImage ? 'asset' : 'ลิงก์/route', isImage)
  }

  for (const match of content.matchAll(htmlReference)) {
    const [, tag, attribute, value] = match
    const candidates = attribute.toLowerCase() === 'srcset'
      ? value.split(',').map((item) => item.trim().split(/\s+/)[0])
      : [value]
    for (const candidate of candidates) {
      checkLocalReference(path, candidate, `${tag.toLowerCase()} ${attribute.toLowerCase()}`, tag.toLowerCase() !== 'a')
    }
  }

  for (const match of content.matchAll(htmlImage)) {
    if (!/\balt\s*=\s*["'][^"']*["']/i.test(match[0])) {
      errors.push(`${relative(projectRoot, path)}: <img> ขาด alt (ใช้ alt="" สำหรับภาพตกแต่ง)`)
    }
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

  const curriculumDirectories = new Set(['intro', 'html', 'css', 'git', 'workshop', 'tools'])
  const learnerRoutes = learnerMarkdownFiles()
    .map((path) => relative(docsRoot, path).replace(/\.md$/, '').split('\\').join('/'))
    .filter((route) => curriculumDirectories.has(route.split('/')[0]))
    .map((route) => `/${route}`)

  for (const route of learnerRoutes) {
    if (!navLinks.includes(route)) errors.push(`docs/.vitepress/config.ts: learner page ขาดจาก nav: ${route}`)
    if (!sidebarLinks.includes(route)) errors.push(`docs/.vitepress/config.ts: learner page ขาดจาก sidebar: ${route}`)
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
