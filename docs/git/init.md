---
title: git init
---

# `git init`: เริ่มติดตามโปรเจกต์เดิม

> **บทเรียนหลัก (Core)** — ห้ามสร้าง `my-shop-profile` ใหม่ เพราะเราจะใช้โฟลเดอร์ที่มีเว็บไซต์อยู่แล้ว

## เป้าหมาย

เมื่อจบบทนี้ คุณจะยืนยันตำแหน่งโฟลเดอร์ ตรวจไฟล์ และสร้าง Git repository ในชิ้นงานเดิมได้

## เริ่มจาก

เปิด Terminal จากโฟลเดอร์ `my-shop-profile` ใน VS Code หรือใช้ `cd` เข้าโฟลเดอร์ที่สร้างในบท Setup ตำแหน่งเต็มของแต่ละคนต่างกัน จึงไม่ควรคัดลอก path ของผู้สอน

## ลงมือทำ

ตรวจว่า Terminal อยู่ถูกที่ก่อนทุกครั้ง:

```bash
pwd
ls
```

บน Windows PowerShell ใช้ `pwd` และ `dir` ได้ ผลควรแสดง path ที่ลงท้ายด้วย `my-shop-profile` และเห็นอย่างน้อย:

```text
index.html  style.css  images
```

ถ้าไม่เห็นไฟล์เหล่านี้ ให้หยุดและกลับไปยังโฟลเดอร์ที่ถูกต้องก่อน จากนั้นเริ่ม repository โดยกำหนดชื่อ branch แรกเป็น `main`:

```bash
git init -b main
git status
```

ผลลัพธ์อาจต่างเล็กน้อยตามระบบ แต่ควรมีใจความนี้:

```text
Initialized empty Git repository in .../my-shop-profile/.git/
On branch main
No commits yet
Untracked files:
```

`git init` สร้างโฟลเดอร์ซ่อน `.git` สำหรับเก็บประวัติ ไม่ได้ย้าย แก้ หรือลบไฟล์เว็บไซต์เดิม

::: warning หาก `git init -b main` ใช้ไม่ได้
Git รุ่นเก่าอาจไม่รู้จัก `-b` ให้ใช้ `git init` แล้วตามด้วย `git branch -M main` หากติดตั้งได้ ควรอัปเดต Git ก่อนเริ่มห้องเรียน
:::

## ผลที่ควรเห็น

`git status` รายงานว่าอยู่ branch `main`, ยังไม่มี commit และไฟล์เว็บไซต์เป็น `Untracked files`

## Checkpoint

- [ ] `pwd` ลงท้ายด้วย `my-shop-profile`
- [ ] `ls` หรือ `dir` เห็น `index.html` และ `style.css`
- [ ] `git status` ทำงานโดยไม่มีข้อความ `not a git repository`

หากผลไม่ตรง ให้เปิด [คู่มือแก้ปัญหา: อยู่ผิดโฟลเดอร์](/workshop/troubleshooting#อยู่ผิดโฟลเดอร์)

## แหล่งอ้างอิง

- [Git 2.54: git-init](https://git-scm.com/docs/git-init) — ตัวอย่างทางการเริ่ม Git ภายใน codebase ที่มีอยู่แล้ว
- [Git 2.54: git-status](https://git-scm.com/docs/git-status)

