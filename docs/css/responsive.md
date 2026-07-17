---
title: Responsive Design
---

# Responsive Design: ใช้งานได้หลายขนาดหน้าจอ

Responsive Design คือการทำให้เว็บไซต์ปรับตัวตามหน้าจอคอมพิวเตอร์ แท็บเล็ต และโทรศัพท์

<script setup>
const example = {
  code: `.container {
  width: min(100% - 32px, 960px);
  margin-inline: auto;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  h1 {
    font-size: 28px;
  }

  .products {
    flex-direction: column;
  }
}`,
  html: `<div class="container">
  <h1>ร้านกาแฟบ้านเรา</h1>
  <section class="products">
    <article class="product-card">กาแฟดริป</article>
    <article class="product-card">กาแฟลาเต้</article>
    <article class="product-card">ชาไทย</article>
  </section>
</div>`,
  css: `.container {
  width: min(100% - 32px, 960px);
  margin-inline: auto;
}

.product-card {
  flex: 1 1 220px;
  padding: 24px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  text-align: center;
}

.products {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  h1 {
    font-size: 28px;
  }

  .products {
    flex-direction: column;
  }
}`
}
</script>

<LivePreview v-bind="example" height="220px" />

## เทคนิค Responsive ที่ใช้

| เทคนิค | หน้าที่ | ตัวอย่าง |
|--------|---------|---------|
| `min(100% - 32px, 960px)` | จำกัดความกว้างไม่เกิน 960px แต่ไม่ล้นจอ | `.container { width: min(...) }` |
| `margin-inline: auto` | จัดกลางหน้าจออัตโนมัติ | ใช้กับ container |
| `max-width: 100%` | รูปภาพไม่ล้นเลยคอลัมน์ | `img { max-width: 100% }` |
| `@media (max-width: 600px)` | ปรับ CSS เมื่อหน้าจอแคบกว่า 600px | ลดขนาดฟอนต์ เปลี่ยนเป็นแนวตั้ง |

::: tip ทดลองเอง
เปิด Developer Tools (กด F12) แล้วสลับเป็นโหมดโทรศัพท์ จากนั้นลองย่อและขยายหน้าจอดู
:::

::: info พักกลางวัน
พักกลางวัน 60 นาที เวลา 12:00–13:00
:::

::: details ภาพประกอบที่แนะนำ
Screenshot เว็บไซต์เดียวกันบน Desktop และ Mobile
:::
