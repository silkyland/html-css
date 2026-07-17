---
title: Responsive Design
---

# Responsive Design: ร้านเดียว ใช้ได้หลายขนาดหน้าจอ

> **CORE · 10 นาที** — ปิดเส้นทาง `style.css` โดยทำให้หน้าเดิมยืดหยุ่นก่อน แล้วใช้ media query เฉพาะจุดที่เนื้อหาเริ่มอึดอัด

## เป้าหมายการเรียนรู้

- แยก responsive design ออกจากการทำ “เว็บมือถืออีกหน้า”
- ใช้ flexible container, image rule และ `clamp()`
- เขียน media query จากปัญหาของเนื้อหา
- ตรวจหน้าเว็บที่ 320px, 768px และ 1280px อย่างเป็นระบบ

## สถานะเริ่มต้น

หน้าเว็บมี container ที่ยืดหยุ่นและการ์ด Flexbox แล้ว งานที่เหลือคือป้องกันสื่อขนาดใหญ่ ปรับพื้นที่บนจอแคบ และทดสอบว่าทุกส่วนใช้งานได้จริง

<img src="/images/workshop/responsive-devices.webp" alt="หน้าเว็บร้านกาแฟเดียวกันบนโทรศัพท์ แท็บเล็ต และเดสก์ท็อป" loading="lazy">

## หลัก “fluid ก่อน breakpoint”

โค้ดจากบทก่อนรองรับหลายขนาดอยู่แล้ว:

```css
main {
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
}

.product-card {
  flex: 1 1 15rem;
}
```

- container กว้างตามจอแต่ไม่เกิน `60rem`
- heading ยืดหยุ่นระหว่างค่าต่ำสุดและสูงสุด
- cards หด ขยาย และ wrap ตามพื้นที่

จึงไม่ต้องสร้าง breakpoint สำหรับชื่ออุปกรณ์ทุกรุ่น

## ลงมือทำ 1: สื่อไม่ล้นกล่อง

เพิ่ม rule นี้ใน `style.css`:

```css
img,
svg,
video {
  display: block;
  max-width: 100%;
  height: auto;
}
```

