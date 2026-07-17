# AGENTS.md

## What this repository is

A single-file educational content repository containing a Thai-language
workshop curriculum for teaching HTML, CSS, and Git basics to beginners.
The sole file is `workshop-html-css-git.md` (803 lines, 30 sections).

There is no application code, no build system, no tests, and no git history.
This is a content-only project.

## Verified facts

- **Single file:** `workshop-html-css-git.md` — confirmed by `ls -la` and
  `find` (no hidden files, no subdirectories).
- **No git repository:** `git status` exits with code 128; no `.git/` dir.
- **No remote:** `git remote -v` produces no output.
- **No manifests:** no `package.json`, `Makefile`, `Dockerfile`, or CI
  config files exist.
- **No existing knowledge files:** no `CLAUDE.md`, `AGENTS.md`,
  `.cursorrules`, or `docs/` directory prior to this run.

## Commands

There are no build, test, or lint commands. The repository contains only
a Markdown document. To preview it, open the file in any Markdown viewer
or text editor.

## Document conventions

All conventions below have 2+ examples in the file.

1. **Section numbering:** Every section uses `# NN. Title` format
   (e.g., `# 01.`, `# 02.`, … `# 30.`). — lines 1, 17, 32, 784.
2. **Horizontal rule separators:** Every section ends with `---`.
   — lines 15, 30, 49, 76.
3. **Blockquote tips:** `>` introduces pedagogical notes or tips.
   — lines 11, 26, 45, 72.
4. **Recommended illustrations:** `**ภาพประกอบที่แนะนำ:**` closes most
   sections with a description of a suggested visual.
   — lines 13, 28, 47, 74.
5. **Fenced code blocks with language tags:** `html`, `css`, `bash`,
   `text`. — lines 82, 109, 287, 523.
6. **All prose in Thai; code examples use Thai business names**
   (ร้านกาแฟ, ร้านเบเกอรี, etc.). — lines 88, 110, 135.
7. **Bullet lists for key takeaways** after code blocks.
   — lines 97-99, 121-124, 148-151.

## How to add a new section

1. Append a new `# NN. Title` heading with the next sequential number.
2. Write content using fenced code blocks with appropriate language tags.
3. Add a `> ` blockquote if there is a tip or note.
4. End with `**ภาพประกอบที่แนะนำ:** ...` for the suggested visual.
5. Close the section with `---` on its own line.

## Gotchas

- The document is entirely in Thai. If editing, maintain Thai language
  consistency for all prose.
- Code examples are illustrative snippets, not runnable project files.
  They use placeholder paths like `images/eco-bag.jpg`.
- The workshop date (18 กรกฎาคม 2569 / July 18, 2026) and instructor
  info are hardcoded in section 01 (lines 5-9).
