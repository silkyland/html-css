---
title: Box Model
---

# Box Model: ทำให้เมนูอ่านง่ายและไม่ล้น

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 20 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะแยก `content`, `padding`, `border` และ `margin` อธิบายผลของ `box-sizing: border-box` และเลือกใช้หน่วย `px`, `%`, `rem`, `em`, `ch`, `vw` ได้ตามงานที่เหมาะ

## สถานะเริ่มต้น

การ์ดมี class และสีแล้ว แต่ข้อความชิดขอบ การ์ดไม่แยกจากกัน และขนาดอาจคำนวณยาก

## กล่อง 4 ชั้น

ทุก element บนหน้าเว็บถูกมองเป็นกล่อง จากด้านในออกด้านนอก ได้แก่ **content → padding → border → margin**

- **content** — ข้อความหรือสื่อภายใน
- **padding** — ช่องว่างด้านในระหว่างเนื้อหากับขอบ
- **border** — เส้นขอบ
- **margin** — ช่องว่างด้านนอกระหว่างกล่องกับกล่องอื่น

พื้นหลังของ element วาดใต้ content และ padding ส่วน margin เป็นช่องว่างนอกขอบ ([W3C CSS Box Model Level 3](https://www.w3.org/TR/css-box-3/))

![แบบจำลองกล่อง CSS แสดงชั้น content padding border และ margin จากในออกนอก](/images/workshop/box-model.svg)

<img src="/images/workshop/css-before-after.webp" alt="เปรียบเทียบหน้าเว็บร้านกาแฟก่อนตกแต่งกับหลังใช้สี ระยะห่าง และการจัดวางด้วย CSS" loading="lazy">

> เปิด DevTools → Elements → Computed เพื่อดูแผนภาพ Box Model ที่คำนวณจากการ์ดจริงด้วย

<script setup>
const paddingVsMargin = {
  code: `.pad {
  padding: 1.25rem; /* ช่องว่างด้านใน */
  background: #ffffff;
  border: 1px solid #d8c3ad;
}

.space + .space {
  margin-top: 1rem; /* ช่องว่างด้านนอกระหว่างกล่อง */
}`,
  html: `<article class="pad space"><strong>การ์ด 1</strong> — มี padding ด้านใน</article><article class="pad space"><strong>การ์ด 2</strong> — ห่างจากการ์ดบนด้วย margin</article>`,
  css: `body{margin:0;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}.pad{padding:1.25rem;background:#fff;border:1px solid #d8c3ad;border-radius:.75rem}.space+.space{margin-top:1rem}`
}

const borderBoxExample = {
  code: `.box {
  width: 100%;
  padding: 1rem;
  border: 4px solid #5c3317;
  box-sizing: border-box; /* width รวม padding + border */
}`,
  html: `<div class="frame"><div class="box">กล่องกว้าง 100% ของกรอบนี้ โดยไม่ล้น เพราะใช้ border-box</div></div>`,
  css: `.frame{background:#f0e0d0;padding:.5rem;border-radius:.5rem}.box{width:100%;padding:1rem;border:4px solid #5c3317;box-sizing:border-box;background:#fff;color:#2f241f;font-family:system-ui,sans-serif}`
}

const example = {
  code: `.product-card {
  padding: 1.25rem;
  border: 1px solid #d8c3ad;
  border-radius: 0.75rem;
  background-color: #ffffff;
}

.product-card + .product-card {
  margin-top: 1rem;
}`,
  html: `<main><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p>กาแฟชุมชนกับน้ำผึ้งป่า</p><p class="price">65 บาท</p></article><article class="product-card"><h2>ลาเต้นมสด</h2><p>นมสดโฟมเนียน</p><p class="price">70 บาท</p></article></main>`,
  css: `*,*::before,*::after{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f;font-family:system-ui,sans-serif}main{width:min(100% - 2rem,60rem);margin-inline:auto;padding-block:2rem}.product-card{padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff}.product-card+.product-card{margin-top:1rem}.product-card h2{margin:0 0 .35rem;color:#5c3317;font-size:1.1rem}.price{color:#216e39;font-weight:700;margin:0}p{max-width:65ch}`
}

const pxExample = {
  code: `.card {
  border: 1px solid #d8c3ad;
  outline: 3px solid #ffbf47;
}`,
  html: `<article class="card">เส้นขอบ 1px และกรอบโฟกัสตัวอย่าง 3px — ค่าคงที่ ไม่ยืดตามตัวอักษร</article>`,
  css: `body{margin:0;background:#fffaf2;font-family:system-ui,sans-serif;color:#2f241f}.card{padding:1rem;background:#fff;border:1px solid #d8c3ad;border-radius:.5rem;outline:3px solid #ffbf47;outline-offset:4px}`
}

const percentExample = {
  code: `.outer { width: 100%; }
.inner { width: 50%; } /* ครึ่งหนึ่งของ parent */`,
  html: `<div class="outer"><div class="inner">กว้าง 50% ของกล่องนอก</div></div>`,
  css: `body{margin:0;font-family:system-ui,sans-serif}.outer{width:100%;background:#f0e0d0;padding:.5rem;border-radius:.5rem}.inner{width:50%;padding:.75rem;background:#5c3317;color:#fff;border-radius:.4rem;font-weight:600}`
}

const remExample = {
  code: `html { font-size: 16px; } /* ค่าเริ่มต้นทั่วไป */

.box {
  padding: 1rem;      /* ≈ 16px */
  font-size: 1.25rem; /* ≈ 20px */
}`,
  html: `<div class="box"><strong>1rem</strong> อ้างอิงขนาดตัวอักษรของ &lt;html&gt; ไม่ใช่ของ parent โดยตรง</div>`,
  css: `html{font-size:16px}body{margin:0;background:#fffaf2;font-family:system-ui,sans-serif;color:#2f241f}.box{padding:1rem;font-size:1.25rem;background:#fff;border:1px solid #d8c3ad;border-radius:.5rem}`
}

const emExample = {
  code: `.card { font-size: 20px; }
.card .note {
  padding: 0.5em; /* 0.5 × 20px = 10px */
  font-size: 0.8em; /* 0.8 × 20px = 16px */
}`,
  html: `<article class="card">ข้อความการ์ด 20px<span class="note">padding และตัวอักษรของ note คำนวณจาก font-size ของการ์ด (em)</span></article>`,
  css: `body{margin:0;background:#fffaf2;font-family:system-ui,sans-serif;color:#2f241f}.card{font-size:20px;padding:1rem;background:#fff;border:1px solid #d8c3ad;border-radius:.5rem;display:grid;gap:.5rem}.note{display:block;padding:.5em;font-size:.8em;background:#f0e0d0;border-radius:.35rem}`
}

const chExample = {
  code: `p.narrow { max-width: 20ch; }
p.wide { max-width: 45ch; }`,
  html: `<p class="narrow"><strong>20ch</strong> — บรรทัดสั้น อ่านเป็นกลุ่มคำ</p><p class="wide"><strong>45ch</strong> — กว้างขึ้น อ่านสบายขึ้นสำหรับย่อหน้า</p>`,
  css: `body{margin:0;background:#fffaf2;font-family:system-ui,sans-serif;color:#2f241f;display:grid;gap:1rem}p{margin:0;padding:.75rem;background:#fff;border:1px solid #d8c3ad;border-radius:.5rem;line-height:1.5}.narrow{max-width:20ch}.wide{max-width:45ch}`
}

const vwExample = {
  code: `h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
}`,
  html: `<h1>หัวเรื่องยืดตามความกว้างจอ</h1><p>ย่อความกว้างผลลัพธ์ — ตัวอักษรจะเล็กลง แต่ไม่ต่ำกว่า 1.5rem และไม่เกิน 2.5rem</p>`,
  css: `body{margin:0;background:#fffaf2;font-family:system-ui,sans-serif;color:#2f241f;padding:1rem}h1{margin:0 0 .5rem;font-size:clamp(1.5rem,5vw,2.5rem);color:#5c3317;line-height:1.2}p{margin:0;color:#6b4f3a}`
}
</script>

### แยก padding กับ margin ให้เห็นภาพ

<LivePreview v-bind="paddingVsMargin" height="200px" title="padding ด้านในกล่อง · margin ระหว่างกล่อง" />

<LivePreview v-bind="borderBoxExample" height="120px" title="box-sizing: border-box — width ไม่ล้นกรอบ" />

## ลงมือ

### ปรับกล่องทั้งหน้า

เพิ่มโค้ดนี้ต่อท้าย `style.css`:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

main {
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
  padding-block: 2rem;
}

.product-card {
  padding: 1.25rem;
  border: 1px solid #d8c3ad;
  border-radius: 0.75rem;
  background-color: #ffffff;
}

.product-card + .product-card {
  margin-top: 1rem;
}

p {
  max-width: 65ch;
}
```

`border-box` ทำให้ `width` รวม content, padding และ border จึงคาดเดาขนาดได้ง่ายขึ้น ส่วน margin ยังอยู่นอก width

`.product-card + .product-card` หมายถึงการ์ดที่อยู่ถัดจากการ์ดอื่น — ใช้สร้างระยะระหว่างการ์ดโดยไม่ใส่ margin ให้ใบแรกโดยไม่จำเป็น

<LivePreview v-bind="example" height="320px" title="style.css — การ์ดเมนูหลังใส่ padding, border, margin" />

## เลือกหน่วยแบบมีเหตุผล

อย่าจำว่า “หน่วยหนึ่งดีที่สุดทุกกรณี” ให้เลือกตามสิ่งที่ต้องสัมพันธ์กัน ([W3C CSS Values and Units Level 4](https://www.w3.org/TR/css-values-4/))

### ภาพรวมหน่วยที่ใช้บ่อยในหลักสูตร

| หน่วย | อ้างอิงอะไร | เหมาะกับ | ตัวอย่างในร้านกาแฟ |
|---|---|---|---|
| `px` | พิกเซล CSS (ค่าคงที่โดยประมาณ) | เส้นขอบ กรอบโฟกัสบาง ๆ | `border: 1px` |
| `%` | ขนาดของ parent / containing block | ความกว้างที่อยากเป็นสัดส่วน | `width: 100%` |
| `rem` | `font-size` ของ `<html>` (รากเอกสาร) | ระยะห่าง ขนาดตัวอักษรทั้งหน้า | `padding: 1.25rem` |
| `em` | `font-size` ของ element นั้นเอง (หรือ parent เมื่อตั้ง font-size) | ระยะที่ควรโตตามตัวอักษรของกล่องนั้น | `padding: 0.5em` |
| `ch` | ความกว้างโดยประมาณของตัวอักษร `0` | จำกัดความยาวบรรทัด | `max-width: 65ch` |
| `vw` / `vh` | 1% ของความกว้าง / สูงของ viewport | หัวเรื่องที่ยืดตามจอ | `clamp(..., 5vw, ...)` |
| `fr` | ส่วนแบ่งพื้นที่ใน Grid | คอลัมน์ที่ยืดหยุ่น (บท Grid) | `1fr` |

### `px` — ค่าคงที่ เหมาะกับเส้นบาง

ใช้เมื่อต้องการความหนาที่คงที่ เช่น เส้นขอบหรือ outline ไม่ควรใช้ `px` เป็นหลักสำหรับขนาดตัวอักษรทั้งหน้า เพราะผู้ใช้บางคนขยายตัวอักษรใน Browser

<LivePreview v-bind="pxExample" height="120px" title="px — border 1px และ outline 3px" />

### `%` — สัดส่วนเทียบกับกล่องแม่

`width: 50%` หมายถึงครึ่งหนึ่งของความกว้าง **parent** ไม่ใช่ครึ่งหนึ่งของจอเสมอไป ถ้า parent แคบ ลูกที่เป็น 50% ก็แคบตาม

<LivePreview v-bind="percentExample" height="100px" title="% — กล่องในกว้าง 50% ของกล่องนอก" />

### `rem` — สัมพันธ์กับตัวอักษรรากของหน้า

`1rem` โดยทั่วไป ≈ `16px` (ถ้ายังไม่ได้เปลี่ยน `font-size` ของ `html`) ข้อดีคือเมื่อผู้ใช้ขยายตัวอักษรทั้งหน้า ระยะที่เขียนด้วย `rem` จะขยายตาม ทำให้ layout ไม่แน่นเกินไป

ในหลักสูตรนี้เราใช้ `rem` กับ padding, margin, gap และ breakpoint เช่น `48rem`

<LivePreview v-bind="remExample" height="120px" title="rem — อ้างอิง font-size ของ html" />

### `em` — สัมพันธ์กับตัวอักษรของกล่องนั้น

ต่างจาก `rem`: `em` คำนวณจาก `font-size` ของ element ปัจจุบัน (หรือของ parent เมื่อใช้ตั้ง `font-size` ให้ตัวเอง) จึง “ติดตาม” ขนาดตัวอักษรของกล่องนั้นได้ดี แต่ถ้าซ้อนหลายชั้นอาจคำนวณยาก — ผู้เริ่มต้นในหลักสูตรนี้ใช้ `rem` เป็นหลักก่อน

<LivePreview v-bind="emExample" height="160px" title="em — padding ของ note คำนวณจาก font-size ของการ์ด" />

### `ch` — นับความกว้างเป็น “ตัวอักษร”

`1ch` ≈ ความกว้างของตัวอักษร `0` ในฟอนต์ปัจจุบัน ใช้จำกัดความยาวบรรทัดให้อ่านสบาย โดยไม่ผูกกับความกว้างจอโดยตรง ในบทเรียนใช้ `max-width: 65ch` กับย่อหน้า

<LivePreview v-bind="chExample" height="200px" title="ch — เปรียบเทียบ max-width 20ch กับ 45ch" />

### `vw` / `vh` — สัมพันธ์กับ viewport

- `1vw` = 1% ของความกว้าง viewport
- `1vh` = 1% ของความสูง viewport

มักใช้คู่กับ `clamp()` เพื่อให้หัวเรื่องยืดได้แต่มีขอบเขต เช่น `clamp(2rem, 5vw, 3.5rem)` ในบทสีและ Responsive

<LivePreview v-bind="vwExample" height="140px" title="vw ใน clamp — ย่อความกว้างผลลัพธ์ดูตัวอักษรปรับขนาด" />

### หน่วยอื่นที่เจอในบทถัดไป

| หน่วย / ค่า | จะเจอที่ | ความหมายสั้น ๆ |
|---|---|---|
| `fr` | [CSS Grid](/css/grid) | ส่วนแบ่งพื้นที่ที่เหลือในแทร็ก Grid |
| `min()` / `max()` / `clamp()` | Box Model, สี, Responsive | คำนวณค่าจากหลายตัวเลือก เช่น `min(100% - 2rem, 60rem)` |
| `auto` | margin, width | ให้ Browser คำนวณให้ เช่น `margin-inline: auto` จัดกึ่งกลาง |

::: tip สูตรจำเร็วสำหรับร้านกาแฟ
- เส้นบาง → `px`
- ระยะห่างทั้งหน้า → `rem`
- ความกว้างกล่องตามแม่ → `%`
- ความยาวข้อความ → `ch`
- หัวเรื่องยืดตามจอ → `vw` ใน `clamp()`
:::

## ผลที่ควรเห็น

เนื้อหาไม่ติดขอบจอ การ์ดมีพื้นที่หายใจ เส้นขอบ และมุมโค้ง โดยไม่เกิดแถบเลื่อนแนวนอน และเลือกหน่วยได้ตามหน้าที่ของแต่ละค่า

## จุดที่พลาดบ่อย

- กำหนด `width: 100%` พร้อม padding แล้วล้น เพราะยังใช้ `content-box`
- ใช้ margin เพื่อดันเนื้อหาภายใน ทั้งที่ควรใช้ padding
- ใส่ `height` ตายตัวแล้วข้อความล้นเมื่อผู้ใช้ขยายตัวอักษร — ใช้ `min-height` หรือปล่อยให้เนื้อหากำหนดความสูง
- ลืมหน่วย เช่น `padding: 16` ซึ่งไม่ใช่ค่าความยาวที่ใช้ได้ (ยกเว้นศูนย์)
- สับสน `rem` กับ `em` — `rem` อ้างอิงรากหน้า, `em` อ้างอิงกล่องนั้น
- ใช้ `%` คิดว่าเทียบจอเสมอ ทั้งที่จริงเทียบ parent

## Checkpoint

- [ ] DevTools แสดง `box-sizing: border-box` บน `.product-card`
- [ ] การ์ดมี padding อยู่ด้านในและระยะระหว่างการ์ดอยู่ด้านนอก
- [ ] ย่อหน้าต่างเหลือประมาณ 320px แล้วไม่มี horizontal scrollbar
- [ ] ลองซูม 200% ข้อความยังอยู่ในกล่องและอ่านได้
- [ ] อธิบายได้ว่า `px`, `%`, `rem`, `ch` เหมาะกับงานแบบใดอย่างน้อยหนึ่งอย่างต่อหน่วย

## ไปต่อ

เมื่อกล่องอ่านง่ายแล้ว ไปที่ [สีและตัวอักษร](/css/colors-fonts) เพื่อรวมชุดสีร้านและสถานะโฟกัส — จะได้ใช้ `rem` กับ `clamp(... vw ...)` ต่อ

## แหล่งอ้างอิงมาตรฐาน

- [W3C CSS Box Model Level 3](https://www.w3.org/TR/css-box-3/)
- [W3C CSS Values and Units Level 4](https://www.w3.org/TR/css-values-4/)
