---
title: Semantic HTML
---

# Semantic HTML: Tag ที่บอกความหมาย

**Semantic Tag** ช่วยให้คน Browser และ Search Engine เข้าใจโครงสร้างหน้าเว็บได้ดีขึ้น

<script setup>
const example = {
  html: `<header>
  <h1>ร้านดอกไม้เชียงใหม่</h1>
  <nav><a href="#products">สินค้า</a></nav>
</header>

<main>
  <section id="products">
    <h2>ช่อดอกไม้แนะนำ</h2>
    <article>
      <h3>ช่อทานตะวัน</h3>
      <p>ราคา 590 บาท</p>
    </article>
  </section>
</main>

<footer>ติดต่อ: 08x-xxx-xxxx</footer>`
}
</script>

<LivePreview v-bind="example" height="260px" />

## Semantic Tag ที่สำคัญ

| Tag | หน้าที่ | ใช้เมื่อไร |
|-----|---------|-----------|
| `<header>` | ส่วนหัวของหน้า | ชื่อร้าน โลโก้ เมนูหลัก |
| `<nav>` | เมนูนำทาง | ลิงก์ไปยังหน้าต่าง ๆ |
| `<main>` | เนื้อหาหลัก | เนื้อหาที่สำคัญที่สุดของหน้า |
| `<section>` | กลุ่มเนื้อหาที่เกี่ยวข้องกัน | แบ่งเนื้อหาเป็นส่วน ๆ |
| `<article>` | เนื้อหาที่แยกเป็นชิ้นได้ | บทความ สินค้าชิ้นเดียว |
| `<footer>` | ส่วนท้ายของหน้า | ข้อมูลติดต่อ ลิขสิทธิ์ |

::: tip ทำไมต้อง Semantic?
Search Engine เช่น Google เข้าใจหน้าเว็บที่ใช้ Semantic Tag ได้ดีกว่า และผู้ใช้สายตาพิการที่ใช้ Screen Reader ก็นำทางได้ง่ายขึ้น
:::

::: details ภาพประกอบที่แนะนำ
Wireframe หน้าเว็บที่แบ่งพื้นที่ Header, Nav, Main และ Footer
:::
