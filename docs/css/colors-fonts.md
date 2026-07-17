---
title: สี ตัวอักษร และสถานะโฟกัส
---

# สี ตัวอักษร และสถานะโฟกัสที่อ่านได้

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 15 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะกำหนด font stack และระยะบรรทัดที่อ่านง่าย ใช้ custom properties เก็บชุดสีร้าน ตรวจ contrast พื้นฐาน และสร้าง `:focus-visible` ที่เห็นชัด

![ตัวอย่างกรอบโฟกัสที่มองเห็นได้ชัดและคู่สีที่มี contrast เพียงพอ](/images/workshop/css-colors-focus.webp)

## สถานะเริ่มต้น

หน้าเว็บมีโครงกล่องแล้ว แต่รูปแบบตัวอักษรและสีบาง rule กระจายหลายจุด และลิงก์ยังไม่มีสถานะโฟกัสที่ออกแบบไว้

## ทำไมต้องรวมสีไว้ที่เดียว

ถ้าสีน้ำตาลของร้านเขียนซ้ำหลายจุด เมื่อเปลี่ยนแบรนด์ต้องไล่แก้หลายบรรทัด **custom properties** (ตัวแปร CSS) ช่วยให้ประกาศค่าที่ `:root` แล้วเรียกใช้ด้วย `var(--ชื่อ)` ได้ทั่วไฟล์

ต้องการไอเดียชุดสีเพิ่ม? เปิด [Tools → Color Palette](/tools/color-palette) เลือกชุดที่ชอบแล้วคัดลอกบล็อก `:root` มาวางได้เลย

## ลงมือ

### 1. รวมสีและ typography

วาง custom properties ไว้ต้น `style.css` แล้วปรับ rule เดิมให้ใช้ตัวแปร:

```css
:root {
  --color-paper: #fffaf2;
  --color-surface: #ffffff;
  --color-ink: #2f241f;
  --color-brand: #5c3317;
  --color-accent: #216e39;
  --color-focus: #ffbf47;
}

body {
  background-color: var(--color-paper);
  color: var(--color-ink);
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

h1,
h2,
h3 {
  color: var(--color-brand);
  line-height: 1.2;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
}

.site-header {
  background-color: var(--color-brand);
}

.site-header .brand,
.site-header p,
.site-header a {
  color: #ffffff;
}

.price {
  color: var(--color-accent);
  font-weight: 700;
}
```

`system-ui` ใช้แบบอักษรของระบบผู้ใช้ จึงไม่ต้องดาวน์โหลดฟอนต์เพิ่ม ส่วน `clamp(ค่าต่ำสุด, ค่ายืดหยุ่น, ค่าสูงสุด)` ทำให้หัวเรื่องโตตามพื้นที่แต่ไม่เล็กหรือใหญ่เกินขอบเขต

### 2. สีต้องมี contrast ไม่ใช่แค่ “ดูสวย”

W3C WAI อธิบายเกณฑ์ WCAG ว่าข้อความทั่วไปควรมี contrast ratio อย่างน้อย **4.5:1** และข้อความขนาดใหญ่ **3:1** ([W3C WAI Understanding SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html))

