# AGENTS.md

This repository is a Thai-language, one-day beginner curriculum for HTML, CSS, Git, and GitHub, rendered as a VitePress site. It is educational content plus a small docs toolchain; it is not an application, JavaScript course, backend, or production deployment project (`docs/intro/overview.md:5-46`, `package.json:7-16`).

## Ground rules

- Treat `docs/` as the only canonical curriculum. `archive/workshop-html-css-git-v1.md` is frozen legacy and is not rendered (`archive/README.md:1-8`).
- Keep all learner-facing prose in Thai. Explain an English technical term on first use and keep executable code/commands in their native syntax (`docs/CONTRIBUTING.md:1-31`).
- Preserve the cumulative learner path: `my-shop-profile/index.html` → `style.css` → Git in that same directory. Do not switch brands or invent a second project (`docs/CONTRIBUTING.md:17-22`).
- Every core lesson must retain headings for เป้าหมาย, สถานะเริ่มต้น/เริ่มจาก, ลงมือ, ผลที่ควรเห็น, and Checkpoint; the checker enforces them (`scripts/check-curriculum.mjs:119-161`).
- Keep Tables, Forms, CSS Grid, and `git clone` labeled as enrichment; they are outside the 09:00–16:00 core path (`docs/intro/agenda.md:5-34`).
- Code shown to learners must copy-run with the same result as its preview. Put public assets under `docs/public/` and verify every route/asset (`docs/CONTRIBUTING.md:17-31`, `scripts/check-curriculum.mjs:42-81`).
- Keep `LivePreview` sandboxed and titled. Do not enable scripts or `allow-same-origin`; this curriculum has no JavaScript scope (`docs/.vitepress/components/LivePreview.vue:69-78`).
- Use primary sources for historical or standards claims: CERN, W3C, WHATWG, and git-scm. Keep the citation adjacent to the claim (`docs/intro/web-history.md:1-111`).
- Use npm only; npm 11.11.0 is declared and `package-lock.json` is the active lockfile (`package.json:4-16`).
- Do not expose the VitePress development server to untrusted networks. Current VitePress 1.6.4 transitively carries Vite/esbuild dev-server advisories and npm reports no automatic fix (`package.json:14-16`; verify with `npm audit`).

## Common wrong assumptions

- “This is a single Markdown file with no Git/build system” is wrong: VitePress routes live in `docs/.vitepress/config.ts:3-152`, and scripts live in `package.json:7-12`.
- “The old 802-line workshop file is the source” is wrong: it moved to `archive/` and is frozen (`archive/README.md:3-8`).
- “`<!doctype html>` means a frozen HTML5 version” is wrong: the lesson explains current HTML standards mode and links the Living Standard (`docs/html/structure.md:34-82`).
- “Git starts by creating another empty project folder” is wrong: the Git path initializes the existing learner project (`docs/git/init.md:5-70`).
- “Every lesson is core” is wrong: the agenda explicitly separates enrichment (`docs/intro/agenda.md:25-30`).

## Commands

- Install reproducibly: `npm ci`
- Develop locally: `npm run docs:dev`
- Content/routes/assets check: `npm run docs:check`
- Production build: `npm run docs:build`
- Full verification: `npm test`
- Dependency advisory report: `npm audit`

## Where knowledge lives

- Authoring contract: [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)
- Architecture and data flow: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Current phase and what's next: [ROADMAP.md](ROADMAP.md)
- Full research and decisions record: [docs/PLAN.md](docs/PLAN.md)
- Generated asset manifest: [docs/ILLUSTRATION-BACKLOG.md](docs/ILLUSTRATION-BACKLOG.md)
