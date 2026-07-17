---
title: git commit และ git log
---

# `git commit`: สร้างจุดบันทึกที่อธิบายได้

> **บทเรียนหลัก (Core)** — บทนี้สร้าง baseline ที่ตรงกับสถานะจริง ส่วนอีก 2 commit จะเกิดจากงาน Capstone จริง

## เป้าหมาย

เมื่อจบบทนี้ คุณจะตั้งผู้เขียน สร้าง baseline commit ตรวจประวัติ และวางจุดบันทึกอีก 2 จุดสำหรับงาน Capstone

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
git commit -m "Import workshop website baseline"
git status
git log --oneline
```

ผลลัพธ์จะมีรหัส commit ที่ต่างกันในแต่ละเครื่อง:

```text
[main a1b2c3d] Import workshop website baseline
On branch main
nothing to commit, working tree clean
a1b2c3d (HEAD -> main) Import workshop website baseline
```

### วาง milestone ที่ 2 และ 3 ไว้ในงานจริง

อย่าแก้ CSS เพื่อสร้างประวัติย้อนหลัง หลังเรียน GitHub และ push แล้ว ให้ทำ [Capstone](/workshop/project) เป็นสองช่วงและ commit เมื่อแต่ละช่วงผ่าน checkpoint:

```text
ช่วงที่ 1 เปลี่ยนชื่อ คำโปรย เมนู และช่องทางติดต่อ
→ Customize brand content

ช่วงที่ 2 ปรับสี ระยะห่าง ภาพ และ responsive layout
→ Refine theme and mobile layout
```

เมื่อทำครบแล้วจึงตรวจประวัติจริงด้วย `git log --oneline --decorate -3` และ push รอบสุดท้าย

::: info Commit ที่ดีมีขอบเขตเดียว
ข้อความ `Update files` ไม่บอกเหตุผล ส่วน `Customize brand content` บอกผู้ตรวจได้ว่าควรคาดหวังการเปลี่ยนแปลงชนิดใด
:::

## ผลที่ควรเห็น

หลังจบบทนี้ `git log --oneline` แสดง baseline 1 บรรทัด หลังจบ Capstone จะแสดงอย่างน้อย 3 บรรทัด และบรรทัดบนสุดมี `(HEAD -> main)`

## Checkpoint

- [ ] `git status` แสดง `working tree clean`
- [ ] baseline ใช้ชื่อ `Import workshop website baseline` ซึ่งตรงกับสิ่งที่บันทึกจริง
- [ ] จดแผน commit อีก 2 จุดสำหรับงาน Capstone โดยไม่สร้างการเปลี่ยนแปลงปลอม

หากเห็น `nothing to commit` ในเวลาที่คาดว่ามีงาน ให้ดู [Nothing to commit](/workshop/troubleshooting#nothing-to-commit)

## แหล่งอ้างอิง

- [Git 2.54: git-commit](https://git-scm.com/docs/git-commit)
- [Git 2.54: git-log](https://git-scm.com/docs/git-log)
