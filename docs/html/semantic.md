---
title: Semantic HTML
---

# จัดโครงหน้าเว็บด้วย Semantic HTML

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 15 นาที**

## เป้าหมาย

เปลี่ยนกลุ่มเนื้อหาเดิมให้เป็น `header`, `nav`, `main`, `section`, `article` และ `footer` เพื่อให้โครงสร้างสื่อความหมายทั้งต่อคนและเครื่องมือ

## สถานะเริ่มต้น

`index.html` มีชื่อร้าน เมนูนำทาง ภาพ รายการเมนู เวลาเปิดร้าน และข้อมูลติดต่อครบ แต่ยังอยู่ใน `<body>` โดยไม่มี landmarks

## เลือก element จากหน้าที่

| Element | ใช้กับส่วนใดของร้าน |
|---|---|
| `<header>` | ชื่อร้าน คำโปรย และทางนำหลัก |
| `<nav>` | กลุ่มลิงก์ที่ใช้เดินทางในหน้า |
| `<main>` | เนื้อหาหลักที่เฉพาะกับหน้านี้ มีหนึ่งส่วนหลัก |
| `<section>` | กลุ่มเนื้อหาที่มีหัวเรื่องของตัวเอง |
| `<article>` | เนื้อหาหนึ่งชิ้นที่ยังเข้าใจได้เมื่อแยกออก เช่น การ์ดเมนูหนึ่งรายการ |
| `<footer>` | ข้อมูลท้ายหน้า เช่น ที่อยู่และลิขสิทธิ์ |

`section` ไม่ใช่กล่องอเนกประสงค์เพื่อจัด CSS หากเพียงต้องการกล่องโดยไม่มีความหมายใหม่ ใช้ `<div>` ได้

## ลงมือ

### จัดเนื้อหาเดิมใหม่

แทนที่ `<body>` ด้วยโครงนี้ แล้วนำรายการเมนู/เวลาเดิมมาไว้ตำแหน่งที่กำหนด:

```html
<body>
  <header class="site-header">
    <div class="header-inner">
      <div>
        <h1 class="brand">กาแฟบ้านดอย</h1>
        <p>กาแฟจากเกษตรกรในชุมชน คั่วสดทุกสัปดาห์</p>
      </div>
      <nav class="site-nav" aria-label="เมนูหลัก">
        <a href="#menu">เมนูแนะนำ</a>
        <a href="#hours">เวลาเปิดร้าน</a>
        <a href="#contact">ติดต่อเรา</a>
      </nav>
    </div>
  </header>

  <main>
    <img
      src="images/community-coffee-shop.webp"
      alt="หน้าร้านกาแฟบ้านดอย มีเคาน์เตอร์ไม้และเมล็ดกาแฟจากชุมชน"
      width="960"
      height="640"
    >

    <section id="menu" class="menu-section">
      <h2>เมนูแนะนำ</h2>
      <div class="product-list">
        <article class="product-card">
          <h3>อเมริกาโน่น้ำผึ้ง</h3>
          <p>กาแฟชุมชนกับน้ำผึ้งป่า</p>
          <p class="price">65 บาท</p>
        </article>
        <article class="product-card">
          <h3>ลาเต้นมสด</h3>
          <p>เอสเปรสโซคั่วกลางกับนมสด</p>
          <p class="price">70 บาท</p>
        </article>
        <article class="product-card">
          <h3>ชาดอกกาแฟ</h3>
          <p>กลิ่นหอมอ่อน ไม่มีคาเฟอีน</p>
          <p class="price">55 บาท</p>
        </article>
      </div>
    </section>

    <section id="hours">
      <h2>เวลาเปิดร้าน</h2>
      <p>เปิดทุกวัน <strong>08:00–17:00 น.</strong></p>
    </section>
  </main>

  <footer id="contact">
    <h2>ติดต่อเรา</h2>
    <p><a href="tel:+66812345678">โทร 081-234-5678</a></p>
    <p>บ้านแม่กลางหลวง จังหวัดเชียงใหม่</p>
  </footer>
</body>
```

<LivePreview v-bind="semanticExample" height="480px" title="index.html — โครง semantic ทั้งหน้า (ตัดเนื้อหาบางส่วนเพื่อความสั้น)" />

## `<details>` และ `<summary>` — เนื้อหาที่เปิด-ปิดได้

ถ้ามีข้อมูลเพิ่มเติมที่ไม่จำเป็นต้องเห็นทันที เช่นคำถามที่พบบ่อย ใช้ `<details>` ครอบและ `<summary>` เป็นหัวข้อที่คลิกได้:

```html
<details>
  <summary>วิธีเก็บรักษาเมล็ดกาแฟ</summary>
  <p>เก็บในภาชนะปิดสนิท ห่างจากแสงและความชื้น ควรใช้ภายใน 30 วันหลังเปิดบรรจุภัณฑ์</p>
</details>
```

Browser แสดงสามเหลี่ยมเล็ก ๆ ที่คลิกได้โดยไม่ต้องเขียน JavaScript เลย และเครื่องมืออ่านหน้าจอรู้ว่าเป็นส่วนที่ขยายได้

