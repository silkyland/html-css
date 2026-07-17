---
title: CSS Selector
---

# CSS Selector: เลือกสิ่งที่จะตกแต่ง

Selector ใช้ระบุว่าเราต้องการตกแต่ง Element ใด

<script setup>
const example = {
  html: `<h1 id="shop-name">ร้านกาแฟบ้านเรา</h1>
<p class="highlight">เมล็ดกาแฟจากเกษตรกรท้องถิ่น</p>
<p>เปิดทุกวัน 08:00–17:00 น.</p>`,
  css: `/* เลือกด้วยชื่อ Tag */
p {
  line-height: 1.6;
}

/* เลือกด้วย Class ใช้ซ้ำได้ */
.highlight {
  color: #b45309;
}

/* เลือกด้วย ID ซึ่งควรไม่ซ้ำกัน */
#shop-name {
  font-size: 40px;
}`
}
</script>

<LivePreview v-bind="example" height="220px" />

## ประเภท Selector

| ประเภท | ไวยากรณ์ | ใช้เมื่อไร |
|--------|---------|-----------|
| Tag selector | `p` | ตกแต่งทุก `<p>` ในหน้า |
| Class selector | `.highlight` | ตกแต่ง Element ที่มี class นี้ (ใช้ซ้ำได้) |
| ID selector | `#shop-name` | ตกแต่ง Element เฉพาะตัว (ID ไม่ควรซ้ำ) |

::: tip ใช้ Class มากกว่า ID
Class ใช้ซ้ำได้หลาย Element ส่วน ID ควรมีเพียงตัวเดียวในหน้า ในทางปฏิบัติใช้ Class บ่อยกว่า
:::
