---
title: Flexbox
---

# Flexbox: จัด nav และการ์ดเมนูให้ยืดหยุ่น

> **CORE · 20 นาที** — ใช้ Flexbox กับเนื้อหาร้านเดิมสองจุด: nav ที่เรียงลิงก์ และรายการการ์ดที่ต้องขึ้นบรรทัดใหม่ได้

## เป้าหมายการเรียนรู้

- ระบุ flex container และ flex items
- แยก main axis กับ cross axis
- ใช้ `gap`, `justify-content`, `align-items` และ `flex-wrap`
- ทำให้การ์ดขยายและหดได้โดยไม่กำหนดความกว้างตายตัว

## สถานะเริ่มต้น

การ์ดแต่ละใบมีหน้าตาแล้ว แต่ยังเรียงลงมาแนวตั้งทั้งหมด ลิงก์ nav ยังไม่มีระบบจัดวางที่ชัดเจน

## แบบจำลองที่ต้องรู้

เมื่อกำหนด `display: flex` ให้ parent ลูกโดยตรงจะเป็น **flex items** ค่าเริ่มต้นของ `flex-direction` คือ `row` ดังนั้น main axis วิ่งตามแนวนอนและ cross axis วิ่งตามแนวตั้ง ในภาษาเขียนขวาไปซ้ายหรือเมื่อเปลี่ยน direction จุดเริ่มและจุดจบอาจต่างจากการท่องว่า “ซ้าย–ขวา” จึงควรคิดเป็น main/cross axis ([W3C CSS Flexible Box Layout Level 1](https://www.w3.org/TR/css-flexbox-1/))

## ลงมือทำ 1: nav หนึ่งแนว

```css
.site-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem 1.25rem;
  padding: 1rem;
}

.site-nav a {
  padding: 0.25rem;
}
```

- main axis: ลิงก์เรียงต่อกัน
- `justify-content`: จัด items ตาม main axis
- `align-items`: จัด items ตาม cross axis
- `gap`: เว้นช่องว่างโดยไม่ต้องใส่ margin ให้ลูกแต่ละตัว
- `wrap`: เมื่อที่ไม่พอ ลิงก์ขึ้นบรรทัดใหม่แทนการล้น

## ลงมือทำ 2: การ์ดที่โตและขึ้นแถวใหม่ได้

ลบ rule `.product-card + .product-card { margin-top: ... }` จากบท Box Model แล้วเพิ่ม:

```css
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.product-card {
  flex: 1 1 15rem;
}
```

`flex: 1 1 15rem` เป็น shorthand ของ

- `flex-grow: 1` — มีพื้นที่เหลือก็แบ่งกันขยาย
- `flex-shrink: 1` — พื้นที่ไม่พอก็ยอมลดขนาด
- `flex-basis: 15rem` — ขนาดตั้งต้นก่อนแบ่งพื้นที่

นี่คือ flexible sizing: ไม่ได้สั่งให้ทุกการ์ดกว้าง 240px ตลอด แต่ให้เบราว์เซอร์จัดพื้นที่ตาม container

<script setup>
const example = {
  html: `<nav class="site-nav" aria-label="เมนูหลัก"><a href="#menu">เมนูแนะนำ</a><a href="#hours">เวลาเปิดร้าน</a><a href="#contact">ติดต่อเรา</a></nav><main><section class="product-list"><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p>65 บาท</p></article><article class="product-card"><h2>ลาเต้นมสด</h2><p>70 บาท</p></article><article class="product-card"><h2>ชาดอกกาแฟ</h2><p>55 บาท</p></article></section></main>`,
  css: `*{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}.site-nav{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:.75rem 1.25rem;padding:1rem;background:#5c3317}.site-nav a{color:#fff;padding:.25rem}main{width:min(100% - 2rem,60rem);margin-inline:auto;padding-block:2rem}.product-list{display:flex;flex-wrap:wrap;gap:1rem}.product-card{flex:1 1 15rem;padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff}`
}
</script>

<LivePreview v-bind="example" height="330px" />

## ผลที่ควรเห็น

nav อยู่เป็นกลุ่มกึ่งกลาง การ์ดแบ่งพื้นที่เท่า ๆ กันเมื่อจอกว้าง และขึ้นแถวใหม่เมื่อพื้นที่แคบ

## ทดลองให้เห็น axis

ใน DevTools เปลี่ยน `.product-list` ชั่วคราวเป็น `flex-direction: column` แล้วสังเกตว่า main axis เปลี่ยนเป็นแนวตั้ง จากนั้นลอง `justify-content` และ `align-items` อีกครั้ง ก่อนลบ `flex-direction: column` ออก

## จุดที่พลาดบ่อย

- ใส่ `display: flex` ที่การ์ดแต่ละใบ แทน parent `.product-list`
- ใช้ `justify-content` เพื่อจัด cross axis แล้วไม่เห็นผล
- ลืม `flex-wrap` ทำให้ items หดมากหรือล้นในแถวเดียว
- กำหนด `width` ตายตัวให้ทุกการ์ดพร้อมกับ `flex-basis` จนกฎแข่งขันกัน
- คิดว่า Flexbox ทำให้ semantic order เปลี่ยน; หลีกเลี่ยง `order` เพื่อแก้ลำดับที่ควรแก้ใน HTML เพราะ keyboard และการอ่านเอกสารยังอิงลำดับต้นฉบับ

## Checkpoint

- [ ] `.site-nav` และ `.product-list` เป็น flex container
- [ ] การ์ดอย่างน้อย 3 ใบใช้ `flex: 1 1 15rem`
- [ ] เมื่อย่อ preview การ์ดขึ้นบรรทัดใหม่โดยไม่ล้น
- [ ] กด Tab แล้วลำดับ focus ตรงกับลำดับที่อ่านจาก HTML
- [ ] อธิบายได้ว่าใน nav ปัจจุบัน main axis และ cross axis อยู่แนวไหน

## แหล่งอ้างอิงมาตรฐาน

- [W3C CSS Flexible Box Layout Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [W3C CSS Box Alignment Level 3](https://www.w3.org/TR/css-align-3/)
