---
title: เชื่อมโปรเจกต์กับ GitHub
---

# GitHub: เชื่อม Local กับ Remote

> **บทเรียนหลัก (Core)** — ขั้นตอนนี้ต้องใช้อินเทอร์เน็ตและบัญชี GitHub แต่ commit ในเครื่องของคุณปลอดภัยอยู่แล้วแม้ push ไม่สำเร็จ

## เป้าหมาย

เมื่อจบบทนี้ คุณจะแยก local repository กับ remote repository และตรวจการเชื่อมต่อชื่อ `origin` ได้

## เริ่มจาก

ตรวจ local repository ก่อน:

```bash
git status
git log --oneline -3
```

ต้องอยู่ branch `main` และมีอย่างน้อย 3 commit ตาม checkpoint ก่อนหน้า

## ลงมือทำ

1. เข้าสู่ระบบ [GitHub](https://github.com/)
2. สร้าง repository ชื่อ `my-shop-profile`
3. เลือก Public หากต้องการส่งเป็น portfolio หรือ Private หากต้องการจำกัดผู้ชม
4. เพราะเรามี commit ในเครื่องแล้ว ให้สร้าง repository ปลายทางแบบว่าง ไม่เพิ่ม README, `.gitignore` หรือ license ในขั้นตอนนี้
5. คัดลอก HTTPS URL ซึ่งมีรูปแบบ `https://github.com/USERNAME/my-shop-profile.git`

กลับมาที่ Terminal แล้วแทน `USERNAME` ด้วยชื่อบัญชีจริง:

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/my-shop-profile.git
git remote -v
```

ผลที่ควรเห็น:

```text
origin  https://github.com/USERNAME/my-shop-profile.git (fetch)
origin  https://github.com/USERNAME/my-shop-profile.git (push)
```

`origin` เป็นเพียงชื่อย่อมาตรฐานที่นิยมใช้กับ remote หลัก ส่วน `fetch` และ `push` ในตัวอย่างนี้ชี้ URL เดียวกัน

::: warning อย่าใส่รหัสผ่านหรือ token ลงใน URL
ใช้ URL ธรรมดาตามตัวอย่าง และให้เครื่องมือยืนยันตัวตนถามเมื่อ `push` ห้ามเผยแพร่ token ในคำสั่ง ภาพหน้าจอ หรือไฟล์โปรเจกต์
:::

## ผลที่ควรเห็น

`git remote -v` แสดง `origin` สองบรรทัดโดยไม่มี token และ URL เปิดไปยัง repository ของตัวเองได้

## Checkpoint

- [ ] `git log --oneline -3` ยังแสดงประวัติในเครื่อง
- [ ] `git remote -v` แสดง username/repository ของตนเอง ไม่ใช่ `USERNAME`
- [ ] อธิบายได้ว่าเพิ่ม remote แล้วยังไม่ได้ส่งไฟล์ จนกว่าจะ `push`

หากเห็น `remote origin already exists` ให้ดู [Remote มีอยู่แล้ว](/workshop/troubleshooting#remote-origin-มีอยู่แล้ว)

## แหล่งอ้างอิง

- [Git 2.54: git-remote](https://git-scm.com/docs/git-remote)
- [GitHub Docs: adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

