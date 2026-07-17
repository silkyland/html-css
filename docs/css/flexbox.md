# Flexbox: จัดวางสินค้าให้อยู่ในแถว

Flexbox เหมาะกับการจัด Element ในหนึ่งแนว เช่น แถวสินค้า เมนู หรือปุ่ม

<script setup>
const example = {
  html: `<section class="products">
  <article class="product-card">กาแฟดริป</article>
  <article class="product-card">กาแฟลาเต้</article>
  <article class="product-card">ชาไทย</article>
</section>`,
  css: `.products {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
}

.product-card {
  flex: 1 1 220px;
  padding: 24px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  text-align: center;
}`
}
</script>

<LivePreview v-bind="example" height="180px" />

- `gap` กำหนดช่องว่างระหว่างกล่อง
- `justify-content` จัดตำแหน่งตามแนวหลัก
- `align-items` จัดตำแหน่งตามแนวขวาง
- `flex-wrap` อนุญาตให้กล่องขึ้นบรรทัดใหม่

::: details ภาพประกอบที่แนะนำ
Diagram แสดง Main Axis และ Cross Axis ของ Flexbox
:::
