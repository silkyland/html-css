---
title: CSS Grid (บทเสริม)
---

# CSS Grid: บทเสริมสำหรับ Layout สองมิติ

**สถานะ: บทเสริม (Enrichment) · เวลาแนะนำ 35 นาที · ไม่อยู่ในเกณฑ์ผ่าน core**

เรียนบทนี้เมื่อทำ [Responsive](/css/responsive) checkpoint เสร็จแล้ว โปรเจกต์หลักใช้ Flexbox ต่อได้โดยไม่ต้องเปลี่ยนเป็น Grid

## เป้าหมาย

เมื่อจบบทนี้ คุณจะเลือกได้ว่างานใดเหมาะกับ Grid หรือ Flexbox สร้างคอลัมน์ด้วย `repeat()`, `minmax()`, `auto-fit` ใช้ `grid-column` / `grid-template-areas` เบื้องต้น และซ้อน Grid กับ Flexbox ได้โดยไม่เปลี่ยน semantic HTML

![เปรียบเทียบ Flexbox ที่จัดหนึ่งแกน กับ CSS Grid ที่จัดทั้งแถวและคอลัมน์](/images/workshop/css-grid-vs-flex.webp)

## Flexbox หรือ Grid?

| คำถาม | เลือก Flexbox | เลือก Grid |
|---|---|---|
| สนใจการเรียงหลัก ๆ กี่แกน | หนึ่งแกน: แถว **หรือ** คอลัมน์ | สองแกน: แถว **และ** คอลัมน์ |
| ต้องการให้ items กำหนดขนาดตามเนื้อหา | มักเหมาะ | ทำได้ แต่ไม่ใช่เหตุผลหลัก |
| ต้องการให้ขอบการ์ดแต่ละแถวตรงแนวคอลัมน์ | ไม่ใช่จุดเด่น | เหมาะ |
| ตัวอย่างร้าน | nav, กลุ่มปุ่ม | ตารางเมนู / แกลเลอรี / โครงหน้า |

