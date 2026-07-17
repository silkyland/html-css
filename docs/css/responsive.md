---
title: Responsive Design
---

# Responsive Design: ร้านเดียว ใช้ได้หลายขนาดหน้าจอ

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 15 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะอธิบายบทบาทของ viewport meta แยก responsive ออกจาก “เว็บมือถืออีกหน้า” ใช้ flexible container กับกฎสื่อที่ไม่ล้น เขียน media query จากปัญหาของเนื้อหา และตรวจหน้าที่ความกว้างมาตรฐาน 320 / 768 / 1280px อย่างเป็นระบบ

![หน้าเว็บร้านกาแฟเดียวกันบนโทรศัพท์ แท็บเล็ต และเดสก์ท็อป](/images/workshop/responsive-devices.webp)

## สถานะเริ่มต้น

หน้าเว็บมี container ที่ยืดหยุ่นและการ์ด Flexbox แล้ว ใน `index.html` ควรมี viewport meta จากบทโครงสร้างแล้ว งานที่เหลือคือป้องกันสื่อขนาดใหญ่ ปรับพื้นที่บนจอแคบ และทดสอบตามความกว้างมาตรฐาน

## Viewport คืออะไร และทำไมต้องมี meta

**Viewport** คือพื้นที่ที่ Browser ใช้แสดงหน้าเว็บ บนมือถือถ้าไม่บอก Browser ให้ใช้ความกว้างของอุปกรณ์ หน้าอาจถูกย่อทั้งหน้าเหมือนจอเดสก์ท็อปเล็ก ๆ ทำให้ข้อความอ่านยาก

ตรวจใน `<head>` ว่ามีบรรทัดนี้แล้ว (ตั้งไว้ตั้งแต่บทโครงสร้าง):

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| ค่า | ความหมาย |
|---|---|
| `width=device-width` | ให้ความกว้าง layout เท่ากับความกว้างหน้าจออุปกรณ์ |
| `initial-scale=1.0` | เริ่มซูมที่ 100% ไม่ย่อทั้งหน้าอัตโนมัติ |

ไม่มี meta นี้ การเขียน CSS responsive จะไม่ทำงานตามที่คาดบนมือถือ เพราะ layout ยังคิดว่าจอกว้างอยู่

::: tip อย่าล็อกการซูมของผู้ใช้
ในหลักสูตรนี้ใช้แค่ `width=device-width, initial-scale=1.0` ไม่ใส่ `user-scalable=no` หรือ `maximum-scale=1` เพราะผู้ใช้บางคนต้องซูมเพื่ออ่านข้อความ ([W3C WAI — Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html))
:::

## ความกว้างมาตรฐานที่ใช้ทดสอบ

ในเวิร์กชอปนี้เราไม่จำชื่อรุ่นโทรศัพท์ แต่ใช้**ความกว้าง viewport มาตรฐาน**เป็นจุดตรวจร่วมกัน:

| Viewport | กลุ่มที่มักเทียบ | ใช้ตรวจอะไรในร้านกาแฟ |
|---|---|---|
| `320px` | มือถือจอแคบ (ขอบล่างที่ยังรองรับได้) | ไม่มี horizontal scroll, nav wrap, แตะ/Tab ได้ |
| `375px`–`430px` | มือถือทั่วไป | ดูว่าระยะและตัวอักษรอึดอัดหรือไม่ |
| `768px` | แท็บเล็ตแนวตั้ง / จอกลาง | header เริ่มวาง brand กับ nav ข้างกัน (`48rem`) |
| `1024px` | แท็บเล็ตแนวนอน / แล็ปท็อปเล็ก | การ์ดแบ่งคอลัมน์สมดุล |
| `1280px` | เดสก์ท็อป | container ไม่ยืดเต็มจอ อ่านสบาย |

