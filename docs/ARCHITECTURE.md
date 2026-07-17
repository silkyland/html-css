# Architecture

## Overview

This repository contains a single Markdown document,
`workshop-html-css-git.md` (803 lines), which serves as the complete
curriculum for a one-day, hands-on workshop teaching HTML, CSS, and Git
basics to beginners. The document is written entirely in Thai.

There is no application code, no build system, no tests, and no git
repository. The "architecture" is the document's structure and the
pedagogical flow of its 30 sections.

## Component table

| Component | Status | Description | Evidence |
|---|---|---|---|
| `workshop-html-css-git.md` | works | Single-file workshop curriculum, 30 sections | lines 1-803 |

## Document structure

The document is organized into 30 numbered sections covering three
main topics, plus workshop and closing sections:

### Part 1: Introduction (sections 01–04)

- **01:** Workshop overview — instructor, date, location (lines 1-15)
- **02:** Instructor introduction (lines 17-30)
- **03:** Agenda with time table (lines 32-49)
- **04:** How websites work — Client/Server/Database flow (lines 51-76)

### Part 2: HTML (sections 05–10)

- **05:** HTML document structure — `<!doctype>`, `<head>`, `<body>` (lines 78-103)
- **06:** Basic content tags — `<h1>`–`<h6>`, `<p>`, `<strong>`, `<br>`, `<hr>` (lines 105-128)
- **07:** Links and images — `<a>`, `<img>`, `alt` (lines 130-155)
- **08:** Lists and tables — `<ul>`, `<ol>`, `<table>` (lines 157-191)
- **09:** Semantic HTML — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` (lines 193-225)
- **10:** Contact form — `<form>`, `<label>`, `<input>`, `<textarea>`, `<button>` (lines 227-255)

### Part 3: CSS (sections 12–17)

- **12:** Linking CSS to HTML — `<link rel="stylesheet">` (lines 271-298)
- **13:** CSS selectors — tag, class, ID (lines 300-331)
- **14:** Box model — content, padding, border, margin, `box-sizing` (lines 333-362)
- **15:** Colors and typography (lines 364-393)
- **16:** Flexbox — `display: flex`, `gap`, `justify-content`, `align-items`, `flex-wrap` (lines 395-428)
- **17:** Responsive design — `@media`, `max-width`, `flex-direction` (lines 430-462)

### Part 4: Git & GitHub (sections 19–26)

- **19:** Version control concept (lines 478-499)
- **20:** Why use Git — benefits and vocabulary (lines 501-517)
- **21:** `git init` (lines 519-543)
- **22:** `git add` and staging area (lines 545-575)
- **23:** `git commit` and `git log` (lines 578-607)
- **24:** Creating a GitHub repository and adding a remote (lines 609-630)
- **25:** `git push` (lines 632-659)
- **26:** `git clone` and init vs clone (lines 661-685)

### Part 5: Workshop & closing (sections 27–30)

- **27:** Workshop project — build a shop profile page with requirements and grading criteria (lines 687-724)
- **28:** Summary of what was learned (lines 726-756)
- **29:** Learning resources — MDN, web.dev, W3Schools, Flexbox Froggy, Git docs (lines 758-782)
- **30:** Thank you and Q&A (lines 784-803)

### Break sections

- **11:** Morning break (lines 257-269)
- **18:** Lunch break (lines 464-476)

## Exemplar trace: How a typical section is structured

Section 13 (CSS Selectors) is a representative example:

1. **Section heading:** `# 13. CSS Selector: เลือกสิ่งที่จะตกแต่ง` (line 300)
2. **Brief explanation:** One-sentence intro of the concept (line 302)
3. **HTML code block:** Example markup with `id` and `class` attributes (lines 304-308)
4. **CSS code block:** Matching selectors — tag, class, ID (lines 310-325)
5. **Bullet list:** Key takeaways summarizing selector types (lines 327-329)
6. **Horizontal rule:** `---` closing the section (line 331)

Some sections additionally include:
- A `> ` blockquote tip (e.g., line 126 in section 06)
- A `**ภาพประกอบที่แนะนำ:**` recommended illustration (e.g., line 101 in section 05)

## Inconsistencies

None found. The document is highly consistent across all 30 sections.

## Sharp edges

1. **Hardcoded workshop metadata:** Instructor name, date (18 กรกฎาคม 2569),
   and location are hardcoded in section 01 (lines 5-9). Reusing this
   curriculum for a different date or instructor requires editing these lines.
2. **No git repository:** The project itself is not under version control.
   There is no `.git/` directory and no remote configured.
3. **Code examples are illustrative only:** The HTML/CSS snippets use
   placeholder paths (e.g., `images/eco-bag.jpg`) and are not part of a
   runnable project. They teach concepts, not produce a working site.
