---
title: ลิงก์และรูปภาพ
---

# สร้างทางนำและใช้รูปภาพอย่างมีความหมาย

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 15 นาที**

## เป้าหมาย

เพิ่มเมนูที่ลิงก์ไปยังส่วนจริงในหน้า ใส่รูปจากโฟลเดอร์ local และตัดสินใจเขียน `alt` ตามหน้าที่ของภาพ

## สถานะเริ่มต้น

- `my-shop-profile/index.html` มีหัวข้อ “เมนูแนะนำ” และ “เวลาเปิดร้าน”
- <a href="/images/workshop/community-coffee-shop.webp" download>ดาวน์โหลดภาพ `community-coffee-shop.webp`</a> ที่ผู้สอนเตรียมไว้ แล้ววางใน `my-shop-profile/images/`

```text
my-shop-profile/
├── index.html
└── images/
    └── community-coffee-shop.webp
```

## ลงมือ

### 1. สร้างปลายทางก่อนสร้างลิงก์

เพิ่ม `id` ที่หัวข้อเดิม:

```html
<h2 id="menu">เมนูแนะนำ</h2>
<!-- รายการเมนูเดิม -->

<h2 id="hours">เวลาเปิดร้าน</h2>
<!-- เวลาเปิดร้านเดิม -->
```

จากนั้นเพิ่มเมนูใต้ `<h1>`:

```html
<nav aria-label="เมนูหลัก">
  <a href="#menu">เมนูแนะนำ</a>
  <a href="#hours">เวลาเปิดร้าน</a>
  <a href="#contact">ติดต่อเรา</a>
</nav>
```

และเพิ่มปลายทางท้ายเนื้อหา:

```html
<h2 id="contact">ติดต่อเรา</h2>
<p><a href="tel:+66812345678">โทร 081-234-5678</a></p>
```

`href="#menu"` หมายถึงให้ Browser เลื่อนไปยัง element ที่มี `id="menu"` ในหน้าเดียวกัน

### 2. ใส่ภาพจาก path ที่มีอยู่จริง

วางภาพต่อจากเมนูนำทาง:

```html
<img
  src="images/community-coffee-shop.webp"
  alt="หน้าร้านกาแฟบ้านดอย มีเคาน์เตอร์ไม้และเมล็ดกาแฟจากชุมชน"
  width="960"
  height="640"
>
```

Path เริ่มจากตำแหน่งของ `index.html`: เข้าโฟลเดอร์ `images` แล้วเลือกไฟล์ หากตัวพิมพ์ใหญ่เล็กหรือชื่อไม่ตรง ภาพจะไม่แสดง

<script setup>
const linksExample = {
  html: `<nav aria-label="เมนูหลัก">
  <a href="#menu">เมนูแนะนำ</a>
  <a href="#hours">เวลาเปิดร้าน</a>
  <a href="#contact">ติดต่อเรา</a>
</nav>
<img
  src="/images/workshop/community-coffee-shop.webp"
  alt="หน้าร้านกาแฟบ้านดอย มีเคาน์เตอร์ไม้และเมล็ดกาแฟจากชุมชน"
  width="960"
  height="640"
>
<h2 id="menu">เมนูแนะนำ</h2>
<p>อเมริกาโน่น้ำผึ้ง 65 บาท</p>
<h2 id="hours">เวลาเปิดร้าน</h2>
<p>เปิดทุกวัน <strong>08:00–17:00 น.</strong></p>
<h2 id="contact">ติดต่อเรา</h2>
<p><a href="tel:+66812345678">โทร 081-234-5678</a></p>`
}

const figureExample = {
  html: `<figure>
  <img
    src="/images/workshop/community-coffee-shop.webp"
    alt="หน้าร้านกาแฟบ้านดอย มีเคาน์เตอร์ไม้และเมล็ดกาแฟจากชุมชน"
    width="960"
    height="640"
    loading="lazy"
  >
  <figcaption>หน้าร้านเปิดให้บริการตั้งแต่มกราคม 2567</figcaption>
</figure>`,
  css: `figure{margin:0}figcaption{font-size:.875rem;color:#666;margin-top:.5rem;text-align:center}`
}
</script>

<LivePreview v-bind="linksExample" height="420px" title="index.html — ส่วน body (ตัวอย่างใช้ path เต็มของภาพจากบทเรียน)" />

หมายเหตุ: ตัวอย่างด้านบนใช้ path เต็ม `/images/workshop/...` เพื่อให้ preview แสดงภาพได้ ส่วนไฟล์จริงของคุณให้ใช้ path สัมพัทธ์ `images/community-coffee-shop.webp` ตามที่สอนไว้

## ตัดสินใจเขียน `alt`

ถามว่า “ถ้าภาพหายไป ผู้ใช้เสียข้อมูลสำคัญหรือไม่?”

