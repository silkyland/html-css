---
title: git init
---

# `git init`: เริ่มติดตามโปรเจกต์เดิม

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 10 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะยืนยันตำแหน่งโฟลเดอร์ ตรวจไฟล์ และสร้าง Git repository ในชิ้นงานเดิมได้

## สถานะเริ่มต้น

เปิด Terminal จากโฟลเดอร์ `my-shop-profile` ใน VS Code หรือใช้ `cd` เข้าโฟลเดอร์ที่สร้างในบท Setup

**ห้ามสร้าง `my-shop-profile` ใหม่** เพราะเราจะใช้โฟลเดอร์ที่มีเว็บไซต์อยู่แล้ว ตำแหน่งเต็มของแต่ละคนต่างกัน จึงไม่ควรคัดลอก path ของผู้สอน

ก่อนเริ่ม ตรวจว่ามี Git บนเครื่อง:

```bash
git --version
```

ควรเห็นเลขเวอร์ชัน เช่น `git version 2.x.x` หากไม่มีคำสั่งนี้ ให้แจ้งผู้สอน

## ลงมือ

### 1. ตรวจว่าอยู่ถูกโฟลเดอร์

```bash
pwd
ls
```

บน Windows PowerShell ใช้ `pwd` และ `dir` ได้ ผลควรแสดง path ที่ลงท้ายด้วย `my-shop-profile` และเห็นอย่างน้อย:

```text
index.html  style.css  images
```

ถ้าไม่เห็นไฟล์เหล่านี้ ให้หยุดและกลับไปยังโฟลเดอร์ที่ถูกต้องก่อน

### 2. สร้าง repository

เริ่ม repository โดยกำหนดชื่อ branch แรกเป็น `main`:

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

`git init` สร้างโฟลเดอร์ซ่อน `.git` สำหรับเก็บประวัติ — **ไม่ได้ย้าย แก้ หรือลบไฟล์เว็บไซต์เดิม**

::: warning หาก `git init -b main` ใช้ไม่ได้
Git รุ่นเก่าอาจไม่รู้จัก `-b` ให้ใช้:

```bash
git init
git branch -M main
```

หากติดตั้งได้ ควรอัปเดต Git ก่อนเริ่มห้องเรียน
:::

### 3. อ่านสถานะสั้น ๆ

| ข้อความใน `git status` | ความหมาย |
|---|---|
| `On branch main` | กำลังอยู่บน branch ชื่อ main |
| `No commits yet` | ยังไม่เคยบันทึกจุดใดเลย |
| `Untracked files` | มีไฟล์ในโฟลเดอร์ แต่ Git ยังไม่ติดตาม |

## ผลที่ควรเห็น

`git status` รายงานว่าอยู่ branch `main`, ยังไม่มี commit และไฟล์เว็บไซต์เป็น `Untracked files`

## จุดที่พลาดบ่อย

- รัน `git init` นอกโฟลเดอร์ `my-shop-profile` (เช่น ที่ Desktop)
- สร้างโฟลเดอร์ว่างใหม่แล้วย้ายเฉพาะบางไฟล์ ทำให้ชิ้นงานไม่ครบ
- ลบ `.git` โดยไม่ตั้งใจ — ประวัติหาย ต้อง init ใหม่

## Checkpoint

- [ ] `pwd` ลงท้ายด้วย `my-shop-profile`
- [ ] `ls` หรือ `dir` เห็น `index.html` และ `style.css`
- [ ] `git status` ทำงานโดยไม่มีข้อความ `not a git repository`

หากผลไม่ตรง ให้เปิด [คู่มือแก้ปัญหา: อยู่ผิดโฟลเดอร์](/workshop/troubleshooting#อยู่ผิดโฟลเดอร์)

## ไปต่อ

เมื่อมี repository ว่างแล้ว ไปที่ [`git add`](/git/add) เพื่อเลือกไฟล์เข้า staging area

## แหล่งอ้างอิง

- [Git: git-init](https://git-scm.com/docs/git-init) — เริ่ม Git ภายใน codebase ที่มีอยู่แล้ว
- [Git: git-status](https://git-scm.com/docs/git-status)