จุดตรวจหลักของหลักสูตรมีสามค่า: **320 · 768 · 1280**  
ค่าอื่นใช้เมื่อมีเวลา หรือเมื่อพบปัญหาเฉพาะช่วงความกว้าง

### ทำไมบทเรียนใช้ `48rem` ไม่ใช่ `768px`

ที่ขนาดตัวอักษรรากเริ่มต้น `16px` ค่า `48rem` ≈ `768px` การใช้ `rem` ทำให้ breakpoint สัมพันธ์กับการตั้งค่าขนาดตัวอักษรของผู้ใช้ได้ดีกว่าพิกเซลตายตัว

```css
@media (min-width: 48rem) { /* ≈ 768px เมื่อ 1rem = 16px */
  /* ... */
}
```

## หลัก “fluid ก่อน breakpoint”

Responsive ไม่ใช่การทำหน้าจอมือถือแยกอีกไฟล์ แต่คือหน้าเดียวที่จัดวางตามพื้นที่ที่มี

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
- heading ยืดหยุ่นด้วย `clamp()` และหน่วย `vw` (ร้อยละของความกว้าง viewport)
- cards หด ขยาย และ wrap ตามพื้นที่

จึงไม่ต้องสร้าง breakpoint สำหรับชื่ออุปกรณ์ทุกรุ่น — เพิ่ม media query เมื่อเนื้อหาเริ่มอึดอัดจริงเท่านั้น

## ลงมือ

### 1. ยืนยัน viewport meta

เปิด `index.html` ตรวจใน `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

ถ้าไม่มี ให้เพิ่มทันที แล้วค่อยทดสอบความกว้างด้านล่าง

### 2. สื่อไม่ล้นกล่อง

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

`max-width: 100%` จำกัดความกว้างไม่ให้เกิน containing block ส่วน `height: auto` รักษาสัดส่วนภาพ ([W3C CSS Images Level 3](https://www.w3.org/TR/css-images-3/), [W3C CSS Sizing Level 3](https://www.w3.org/TR/css-sizing-3/))

### 3. Media query เมื่อเนื้อหาต้องเปลี่ยน

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

media query นี้ใช้ **progressive enhancement**: จอแคบใช้ flow ธรรมชาติและ nav wrap ได้ เมื่อพื้นที่อย่างน้อย `48rem` (≈ viewport 768px) จึงวาง brand กับ nav ข้างกัน ([W3C Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/))

<script setup>
const viewportMeta = {
  code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* layout ใช้ความกว้างจริงของอุปกรณ์ */
main {
  width: min(100% - 2rem, 60rem);
}`,
  html: `<p class="badge">viewport = ความกว้างอุปกรณ์</p><main><h1>กาแฟบ้านดอย</h1><p>หน้านี้จัดตามความกว้างจริง ไม่ย่อทั้งหน้าเป็นจอเดสก์ท็อปเล็ก ๆ</p></main>`,
  css: `body{margin:0;background:#fffaf2;color:#2f241f;font:1rem/1.6 system-ui,sans-serif}.badge{margin:0;padding:.5rem 1rem;background:#5c3317;color:#fff;font-size:.85rem;font-weight:600}main{width:min(100% - 2rem,60rem);margin-inline:auto;padding-block:1.25rem}h1{margin:0 0 .5rem;font-size:clamp(1.5rem,5vw,2.5rem);color:#5c3317;line-height:1.2}p{margin:0;max-width:40rem}`
}

const fluidImage = {
  code: `img {
  display: block;
  max-width: 100%;
  height: auto;
}`,
  html: `<div class="frame"><img src="/images/workshop/community-coffee-shop.webp" alt="หน้าร้านกาแฟชุมชนสมมติ" width="800" height="450"><p>ย่อความกว้างผลลัพธ์ — ภาพหดตามกล่อง ไม่ล้น</p></div>`,
  css: `.frame{max-width:100%;background:#fff;border:1px solid #d8c3ad;border-radius:.75rem;overflow:hidden;font-family:system-ui,sans-serif;color:#2f241f}img{display:block;max-width:100%;height:auto}p{margin:0;padding:.75rem 1rem;font-size:.95rem}`
}

