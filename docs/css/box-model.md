---
title: Box Model
---

# Box Model: ทุก Element คือกล่อง

ทุก Element ประกอบด้วย 4 ชั้น

1. **Content:** เนื้อหาภายใน
2. **Padding:** ระยะห่างรอบเนื้อหา
3. **Border:** เส้นขอบ
4. **Margin:** ระยะห่างภายนอกกล่อง

<script setup>
const example = {
  code: `.product-card {
  width: 280px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  margin: 16px;
  border-radius: 12px;
}

* {
  box-sizing: border-box;
}`,
  html: `<div class="product-card">สินค้าตัวอย่าง</div>`,
  css: `* {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card {
  width: 280px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  margin: 16px;
  border-radius: 12px;
  text-align: center;
}`
}
</script>

<LivePreview v-bind="example" height="180px" />

::: tip
`box-sizing: border-box` ทำให้คำนวณขนาดกล่องได้ง่ายขึ้น
:::

::: details ภาพประกอบที่แนะนำ
Diagram Box Model แยกสี Content, Padding, Border และ Margin
:::
