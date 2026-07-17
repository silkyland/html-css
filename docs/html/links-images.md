# ลิงก์และรูปภาพ

ใช้ลิงก์เชื่อมไปยังหน้าอื่น และใช้รูปภาพช่วยสื่อสารสินค้าให้ชัดเจนขึ้น

<script setup>
const placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDRhMzczIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIj5TYW1wbGUgSW1hZ2U8L3RleHQ+PC9zdmc+'

const example = {
  code: `<h1>กระเป๋าผ้ารักษ์โลก</h1>

<img
  src="images/eco-bag.jpg"
  alt="กระเป๋าผ้าสีครีมพิมพ์ลายใบไม้"
  width="320"
>

<p>
  <a href="contact.html">สอบถามสินค้า</a>
</p>`,
  html: `<h1>กระเป๋าผ้ารักษ์โลก</h1>

<img src="${placeholder}" alt="กระเป๋าผ้าสีครีมพิมพ์ลายใบไม้" width="320">

<p>
  <a href="contact.html">สอบถามสินค้า</a>
</p>`
}
</script>

<LivePreview v-bind="example" height="260px" />

- `<a href="...">` สร้างลิงก์
- `<img src="...">` แสดงรูปภาพ
- `alt` อธิบายรูปสำหรับผู้ที่มองไม่เห็นภาพและกรณีโหลดภาพไม่ได้
- ควรใช้ชื่อไฟล์ที่อ่านเข้าใจง่าย เช่น `eco-bag.jpg`

::: details ภาพประกอบที่แนะนำ
Screenshot หน้าแสดงสินค้าที่มีภาพ ชื่อสินค้า และปุ่มติดต่อ
:::
