---
title: Version Control คืออะไร
---

# Version Control คืออะไร?

> **บทเรียนหลัก (Core)** — เริ่มจากไฟล์ `index.html` และ `style.css` ในโฟลเดอร์ `my-shop-profile` ที่ทำมาตลอดหลักสูตร

## เป้าหมาย

เมื่อจบบทนี้ คุณจะอธิบายความต่างระหว่าง Git, GitHub, repository และ commit ได้ และวางแผนจุดบันทึกที่มีความหมายอย่างน้อย 3 จุด

## เริ่มจาก

โปรเจกต์ `my-shop-profile` มี `index.html`, `style.css` และรูปภาพที่เปิดใน browser ได้แล้ว แต่ยังไม่ได้เริ่ม Git และเราจะไม่สร้างโฟลเดอร์ชิ้นงานอีกชุด

## ปัญหาของการเก็บไฟล์แบบเดิม

ชื่ออย่าง `index-final.html`, `index-final-จริง.html` และ `index-final-จริง-แก้ล่าสุด.html` บอกเราไม่ได้ว่าแต่ละไฟล์เปลี่ยนอะไร เพราะอะไร และเวอร์ชันใดใช้ได้ Git แก้ปัญหานี้ด้วยการเก็บ “ภาพสถานะของโปรเจกต์” เป็นลำดับ

![แผนภาพลำดับจากไฟล์ในเครื่อง ผ่าน staging และ commit ไปยัง GitHub](/images/workshop/git-workflow.webp)

```text
ไฟล์ที่กำลังแก้ → เลือกเข้า Staging Area → บันทึกเป็น Commit → ส่งสำเนาไป GitHub
```

คำศัพท์ที่ใช้ตลอดช่วงนี้:

- **Git** — โปรแกรม Version Control ที่ทำงานบนเครื่องของเรา
- **Repository (repo)** — โฟลเดอร์โปรเจกต์พร้อมฐานข้อมูลประวัติของ Git
- **Working tree** — ไฟล์จริงที่เรากำลังแก้
- **Staging area หรือ index** — รายการเนื้อหาที่เลือกไว้สำหรับ commit ถัดไป
- **Commit** — จุดบันทึกที่มีข้อความอธิบายการเปลี่ยนแปลง
- **GitHub** — บริการออนไลน์ที่รับ repository จาก Git เพื่อสำรองและแบ่งปัน
- **Remote** — ชื่ออ้างอิง repository ที่อยู่นอกเครื่อง เช่น `origin`

::: info Git ไม่เท่ากับ GitHub
ปิดอินเทอร์เน็ตแล้ว Git ยัง `status`, `add`, `commit` และ `log` ได้ ส่วน GitHub เข้ามาเกี่ยวข้องเมื่อเราสร้าง remote และ `push`
:::

## ลงมือทำ: ออกแบบ 3 จุดบันทึก

โปรเจกต์ตัวอย่างของเราจะมีประวัติอย่างน้อยนี้:

```text
1. Import workshop website baseline
2. Customize brand content
3. Refine theme and mobile layout
```

แต่ละ commit ควรตอบได้ว่า “ทำอะไรสำเร็จหนึ่งเรื่อง” ไม่ใช่บันทึกตามจำนวนไฟล์

## ผลที่ควรเห็น

ตอนนี้ไฟล์ยังไม่เปลี่ยนและยังไม่มี repository เราเพียงเห็นภาพว่าจะนำชิ้นงานเดิมเข้าสู่ Git เป็น baseline ที่ตั้งชื่อตรงตามความจริง แล้วสร้างอีกสอง commit จากงาน Capstone จริงโดยไม่สร้างโฟลเดอร์ซ้ำ

## Checkpoint

- [ ] ระบุได้ว่า Git ทำงานในเครื่อง ส่วน GitHub เป็นบริการออนไลน์
- [ ] อธิบายได้ว่า staging area เป็นพื้นที่เตรียม commit ถัดไป
- [ ] เขียนชื่อ milestone commit ที่สื่อความหมายได้ 3 ข้อ

## แหล่งอ้างอิง

- [Git: About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- [Git 2.54: Data model และ staging area](https://git-scm.com/docs/gitdatamodel)
