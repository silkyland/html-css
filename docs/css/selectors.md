---
title: CSS Selector
---

# CSS Selector: เลือกส่วนของร้านให้ตรงเป้า

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 10 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะเลือก element ด้วย type selector และ class selector ตั้งชื่อ class ตามหน้าที่ของเนื้อหา และหาสาเหตุเมื่อ style ไปโดน element มากหรือน้อยเกินไป

![แผนภาพแสดงการเลือกเฉพาะส่วนของหน้าเว็บด้วย CSS selector](/images/workshop/css-selectors.webp)

## สถานะเริ่มต้น

`style.css` มี rule ของ `body` และเชื่อมกับ HTML สำเร็จแล้ว หน้า HTML มี `header`, `nav`, `main`, section เมนู และ `footer`

## เลือกให้กว้างหรือแคบ

Selector บอก Browser ว่า “ตกแต่ง element ไหน” ยิ่งกว้างยิ่งกระทบหลายจุด ยิ่งแคบยิ่งควบคุมได้ละเอียด

| Selector | ตัวอย่าง | สิ่งที่ถูกเลือก |
|---|---|---|
| Type | `h1` | `<h1>` ทุกตัว |
| Class | `.product-card` | element ที่มี `class="product-card"` |
| Descendant | `.site-nav a` | ลิงก์ทุกตัวที่อยู่ภายใน `.site-nav` |
| Pseudo-class | `.site-nav a:hover` | ลิงก์ขณะตัวชี้อยู่เหนือมัน |

ใน core เราใช้ **class เพื่อ styling** เพราะนำกลับมาใช้ซ้ำและเปลี่ยนโครงสร้างได้ง่ายกว่า ID ส่วน ID ยังมีประโยชน์กับปลายทางของลิงก์ เช่น `href="#menu"` คู่กับ `id="menu"`

ตั้งชื่อ class จาก**หน้าที่** เช่น `.price` หรือ `.site-nav` ไม่ใช่จากสีชั่วคราว เช่น `.brown-text` เพราะเมื่อเปลี่ยนสี ชื่อจะหลอกตัวเอง

<script setup>
const typeVsClass = {
  code: `/* type: กระทบ h2 ทุกตัว */
h2 { color: #5c3317; }

/* class: กระทบเฉพาะ .price */
.price { color: #216e39; font-weight: 700; }`,
  html: `<h2>เมนูแนะนำ</h2><p class="price">65 บาท</p><h2>เวลาเปิดร้าน</h2><p>08:00–17:00 น.</p>`,
  css: `body{font-family:system-ui,sans-serif;color:#2f241f}h2{color:#5c3317;margin:.5rem 0}.price{color:#216e39;font-weight:700;margin:0}`
}

const descendantExample = {
  code: `.site-nav a { color: #ffffff; }

/* ลิงก์นอก .site-nav ไม่ถูกกระทบ */`,
  html: `<nav class="site-nav"><a href="#menu">เมนูใน nav</a></nav><p><a href="#about">ลิงก์ในเนื้อหา</a></p>`,
  css: `body{font-family:system-ui,sans-serif;margin:0;background:#fffaf2}.site-nav{background:#5c3317;padding:1rem}.site-nav a{color:#fff;margin-right:1rem}p{padding:1rem}p a{color:#216e39}`
}

const shopExample = {
  code: `.site-header { background-color: #5c3317; }
.site-nav a { color: #ffffff; }
.price { color: #216e39; font-weight: 700; }`,
  html: `<header class="site-header"><nav class="site-nav" aria-label="เมนูหลัก"><a href="#menu">เมนูแนะนำ</a> <a href="#contact">ติดต่อเรา</a></nav></header><main><h1>กาแฟบ้านดอย</h1><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p class="price">65 บาท</p></article><p><a href="#story">อ่านเรื่องราวร้าน</a></p></main>`,
  css: `body{background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif;margin:0}.site-header{background:#5c3317;padding:16px}.site-nav a{color:#fff;margin-right:16px;text-decoration:none}main{padding:1rem}h1,h2{line-height:1.2;color:#5c3317}.price{color:#216e39;font-weight:700}main a{color:#216e39}`
}

const specificityExample = {
  code: `.price { color: green; }
.product-card .price { color: #8b4513; }
/* ตัวหลังเฉพาะเจาะจงกว่า จึงชนะ */`,
  html: `<article class="product-card"><p class="price">65 บาท</p></article>`,
  css: `.price{color:green;font-weight:700;font-size:1.2rem}.product-card .price{color:#8b4513}.product-card{padding:1rem;background:#fff;border:1px solid #d8c3ad;border-radius:.5rem}`
}
</script>

