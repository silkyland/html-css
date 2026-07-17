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

<LivePreview v-bind="example" height="180px" />

- `<head>` เก็บข้อมูลเกี่ยวกับหน้าเว็บ
- `<title>` คือชื่อที่แสดงบนแท็บ Browser
- `<body>` เก็บเนื้อหาที่ผู้ใช้มองเห็น

::: details ภาพประกอบที่แนะนำ
Screenshot เปรียบเทียบโค้ด HTML กับผลลัพธ์ใน Browser
:::
