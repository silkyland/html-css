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

- `<header>` ส่วนหัวของหน้า
- `<nav>` เมนูนำทาง
- `<main>` เนื้อหาหลัก
- `<section>` กลุ่มเนื้อหาที่เกี่ยวข้องกัน
- `<article>` เนื้อหาที่แยกเป็นชิ้นได้
- `<footer>` ส่วนท้ายของหน้า

::: details ภาพประกอบที่แนะนำ
Wireframe หน้าเว็บที่แบ่งพื้นที่ Header, Nav, Main และ Footer
:::
