---
title: เว็บไซต์ทำงานอย่างไร
---

# โลกของเว็บไซต์ทำงานอย่างไร?

## เมื่อเราเปิดเว็บไซต์ เกิดอะไรขึ้นบ้าง?

1. ผู้ใช้เปิด **Browser** และพิมพ์ที่อยู่เว็บไซต์ (URL)
2. Browser ส่งคำขอ (**Request**) ไปยัง **Server** ผ่าน Internet
3. Server ประมวลผลและส่งคำตอบ (**Response**) กลับมาเป็นไฟล์ HTML, CSS, JavaScript
4. Browser แปลและแสดงผลให้ผู้ใช้เห็นเป็นหน้าเว็บไซต์

```text
ผู้ใช้ → Browser → Internet → Server → Database
ผู้ใช้ ← หน้าเว็บไซต์ ← Response ← Server
```

## ส่วนประกอบสำคัญของเว็บไซต์

| ส่วน | หน้าที่ | ตัวอย่าง |
|------|---------|---------|
| **Client** | อุปกรณ์และ Browser ของผู้ใช้ | Chrome, Safari, โทรศัพท์ |
| **Front-end** | สิ่งที่ผู้ใช้มองเห็นและโต้ตอบ | HTML, CSS, JavaScript |
| **Back-end** | ระบบเบื้องหลัง เช่น การคำนวณและกฎทางธุรกิจ | Node.js, Python, PHP |
| **Database** | พื้นที่จัดเก็บข้อมูล | สินค้า ลูกค้า คำสั่งซื้อ |

## หน้าเว็บง่าย ๆ ที่ Browser แสดงผล

นี่คือตัวอย่างของหน้าเว็บที่ Server ส่งกลับมา Browser จะแปลงโค้ด HTML ให้เป็นหน้าเว็บที่ผู้ใช้เห็น:

<script setup>
const example = {
  html: `<h1>ร้านกาแฟบ้านเรา</h1>
<p>กาแฟดี ๆ จากชุมชนของเรา</p>
<p>เปิดทุกวัน 08:00–17:00 น.</p>`
}
</script>

<LivePreview v-bind="example" height="160px" title="HTML ที่ Server ส่งมา" />

::: tip
วันนี้เราจะเน้น **Front-end** ด้วย HTML และ CSS — ส่วนที่ผู้ใช้มองเห็นและสัมผัสได้
:::

::: details ภาพประกอบที่แนะนำ
Diagram แบบ Client → Server → Database พร้อมลูกศร Request/Response
:::
