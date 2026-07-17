---
title: git commit และ git log
---

# `git commit`: สร้างจุดบันทึกที่อธิบายได้

> **บทเรียนหลัก (Core)** — เป้าหมายสุดท้ายคืออย่างน้อย 3 commit ที่สะท้อนพัฒนาการจริง

## เป้าหมาย

เมื่อจบบทนี้ คุณจะตั้งผู้เขียน สร้าง commit ตรวจประวัติ และทำ milestone เพิ่มจนได้อย่างน้อย 3 จุดบันทึก

## เริ่มจาก

`git status --short` ต้องแสดงไฟล์ใน staging area หากไม่มี output ให้กลับไปบท [`git add`](/git/add)

## ลงมือทำ

ตั้งชื่อและอีเมลครั้งแรกบนเครื่องนี้ (ใช้ข้อมูลของตนเอง):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

สร้าง commit แรก:

```bash
git commit -m "Create semantic shop page"
git status
git log --oneline
```

ผลลัพธ์จะมีรหัส commit ที่ต่างกันในแต่ละเครื่อง:

```text
[main a1b2c3d] Create semantic shop page
On branch main
nothing to commit, working tree clean
a1b2c3d (HEAD -> main) Create semantic shop page
```

### สร้าง milestone ที่ 2 และ 3

หาก HTML และ CSS ทำเสร็จก่อนเริ่ม Git แล้ว ให้แก้ชิ้นงานเล็กน้อยแต่มีความหมายในแต่ละรอบ เช่น ปรับสี/spacing แล้วปรับ mobile layout จากนั้นใช้วงจรเดิม:

```bash
git diff
git add style.css
git diff --cached
git commit -m "Style shop layout"
```

แก้ media query หรือภาพให้ไม่ล้นจอ แล้วบันทึกอีกครั้ง:

```bash
git diff
git add style.css
git commit -m "Improve mobile layout"
git log --oneline --decorate -3
```

::: info Commit ที่ดีมีขอบเขตเดียว
ข้อความ `Update files` ไม่บอกเหตุผล ส่วน `Improve mobile layout` บอกผู้ตรวจได้ว่าควรคาดหวังการเปลี่ยนแปลงชนิดใด
:::

## ผลที่ควรเห็น

`git log --oneline --decorate -3` แสดงอย่างน้อย 3 บรรทัด และบรรทัดบนสุดมี `(HEAD -> main)`

## Checkpoint

- [ ] `git status` แสดง `working tree clean`
- [ ] `git log --oneline -3` มีอย่างน้อย 3 commit
- [ ] แต่ละข้อความอธิบายงานหนึ่งเรื่อง ไม่ใช่ `test`, `update` หรือ `final`

หากเห็น `nothing to commit` ในเวลาที่คาดว่ามีงาน ให้ดู [Nothing to commit](/workshop/troubleshooting#nothing-to-commit)

## แหล่งอ้างอิง

- [Git 2.54: git-commit](https://git-scm.com/docs/git-commit)
- [Git 2.54: git-log](https://git-scm.com/docs/git-log)

