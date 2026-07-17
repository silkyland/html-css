---
title: CSS Grid (บทเสริม)
---

# CSS Grid: บทเสริมสำหรับ Layout สองมิติ

> **ENRICHMENT · 25 นาที · ไม่อยู่ในเกณฑ์ผ่าน core** — เรียนบทนี้เมื่อทำ Responsive checkpoint เสร็จแล้ว โปรเจกต์หลักใช้ Flexbox ต่อได้โดยไม่ต้องเปลี่ยนเป็น Grid

## เป้าหมายการเรียนรู้

- เลือกได้ว่างานใดเหมาะกับ Grid หรืองานใดเหมาะกับ Flexbox
- สร้างคอลัมน์แบบ responsive ด้วย `repeat()`, `minmax()` และ `auto-fit`
- ใช้ Grid กับรายการเมนูเดิมโดยไม่เปลี่ยน semantic HTML

## Flexbox หรือ Grid?

| คำถาม | เลือก Flexbox | เลือก Grid |
|---|---|---|
| สนใจการเรียงหลัก ๆ กี่แกน | หนึ่งแกน: แถว **หรือ** คอลัมน์ | สองแกน: แถว **และ** คอลัมน์ |
| ต้องการให้ items กำหนดขนาดตามเนื้อหา | มักเหมาะ | ทำได้ แต่ไม่ใช่เหตุผลหลัก |
| ต้องการให้ขอบการ์ดแต่ละแถวตรงแนวคอลัมน์ | ไม่ใช่จุดเด่น | เหมาะ |
| ตัวอย่างร้าน | nav, กลุ่มปุ่ม | ตารางเมนู/แกลเลอรี |

ทั้งสองไม่ได้เป็นคู่แข่งและใช้ซ้อนกันได้ เช่น Grid จัดการ์ดทั้งชุด ส่วน Flexbox จัดราคาและปุ่มภายในแต่ละการ์ด ข้อกำหนด Grid นิยามระบบ layout สองมิติสำหรับ rows และ columns ([W3C CSS Grid Layout Level 2](https://www.w3.org/TR/css-grid-2/))

## สถานะเริ่มต้น

`.product-list` จากบท Flexbox มี cards อย่างน้อย 3 ใบและทำงาน responsive แล้ว ให้เก็บโค้ดเดิมไว้ใน Git ก่อนทดลอง เพื่อเปรียบเทียบหรือย้อนกลับได้

## ลงมือทำ: เปลี่ยนเฉพาะ container

แทน rule `.product-list` เดิมด้วย:

```css
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 1rem;
}
```

และลบ `flex: 1 1 15rem` จาก `.product-card` เพราะไม่มีผลในฐานะ grid item แบบเดียวกับตอนเป็น flex item

อ่านจากด้านในออกด้านนอก:

- `min(100%, 15rem)` ไม่ให้ minimum track กว้างกว่า container แคบมาก
- `minmax(..., 1fr)` ให้แต่ละคอลัมน์มีขั้นต่ำและแบ่งพื้นที่ที่เหลือ
- `auto-fit` สร้างจำนวน tracks เท่าที่พื้นที่รองรับและยุบ tracks ว่าง
- `repeat()` ลดการเขียนค่าซ้ำ

<script setup>
const example = {
  html: `<section class="product-list"><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p>65 บาท</p></article><article class="product-card"><h2>ลาเต้นมสด</h2><p>70 บาท</p></article><article class="product-card"><h2>ชาดอกกาแฟ</h2><p>55 บาท</p></article><article class="product-card"><h2>กาแฟส้ม</h2><p>75 บาท</p></article></section>`,
  css: `*{box-sizing:border-box}body{margin:0;padding:1rem;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}.product-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr));gap:1rem}.product-card{padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff}`
}
</script>

<LivePreview v-bind="example" height="340px" />

## แบบฝึกหัดเสริม: เมนูเด่นกินสองคอลัมน์

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

นี่แสดงจุดเด่นของ Grid: item หนึ่งกินหลาย tracks ได้ ระวังอย่าสั่ง `span 2` บนจอที่มีพื้นที่เพียงคอลัมน์เดียวโดยไม่มีเงื่อนไข

## จุดที่พลาดบ่อย

- ใส่ `display: grid` ที่การ์ดแทน `.product-list`
- ใช้ `repeat(3, 1fr)` แล้วบังคับสามคอลัมน์แม้จอแคบ
- คง flex-only properties ไว้แล้วคาดว่าจะควบคุม grid item เหมือนเดิม
- ใช้ Grid เปลี่ยน visual order จนไม่ตรงกับ DOM และลำดับ keyboard
- เริ่มจาก `grid-template-areas` ซับซ้อนทั้งหน้า ทั้งที่รายการการ์ดต้องการเพียง columns กับ gap

## Checkpoint บทเสริม

- [ ] ที่ 320px การ์ดเป็นหนึ่งคอลัมน์และไม่ล้น
- [ ] เมื่อขยาย viewport จำนวนคอลัมน์เพิ่มเองโดยไม่เพิ่ม media query หลายจุด
- [ ] การ์ดเด่นกินสองคอลัมน์เฉพาะเมื่อกว้างอย่างน้อย `40rem`
- [ ] ลำดับอ่านและลำดับ Tab ยังตรงกับ HTML
- [ ] อธิบายได้ว่าทำไมรายการนี้เลือก Grid แต่ nav ยังเลือก Flexbox

## ทดลองเปรียบเทียบ

สลับระหว่าง commit Flexbox กับ Grid แล้วตอบสั้น ๆ: สำหรับร้านของคุณ alignment แบบคอลัมน์เพิ่มคุณค่าให้เนื้อหาหรือไม่? ถ้าไม่ การเก็บ Flexbox ที่เรียบง่ายกว่าคือคำตอบที่ถูกต้องได้

## แหล่งอ้างอิงมาตรฐาน

- [W3C CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid-2/)
- [W3C CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
