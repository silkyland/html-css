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

- Tag selector: `p`
- Class selector: `.highlight`
- ID selector: `#shop-name`
