---
title: Version Control คืออะไร
---

# Version Control คืออะไร?

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 10 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะอธิบายความต่างระหว่าง Git, GitHub, repository และ commit ได้ และวางแผนจุดบันทึกที่มีความหมายอย่างน้อย 3 จุด

## สถานะเริ่มต้น

โปรเจกต์ `my-shop-profile` มี `index.html`, `style.css` และรูปภาพที่เปิดใน Browser ได้แล้ว แต่ยังไม่ได้เริ่ม Git — และเราจะ**ไม่สร้างโฟลเดอร์ชิ้นงานอีกชุด** ใช้โฟลเดอร์เดิมต่อ

## ปัญหาของการเก็บไฟล์แบบเดิม

ชื่ออย่าง `index-final.html`, `index-final-จริง.html` และ `index-final-จริง-แก้ล่าสุด.html` บอกไม่ได้ว่าแต่ละไฟล์เปลี่ยนอะไร เพราะอะไร และเวอร์ชันใดใช้ได้

**Version Control** (ระบบควบคุมเวอร์ชัน) แก้ปัญหานี้ด้วยการเก็บ “ภาพสถานะของโปรเจกต์” เป็นลำดับ พร้อมข้อความอธิบาย

![แผนภาพลำดับจากไฟล์ในเครื่อง ผ่าน staging และ commit ไปยัง GitHub](/images/workshop/git-workflow.webp)

```text
ไฟล์ที่กำลังแก้ → เลือกเข้า Staging Area → บันทึกเป็น Commit → ส่งสำเนาไป GitHub
```

![สามพื้นที่ของ Git: ไฟล์ที่ยังไม่ติดตาม Staging และ Commit](/images/workshop/git-three-areas.webp)

## คำศัพท์ที่ใช้ตลอดช่วงนี้

| คำ | ความหมายสั้น ๆ |
|---|---|
| **Git** | โปรแกรม Version Control ที่ทำงานบนเครื่องของเรา |
| **Repository (repo)** | โฟลเดอร์โปรเจกต์พร้อมฐานข้อมูลประวัติของ Git |
| **Working tree** | ไฟล์จริงที่เรากำลังแก้ |
| **Staging area** | รายการเนื้อหาที่เลือกไว้สำหรับ commit ถัดไป |
| **Commit** | จุดบันทึกที่มีข้อความอธิบายการเปลี่ยนแปลง |
| **GitHub** | บริการออนไลน์ที่รับ repository จาก Git เพื่อสำรองและแบ่งปัน |
| **Remote** | ชื่ออ้างอิง repository ที่อยู่นอกเครื่อง เช่น `origin` |

::: info Git ไม่เท่ากับ GitHub
ปิดอินเทอร์เน็ตแล้ว Git ยังใช้ `status`, `add`, `commit` และ `log` ได้ ส่วน GitHub เข้ามาเกี่ยวข้องเมื่อเราสร้าง remote และ `push`
:::

## ลงมือ

### ออกแบบ 3 จุดบันทึก

โปรเจกต์ตัวอย่างของเราจะมีประวัติอย่างน้อยนี้:

```text
1. Import workshop website baseline
2. Customize brand content
3. Refine theme and mobile layout
```

| ลำดับ | ข้อความ commit | ความหมาย |
|---|---|---|
| 1 | `Import workshop website baseline` | นำงาน HTML/CSS ที่ทำเสร็จก่อนเริ่ม Git เข้าสู่ประวัติ |
| 2 | `Customize brand content` | เปลี่ยนชื่อ คำโปรย เมนู ช่องทางติดต่อเป็นของตนเอง |
| 3 | `Refine theme and mobile layout` | ปรับสี ระยะห่าง ภาพ และ responsive |

แต่ละ commit ควรตอบได้ว่า “ทำอะไรสำเร็จหนึ่งเรื่อง” ไม่ใช่บันทึกตามจำนวนไฟล์ หรือใช้ข้อความคลุมเครืออย่าง `Update files`

## ผลที่ควรเห็น

ตอนนี้ไฟล์ยังไม่เปลี่ยนและยังไม่มี repository เราเพียงเห็นภาพว่าจะนำชิ้นงานเดิมเข้าสู่ Git เป็น baseline ที่ตั้งชื่อตรงตามความจริง แล้วสร้างอีกสอง commit จากงาน Capstone จริงโดยไม่สร้างโฟลเดอร์ซ้ำ

## จุดที่พลาดบ่อย

- สับสนว่า Git กับ GitHub เป็นสิ่งเดียวกัน
- วางแผน commit ตามจำนวนไฟล์ แทนขอบเขตงานหนึ่งเรื่อง
- คิดว่าต้องสร้างโปรเจกต์ใหม่ก่อนเริ่ม Git

## Checkpoint

- [ ] ระบุได้ว่า Git ทำงานในเครื่อง ส่วน GitHub เป็นบริการออนไลน์
- [ ] อธิบายได้ว่า staging area เป็นพื้นที่เตรียม commit ถัดไป
- [ ] เขียนชื่อ milestone commit ที่สื่อความหมายได้ 3 ข้อ

## ไปต่อ

เมื่อเข้าใจภาพรวมแล้ว ไปที่ [`git init`](/git/init) เพื่อเริ่มติดตามโฟลเดอร์ `my-shop-profile` เดิม

## แหล่งอ้างอิง

- [Git: About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- [Git: Data model และ staging area](https://git-scm.com/docs/gitdatamodel)
