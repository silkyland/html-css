# รู้จัก CSS และการเชื่อมกับ HTML

**CSS (Cascading Style Sheets)** ใช้ควบคุมสี ตัวอักษร ระยะห่าง และการจัดวาง เปรียบเหมือน “เสื้อผ้าและการตกแต่ง” ของเว็บไซต์

ไฟล์ HTML จะเชื่อมต่อกับไฟล์ CSS ผ่านแท็ก `<link>` ใน `<head>`

<script setup>
const example = {
  code: `<!-- index.html -->
<head>
  <meta charset="UTF-8">
  <title>ร้านกาแฟบ้านเรา</title>
  <link rel="stylesheet" href="style.css">
</head>`,
  html: `<h1>ร้านกาแฟบ้านเรา</h1>
<p>กาแฟดี ๆ จากชุมชนของเรา</p>`,
  css: `body {
  background-color: #fffaf2;
  color: #2f241f;
}`
}
</script>

<LivePreview v-bind="example" height="160px" />

::: tip
แยก HTML และ CSS คนละไฟล์ ช่วยให้โค้ดอ่านง่ายและดูแลสะดวก
:::

::: details ภาพประกอบที่แนะนำ
Diagram แสดง `index.html` เชื่อมไปยัง `style.css`
:::