`max-width: 100%` จำกัดความกว้างไม่ให้เกิน containing block ส่วน `height: auto` รักษาสัดส่วนภาพตาม intrinsic dimensions ที่มีอยู่ ([W3C CSS Images Level 3](https://www.w3.org/TR/css-images-3/), [W3C CSS Sizing Level 3](https://www.w3.org/TR/css-sizing-3/))

## ลงมือทำ 2: media query เมื่อเนื้อหาต้องเปลี่ยน

สมมติ header มี `.brand` และ nav อยู่ข้างกันบนจอกว้าง:

```css
.header-inner {
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
}

@media (min-width: 48rem) {
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .site-nav {
    justify-content: flex-end;
  }
}
```

media query นี้ใช้ **progressive enhancement**: จอแคบใช้ flow ธรรมชาติและ nav wrap ได้ เมื่อพื้นที่อย่างน้อย `48rem` จึงวาง brand กับ nav ข้างกัน Media Queries เป็นกลไกใช้เงื่อนไขของ user agent หรืออุปกรณ์กับ style rules ([W3C Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/))

<script setup>
const example = {
  html: `<header><div class="header-inner"><p class="brand">กาแฟบ้านดอย</p><nav class="site-nav"><a href="#menu">เมนูแนะนำ</a><a href="#hours">เวลาเปิดร้าน</a><a href="#contact">ติดต่อเรา</a></nav></div></header><main><h1>กาแฟจากเกษตรกรในชุมชน</h1><section class="product-list"><article class="product-card">อเมริกาโน่น้ำผึ้ง 65 บาท</article><article class="product-card">ลาเต้นมสด 70 บาท</article><article class="product-card">ชาดอกกาแฟ 55 บาท</article></section></main>`,
  css: `*{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f;font:1rem/1.6 system-ui,sans-serif}header{background:#5c3317;color:#fff}.header-inner,main{width:min(100% - 2rem,60rem);margin-inline:auto}.brand{margin:0;padding-top:1rem;font-weight:700}.site-nav{display:flex;flex-wrap:wrap;gap:.5rem 1rem;padding-block:1rem}.site-nav a{color:#fff}h1{font-size:clamp(2rem,5vw,3.5rem);line-height:1.2}.product-list{display:flex;flex-wrap:wrap;gap:1rem}.product-card{flex:1 1 15rem;padding:1.25rem;background:#fff;border:1px solid #d8c3ad;border-radius:.75rem}@media(min-width:48rem){.header-inner{display:flex;align-items:center;justify-content:space-between;gap:2rem}.brand{padding:0}.site-nav{justify-content:flex-end}}`
}
</script>

<LivePreview v-bind="example" height="360px" />

## ผลที่ควรเห็น

หน้าเดียวกันใช้ได้ตั้งแต่จอแคบถึงจอกว้าง: nav และ cards จัดบรรทัดตามพื้นที่ สื่อไม่ล้น และเมื่อจอกว้าง header จึงเปลี่ยนเป็นแนวนอน

## ทดสอบ 3 ความกว้าง

เปิด DevTools → Toggle device toolbar แล้วกรอกความกว้างทีละค่า โดยไม่จำเป็นต้องเลือกชื่อโทรศัพท์

| ความกว้าง | สิ่งที่ตรวจ |
|---|---|
| `320px` | ไม่มี horizontal scroll, nav wrap, ข้อความไม่ถูกตัด, แตะ/Tab ถึงลิงก์ได้ |
| `768px` | header เปลี่ยน layout ตาม breakpoint, การ์ดใช้พื้นที่สมดุล |
| `1280px` | เนื้อหาไม่ยืดยาวเต็มจอ, container อยู่กึ่งกลาง, บรรทัดอ่านไม่ยาวเกินไป |

ที่ทุกความกว้างให้ทดสอบซูม 200%, กด Tab ดู focus และตรวจว่าภาพไม่บิด

## จุดที่พลาดบ่อย

- ใช้ `width: 1200px` กับ container ทำให้จอเล็กล้น
- ตั้ง breakpoint ตามรุ่นโทรศัพท์แทนจุดที่เนื้อหาเริ่มเสียรูป
- ใส่ `height` คงที่ให้ภาพพร้อม `width: 100%` ทำให้สัดส่วนบิด
- ซ่อนเนื้อหาสำคัญบนมือถือเพื่อให้ “พอดี” แทนการจัด layout ใหม่
- ทดสอบเฉพาะ device preset เดียวแล้วคิดว่าครบ

## Checkpoint สุดท้ายของ CSS

- [ ] 320px: ไม่มี horizontal scrollbar
- [ ] 768px: header และ cards ปรับตามพื้นที่โดยไม่ทับกัน
- [ ] 1280px: main ไม่กว้างเกิน `60rem` และอยู่กึ่งกลาง
- [ ] ทุกขนาด: รูปไม่ล้นหรือบิด, focus indicator เห็นชัด, contrast ยังอ่านได้
- [ ] `style.css` ไฟล์เดียวมีโค้ดต่อเนื่องจากทั้ง 6 บท และไม่มี rule ทดลองที่ลืมลบ

หากเกิด overflow ให้ใช้ DevTools เลือก element ที่ยื่นออกนอก viewport ตรวจ fixed width, margin และข้อความยาวก่อนเพิ่ม `overflow-x: hidden` เพราะการซ่อนเพียงอย่างเดียวไม่แก้ต้นเหตุ

## แหล่งอ้างอิงมาตรฐาน

- [W3C Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/)
- [W3C CSS Sizing Level 3](https://www.w3.org/TR/css-sizing-3/)
- [W3C CSS Images Level 3](https://www.w3.org/TR/css-images-3/)
