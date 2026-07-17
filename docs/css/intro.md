---
title: รู้จัก CSS
---

# รู้จัก CSS และเริ่มไฟล์ `style.css`

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 10 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะอธิบายส่วนประกอบของ CSS rule ได้ เชื่อม `index.html` กับ external stylesheet และตรวจได้ว่า Browser โหลด `style.css` สำเร็จ

![เปรียบเทียบหน้าเว็บร้านกาแฟก่อนตกแต่งกับหลังใช้สีและระยะห่างด้วย CSS](/images/workshop/css-before-after.webp)

## สถานะเริ่มต้น

ในโฟลเดอร์ `my-shop-profile/` มี `index.html` ของร้านกาแฟแล้ว แต่ยังไม่มี CSS หน้าจึงแสดงด้วยรูปแบบเริ่มต้นของ Browser

CSS ย่อมาจาก **Cascading Style Sheets** เป็นภาษาที่อธิบายการนำเสนอเอกสารที่มีโครงสร้าง เช่น สี ขนาด ระยะห่าง และการจัดวาง ปัจจุบัน CSS พัฒนาเป็นโมดูลหลายชุด จึงไม่มี “CSS4” ที่เป็นเวอร์ชันเดียวของทั้งภาษา ([W3C CSS Snapshot 2026](https://www.w3.org/TR/css/))

ในบท HTML เราบอกว่า “ส่วนไหนคืออะไร” ในบท CSS เราจะบอกว่า “ส่วนนั้นควรดูอย่างไร” โดยแยกไฟล์ออกจากกันเพื่อให้ดูแลง่าย

## CSS rule อ่านอย่างไร

```css
body {
  background-color: #fffaf2;
  color: #2f241f;
}
```

| ส่วน | ความหมายในตัวอย่าง |
|---|---|
| `body` | **selector** — เลือก element ที่จะตกแต่ง |
| `background-color`, `color` | **property** — เรื่องที่จะเปลี่ยน |
| `#fffaf2`, `#2f241f` | **value** — ค่าที่กำหนด |
| `property: value;` | **declaration** — คู่คำสั่งหนึ่งบรรทัด |
| ทั้งก้อน `{ ... }` กับ selector | **rule** — กฎหนึ่งชุด |

จำสูตรสั้น ๆ: **เลือกอะไร → เปลี่ยนเรื่องอะไร → เป็นค่าอะไร**

## ลงมือ

### เชื่อมไฟล์ CSS

1. สร้างไฟล์ `style.css` ไว้ข้าง `index.html` ในโฟลเดอร์ `my-shop-profile`
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

4. เปิดหน้าเว็บใน Browser แล้วกด reload

<script setup>
const linkExample = {
  code: `/* style.css */
body {
  background-color: #fffaf2;
  color: #2f241f;
}

/* index.html */
<h1>กาแฟบ้านดอย</h1>
<p>กาแฟดี ๆ จากชุมชนของเรา</p>`,
  html: `<h1>กาแฟบ้านดอย</h1>
<p>กาแฟดี ๆ จากชุมชนของเรา</p>`,
  css: `body { background-color: #fffaf2; color: #2f241f; }`
}

const cascadeExample = {
  code: `p { color: #2f241f; }
p { color: #8b4513; } /* selector เท่ากัน บรรทัดหลังชนะ */`,
  html: `<p>ย่อหน้านี้ใช้สีจาก rule บรรทัดหลัง</p>`,
  css: `p{color:#2f241f}p{color:#8b4513;font-size:1.1rem}`
}

const inheritExample = {
  code: `body {
  color: #5c3317;
  font-family: system-ui, sans-serif;
}

/* p สืบทอด color และ font-family จาก body */
p { margin: 0; }`,
  html: `<p>ข้อความนี้สืบทอดสีและฟอนต์จาก body</p>
<p class="note">กล่องนี้มี border ของตัวเอง — border ไม่ได้สืบทอด</p>`,
  css: `body{color:#5c3317;font-family:system-ui,sans-serif}.note{margin-top:1rem;padding:.75rem;border:2px solid #d8c3ad;border-radius:.5rem}`
}
</script>

<LivePreview v-bind="linkExample" height="140px" title="style.css เชื่อมแล้ว — พื้นครีม ตัวอักษรน้ำตาล" />

## ผลที่ควรเห็น

พื้นหลังหน้าเว็บเปลี่ยนเป็นสีครีมและข้อความเป็นสีน้ำตาลเข้ม โดยเนื้อหาและลำดับ HTML ไม่เปลี่ยน

โครงไฟล์ขณะนี้ควรเป็น:

```text
my-shop-profile/
├── index.html
├── style.css
└── images/
```

## ทำไมชื่อ Cascading

หลาย rule อาจกำหนด property เดียวกันให้ element เดียวกัน Browser จึงต้องตัดสินว่า declaration ใดชนะ กระบวนการนี้คือ **cascade** ซึ่งพิจารณาที่มา ความสำคัญ ความเฉพาะเจาะจง และลำดับที่เขียน ([W3C CSS Cascading and Inheritance Level 6](https://www.w3.org/TR/css-cascade-6/))

สำหรับตอนนี้จำกติกาที่ใช้บ่อยก่อน: เมื่อ selector เท่ากัน **บรรทัดหลังชนะ**

<LivePreview v-bind="cascadeExample" height="100px" title="cascade — selector เท่ากัน บรรทัดหลังชนะ" />

บาง property เช่น `color` และ `font-family` ส่งต่อจาก parent ไปยังลูกได้ เรียกว่า **inheritance** แต่ property จัดกล่อง เช่น `margin` และ `border` ไม่ได้สืบทอดทุกตัว จึงไม่ควรเดาจากชื่อ ให้ทดลองหรือเปิดเอกสารของ property นั้น

<LivePreview v-bind="inheritExample" height="160px" title="inheritance — สี/ฟอนต์สืบทอดได้ แต่ border ไม่สืบทอด" />

## จุดที่พลาดบ่อย

- เขียน `href="styles.css"` แต่ไฟล์ชื่อ `style.css` — ชื่อต้องตรงกันทุกตัวอักษร
- วาง `<link>` นอก `<head>` — ย้ายเข้า `<head>` เพื่อให้โครงสร้างชัดเจน
- ลืม `;` หรือ `}` — rule ถัดไปอาจทำงานผิด
- แก้ไฟล์แล้วไม่เห็นผล — บันทึกไฟล์และรีเฟรชหน้าเว็บ (ลอง hard reload หากจำเป็น)

## Checkpoint

- [ ] `index.html` และ `style.css` อยู่ในโฟลเดอร์เดียวกัน
- [ ] พื้นหลังเปลี่ยนเป็นสีครีม
- [ ] ลองเปลี่ยน `background-color` เป็น `pink` ชั่วคราวแล้วเห็นผล จากนั้นเปลี่ยนกลับ
- [ ] DevTools → Network หรือ Sources พบไฟล์ `style.css` และไม่มีสถานะ 404

ถ้าพื้นหลังไม่เปลี่ยน ให้ตรวจชื่อไฟล์ path และเครื่องหมายคำพูดใน `<link>` ก่อนเพิ่ม CSS อื่น

## ไปต่อ

เมื่อ Browser โหลด `style.css` ได้แล้ว ไปที่ [Selector](/css/selectors) เพื่อเลือกตกแต่งเฉพาะส่วนของร้าน

## แหล่งอ้างอิงมาตรฐาน

- [W3C CSS Snapshot 2026](https://www.w3.org/TR/css/)
- [W3C CSS Syntax Module Level 3](https://www.w3.org/TR/css-syntax-3/)
- [W3C CSS Cascading and Inheritance](https://www.w3.org/TR/css-cascade-6/)