### ดูความต่างของ selector ก่อนลงมือ

<LivePreview v-bind="typeVsClass" height="180px" title="type vs class — h2 ทุกตัว vs เฉพาะ .price" />

<LivePreview v-bind="descendantExample" height="140px" title="descendant — .site-nav a ไม่กระทบลิงก์นอก nav" />

## ลงมือ

### 1. เพิ่ม class ให้ HTML

ปรับส่วนที่ตรงกันใน `index.html` โดยคง semantic elements เดิมไว้:

```html
<header class="site-header">
  <div class="header-inner">
    <h1 class="brand">กาแฟบ้านดอย</h1>
    <nav class="site-nav" aria-label="เมนูหลัก">
      <a href="#menu">เมนูแนะนำ</a>
      <a href="#hours">เวลาเปิดร้าน</a>
      <a href="#contact">ติดต่อเรา</a>
    </nav>
  </div>
</header>

<section id="menu" class="menu-section">
  <h2>เมนูแนะนำ</h2>
  <div class="product-list">
    <article class="product-card">
      <h3>อเมริกาโน่น้ำผึ้ง</h3>
      <p class="price">65 บาท</p>
    </article>
  </div>
</section>
```

หนึ่ง element มีได้หลาย class โดยคั่นด้วยช่องว่าง เช่น `class="product-card featured"` แต่ยังไม่จำเป็นต้องใช้ตอนนี้

### 2. เพิ่ม selector ใน `style.css`

```css
h1,
h2,
h3 {
  line-height: 1.2;
}

.site-header {
  background-color: #5c3317;
}

.site-nav a {
  color: #ffffff;
}

.price {
  color: #216e39;
  font-weight: 700;
}
```

<LivePreview v-bind="shopExample" height="260px" title="ผลรวม — header, nav และ .price ในหน้าร้าน" />

## ผลที่ควรเห็น

แถบหัวเว็บเป็นน้ำตาล ลิงก์ใน nav เป็นสีขาว แต่ลิงก์นอก nav ไม่ถูกเปลี่ยน และราคากลายเป็นสีเขียวเข้ม

## Cascade ที่พบในบทนี้

ถ้าเขียน `.price { color: green; }` แล้วตามด้วย `.product-card .price { color: brown; }` กฎหลังมี selector ที่เฉพาะเจาะจงกว่า จึงชนะ

ไม่ควรแก้ด้วย `!important` ทันที ให้ตรวจ selector และลำดับ rule ก่อน ([W3C Selectors Level 4](https://www.w3.org/TR/selectors-4/), [W3C Cascade](https://www.w3.org/TR/css-cascade-6/))

<LivePreview v-bind="specificityExample" height="100px" title="specificity — .product-card .price ชนะ .price" />

## จุดที่พลาดบ่อย

- CSS เขียน `.product-card` แต่ HTML ลืม `class="product-card"`
- ลืมจุดหน้า class: `price` จะหมายถึง element ชื่อ `<price>` ไม่ใช่ class
- ใช้ selector กว้างอย่าง `a` แล้วลิงก์ทุกส่วนเปลี่ยนโดยไม่ตั้งใจ
- ตั้งชื่อจากหน้าตา เช่น `.brown-text` ทำให้ชื่อผิดความหมายเมื่อเปลี่ยนสี

## Checkpoint

- [ ] การ์ดเมนูอย่างน้อย 2 ใบใช้ class `product-card` เดียวกัน
- [ ] `.site-nav a` เปลี่ยนเฉพาะลิงก์ใน nav
- [ ] `.price` ใช้ซ้ำกับราคาได้ทุกเมนู
- [ ] ไม่มี ID selector เช่น `#shop-name` ใน `style.css` ของ core

## ไปต่อ

เมื่อเลือกส่วนต่าง ๆ ได้แล้ว ไปที่ [Box Model](/css/box-model) เพื่อจัดระยะห่างและกล่องให้อ่านง่าย

## แหล่งอ้างอิงมาตรฐาน

- [W3C Selectors Level 4](https://www.w3.org/TR/selectors-4/)
- [W3C CSS Cascading and Inheritance](https://www.w3.org/TR/css-cascade-6/)