const example = {
  code: `@media (min-width: 48rem) { /* ≈ 768px */
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}`,
  html: `<header><div class="header-inner"><p class="brand">กาแฟบ้านดอย</p><nav class="site-nav"><a href="#menu">เมนูแนะนำ</a><a href="#hours">เวลาเปิดร้าน</a><a href="#contact">ติดต่อเรา</a></nav></div></header><main><h1>กาแฟจากเกษตรกรในชุมชน</h1><section class="product-list"><article class="product-card">อเมริกาโน่น้ำผึ้ง 65 บาท</article><article class="product-card">ลาเต้นมสด 70 บาท</article><article class="product-card">ชาดอกกาแฟ 55 บาท</article></section></main>`,
  css: `*{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f;font:1rem/1.6 system-ui,sans-serif}header{background:#5c3317;color:#fff}.header-inner,main{width:min(100% - 2rem,60rem);margin-inline:auto}.brand{margin:0;padding-top:1rem;font-weight:700}.site-nav{display:flex;flex-wrap:wrap;gap:.5rem 1rem;padding-block:1rem}.site-nav a{color:#fff;text-decoration:none}h1{font-size:clamp(2rem,5vw,3.5rem);line-height:1.2;color:#5c3317}.product-list{display:flex;flex-wrap:wrap;gap:1rem}.product-card{flex:1 1 15rem;padding:1.25rem;background:#fff;border:1px solid #d8c3ad;border-radius:.75rem}@media(min-width:48rem){.header-inner{display:flex;align-items:center;justify-content:space-between;gap:2rem}.brand{padding:0}.site-nav{justify-content:flex-end}}`
}

const widthBands = {
  code: `/* จุดตรวจมาตรฐานของหลักสูตร */
/* 320px · 768px · 1280px */`,
  html: `<ul class="bands"><li class="phone"><strong>320px</strong><span>มือถือแคบ</span></li><li class="tablet"><strong>768px</strong><span>แท็บเล็ต / จอกลาง</span></li><li class="desktop"><strong>1280px</strong><span>เดสก์ท็อป</span></li></ul>`,
  css: `.bands{list-style:none;margin:0;padding:0;display:grid;gap:.75rem;font-family:system-ui,sans-serif}.bands li{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:1rem 1.25rem;border-radius:.75rem;font-weight:600}.bands span{font-weight:500;opacity:.9}.phone{background:#5c3317;color:#fff}.tablet{background:#216e39;color:#fff}.desktop{background:#2f241f;color:#fff}`
}
</script>

<LivePreview v-bind="viewportMeta" height="180px" title="viewport meta + container ที่ยึดความกว้างจริง" />

<LivePreview v-bind="widthBands" height="200px" title="จุดตรวจ viewport มาตรฐานของหลักสูตร — 320 · 768 · 1280" />

<LivePreview v-bind="fluidImage" height="320px" title="max-width: 100% — ภาพไม่ล้นกล่องเมื่อย่อความกว้าง" />

<LivePreview v-bind="example" height="380px" title="หน้าเดียวหลายความกว้าง — ย่อผลลัพธ์ดู header และ cards ปรับตัว" />

## ผลที่ควรเห็น

หน้าเดียวกันใช้ได้ตั้งแต่จอแคบถึงจอกว้าง: มี viewport meta ถูกต้อง nav และ cards จัดบรรทัดตามพื้นที่ สื่อไม่ล้น และเมื่อจอกว้าง header จึงเปลี่ยนเป็นแนวนอน

## ทดสอบตาม viewport มาตรฐาน

เปิด DevTools → Toggle device toolbar แล้ว**กรอกความกว้าง**ทีละค่า (Responsive) ไม่จำเป็นต้องเลือกชื่อโทรศัพท์

