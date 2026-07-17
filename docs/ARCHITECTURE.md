# Architecture

> Maintained by deep-plan-ingest from [PLAN.md](PLAN.md). Last ingested: 17 July 2026.
> Facts carry citations; if a citation no longer matches the code, re-verify before relying on it.

## System overview

The repository is a VitePress 1.6.4 documentation site for a Thai one-day beginner workshop (`package.json:1-16`). The learner reads a routed curriculum under `docs/`, downloads a starter HTML file and generated image assets from `docs/public/`, incrementally builds one coffee-shop page, and then records three milestones in Git. Navigation, local search, and excluded authoring files are configured centrally (`docs/.vitepress/config.ts:3-152`).

```text
docs/*.md ──VitePress──> static curriculum site
   │                         │
   ├── LivePreview ─────────> sandboxed HTML/CSS iframe
   ├── public/starter ──────> learner's my-shop-profile/
   └── public/images ───────> lesson illustrations and project image

learner: setup → history → HTML → accessibility → CSS → Git → capstone
quality: scripts/check-curriculum.mjs → VitePress production build
```

## Components

| Component | Responsibility | Status | Evidence |
|---|---|---|---|
| `docs/.vitepress/config.ts` | Thai metadata, nav/sidebar, search, author-file exclusions | works | `docs/.vitepress/config.ts:3-152` |
| `docs/.vitepress/components/LivePreview.vue` | Displays source and isolated rendered HTML/CSS | works | `docs/.vitepress/components/LivePreview.vue:4-78` |
| `docs/intro/` | Setup, agenda, history, Web mental model, instructor context | works | routes at `docs/.vitepress/config.ts:12-20,71-83` |
| `docs/html/` | Progressive semantic HTML plus accessibility validation and enrichment | works | routes at `docs/.vitepress/config.ts:23-32,84-97` |
| `docs/css/` | One cumulative `style.css` path; Grid is enrichment | works | routes at `docs/.vitepress/config.ts:35-44,98-111` |
| `docs/git/` | Existing-project init/add/commit/remote/push path; clone is alternate | works | routes at `docs/.vitepress/config.ts:47-56,112-125` |
| `docs/workshop/` | Capstone rubric, troubleshooting, instructor checks, summary/resources | works | routes at `docs/.vitepress/config.ts:59-68,126-139` |
| `docs/public/starter/` | Downloadable initial learner file | works | linked at `docs/intro/setup.md:47-69` |
| `docs/public/images/workshop/` | Six generated WebP illustrations | works | manifest at `docs/ILLUSTRATION-BACKLOG.md:5-22` |
| `scripts/check-curriculum.mjs` | Checks learner routes, assets, required lesson blocks, legacy-source references | works | `scripts/check-curriculum.mjs:11-184` |
| `archive/` | Frozen monolith and inactive Bun lockfile | works as archive | `archive/README.md:1-8` |

## Data flow

### Author/read path

1. Authors edit canonical lesson Markdown under `docs/` following `docs/CONTRIBUTING.md:1-31`.
2. `docs/.vitepress/config.ts:9-139` exposes each page in nav/sidebar; author-only Markdown is excluded at `:7`.
3. VitePress registers `LivePreview` globally through `docs/.vitepress/theme/index.ts:1-10`.
4. `LivePreview` combines lesson HTML/CSS into `srcdoc` (`docs/.vitepress/components/LivePreview.vue:27-52`) and renders it in a titled, sandboxed iframe (`:69-78`).
5. VitePress renders static pages; local search is enabled at `docs/.vitepress/config.ts:140-141`.

### Learner/write path

1. Setup creates `my-shop-profile/`, `images/`, and `index.html` (`docs/intro/setup.md:26-69`).
2. HTML lessons modify the same `index.html`; the history and Web lessons provide the mental model before syntax (`docs/intro/agenda.md:11-17`).
3. CSS lessons add and grow the same `style.css`, ending with 320/768/1280px checks (`docs/css/responsive.md:98-130`).
4. Git initializes that existing directory and records semantic page, styling, and responsive milestones (`docs/git/init.md:13-70`, `docs/git/commit.md:17-79`).
5. GitHub lessons add a remote and push; capstone evaluates evidence in four pass/fix categories (`docs/workshop/project.md:45-104`).

