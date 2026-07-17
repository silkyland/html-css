---
title: Flexbox
---

# Flexbox: จัด nav และการ์ดเมนูให้ยืดหยุ่น

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 20 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะระบุ flex container และ flex items แยก main axis กับ cross axis และใช้ `gap`, `justify-content`, `align-items`, `flex-wrap` รวมถึง `flex` shorthand เพื่อให้การ์ดขยายและหดได้โดยไม่กำหนดความกว้างตายตัว

![แผนภาพ Flexbox จัดแถบนำทางและการ์ดเมนูให้เรียงและขึ้นบรรทัดใหม่ตามพื้นที่](/images/workshop/css-flexbox.webp)

## สถานะเริ่มต้น

การ์ดแต่ละใบมีหน้าตาแล้ว แต่ยังเรียงลงมาแนวตั้งทั้งหมด ลิงก์ nav ยังไม่มีระบบจัดวางที่ชัดเจน

## แบบจำลองที่ต้องรู้

เมื่อกำหนด `display: flex` ให้ parent ลูกโดยตรงจะเป็น **flex items**

ค่าเริ่มต้นของ `flex-direction` คือ `row` ดังนั้น:

- **main axis** วิ่งตามแนวนอน
- **cross axis** วิ่งตามแนวตั้ง

