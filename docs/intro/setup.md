---
title: เตรียมเครื่องและโปรเจกต์
---

# เตรียมเครื่องและโปรเจกต์

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 20 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะมีโฟลเดอร์งานชื่อ `my-shop-profile` เปิดอยู่ในโปรแกรมแก้ไขโค้ด และเปิดหน้าเว็บแรกใน Browser ได้

## สถานะเริ่มต้น

ยังไม่ต้องมีไฟล์โค้ดหรือบัญชี GitHub เพียงรู้ตำแหน่งที่บันทึกไฟล์ของตัวเองได้ หากใช้เครื่องส่วนกลาง ให้สร้างงานในพื้นที่ที่ผู้สอนกำหนดและสำรองงานก่อนออกจากห้อง

## สิ่งที่ต้องมี

- Browser รุ่นปัจจุบัน เช่น Chrome, Edge, Firefox หรือ Safari
- โปรแกรมแก้ไขโค้ด แนะนำ Visual Studio Code
- Terminal: Terminal บน macOS/Linux หรือ PowerShell/Git Bash บน Windows
- Git สำหรับช่วงบ่าย ตรวจด้วย `git --version`

> หากติดตั้งโปรแกรมในห้องไม่ได้ ให้แจ้งผู้สอนก่อนเริ่ม อย่าดาวน์โหลดโปรแกรมจากเว็บไซต์ที่ไม่รู้จัก

## ลงมือ

### 1. สร้างโฟลเดอร์งาน

เลือกตำแหน่งที่หาเจอง่าย เช่น Desktop แล้วสร้างโฟลเดอร์ `my-shop-profile` ภายในสร้างโฟลเดอร์ `images`

```bash
mkdir my-shop-profile
cd my-shop-profile
mkdir images
```

ตรวจว่ากำลังอยู่ที่ใด:

```bash
pwd
ls
```

PowerShell ใช้ `Get-Location` แทน `pwd` ได้ ผลควรมีโฟลเดอร์ `images`

### 2. สร้างไฟล์แรก

เปิดโฟลเดอร์นี้ในโปรแกรมแก้ไขโค้ด แล้วเลือกวิธีใดวิธีหนึ่ง:

- <a href="/starter/my-shop-profile/index.html" download>ดาวน์โหลดไฟล์ตั้งต้น `index.html`</a> แล้วย้ายเข้าโฟลเดอร์ `my-shop-profile`
- หรือสร้าง `index.html` เองแล้วพิมพ์เนื้อหาด้านล่าง เพื่อฝึกสังเกตโครงสร้าง

```html
<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>กาแฟบ้านดอย</title>
  </head>
  <body>
    <h1>กาแฟบ้านดอย</h1>
    <p>กาแฟจากชุมชน เพื่อชุมชน</p>
  </body>
</html>
```

บันทึกไฟล์ แล้วเปิด `index.html` ด้วย Browser

## ผลที่ควรเห็น

- ชื่อแท็บ Browser เป็น “กาแฟบ้านดอย”
- ในหน้าเว็บมีหัวเรื่องและข้อความแนะนำร้าน
- เมื่อแก้ข้อความ บันทึก แล้วกด reload ผลบนหน้าจอเปลี่ยนตาม

## Checkpoint

- [ ] ชื่อไฟล์คือ `index.html` ไม่ใช่ `index.html.txt`
- [ ] โปรแกรมแก้ไขโค้ดเปิดทั้งโฟลเดอร์ `my-shop-profile`
- [ ] `index.html` และ `images/` อยู่ระดับเดียวกัน
- [ ] Browser เปิดไฟล์จากโฟลเดอร์นี้จริง

::: details ถ้าแก้แล้วหน้าไม่เปลี่ยน
กดบันทึกไฟล์ก่อน reload ดู path บนแถบที่อยู่ของ Browser ว่าชี้ไปยัง `my-shop-profile/index.html` และลอง hard reload (`Ctrl+Shift+R` หรือ `Cmd+Shift+R`)
:::

## ไปต่อ

ยังไม่ต้องตกแต่งสีหรือฟอนต์ ไปเรียน [ประวัติ Web, HTML และ CSS](/intro/web-history) ก่อน เพื่อเข้าใจว่าแต่ละภาษาถูกสร้างมาแก้ปัญหาอะไร