คู่สีในตัวอย่างใช้ตัวอักษรเข้มบนพื้นอ่อน แต่ต้องตรวจด้วยเครื่องมือ ไม่ตัดสินจากสายตาอย่างเดียว ใช้ DevTools หรือ [WAI Contrast Checker](https://www.w3.org/WAI/test-evaluate/tools/list/) ตรวจอย่างน้อย 3 คู่:

- `--color-ink` บน `--color-paper`
- สีขาวบน `--color-brand`
- `--color-accent` บน `--color-surface`

### 3. Focus ที่มองเห็น

```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}
```

`:focus-visible` ให้ Browser แสดง indicator เมื่อบริบทต้องการ เช่น การใช้คีย์บอร์ด ([W3C Selectors Level 4](https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo)) อย่าเขียน `outline: none` โดยไม่มีสิ่งทดแทนที่เห็นได้ชัด

<script setup>
const tokensExample = {
  code: `:root {
  --color-paper: #fffaf2;
  --color-ink: #2f241f;
  --color-brand: #5c3317;
  --color-accent: #216e39;
}

body {
  background-color: var(--color-paper);
  color: var(--color-ink);
}

.price { color: var(--color-accent); }`,
  html: `<p>ข้อความหลักบนพื้น paper</p><p class="price">65 บาท</p><p class="brand-sample">สีแบรนด์</p>`,
  css: `:root{--color-paper:#fffaf2;--color-ink:#2f241f;--color-brand:#5c3317;--color-accent:#216e39}body{margin:0;background:var(--color-paper);color:var(--color-ink);font-family:system-ui,sans-serif;line-height:1.6}.price{color:var(--color-accent);font-weight:700;font-size:1.2rem}.brand-sample{color:var(--color-brand);font-weight:700}`
}

const example = {
  code: `a:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}`,
  html: `<header class="site-header"><h1 class="brand">กาแฟบ้านดอย</h1><p>กาแฟจากเกษตรกรในชุมชน คั่วสดทุกสัปดาห์</p><a href="#menu">ข้ามไปเมนู</a></header><main id="menu"><h2>เมนูแนะนำ</h2><p>เลือกเมล็ดกาแฟจากชุมชน</p><a href="#contact">ติดต่อร้าน</a></main>`,
  css: `:root{--paper:#fffaf2;--ink:#2f241f;--brand:#5c3317;--focus:#ffbf47}body{margin:0;background:var(--paper);color:var(--ink);font-family:system-ui,sans-serif;line-height:1.6}.site-header{padding:1rem;background:var(--brand)}h1,h2{color:var(--brand);line-height:1.2}.site-header .brand,.site-header p,.site-header a{color:#fff}.brand{font-size:clamp(2rem,5vw,3.5rem);margin:0}main{padding:1rem}a:focus-visible{outline:3px solid var(--focus);outline-offset:3px}`
}
</script>

<LivePreview v-bind="tokensExample" height="140px" title="custom properties — เปลี่ยนค่าที่ :root แล้วสีทั้งหน้าตาม" />

<LivePreview v-bind="example" height="260px" title="typography + :focus-visible — กด Tab ในผลลัพธ์เพื่อเห็นกรอบโฟกัส" />

## ผลที่ควรเห็น

สีและตัวอักษรของร้านสม่ำเสมอ หัวเรื่องปรับขนาดโดยไม่ใหญ่เกินขอบเขต และเมื่อกด `Tab` จะเห็นกรอบสีเหลืองรอบลิงก์ที่กำลังโฟกัส

## จุดที่พลาดบ่อย

- ใช้สีเทาอ่อนบนพื้นขาวจนอ่านยาก
- ใช้สีอย่างเดียวบอกสถานะ เช่น error เป็นสีแดงแต่ไม่มีข้อความหรือไอคอน
- กำหนดขนาดข้อความหลักเป็น `12px` เพื่อให้ “พอดี”
- ลบ outline เพราะคิดว่าไม่สวย ทำให้ผู้ใช้คีย์บอร์ดหลงตำแหน่ง
- ใช้ custom property ผิดชื่อ — `var(--colour-brand)` ไม่มีค่าเมื่อประกาศไว้ว่า `--color-brand`

## Checkpoint

- [ ] กด `Tab` ตั้งแต่ address bar จนเข้าหน้าเว็บ เห็นกรอบโฟกัสทุกลิงก์
- [ ] contrast checker รายงานข้อความทั่วไปอย่างน้อย 4.5:1
- [ ] ซูม 200% แล้วหัวเรื่องไม่ชนหรือล้นการ์ด
- [ ] เปลี่ยน `--color-brand` จุดเดียว สีพื้น header และหัวเรื่องในเนื้อหาหลักเปลี่ยนตาม โดยชื่อร้านบน header ยังเป็นสีขาว

## ไปต่อ

เมื่อสีและโฟกัสพร้อมแล้ว ไปที่ [Flexbox](/css/flexbox) เพื่อจัด nav และการ์ดเมนูให้ยืดหยุ่น

## แหล่งอ้างอิงมาตรฐาน

- [W3C CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)
- [W3C CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/)
- [W3C WAI: Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [W3C Selectors: `:focus-visible`](https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo)