เมื่อเปลี่ยน `flex-direction` หรือภาษาเขียน จุดเริ่มและจุดจบอาจต่างจากการท่องว่า “ซ้าย–ขวา” จึงควรคิดเป็น main/cross axis ([W3C CSS Flexible Box Layout Level 1](https://www.w3.org/TR/css-flexbox-1/))

| คำสั่ง | ทำอะไร |
|---|---|
| `justify-content` | จัด items ตาม main axis |
| `align-items` | จัด items ตาม cross axis |
| `gap` | เว้นช่องว่างโดยไม่ต้องใส่ margin ให้ลูกทีละตัว |
| `flex-wrap` | เมื่อที่ไม่พอ ให้ขึ้นบรรทัดใหม่แทนการล้น |
| `flex` | ควบคุมการขยาย หด และขนาดตั้งต้นของ item |

<script setup>
const rowExample = {
  code: `.row {
  display: flex;
  gap: 0.5rem;
}

.box { /* การ์ดตัวอย่าง */ }`,
  html: `<div class="row"><div class="box">1</div><div class="box">2</div><div class="box">3</div></div>`,
  css: `.row{display:flex;gap:.5rem}.box{flex:1;padding:1rem;text-align:center;background:#5c3317;color:#fff;border-radius:.5rem;font-weight:700}`
}

const columnExample = {
  code: `.column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}`,
  html: `<div class="column"><div class="box">1</div><div class="box">2</div><div class="box">3</div></div>`,
  css: `.column{display:flex;flex-direction:column;gap:.5rem}.box{padding:1rem;text-align:center;background:#5c3317;color:#fff;border-radius:.5rem;font-weight:700}`
}

const justifyExample = {
  code: `.demo {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}`,
  html: `<p class="label">justify-content: space-between</p><div class="demo"><div class="box">A</div><div class="box">B</div><div class="box">C</div></div>`,
  css: `.label{margin:0 0 .5rem;font-size:.9rem;color:#6b4f3a}.demo{display:flex;justify-content:space-between;gap:.5rem;padding:.75rem;background:#f0e0d0;border-radius:.5rem}.box{padding:.75rem 1rem;background:#5c3317;color:#fff;border-radius:.4rem;font-weight:700}`
}

const alignExample = {
  code: `.demo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 6rem;
}`,
  html: `<p class="label">align-items: center (cross axis)</p><div class="demo"><div class="box tall">สูง</div><div class="box">กลาง</div><div class="box short">เตี้ย</div></div>`,
  css: `.label{margin:0 0 .5rem;font-size:.9rem;color:#6b4f3a}.demo{display:flex;align-items:center;gap:.5rem;min-height:6rem;padding:.75rem;background:#f0e0d0;border-radius:.5rem}.box{padding:.5rem .9rem;background:#5c3317;color:#fff;border-radius:.4rem;font-weight:700}.tall{padding-block:1.5rem}.short{padding-block:.25rem}`
}

const wrapExample = {
  code: `.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.item {
  flex: 1 1 8rem;
}`,
  html: `<div class="wrap"><div class="item">เมนู</div><div class="item">เวลา</div><div class="item">ติดต่อ</div><div class="item">เกี่ยวกับ</div><div class="item">แผนที่</div></div>`,
  css: `.wrap{display:flex;flex-wrap:wrap;gap:.5rem}.item{flex:1 1 8rem;padding:.75rem;text-align:center;background:#216e39;color:#fff;border-radius:.4rem;font-weight:600}`
}

const navExample = {
  code: `.site-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem 1.25rem;
  padding: 1rem;
}

.site-nav a {
  color: #ffffff;
  padding: 0.25rem;
}`,
  html: `<nav class="site-nav" aria-label="เมนูหลัก"><a href="#menu">เมนูแนะนำ</a><a href="#hours">เวลาเปิดร้าน</a><a href="#contact">ติดต่อเรา</a></nav>`,
  css: `body{margin:0}.site-nav{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.75rem 1.25rem;padding:1rem;background:#5c3317}.site-nav a{color:#fff;padding:.25rem;text-decoration:none}`
}

const cardsExample = {
  code: `.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.product-card {
  flex: 1 1 15rem;
  padding: 1.25rem;
  border: 1px solid #d8c3ad;
  border-radius: 0.75rem;
  background: #ffffff;
}`,
  html: `<section class="product-list"><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p class="price">65 บาท</p></article><article class="product-card"><h2>ลาเต้นมสด</h2><p class="price">70 บาท</p></article><article class="product-card"><h2>ชาดอกกาแฟ</h2><p class="price">55 บาท</p></article></section>`,
  css: `*{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}.product-list{display:flex;flex-wrap:wrap;gap:1rem}.product-card{flex:1 1 15rem;padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff}.product-card h2{margin:0 0 .5rem;font-size:1.1rem;color:#5c3317}.price{margin:0;color:#216e39;font-weight:700}`
}

const nestedExample = {
  code: `.product-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}`,
  html: `<section class="product-list"><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p>กาแฟเข้มกับน้ำผึ้งป่า</p><div class="card-footer"><p class="price">65 บาท</p><a href="#order">สั่งเลย</a></div></article><article class="product-card"><h2>ลาเต้นมสด</h2><p>นมสดโฟมเนียน</p><div class="card-footer"><p class="price">70 บาท</p><a href="#order">สั่งเลย</a></div></article></section>`,
  css: `*{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}.product-list{display:flex;flex-wrap:wrap;gap:1rem}.product-card{flex:1 1 14rem;display:flex;flex-direction:column;gap:.5rem;padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff;min-height:10rem}.product-card h2{margin:0;font-size:1.1rem;color:#5c3317}.product-card p{margin:0}.card-footer{display:flex;justify-content:space-between;align-items:center;margin-top:auto}.price{color:#216e39;font-weight:700}.card-footer a{color:#5c3317;font-weight:600}`
}

const shopExample = {
  code: `/* รวม nav + การ์ดในหน้าเดียว */`,
  html: `<nav class="site-nav" aria-label="เมนูหลัก"><a href="#menu">เมนูแนะนำ</a><a href="#hours">เวลาเปิดร้าน</a><a href="#contact">ติดต่อเรา</a></nav><main><section class="product-list"><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p>65 บาท</p></article><article class="product-card"><h2>ลาเต้นมสด</h2><p>70 บาท</p></article><article class="product-card"><h2>ชาดอกกาแฟ</h2><p>55 บาท</p></article></section></main>`,
  css: `*{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}.site-nav{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:.75rem 1.25rem;padding:1rem;background:#5c3317}.site-nav a{color:#fff;padding:.25rem;text-decoration:none}main{width:min(100% - 2rem,60rem);margin-inline:auto;padding-block:2rem}.product-list{display:flex;flex-wrap:wrap;gap:1rem}.product-card{flex:1 1 15rem;padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff}.product-card h2{margin:0 0 .35rem;font-size:1.1rem;color:#5c3317}.product-card p{margin:0;color:#216e39;font-weight:700}`
}
</script>

### เปรียบเทียบ `row` กับ `column`

<LivePreview v-bind="rowExample" height="120px" title="flex-direction: row (ค่าเริ่มต้น) — main axis แนวนอน" />

<LivePreview v-bind="columnExample" height="220px" title="flex-direction: column — main axis แนวตั้ง" />

## จัดตำแหน่งบนแกน

`justify-content` จัดตาม **main axis** ส่วน `align-items` จัดตาม **cross axis**

<LivePreview v-bind="justifyExample" height="140px" title="justify-content: space-between — กระจายตาม main axis" />

<LivePreview v-bind="alignExample" height="180px" title="align-items: center — จัดกึ่งกลางตาม cross axis" />

## `gap` และ `flex-wrap`

เมื่อพื้นที่แคบ `flex-wrap: wrap` ทำให้ item ขึ้นบรรทัดใหม่แทนการบีบหรือล้น ส่วน `flex: 1 1 8rem` บอกว่าขนาดตั้งต้นประมาณ `8rem` แล้วค่อยขยาย/หดตามพื้นที่

<LivePreview v-bind="wrapExample" height="160px" title="flex-wrap + flex-basis — ย่อความกว้างผลลัพธ์ดูการขึ้นบรรทัดใหม่" />

## ลงมือ

### 1. nav หนึ่งแนว

เพิ่มใน `style.css`:

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

<LivePreview v-bind="navExample" height="100px" title="style.css — .site-nav เป็น flex container" />

### 2. การ์ดที่โตและขึ้นแถวใหม่ได้

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

<LivePreview v-bind="cardsExample" height="220px" title="style.css — .product-list + flex: 1 1 15rem" />

### 3. (เสริมในหน้าเดียวกัน) Flex ซ้อนใน Flex

การ์ดแต่ละใบก็เป็น flex container ได้ เช่น จัดชื่อกับราคา/ปุ่มให้อยู่คนละฝั่ง และดัน footer ลงล่างด้วย `margin-top: auto`

```css
.product-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}
```

ตัวอย่างนี้เป็นแนวคิดเสริม — ใน core ของร้าน ถ้ายังไม่มีปุ่มสั่งซื้อ ใช้แค่ขั้นตอน 1–2 ก็พอ

<LivePreview v-bind="nestedExample" height="260px" title="Flex ซ้อน — การ์ดเป็น column และ footer เป็น row" />

## ผลที่ควรเห็น

nav อยู่เป็นกลุ่มกึ่งกลาง การ์ดแบ่งพื้นที่เมื่อจอกว้าง และขึ้นแถวใหม่เมื่อพื้นที่แคบ

<LivePreview v-bind="shopExample" height="330px" title="รวม nav + การ์ดเมนู — ผลลัพธ์ใกล้เคียงโปรเจกต์" />

## จุดที่พลาดบ่อย

- ใส่ `display: flex` ที่การ์ดแต่ละใบ แทน parent `.product-list`
- ใช้ `justify-content` เพื่อจัด cross axis แล้วไม่เห็นผล
- ลืม `flex-wrap` ทำให้ items หดมากหรือล้นในแถวเดียว
- กำหนด `width` ตายตัวให้ทุกการ์ดพร้อมกับ `flex-basis` จนกฎแข่งขันกัน
- ใช้ `order` เพื่อแก้ลำดับที่ควรแก้ใน HTML — keyboard และการอ่านเอกสารยังอิงลำดับต้นฉบับ

## Checkpoint

- [ ] `.site-nav` และ `.product-list` เป็น flex container
- [ ] การ์ดอย่างน้อย 3 ใบใช้ `flex: 1 1 15rem`
- [ ] เมื่อย่อ preview การ์ดขึ้นบรรทัดใหม่โดยไม่ล้น
- [ ] กด Tab แล้วลำดับ focus ตรงกับลำดับที่อ่านจาก HTML
- [ ] อธิบายได้ว่าใน nav ปัจจุบัน main axis และ cross axis อยู่แนวไหน
- [ ] แยกได้ว่า `justify-content` กับ `align-items` คนละแกน

## ไปต่อ

เมื่อ layout ยืดหยุ่นแล้ว ไปที่ [Responsive](/css/responsive) เพื่อปิดเส้นทาง CSS ให้ใช้ได้หลายขนาดหน้าจอ  
ถ้าทำ checkpoint เสร็จเร็วและอยากลอง layout สองมิติ ดู [CSS Grid (บทเสริม)](/css/grid)

## แหล่งอ้างอิงมาตรฐาน

- [W3C CSS Flexible Box Layout Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [W3C CSS Box Alignment Level 3](https://www.w3.org/TR/css-align-3/)
