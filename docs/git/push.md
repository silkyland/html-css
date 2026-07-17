---
title: git push
---

# `git push`: ส่งประวัติขึ้น GitHub

> **บทเรียนหลัก (Core)** — `push` ส่ง commit ไม่ได้ส่ง working tree ที่ยังไม่ commit

## เป้าหมาย

เมื่อจบบทนี้ คุณจะส่ง branch `main`, ยืนยัน upstream และตรวจหลักฐานบน GitHub ได้

## เริ่มจาก

ตรวจให้แน่ใจว่าไม่มีงานค้างและ remote ถูกต้อง:

```bash
git status
git remote -v
```

## ลงมือทำ

ส่งครั้งแรกและกำหนดให้ local `main` ติดตาม `origin/main`:

```bash
git push -u origin main
```

ระบบอาจเปิด browser หรือถาม credential ตามเครื่องมือที่ติดตั้ง เมื่อสำเร็จจะมีข้อความคล้าย:

```text
To https://github.com/USERNAME/my-shop-profile.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

ตรวจจาก Terminal:

```bash
git status
git log --oneline --decorate -1
```

`git status` ควรบอกว่า branch อัปเดตตรงกับ `origin/main` และ log ควรเห็น `origin/main` ที่ commit ล่าสุด

จากนั้นเปิดหน้า repository ของตนเองแล้วตรวจ baseline:

- เห็น `index.html`, `style.css` และโฟลเดอร์รูป
- เปิดประวัติ commit แล้วเห็น `Import workshop website baseline`
- ข้อความ commit ตรงกับ `git log` ในเครื่อง

::: tip ครั้งต่อไปใช้วงจรสั้น
เมื่อ upstream ถูกตั้งแล้ว ใช้ `git status` → `git diff` → `git add` → `git commit` → `git push`
:::

### เมื่อยืนยันตัวตนไม่ผ่าน

GitHub ไม่รับรหัสผ่านบัญชีเป็นรหัสผ่าน Git ผ่าน HTTPS ให้ใช้ browser-based authentication ผ่าน Git Credential Manager หรือ GitHub CLI ตามที่ผู้สอนเตรียมไว้ หากเครือข่ายล่ม ให้เก็บ local commit ไว้และ push ภายหลัง—commit ในเครื่องยังอยู่ครบ

ดูขั้นตอนแยกตามอาการที่ [Authentication rejected](/workshop/troubleshooting#authentication-rejected)

## ผลที่ควรเห็น

ไฟล์และ baseline commit ปรากฏใน repository ออนไลน์ และ `git status` ระบุว่า local branch ตรงกับ `origin/main`

## Checkpoint

- [ ] `git push -u origin main` จบโดยไม่มี `rejected` หรือ `fatal`
- [ ] GitHub แสดงไฟล์ชิ้นงานครบ
- [ ] GitHub แสดง baseline commit และข้อความตรงกับ local
- [ ] ไม่มี credential, token หรือข้อมูลลับใน repository

## Push รอบสุดท้ายหลัง Capstone

เมื่อทำ milestone เนื้อหาและ responsive ใน [Capstone](/workshop/project) ครบแล้ว ให้ส่งอีกครั้ง:

```bash
git log --oneline -3
git push
```

รอบนี้จึงตรวจว่า GitHub แสดงอย่างน้อย 3 commit ตรงกับ local และ commit ล่าสุดคือ `Refine theme and mobile layout`

## แหล่งอ้างอิง

- [Git 2.54: git-push และ upstream branch](https://git-scm.com/docs/git-push)
- [GitHub Docs: caching credentials in Git](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git)
- [GitHub Docs: authentication to GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