<script setup>
const semanticExample = {
  html: `<header>
  <h1>กาแฟบ้านดอย</h1>
  <p>กาแฟจากเกษตรกรในชุมชน คั่วสดทุกสัปดาห์</p>
  <nav aria-label="เมนูหลัก">
    <a href="#menu">เมนูแนะนำ</a>
    <a href="#hours">เวลาเปิดร้าน</a>
    <a href="#contact">ติดต่อเรา</a>
  </nav>
</header>
<main>
  <section id="menu">
    <h2>เมนูแนะนำ</h2>
    <article>
      <h3>อเมริกาโน่น้ำผึ้ง</h3>
      <p>65 บาท</p>
    </article>
    <article>
      <h3>ลาเต้นมสด</h3>
      <p>70 บาท</p>
    </article>
  </section>
  <section id="hours">
    <h2>เวลาเปิดร้าน</h2>
    <p>เปิดทุกวัน <strong>08:00–17:00 น.</strong></p>
  </section>
</main>
<footer id="contact">
  <h2>ติดต่อเรา</h2>
  <p><a href="tel:+66812345678">โทร 081-234-5678</a></p>
</footer>`
}

const detailsExample = {
  html: `<details>
  <summary>วิธีเก็บรักษาเมล็ดกาแฟ</summary>
  <p>เก็บในภาชนะปิดสนิท ห่างจากแสงและความชื้น ควรใช้ภายใน 30 วันหลังเปิดบรรจุภัณฑ์</p>
</details>
<details>
  <summary>ระดับการคั่วที่มี</summary>
  <ul>
    <li>คั่วอ่อน — รสเปรี้ยว หอมผลไม้</li>
    <li>คั่วกลาง — สมดุล หอมคาราเมล</li>
    <li>คั่วเข้ม — ขมปลาย หอมช็อกโกแลต</li>
  </ul>
</details>`
}
</script>

<LivePreview v-bind="detailsExample" height="200px" title="details + summary — เนื้อหาที่เปิด-ปิดได้" />

## `class` กับ `id` — สองอย่างที่มักสับสน

ในบทนี้เห็นทั้ง `class` และ `id` ใช้กับ element ต่าง ๆ ความต่าง:

| | `class` | `id` |
|---|---|---|
| ซ้ำได้ไหม | ใช้ซ้ำกับหลาย element ได้ | ต้องไม่ซ้ำกันในหน้าเดียว |
| ใช้ทำอะไร | จัดกลุ่มสำหรับ CSS | ระบุปลายทางลิงก์ (`href="#...`) และ label ที่เชื่อมกับ input |
| ตัวอย่าง | `class="product-card"` ใช้กับการ์ดทุกใบ | `id="menu"` ใช้ครั้งเดียวในหน้า |

::: tip กฎง่าย ๆ
ถ้าต้องการให้ CSS จัดการกับหลาย element เหมือนกัน ใช้ `class` ถ้าต้องการให้ลิงก์เลื่อนไปยังจุดเดียว หรือ label เชื่อมกับ input ตัวเดียว ใช้ `id`
:::

## ผลที่ควรเห็น

หน้าตายังเกือบเหมือนเดิม เพราะ semantic element ไม่ได้มีไว้สร้างดีไซน์โดยตรง แต่ใน Developer Tools จะเห็นโครง `header → main → sections → footer` ชัดเจน

## จุดที่พลาดบ่อย

- ใส่ `<main>` มากกว่าหนึ่งตัว หรือซ้อน `<main>` ไว้ใน `<header>`/`<footer>`
- ครอบทุกอย่างด้วย `<section>` ทั้งที่บางส่วนเป็นเพียงกล่องจัด layout ซึ่งควรใช้ `<div>`
- ใช้ `<article>` กับกลุ่มเนื้อหาที่แยกออกมาอ่านเดี่ยว ๆ แล้วไม่เข้าใจความหมาย (เช่นครอบทั้ง `<nav>`)
- ย้าย `id` ไปไว้ผิด element ตอนจัดโครงใหม่ ทำให้ลิงก์จากบทก่อนหน้าเลื่อนไปผิดตำแหน่งหรือไม่ทำงาน

## Checkpoint

- [ ] มี `<main>` หนึ่งตัวและไม่ซ้อนอยู่ใน `<header>` หรือ `<footer>`
- [ ] ทุก `<section>` และ `<article>` มี heading ที่อธิบายเนื้อหา
- [ ] ใช้ `<article>` กับเมนูแต่ละรายการ ไม่ใช้ครอบทุกอย่างโดยไม่มีเหตุผล
- [ ] ลำดับ heading เป็น `h1 → h2 → h3`
- [ ] ลิงก์เมนูยังทำงานหลังย้าย `id`

## บันทึกแหล่งข้อมูล

แนวคิด page regions และ headings เพื่อช่วยการนำทางและทำความเข้าใจหน้า อ้างจาก [W3C WAI — Page Structure](https://www.w3.org/WAI/tutorials/page-structure/) และนิยาม element อ้างจาก [WHATWG — Sections](https://html.spec.whatwg.org/multipage/sections.html)