### Verification path

1. `npm run docs:check` invokes `scripts/check-curriculum.mjs` (`package.json:7-12`).
2. The checker walks learner Markdown, verifies internal routes/assets, validates required routes and five core lesson blocks, and forbids references to the legacy root filename (`scripts/check-curriculum.mjs:11-184`).
3. `npm run docs:build` performs the VitePress production render; `npm test` runs both checks (`package.json:9-12`).

## Framework mechanisms in use

| Mechanism | How this project uses it | Source |
|---|---|---|
| VitePress `themeConfig.nav` / `sidebar` | Routes five curriculum groups | local VitePress 1.6.4 types: `node_modules/vitepress/types/default-theme.d.ts:45-53,168-200` |
| VitePress `srcExclude` | Keeps plan/architecture/authoring docs out of learner pages | local VitePress 1.6.4 types: `node_modules/vitepress/dist/node/index.d.ts:2218-2225` |
| Vue global component | Registers `LivePreview` for Markdown lessons | `docs/.vitepress/theme/index.ts:1-10` |
| iframe `srcdoc` + `sandbox` | Renders authored HTML/CSS without script or same-origin privilege | [WHATWG HTML §4.8.5](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox) |
| HTML Living Standard | Grounds history, semantics, document structure | [WHATWG HTML Introduction](https://html.spec.whatwg.org/multipage/introduction.html) |
| CSS modules/snapshot | Grounds cascade, layout, responsive lessons | [W3C CSS Snapshot 2026](https://www.w3.org/TR/css/) |

## Decision records

### 1. Keep VitePress and repair curriculum flow (17 July 2026)
- **Decision:** retain the working docs framework and rewrite the pedagogy.
- **Why:** navigation, search, and production build were already functional.
- **Rejected:** replacing the delivery framework would not address the learner-path defects.

### 2. One cumulative learner project (17 July 2026)
- **Decision:** every teaching lesson modifies the same “กาแฟบ้านดอย” project; the explicit Capstone then customizes that same project and repository into the learner's brand.
- **Why:** removes snippet assembly, keeps Git attached to the actual work, and permits authentic capstone ownership without a second project.
- **Rejected:** unrelated business examples create unnecessary context switching.

### 3. Core versus enrichment (17 July 2026)
- **Decision:** keep Tables, Forms, Grid, and Clone as clearly labeled enrichment.
- **Why:** the core agenda must fit 09:00–16:00 (`docs/intro/agenda.md:5-30`).
- **Rejected:** deleting these pages would lose useful reference material.

### 4. Canonical `docs/` source (17 July 2026)
- **Decision:** archive the monolith and author only VitePress Markdown.
- **Why:** `docs/` is what builds and it supports previews, routes, and richer content.
- **Rejected:** bidirectional generation would add a second representation to maintain.

### 5. Generated raster scenes plus code-native exact diagrams (17 July 2026)
- **Decision:** use generated WebP for atmosphere/visual comparison and reserve SVG/HTML for label-critical diagrams.
- **Why:** generated scenes enrich the manual while code-native diagrams preserve exact terminology (`docs/ILLUSTRATION-BACKLOG.md:5-29`).
- **Rejected:** text-heavy generated diagrams risk inaccurate labels.

## Known constraints and sharp edges

- Lessons rely on exact core heading names; changing them requires updating `scripts/check-curriculum.mjs:119-161`.
- `LivePreview` intentionally disallows scripts and same-origin access; do not add JavaScript demos without a fresh threat/design review (`docs/.vitepress/components/LivePreview.vue:69-78`).
- npm currently reports three transitive development-tool advisories through VitePress/Vite/esbuild and no automatic fix; do not expose the dev server to untrusted networks (`package.json:14-16`; `npm audit`).
- GitHub UI/authentication can change; the course supplies a recovery page and local Git evidence fallback (`docs/workshop/troubleshooting.md:79-120`).
