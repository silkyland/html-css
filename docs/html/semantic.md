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

## ผลที่ควรเห็น

หน้าตายังเกือบเหมือนเดิม เพราะ semantic element ไม่ได้มีไว้สร้างดีไซน์โดยตรง แต่ใน Developer Tools จะเห็นโครง `header → main → sections → footer` ชัดเจน

## Checkpoint

- [ ] มี `<main>` หนึ่งตัวและไม่ซ้อนอยู่ใน `<header>` หรือ `<footer>`
- [ ] ทุก `<section>` และ `<article>` มี heading ที่อธิบายเนื้อหา
- [ ] ใช้ `<article>` กับเมนูแต่ละรายการ ไม่ใช้ครอบทุกอย่างโดยไม่มีเหตุผล
- [ ] ลำดับ heading เป็น `h1 → h2 → h3`
- [ ] ลิงก์เมนูยังทำงานหลังย้าย `id`

## บันทึกแหล่งข้อมูล

แนวคิด page regions และ headings เพื่อช่วยการนำทางและทำความเข้าใจหน้า อ้างจาก [W3C WAI — Page Structure](https://www.w3.org/WAI/tutorials/page-structure/) และนิยาม element อ้างจาก [WHATWG — Sections](https://html.spec.whatwg.org/multipage/sections.html)
