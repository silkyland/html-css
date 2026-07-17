---
title: โครงสร้างเอกสาร HTML
---

# สร้างโครงเอกสาร HTML ที่สมบูรณ์

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 15 นาที**

## เป้าหมาย

สร้างโครงเอกสารที่ Browser อ่านได้ถูกต้อง รองรับภาษาไทยและหน้าจอมือถือ และแยกข้อมูลใน `head` ออกจากเนื้อหาใน `body`

![ภาพอธิบายโครงสร้างเอกสาร HTML ทางซ้ายและหน้าเว็บที่ Browser แสดงผลทางขวา](/images/workshop/html-structure.webp)

## สถานะเริ่มต้น

เปิด `my-shop-profile/index.html` จากบท setup แล้วคงโครงสร้างต่อไปนี้ไว้:

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

## อ่านจากนอกเข้าใน

| ส่วน | ความหมาย |
|---|---|
| `<!doctype html>` | ทำให้ Browser ประมวลผลเอกสารด้วยโหมดมาตรฐานของ HTML ปัจจุบัน |
| `<html lang="th">` | element รากของเอกสาร และระบุว่าภาษาหลักของหน้าเป็นภาษาไทย |
| `<head>` | metadata (ข้อมูลเกี่ยวกับเอกสาร) ไม่ใช่เนื้อหาหลักที่แสดงบนหน้า |
| `charset="UTF-8"` | ระบุการเข้ารหัสอักขระ เพื่อให้ภาษาไทยแสดงถูกต้อง |
| `viewport` | กำหนดพื้นที่แสดงผลเริ่มต้นให้เหมาะกับอุปกรณ์ |
| `<title>` | ชื่อเอกสารที่เห็นบนแท็บ Browser และเมื่อ bookmark |
| `<body>` | เนื้อหาของหน้าที่ผู้ใช้เห็นและโต้ตอบได้ |

## เติม `<head>` ให้ครบถ้วนขึ้น

`<head>` ในตัวอย่างขั้นต้นมีแค่ `charset`, `viewport` และ `title` ซึ่งพอต่อการแสดงผลแล้ว แต่ในเว็บจริงมักเพิ่มอีกสองส่วนนี้:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="กาแฟบ้านดอย — กาแฟจากเกษตรกรในชุมชน คั่วสดทุกสัปดาห์">
  <link rel="icon" href="images/favicon.svg">
  <title>กาแฟบ้านดอย</title>
</head>
```

| ส่วนเพิ่ม | ประโยชน์ |
|---|---|
| `<meta name="description">` | ข้อความสั้น ๆ ที่เครื่องมือค้นหาอาจนำไปแสดงใต้ชื่อหน้าในผลการค้นหา ไม่ได้แสดงบนหน้าเว็บโดยตรง |
| `<link rel="icon">` | ไอคอนเล็ก ๆ บนแท็บ Browser และ bookmark รองรับไฟล์ `.svg`, `.png` และ `.ico` |

::: tip ลำดับใน `<head>` มีผลอยู่บ้าง
`<meta charset>` ควรอยู่บนสุด เพราะ Browser ต้องรู้การเข้ารหัสก่อนอ่านส่วนที่เหลือ ส่วน `<title>` และ `<link>` วางตามหลังได้ตามสะดวก
:::

::: info HTML ไม่ใช่ชุดคำสั่งทีละบรรทัด
HTML เป็นภาษา markup ที่สร้างโครงสร้างแบบซ้อนกัน ไม่ใช่ชุดคำสั่งที่รันทีละบรรทัด Element ที่เปิดภายใน element อื่น ต้องปิดภายใน element นั้นก่อน เช่น `<p><strong>สำคัญ</strong></p>`
:::

## ลงมือ

### ทดลองการซ้อน element

แทนที่เนื้อหาใน `<body>` ด้วย:

```html
<body>
  <h1>กาแฟบ้านดอย</h1>
  <p>กาแฟจาก <strong>เกษตรกรในชุมชน</strong> เพื่อชุมชน</p>
</body>
```

บันทึกแล้ว reload — อย่าใส่ `<h1>` หรือ `<p>` ไว้ใน `<head>`

<script setup>
const structureExample = {
  html: `<h1>กาแฟบ้านดอย</h1>
<p>กาแฟจาก <strong>เกษตรกรในชุมชน</strong> เพื่อชุมชน</p>`
}
</script>

<LivePreview v-bind="structureExample" height="140px" title="index.html — ส่วน body" />

## ผลที่ควรเห็น

- แท็บ Browser แสดง “กาแฟบ้านดอย”
- หน้าเว็บมีหัวเรื่องหนึ่งบรรทัดและย่อหน้าหนึ่งย่อหน้า
- คำว่า “เกษตรกรในชุมชน” ถูกเน้น แต่ยังอยู่ในย่อหน้าเดิม

## จุดที่พลาดบ่อย

- ลืม `<!doctype html>` ไว้บรรทัดแรก ทำให้ Browser สลับไปใช้ quirks mode และคำนวณ layout ต่างจากที่คาดไว้
- ปิด element ผิดลำดับ เช่น `<p><strong>...</p></strong>` ซ้อนไขว้กันจนโครงสร้างเพี้ยน ต้องปิด `<strong>` ก่อนปิด `<p>` ที่ครอบมันอยู่
- ลืมปิด tag คู่ เช่น `<p>` ที่ไม่มี `</p>` แล้ว Browser ต้องเดาว่าเนื้อหาถัดไปอยู่ในย่อหน้าเดิมหรือไม่
- พิมพ์ `<html lang="th">` ผิดเป็น `<html lang="th>` (ลืมปิดเครื่องหมายคำพูด) ทำให้ attribute ถัดไปถูกตีความผิด

## Checkpoint

- [ ] มี `<!doctype html>` เป็นบรรทัดแรก
- [ ] มี `<html lang="th">`, `<head>` และ `<body>` อย่างละหนึ่งชุด
- [ ] เปิดและปิด element ซ้อนกันถูกลำดับ
- [ ] ไม่มีเนื้อหาที่ต้องแสดงบนหน้าอยู่ใน `<head>`

## บันทึกแหล่งข้อมูล

HTML ปัจจุบันเป็น Living Standard และ doctype แบบสั้นใช้เพื่อเลือก standards mode ดู [WHATWG — Writing HTML documents](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype) และ [WHATWG — The `html` element](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)