| Viewport | สิ่งที่ตรวจ |
|---|---|
| `320px` | ไม่มี horizontal scroll, nav wrap, ข้อความไม่ถูกตัด, Tab ถึงลิงก์ได้ |
| `768px` | header เปลี่ยน layout ตาม `@media (min-width: 48rem)`, การ์ดใช้พื้นที่สมดุล |
| `1280px` | เนื้อหาไม่ยืดยาวเต็มจอ, `main` ไม่เกินประมาณ `60rem` และอยู่กึ่งกลาง |

ถ้ามีเวลา ลอง `375px` และ `1024px` เพิ่มเพื่อจับจุดอึดอัดระหว่างค่าหลัก

ที่ทุกความกว้างให้ทดสอบซูม 200%, กด Tab ดู focus และตรวจว่าภาพไม่บิด

::: tip วิธีตั้งความกว้างใน Chrome DevTools
1. กด `Ctrl+Shift+M` (`Cmd+Shift+M` บน macOS) หรือไอคอนเครื่อง
2. เลือก **Responsive**
3. พิมพ์ `320` / `768` / `1280` ในช่องความกว้าง แล้วกด Enter
4. ดูว่ามีแถบเลื่อนแนวนอนหรือไม่
:::

## จุดที่พลาดบ่อย

- ลืม `<meta name="viewport" ...>` ทำให้มือถือย่อทั้งหน้า แล้วคิดว่า CSS ผิด
- ใช้ `width: 1200px` กับ container ทำให้จอเล็กล้น
- ตั้ง breakpoint ตามรุ่นโทรศัพท์แทนจุดที่เนื้อหาเริ่มเสียรูป
- ใส่ `height` คงที่ให้ภาพพร้อม `width: 100%` ทำให้สัดส่วนบิด
- ซ่อนเนื้อหาสำคัญบนมือถือเพื่อให้ “พอดี” แทนการจัด layout ใหม่
- ทดสอบเฉพาะ device preset เดียวแล้วคิดว่าครบ
- ล็อกซูมด้วย `user-scalable=no` โดยไม่จำเป็น

## Checkpoint

- [ ] มี `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ใน `<head>`
- [ ] 320px: ไม่มี horizontal scrollbar
- [ ] 768px: header และ cards ปรับตามพื้นที่โดยไม่ทับกัน
- [ ] 1280px: main ไม่กว้างเกิน `60rem` และอยู่กึ่งกลาง
- [ ] ทุกขนาด: รูปไม่ล้นหรือบิด, focus indicator เห็นชัด, contrast ยังอ่านได้
- [ ] `style.css` ไฟล์เดียวมีโค้ดต่อเนื่องจากบท CSS และไม่มี rule ทดลองที่ลืมลบ

หากเกิด overflow ให้ใช้ DevTools เลือก element ที่ยื่นออกนอก viewport ตรวจ fixed width, margin และข้อความยาวก่อนเพิ่ม `overflow-x: hidden` เพราะการซ่อนเพียงอย่างเดียวไม่แก้ต้นเหตุ

## ไปต่อ

เมื่อหน้าเว็บใช้ได้หลายขนาดแล้ว เส้นทาง CSS หลักจบที่นี่ ต่อไปเริ่ม [Git: ทำไมต้องมี Version Control](/git/version-control) เพื่อบันทึกงานเป็นลำดับ  
ถ้าอยากลอง layout สองมิติเพิ่ม ดู [CSS Grid (บทเสริม)](/css/grid)

## แหล่งอ้างอิงมาตรฐาน

- [WHATWG HTML — The `meta` element](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element)
- [W3C Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/)
- [W3C CSS Sizing Level 3](https://www.w3.org/TR/css-sizing-3/)
- [W3C CSS Images Level 3](https://www.w3.org/TR/css-images-3/)
- [W3C WAI — Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
