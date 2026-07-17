---
title: git add และ git diff
---

# `git add`: เลือกเนื้อหาสำหรับจุดบันทึก

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 10 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะตรวจ working tree ดูสิ่งที่เปลี่ยน และเลือก snapshot สำหรับ commit แรกได้

## สถานะเริ่มต้น

หลัง `git init` ไฟล์ทั้งหมดเป็น **untracked**: มีอยู่ในโฟลเดอร์ แต่ Git ยังไม่เคยบันทึก ทุกคำสั่งยังทำใน `my-shop-profile`

![สามพื้นที่ของ Git: Untracked → Staging → Commit](/images/workshop/git-three-areas.webp)

## สถานะไฟล์ที่พบบ่อย

| สัญลักษณ์ (`git status --short`) | ความหมาย |
|---|---|
| `??` | ยังไม่ติดตาม (untracked) |
| `A` | เพิ่มเข้า staging แล้ว (added) |
| `M` | แก้แล้ว แต่ยังไม่ stage ทั้งหมด |
| `AM` | มีใน staging แล้ว และ working tree แก้เพิ่มอีก |

## ลงมือ

### 1. ดูสถานะย่อ

```bash
git status --short
```

ผลย่อควรขึ้น `??` หน้าไฟล์ที่ยังไม่ติดตาม:

```text
?? images/
?? index.html
?? style.css
```

### 2. เลือกไฟล์เข้า staging

สำหรับไฟล์ untracked คำสั่ง `git diff` ยังไม่แสดงเนื้อหา จึงเปิดตรวจไฟล์ใน editor ก่อน แล้วเลือกทั้งหมดเข้า staging area:

```bash
git add .
git status --short
git diff --cached --stat
```

ผลควรเปลี่ยนเป็น `A` และสถิติสรุปชื่อไฟล์/จำนวนบรรทัด:

```text
A  index.html
A  style.css
```

### 3. ดูเนื้อหาที่จะเข้า commit

ก่อน commit ให้ดูเนื้อหาที่กำลังจะบันทึกเป็น **baseline ของงานจากช่วง HTML/CSS**:

```bash
git diff --cached
```

กด `q` เพื่อออก หากผลยาวและ Git เปิดหน้าดูแบบ pager

::: tip `git add` เป็นการถ่าย snapshot ตอนนั้น
ถ้าแก้ไฟล์อีกหลัง `git add` ต้องรัน `git add` ซ้ำเพื่อรวมการแก้ล่าสุดใน commit ([เอกสาร git-add](https://git-scm.com/docs/git-add))
:::

### 4. ลองเห็นความต่างระหว่าง staged กับ unstaged

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

| คำสั่ง | ดูอะไร |
|---|---|
| `git diff` | ความต่างระหว่าง working tree กับ staging |
| `git diff --cached` | ความต่างระหว่าง staging กับ commit ล่าสุด (หรือว่างถ้ายังไม่มี commit) |

## ผลที่ควรเห็น

`git status --short` แสดง `A` หน้าไฟล์ชิ้นงาน และ `git diff --cached --stat` สรุปสิ่งที่จะเข้า commit แรกชื่อ `Import workshop website baseline`

## จุดที่พลาดบ่อย

- `git add` แล้วยังแก้ไฟล์ต่อ โดยไม่ `add` ซ้ำ — commit จะไม่ได้เวอร์ชันล่าสุด
- เพิ่มไฟล์ที่ไม่ตั้งใจ เช่น โน้ตส่วนตัว หรือไฟล์ที่มีรหัสผ่าน
- ใช้ `git add` นอกโฟลเดอร์โปรเจกต์

## Checkpoint

- [ ] ไม่มี `??` เหลือสำหรับไฟล์ชิ้นงาน
- [ ] ตรวจ `git diff --cached` แล้วไม่มีข้อมูลส่วนตัวหรือไฟล์ที่ไม่ตั้งใจ
- [ ] อธิบายได้ว่า `git add` ต้องทำซ้ำหลังแก้ไฟล์เพิ่ม

หากพบ `pathspec ... did not match any files` ให้ดู [ไฟล์ที่สั่งเพิ่มหาไม่พบ](/workshop/troubleshooting#ไฟล์ที่สั่งเพิ่มหาไม่พบ)

## ไปต่อ

เมื่อ staging พร้อมแล้ว ไปที่ [`git commit`](/git/commit) เพื่อสร้างจุดบันทึกแรก

## แหล่งอ้างอิง

- [Git: git-add](https://git-scm.com/docs/git-add)
- [Git: git-diff](https://git-scm.com/docs/git-diff)
- [Git: git-status](https://git-scm.com/docs/git-status)