- **ภาพให้ข้อมูล:** เขียน `alt` สั้น กระชับ บอกข้อมูลที่จำเป็นในบริบท
- **ภาพตกแต่งล้วน:** ใช้ `alt=""` เพื่อไม่ให้ screen reader อ่านชื่อไฟล์ที่ไม่ช่วยอะไร
- **อย่าเริ่มด้วย** “รูปภาพของ…” เพราะเทคโนโลยีช่วยเหลือรู้ว่าเป็นภาพอยู่แล้ว

## ผลที่ควรเห็น

- คลิกเมนูแล้ว Browser เลื่อนไปยังหัวข้อที่ตรงกัน
- ภาพหน้าร้านแสดงโดยไม่เกิดไอคอนภาพแตก
- คลิกลิงก์โทรศัพท์แล้วอุปกรณ์ที่รองรับเสนอเปิดแอปโทร

## ลิงก์ประเภทอื่นที่ใช้บ่อย

นอกจากลิงก์ในหน้า (`href="#...`) และโทร (`href="tel:..."`) ยังมี:

```html
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
  เว็บไซต์เครือข่ายเกษตรกร
</a>
<a href="mailto:hello@bandoi.coffee?subject=สอบถามเมล็ดกาแฟ">
  ส่งอีเมล
</a>
```

| ประเภท | ตัวอย่าง | พฤติกรรม |
|---|---|---|
| เว็บอื่น | `href="https://..."` | เปิดในแท็บเดียวกัน หรือแท็บใหม่ถ้ามี `target="_blank"` |
| อีเมล | `href="mailto:..."` | เปิดแอปอีเมลแล้วเติมผู้รับ/หัวเรื่องให้ |
| ดาวน์โหลด | `href="..." download` | ดาวน์โหลดไฟล์แทนเปิดดู |

::: warning ใช้ `target="_blank"` ต้องมี `rel="noopener"`
เปิดแท็บใหม่โดยไม่มี `rel="noopener"` ทำให้หน้าใหม่เข้าถึง `window.opener` ของหน้าเดิมได้ เป็นความเสี่ยงด้านความปลอดภัย `rel="noopener noreferrer"` ป้องกันทั้งการเข้าถึงและการส่ง referrer ไปยังเว็บปลายทาง
:::

## รูปภาพกับ `<figure>` และคำบรรยาย

ถ้าภาพมีคำบรรยายที่ให้บริบท เช่น "ภาพถ่ายโดย…" ใช้ `<figure>` ครอบภาพและ `<figcaption>` เขียนคำบรรยาย:

```html
<figure>
  <img
    src="images/community-coffee-shop.webp"
    alt="หน้าร้านกาแฟบ้านดอย มีเคาน์เตอร์ไม้และเมล็ดกาแฟจากชุมชน"
    width="960"
    height="640"
    loading="lazy"
  >
  <figcaption>หน้าร้านเปิดให้บริการตั้งแต่มกราคม 2567</figcaption>
</figure>
```

`loading="lazy"` บอก Browser ให้โหลดภาพเฉพาะเมื่อผู้ใช้เลื่อนถึง ลดการโหลดที่ไม่จำเป็นในหน้ายาว ส่วน `<figcaption>` เป็นคำบรรยายที่เครื่องมืออ่านหน้าจอเชื่อมกับภาพได้โดยตรง

<LivePreview v-bind="figureExample" height="420px" title="figure + figcaption — ภาพพร้อมคำบรรยาย" />

## จุดที่พลาดบ่อย

- สะกด `href="#menu"` กับ `id="menu"` ไม่ตรงกัน (เช่น ตัวพิมพ์ใหญ่เล็กต่างกัน) ทำให้คลิกแล้วไม่เลื่อนไปไหน
- เขียน path ภาพผิดตัวพิมพ์ใหญ่เล็ก เช่นไฟล์จริงชื่อ `Coffee-Shop.webp` แต่ในโค้ดพิมพ์ `coffee-shop.webp`
- ลืม `alt` ไปเลย หรือเขียน `alt="image1"` ที่ไม่ได้บอกข้อมูลอะไร
- ใช้ `<a href="#">คลิกที่นี่</a>` ซ้ำหลายจุดในหน้าเดียว โดยไม่บอกว่าลิงก์ไปที่ไหน

## Checkpoint

- [ ] `href="#..."` ทุกตัวมี `id` ปลายทางที่สะกดตรงกัน
- [ ] เปิด path ภาพได้จริง และชื่อไฟล์ตรงทุกตัวอักษร
- [ ] ภาพให้ข้อมูลมี `alt` ที่สื่อสารหน้าที่ของภาพ
- [ ] กด `Tab` แล้วเข้าถึงลิงก์ทุกตัวได้

## บันทึกแหล่งข้อมูล

หลักการเลือก text alternative สำหรับภาพให้ข้อมูลและภาพตกแต่งอ้างจาก [W3C WAI — Images Tutorial](https://www.w3.org/WAI/tutorials/images/)
