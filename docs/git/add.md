---
title: git add และ git diff
---

# `git add`: เลือกเนื้อหาสำหรับจุดบันทึก

> **บทเรียนหลัก (Core)** — ทุกคำสั่งยังทำใน `my-shop-profile`

## เป้าหมาย

เมื่อจบบทนี้ คุณจะตรวจ working tree, ดูสิ่งที่เปลี่ยน และเลือก snapshot สำหรับ commit แรกได้

## เริ่มจาก

หลัง `git init` ไฟล์ทั้งหมดเป็น **untracked**: มีอยู่ในโฟลเดอร์ แต่ Git ยังไม่เคยบันทึก

## ลงมือทำ

เริ่มด้วยสถานะ:

```bash
git status --short
```

ผลย่อควรขึ้น `??` หน้าไฟล์ที่ยังไม่ติดตาม:

```text
?? images/
?? index.html
?? style.css
```

สำหรับไฟล์ untracked คำสั่ง `git diff` ยังไม่แสดงเนื้อหา จึงเปิดตรวจไฟล์ใน editor ก่อน แล้วเลือกทั้งหมดเข้า staging area:

```bash
git add .
git status --short
git diff --cached --stat
```

ผลควรเปลี่ยนเป็น `A` ซึ่งหมายถึง **added ใน staging area** และสถิติสรุปชื่อไฟล์/จำนวนบรรทัด:

```text
A  index.html
A  style.css
```

ก่อน commit ให้ดูเนื้อหาที่กำลังจะบันทึกได้ด้วย:

```bash
git diff --cached
```

กด `q` เพื่อออก หากผลยาวและ Git เปิดหน้าดูแบบ pager

::: tip `git add` เป็นการถ่าย snapshot ตอนนั้น
ถ้าแก้ไฟล์อีกหลัง `git add` ต้องรัน `git add` ซ้ำเพื่อรวมการแก้ล่าสุดใน commit ตามพฤติกรรมที่ระบุใน [เอกสาร git-add](https://git-scm.com/docs/git-add)
:::

### ลองเห็นความต่างระหว่าง staged กับ unstaged

แก้คำโปรยที่ผู้ใช้มองเห็นใน `index.html` หนึ่งคำแล้วบันทึก (ไม่ใช้เพียงช่องว่าง เพราะ editor บางเครื่องลบช่องว่างท้ายบรรทัดอัตโนมัติ) จากนั้นรัน:

```bash
git status --short
git diff
```

คุณอาจเห็น `AM index.html`: สำเนาแรกอยู่ใน staging แล้ว แต่ working tree มีการแก้เพิ่ม หากการแก้นั้นตั้งใจ ให้รัน:

```bash
git add index.html
git diff
```

`git diff` ควรไม่มี output เพราะ working tree ตรงกับ staging area แล้ว

## ผลที่ควรเห็น

`git status --short` แสดง `A` หน้าไฟล์ทั้งหมด และ `git diff --cached --stat` สรุปสิ่งที่จะเข้า commit แรก

## Checkpoint

- [ ] ไม่มี `??` เหลือสำหรับไฟล์ชิ้นงาน
- [ ] ตรวจ `git diff --cached` แล้วไม่มีข้อมูลส่วนตัวหรือไฟล์ที่ไม่ตั้งใจ
- [ ] อธิบายได้ว่า `git add` ต้องทำซ้ำหลังแก้ไฟล์เพิ่ม

หากพบ `pathspec ... did not match any files` ให้ดู [ไฟล์ที่สั่งเพิ่มหาไม่พบ](/workshop/troubleshooting#ไฟล์ที่สั่งเพิ่มหาไม่พบ)

## แหล่งอ้างอิง

- [Git 2.54: git-add](https://git-scm.com/docs/git-add)
- [Git 2.54: git-diff](https://git-scm.com/docs/git-diff)
- [Git 2.54: git-status](https://git-scm.com/docs/git-status)
