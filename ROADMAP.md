# Roadmap

> Source of truth for sequencing. Detail lives in [docs/PLAN.md](docs/PLAN.md); architecture in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Last updated: 17 July 2026.

## Status

| Phase | Name | Status | Effort | Depends on |
|---|---|---|---|---|
| 0 | Correctness and preview safety | done | S | — |
| 1 | Canonical source and curriculum contract | done | M | 0 |
| 2 | History and mental model | done | M | 1 |
| 3 | Progressive HTML path | done | L | 2 |
| 4 | Progressive CSS path | done | L | 3 |
| 5 | Git, capstone, and recovery | done | L | 4 |
| 6 | Automated checks and editorial integration | done | M | 5 |

## Phase details

### Phase 0: correctness and preview safety — done
- **Objective:** make previews and learner commands truthful and safe.
- **Exit criteria:** copyable assets work, Git uses the existing folder, and iframe preview is titled/sandboxed.
- **Tasks:**
  - [x] Add iframe `title` and `sandbox="allow-forms"` in `LivePreview.vue`.
  - [x] Replace fake image paths with downloadable project assets.
  - [x] Correct doctype wording to current HTML standards mode.
  - [x] Make Git initialize the existing `my-shop-profile`.

### Phase 1: canonical source and curriculum contract — done
- **Objective:** make audience, tooling, canonical files, and lesson structure explicit.
- **Exit criteria:** setup is self-guided, agenda fits one day, and legacy content is not rendered.
- **Tasks:**
  - [x] Add `docs/intro/setup.md` and starter HTML.
  - [x] Add `docs/CONTRIBUTING.md` lesson contract.
  - [x] Archive the monolith and inactive Bun lockfile under `archive/`.
  - [x] Declare npm 11.11.0 and keep `package-lock.json` active.

### Phase 2: history and mental model — done
- **Objective:** explain why Web, HTML, and CSS exist before teaching syntax.
- **Exit criteria:** history lesson has CERN/W3C/WHATWG primary sources and observable checkpoints.
- **Tasks:**
  - [x] Add `docs/intro/web-history.md` and the CERN illustration.
  - [x] Deepen Internet/Web, URL/HTTP, request/response, and DevTools activity.
  - [x] Add answer references to the instructor checklist.

### Phase 3: progressive HTML path — done
- **Objective:** build one semantic, accessible document from start to validation.
- **Exit criteria:** every core HTML page has required lesson blocks and working assets.
- **Tasks:**
  - [x] Rewrite structure, tags, links/images, and semantic lessons around one project.
  - [x] Add accessibility and W3C validation lesson.
  - [x] Mark tables/forms enrichment and add caption/scope/label guidance.

### Phase 4: progressive CSS path — done
- **Objective:** grow one `style.css` through cascade, box, visual design, Flexbox, and responsive checks.
- **Exit criteria:** core pages include copyable code and 320/768/1280px checkpoints; Grid is enrichment.
- **Tasks:**
  - [x] Add cascade/inheritance, unit choices, contrast, and `:focus-visible`.
  - [x] Align HTML/CSS class names and “กาแฟบ้านดอย” content.
  - [x] Add CSS before/after and responsive device illustrations.

### Phase 5: Git, capstone, and recovery — done
- **Objective:** record real learner work in three milestones and verify a push-ready capstone.
- **Exit criteria:** manual existing-directory Git E2E reaches three commits with a clean tree.
- **Tasks:**
  - [x] Rewrite Git flow with `pwd`, status, diff, add, commit, log, remote, and push.
  - [x] Mark clone as an alternate enrichment path.
  - [x] Add pass/fix rubric, troubleshooting, and instructor checklist.
  - [x] Validate a three-commit flow in a fresh temporary repository.

### Phase 6: automated checks and editorial integration — done
- **Objective:** prevent content regressions and make project knowledge durable.
- **Exit criteria:** `npm test` and `git diff --check` pass; routes/assets/core blocks are verified.
- **Tasks:**
  - [x] Add `scripts/check-curriculum.mjs`, `docs:check`, and `test`.
  - [x] Generate and integrate six WebP illustrations.
  - [x] Add image manifest and remove learner-facing illustration placeholders.
  - [x] Enforce raw download links, image alt attributes, and nav/sidebar completeness in the curriculum checker.
  - [x] Refresh `AGENTS.md`, `docs/ARCHITECTURE.md`, and this roadmap.
- **Notes:** 17 July 2026 — `npm test` passes for 34 learner pages. `npm audit` still reports three transitive dev-tool advisories with no automatic fix.

## Open questions

- [ ] When VitePress releases a compatible dependency chain with fixed Vite/esbuild advisories, test the upgrade in a branch and rerun `npm test`.
- [ ] Pilot the full 09:00–16:00 agenda with beginner learners and record actual completion times before changing core/enrichment scope.

## Risks

| Risk | Likelihood | Impact | Mitigation / rollback |
|---|---|---|---|
| VitePress dev-server dependency advisories | medium | high on exposed dev server | bind locally only; monitor upstream; static build remains the delivery artifact |
| One-day agenda runs long in a real class | medium | high | preserve checkpoints and enrichment split; pilot before adding more core topics |
| GitHub auth/network unavailable in the room | medium | high | preflight accounts; use troubleshooting; accept local `git log` evidence and push later |
| Generated art becomes stylistically inconsistent | low | medium | follow the manifest art direction; use code-native diagrams for exact labels |
