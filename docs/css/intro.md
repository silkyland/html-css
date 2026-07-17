---
title: รู้จัก CSS
---

# รู้จัก CSS และเริ่มไฟล์ `style.css`

> **CORE · 15 นาที** — บทนี้เริ่มตกแต่งหน้า “กาแฟบ้านดอย” ที่สร้างจากบท HTML และจะใช้ไฟล์ `style.css` **ไฟล์เดิมต่อเนื่องไปทุกบท**

## เป้าหมายการเรียนรู้

เมื่อจบบทนี้ คุณจะสามารถ

- อธิบายส่วนประกอบของ CSS rule ได้
- เชื่อม `index.html` กับ external stylesheet
- อธิบาย cascade และ inheritance แบบที่จำเป็นต่อการแก้โค้ด
- ตรวจได้ว่าเบราว์เซอร์โหลด `style.css` สำเร็จ

## สถานะเริ่มต้น

ในโฟลเดอร์ `my-shop-profile/` มี `index.html` ของร้านกาแฟแล้ว แต่ยังไม่มี CSS หน้าจึงแสดงด้วยรูปแบบเริ่มต้นของเบราว์เซอร์

CSS ย่อมาจาก **Cascading Style Sheets** เป็นภาษาที่อธิบายการนำเสนอเอกสารที่มีโครงสร้าง เช่น สี ขนาด ระยะห่าง และการจัดวาง ปัจจุบัน CSS พัฒนาเป็นโมดูลหลายชุด จึงไม่มี “CSS4” ที่เป็นเวอร์ชันเดียวของทั้งภาษา ([W3C CSS Snapshot 2026](https://www.w3.org/TR/css/))

## CSS rule อ่านอย่างไร

```css
body {
  background-color: #fffaf2;
  color: #2f241f;
}
```

- `body` คือ **selector**: เลือก element ที่จะตกแต่ง
- `background-color` และ `color` คือ **property**: เรื่องที่จะเปลี่ยน
- `#fffaf2` และ `#2f241f` คือ **value**: ค่าที่กำหนด
- `property: value;` หนึ่งคู่เรียกว่า **declaration**
- declarations ที่อยู่ระหว่าง `{ }` รวมกับ selector เป็นหนึ่ง **rule**

## ลงมือทำ: เชื่อมไฟล์ CSS

1. สร้างไฟล์ `style.css` ไว้ข้าง `index.html`
2. เพิ่มบรรทัดนี้ใน `<head>` ของ `index.html`

```html
<link rel="stylesheet" href="style.css">
```

3. คัดลอกโค้ดนี้ลง `style.css` แล้วบันทึก

```css
body {
  background-color: #fffaf2;
  color: #2f241f;
}
```

ผลที่ควรเห็นคือพื้นหลังเปลี่ยนเป็นสีครีมและตัวอักษรเป็นสีน้ำตาลเข้ม

<script setup>
const example = {
  code: `/* style.css */
body {
  background-color: #fffaf2;
  color: #2f241f;
}`,
  html: `<h1>กาแฟบ้านดอย</h1>
<p>กาแฟดี ๆ จากชุมชนของเรา</p>`,
  css: `body { background-color: #fffaf2; color: #2f241f; }`
}
</script>

<LivePreview v-bind="example" height="160px" />

## ผลที่ควรเห็น

พื้นหลังหน้าเว็บเปลี่ยนเป็นสีครีมและข้อความเป็นสีน้ำตาลเข้ม โดยเนื้อหาและลำดับ HTML ไม่เปลี่ยน

## ทำไมชื่อ Cascading

หลาย rule อาจกำหนด property เดียวกันให้ element เดียวกัน เบราว์เซอร์จึงต้องตัดสินว่า declaration ใดชนะ กระบวนการนี้คือ **cascade** ซึ่งพิจารณาที่มา ความสำคัญ ความเฉพาะเจาะจง และลำดับที่เขียน ([W3C CSS Cascading and Inheritance Level 6](https://www.w3.org/TR/css-cascade-6/)) สำหรับตอนนี้จำกติกาที่ใช้บ่อยก่อน:

```css
p { color: #2f241f; }
p { color: #8b4513; } /* selector เท่ากัน บรรทัดหลังชนะ */
```

บาง property เช่น `color` และ `font-family` ส่งต่อจาก parent ไปยังลูกได้ เรียกว่า **inheritance** แต่ property จัดกล่อง เช่น `margin` และ `border` ไม่ได้สืบทอดทุกตัว จึงไม่ควรเดาจากชื่อ ให้ทดลองหรือเปิดเอกสารของ property นั้น

## จุดที่พลาดบ่อย

- เขียน `href="styles.css"` แต่ไฟล์ชื่อ `style.css` — ชื่อต้องตรงกันทุกตัว
- วาง `<link>` นอก `<head>` — ย้ายเข้า `<head>` เพื่อให้โครงสร้างชัดเจน
- ลืม `;` หรือ `}` — rule ถัดไปอาจทำงานผิด
- แก้ไฟล์แล้วไม่เห็นผล — บันทึกไฟล์และรีเฟรชหน้าเว็บ

## Checkpoint: CSS เชื่อมจริงหรือยัง

- [ ] `index.html` และ `style.css` อยู่ในโฟลเดอร์เดียวกัน
- [ ] พื้นหลังเปลี่ยนเป็นสีครีม
- [ ] ลองเปลี่ยน `background-color` เป็น `pink` ชั่วคราวแล้วเห็นผล จากนั้นเปลี่ยนกลับ
- [ ] DevTools → Network หรือ Sources พบไฟล์ `style.css` และไม่มีสถานะ 404

ถ้าพื้นหลังไม่เปลี่ยน ให้ตรวจชื่อไฟล์ path และเครื่องหมายคำพูดใน `<link>` ก่อนเพิ่ม CSS อื่น

## แหล่งอ้างอิงมาตรฐาน

- [W3C CSS Snapshot 2026](https://www.w3.org/TR/css/)
- [W3C CSS Syntax Module Level 3](https://www.w3.org/TR/css-syntax-3/)
- [W3C CSS Cascading and Inheritance](https://www.w3.org/TR/css-cascade-6/)
