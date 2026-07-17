---
title: โครงสร้างเอกสาร HTML
---

# รู้จัก HTML และโครงสร้างเอกสาร

**HTML (HyperText Markup Language)** ใช้กำหนดโครงสร้างและความหมายของเนื้อหาบนหน้าเว็บ เปรียบเหมือน “โครงกระดูก” ของเว็บไซต์

<script setup>
const example = {
  html: `<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ร้านกาแฟบ้านเรา</title>
  </head>
  <body>
    <h1>ร้านกาแฟบ้านเรา</h1>
    <p>กาแฟดี ๆ จากชุมชนของเรา</p>
  </body>
</html>`
}
</script>

## โครงสร้างพื้นฐานของหน้าเว็บ

ทุกหน้าเว็บ HTML มีโครงสร้างหลักเหมือนกัน:

<LivePreview v-bind="example" height="180px" />

## อธิบายแต่ละส่วน

| ส่วน | หน้าที่ |
|------|---------|
| `<!doctype html>` | บอก Browser ว่านี่คือเอกสาร HTML5 |
| `<html lang="th">` | ครอบทั้งหน้า `lang="th"` บอกว่าเนื้อหาเป็นภาษาไทย |
| `<head>` | เก็บข้อมูลเกี่ยวกับหน้าเว็บที่ผู้ใช้ไม่เห็น |
| `<title>` | ชื่อที่แสดงบนแท็บ Browser |
| `<meta charset="UTF-8">` | รองรับภาษาไทยและอักขระพิเศษ |
| `<meta name="viewport">` | ทำให้แสดงผลเหมาะสมบนมือถือ |
| `<body>` | เนื้อหาที่ผู้ใช้มองเห็นบนหน้าจอ |

::: tip ลองทำเลย
สร้างไฟล์ `index.html` ในโฟลเดอร์ใหม่ คัดลอกโค้ดด้านบน แล้วเปิดด้วย Browser (ดับเบิลคลิกไฟล์)
:::

::: details ภาพประกอบที่แนะนำ
Screenshot เปรียบเทียบโค้ด HTML กับผลลัพธ์ใน Browser
:::