ทั้งสองไม่ได้เป็นคู่แข่งและใช้ซ้อนกันได้ เช่น Grid จัดการ์ดทั้งชุด ส่วน Flexbox จัดราคาและปุ่มภายในแต่ละการ์ด ([W3C CSS Grid Layout Level 2](https://www.w3.org/TR/css-grid-2/))

<script setup>
const flexVsGrid = {
  code: `/* ซ้าย: Flex หนึ่งแถว */
.flex-row { display: flex; gap: 0.5rem; }

/* ขวา: Grid สองมิติ */
.grid-2x2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}`,
  html: `<div class="compare"><div><p class="label">Flexbox — หนึ่งแกน</p><div class="flex-row"><div class="box">1</div><div class="box">2</div><div class="box">3</div></div></div><div><p class="label">Grid — สองแกน</p><div class="grid-2x2"><div class="box">1</div><div class="box">2</div><div class="box">3</div><div class="box">4</div></div></div></div>`,
  css: `.compare{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.label{margin:0 0 .5rem;font-size:.85rem;color:#6b4f3a}.flex-row{display:flex;gap:.5rem}.grid-2x2{display:grid;grid-template-columns:1fr 1fr;gap:.5rem}.box{padding:.85rem;text-align:center;background:#5c3317;color:#fff;border-radius:.4rem;font-weight:700}`
}

const fixedColumns = {
  code: `.menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}`,
  html: `<section class="menu"><article class="card">อเมริกาโน่</article><article class="card">ลาเต้</article><article class="card">ชาดอกกาแฟ</article></section>`,
  css: `.menu{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem}.card{padding:1rem;background:#fff;border:1px solid #d8c3ad;border-radius:.75rem;text-align:center;font-weight:600;color:#5c3317}`
}

const repeatGap = {
  code: `.menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem 1rem;
}`,
  html: `<section class="menu"><article class="card">1</article><article class="card">2</article><article class="card">3</article><article class="card">4</article><article class="card">5</article><article class="card">6</article></section>`,
  css: `.menu{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem 1rem}.card{padding:1rem;background:#216e39;color:#fff;border-radius:.5rem;text-align:center;font-weight:700}`
}

const autoFit = {
  code: `.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 1rem;
}`,
  html: `<section class="product-list"><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p>65 บาท</p></article><article class="product-card"><h2>ลาเต้นมสด</h2><p>70 บาท</p></article><article class="product-card"><h2>ชาดอกกาแฟ</h2><p>55 บาท</p></article><article class="product-card"><h2>กาแฟส้ม</h2><p>75 บาท</p></article></section>`,
  css: `*{box-sizing:border-box}body{margin:0;padding:0;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}.product-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr));gap:1rem}.product-card{padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff}.product-card h2{margin:0 0 .35rem;font-size:1.05rem;color:#5c3317}.product-card p{margin:0;color:#216e39;font-weight:700}`
}

const featured = {
  code: `.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
  gap: 1rem;
}

@media (min-width: 40rem) {
  .product-card--featured {
    grid-column: span 2;
  }
}`,
  html: `<section class="product-list"><article class="product-card product-card--featured"><h2>เมนูเด่น: อเมริกาโน่น้ำผึ้ง</h2><p>65 บาท — กินสองคอลัมน์เมื่อจอกว้าง</p></article><article class="product-card"><h2>ลาเต้นมสด</h2><p>70 บาท</p></article><article class="product-card"><h2>ชาดอกกาแฟ</h2><p>55 บาท</p></article><article class="product-card"><h2>กาแฟส้ม</h2><p>75 บาท</p></article></section>`,
  css: `*{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}.product-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,12rem),1fr));gap:1rem}.product-card{padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff}.product-card--featured{background:#5c3317;color:#fff;border-color:#5c3317}.product-card--featured h2,.product-card--featured p{color:#fff}.product-card h2{margin:0 0 .35rem;font-size:1.05rem;color:#5c3317}.product-card p{margin:0;color:#216e39;font-weight:700}@media(min-width:40rem){.product-card--featured{grid-column:span 2}}`
}

const areas = {
  code: `.page {
  display: grid;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
  grid-template-columns: 2fr 1fr;
  gap: 0.75rem;
}

.header { grid-area: header; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`,
  html: `<div class="page"><header class="header">header — กาแฟบ้านดอย</header><main class="main">main — เมนูและเรื่องราวร้าน</main><aside class="aside">aside — เวลาเปิดร้าน</aside><footer class="footer">footer — ติดต่อเรา</footer></div>`,
  css: `.page{display:grid;grid-template-areas:"header header" "main aside" "footer footer";grid-template-columns:2fr 1fr;gap:.75rem;font-family:system-ui,sans-serif}.header,.main,.aside,.footer{padding:1rem;border-radius:.5rem;font-weight:600}.header{grid-area:header;background:#5c3317;color:#fff}.main{grid-area:main;background:#fff;border:1px solid #d8c3ad;color:#2f241f;min-height:5rem}.aside{grid-area:aside;background:#f0e0d0;color:#5c3317}.footer{grid-area:footer;background:#216e39;color:#fff}`
}

const nested = {
  code: `.product-list { display: grid; /* ... */ }

.product-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}`,
  html: `<section class="product-list"><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p>กาแฟชุมชนกับน้ำผึ้งป่า</p><div class="card-footer"><span class="price">65 บาท</span><a href="#order">สั่งเลย</a></div></article><article class="product-card"><h2>ลาเต้นมสด</h2><p>นมสดโฟมเนียน</p><div class="card-footer"><span class="price">70 บาท</span><a href="#order">สั่งเลย</a></div></article><article class="product-card"><h2>ชาดอกกาแฟ</h2><p>หอมดอกกาแฟเบา ๆ</p><div class="card-footer"><span class="price">55 บาท</span><a href="#order">สั่งเลย</a></div></article></section>`,
  css: `*{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}.product-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,14rem),1fr));gap:1rem}.product-card{display:flex;flex-direction:column;gap:.5rem;padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff;min-height:10rem}.product-card h2{margin:0;font-size:1.05rem;color:#5c3317}.product-card p{margin:0}.card-footer{display:flex;justify-content:space-between;align-items:center;margin-top:auto}.price{color:#216e39;font-weight:700}.card-footer a{color:#5c3317;font-weight:600}`
}
</script>

<LivePreview v-bind="flexVsGrid" height="220px" title="เปรียบเทียบภาพ — Flex หนึ่งแถว vs Grid สองมิติ" />

## สถานะเริ่มต้น

`.product-list` จากบท Flexbox มี cards อย่างน้อย 3 ใบและทำงาน responsive แล้ว ให้เก็บโค้ดเดิมไว้ใน Git ก่อนทดลอง เพื่อเปรียบเทียบหรือย้อนกลับได้

## คอลัมน์พื้นฐานก่อน auto-fit

เริ่มจากจำนวนคอลัมน์คงที่เพื่อเห็นว่า Grid จัดทั้งแถวและคอลัมน์พร้อมกัน

<LivePreview v-bind="fixedColumns" height="140px" title="grid-template-columns: 1fr 1fr 1fr" />

`repeat(3, 1fr)` เขียนสั้นกว่า และ `gap` แยกแถวกับคอลัมน์ได้

<LivePreview v-bind="repeatGap" height="200px" title="repeat(3, 1fr) + gap แถว/คอลัมน์" />

::: warning จอแคบกับคอลัมน์ตายตัว
`repeat(3, 1fr)` บังคับสามคอลัมน์แม้จอแคบ — เหมาะกับการสาธิต ไม่เหมาะเป็นค่าเดียวของหน้าร้านจริง
:::

## ลงมือ

### 1. เปลี่ยนเฉพาะ container ให้ responsive

แทน rule `.product-list` เดิมด้วย:

```css
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 1rem;
}
```

และลบ `flex: 1 1 15rem` จาก `.product-card`

อ่านจากด้านในออกด้านนอก:

- `min(100%, 15rem)` — ไม่ให้ minimum track กว้างกว่า container แคบมาก
- `minmax(..., 1fr)` — แต่ละคอลัมน์มีขั้นต่ำและแบ่งพื้นที่ที่เหลือ
- `auto-fit` — สร้างจำนวน tracks เท่าที่พื้นที่รองรับและยุบ tracks ว่าง
- `repeat()` — ลดการเขียนค่าซ้ำ

<LivePreview v-bind="autoFit" height="340px" title="auto-fit + minmax — ย่อความกว้างผลลัพธ์ดูจำนวนคอลัมน์เปลี่ยน" />

### 2. เมนูเด่นกินสองคอลัมน์

เพิ่ม class ให้การ์ดใบแรก:

```html
<article class="product-card product-card--featured">
  <!-- เนื้อหาเดิม -->
</article>
```

แล้วเพิ่ม CSS เฉพาะเมื่อมีอย่างน้อยสองคอลัมน์:

```css
@media (min-width: 40rem) {
  .product-card--featured {
    grid-column: span 2;
  }
}
```

<LivePreview v-bind="featured" height="360px" title="grid-column: span 2 — การ์ดเด่นกินสองคอลัมน์เมื่อจอกว้าง" />

### 3. `grid-template-areas` สำหรับโครงหน้า

ตั้งชื่อพื้นที่แล้ววาง element ด้วย `grid-area` — อ่านแผนผังหน้าได้จาก CSS โดยตรง เหมาะกับโครง header / main / aside / footer ไม่จำเป็นต้องใช้กับรายการการ์ด

<LivePreview v-bind="areas" height="280px" title="grid-template-areas — โครงหน้าแบบแผนผัง" />

### 4. Grid นอก + Flex ใน

ใช้จุดแข็งของทั้งคู่: Grid จัดตารางการ์ด Flex จัดเนื้อหาภายในแต่ละการ์ด

<LivePreview v-bind="nested" height="300px" title="Grid จัดการ์ด + Flex จัด footer ในแต่ละใบ" />

## ผลที่ควรเห็น

การ์ดเรียงเป็นตารางที่ขอบคอลัมน์ตรงกัน เมื่อย่อจอจำนวนคอลัมน์ลดลงเอง และการ์ดเด่นกินสองคอลัมน์เฉพาะเมื่อพื้นที่พอ

## จุดที่พลาดบ่อย

- ใส่ `display: grid` ที่การ์ดแทน `.product-list`
- ใช้ `repeat(3, 1fr)` แล้วบังคับสามคอลัมน์แม้จอแคบ
- คง flex-only properties ไว้แล้วคาดว่าจะควบคุม grid item เหมือนเดิม
- ใช้ Grid เปลี่ยน visual order จนไม่ตรงกับ DOM และลำดับ keyboard
- เริ่มจาก `grid-template-areas` ซับซ้อนทั้งหน้า ทั้งที่รายการการ์ดต้องการเพียง columns กับ gap
- สั่ง `span 2` โดยไม่มี media query บนจอคอลัมน์เดียว

## Checkpoint

- [ ] ที่ 320px การ์ดเป็นหนึ่งคอลัมน์และไม่ล้น
- [ ] เมื่อขยาย viewport จำนวนคอลัมน์เพิ่มเองโดยไม่เพิ่ม media query หลายจุด
- [ ] การ์ดเด่นกินสองคอลัมน์เฉพาะเมื่อกว้างอย่างน้อย `40rem`
- [ ] ลำดับอ่านและลำดับ Tab ยังตรงกับ HTML
- [ ] อธิบายได้ว่าทำไมรายการนี้เลือก Grid แต่ nav ยังเลือก Flexbox
- [ ] ทดลอง `grid-template-areas` หรือ Flex ซ้อนใน Grid ได้อย่างน้อยหนึ่งแบบ

## ทดลองเปรียบเทียบ

สลับระหว่าง commit Flexbox กับ Grid แล้วตอบสั้น ๆ: สำหรับร้านของคุณ alignment แบบคอลัมน์เพิ่มคุณค่าให้เนื้อหาหรือไม่? ถ้าไม่ การเก็บ Flexbox ที่เรียบง่ายกว่าคือคำตอบที่ถูกต้องได้

## แหล่งอ้างอิงมาตรฐาน

- [W3C CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid-2/)
- [W3C CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
