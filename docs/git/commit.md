---
title: git commit และ git log
---

# `git commit`: สร้างจุดบันทึกที่อธิบายได้

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 10 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะตั้งผู้เขียน สร้าง baseline commit ตรวจประวัติ และวางจุดบันทึกอีก 2 จุดสำหรับงาน Capstone

## สถานะเริ่มต้น

`git status --short` ต้องแสดงไฟล์ใน staging area หากไม่มี output ให้กลับไปบท [`git add`](/git/add)

บทนี้สร้าง **baseline ที่ตรงกับสถานะจริง** ส่วนอีก 2 commit จะเกิดจากงาน Capstone จริง — อย่าแก้ไฟล์เพียงเพื่อสร้างประวัติปลอม

## ลงมือ

### 1. ตั้งชื่อและอีเมลผู้เขียน

ครั้งแรกบนเครื่องนี้ (ใช้ข้อมูลของตนเอง ไม่ใช่ตัวอย่าง):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

ตรวจค่าที่ตั้งไว้:

```bash
git config --global --get user.name
git config --global --get user.email
```

`--global` หมายถึงใช้กับ repository ทุกตัวบนเครื่องนี้ในบัญชีผู้ใช้ปัจจุบัน

### 2. สร้าง commit แรก

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

| ส่วนในผลลัพธ์ | ความหมาย |
|---|---|
| `a1b2c3d` | รหัสย่อของ commit (แต่ละเครื่องไม่เหมือนกัน) |
| `HEAD -> main` | จุดที่เรากำลังอยู่ตอนนี้บน branch main |
| `working tree clean` | ไม่มีไฟล์ค้างที่ยังไม่ commit |

### 3. วาง milestone ที่ 2 และ 3 ไว้ในงานจริง

อย่าแก้ CSS เพื่อสร้างประวัติย้อนหลัง หลังเรียน GitHub และ push แล้ว ให้ทำ [Capstone](/workshop/project) เป็นสองช่วงและ commit เมื่อแต่ละช่วงผ่าน checkpoint:

```text
ช่วงที่ 1 เปลี่ยนชื่อ คำโปรย เมนู และช่องทางติดต่อ
→ Customize brand content

ช่วงที่ 2 ปรับสี ระยะห่าง ภาพ และ responsive layout
→ Refine theme and mobile layout
```

เมื่อทำครบแล้วจึงตรวจประวัติจริงด้วย:

```bash
git log --oneline --decorate -3
```

แล้วค่อย push รอบสุดท้าย

::: info Commit ที่ดีมีขอบเขตเดียว
ข้อความ `Update files` ไม่บอกเหตุผล ส่วน `Customize brand content` บอกผู้ตรวจได้ว่าควรคาดหวังการเปลี่ยนแปลงชนิดใด
:::

## ผลที่ควรเห็น

หลังจบบทนี้ `git log --oneline` แสดง baseline 1 บรรทัด หลังจบ Capstone จะแสดงอย่างน้อย 3 บรรทัด และบรรทัดบนสุดมี `(HEAD -> main)`

## จุดที่พลาดบ่อย

- ยังไม่ได้ตั้ง `user.name` / `user.email` แล้ว commit ไม่สำเร็จ
- ใช้ข้อความคลุมเครือ เช่น `update`, `fix`, `asdf`
- สร้าง commit ปลอมโดยแก้ไฟล์เล็กน้อยเพียงเพื่อให้ครบ 3 จุด — ควรเกิดจากงาน Capstone จริง

## Checkpoint

- [ ] `git status` แสดง `working tree clean`
- [ ] baseline ใช้ชื่อ `Import workshop website baseline` ซึ่งตรงกับสิ่งที่บันทึกจริง
- [ ] จดแผน commit อีก 2 จุดสำหรับงาน Capstone โดยไม่สร้างการเปลี่ยนแปลงปลอม

หากเห็น `nothing to commit` ในเวลาที่คาดว่ามีงาน ให้ดู [Nothing to commit](/workshop/troubleshooting#nothing-to-commit)

## ไปต่อ

เมื่อมี baseline ในเครื่องแล้ว ไปที่ [GitHub](/git/github) เพื่อเชื่อม remote

## แหล่งอ้างอิง

- [Git: git-commit](https://git-scm.com/docs/git-commit)
- [Git: git-log](https://git-scm.com/docs/git-log)
