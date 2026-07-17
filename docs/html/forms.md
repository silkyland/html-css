---
title: ฟอร์มติดต่อ
---

# ฟอร์มติดต่อเบื้องต้น

ฟอร์ม (Form) ใช้รับข้อมูลจากผู้ใช้ เช่น ชื่อ อีเมล และข้อความสอบถาม

<script setup>
const example = {
  html: `<form>
  <label for="name">ชื่อผู้ติดต่อ</label>
  <input id="name" name="name" type="text" required>

  <label for="email">อีเมล</label>
  <input id="email" name="email" type="email" required>

  <label for="message">ข้อความ</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">ส่งข้อความ</button>
</form>`
}
</script>

<LivePreview v-bind="example" height="280px" />

## Tag สำหรับฟอร์ม

| Tag / Attribute | หน้าที่ | ตัวอย่าง |
|-----------------|---------|---------|
| `<form>` | ครอบฟอร์มทั้งหมด | `<form>...</form>` |
| `<label>` | บอกความหมายของช่องกรอก | `<label for="name">ชื่อ</label>` |
| `<input type="text">` | รับข้อมูลแบบสั้น | ชื่อ นามสกุล |
| `<input type="email">` | รับอีเมล (ตรวจรูปแบบอัตโนมัติ) | `you@email.com` |
| `<textarea>` | รับข้อความหลายบรรทัด | ข้อความสอบถาม |
| `<button type="submit">` | ปุ่มส่งข้อมูล | ส่งข้อความ |
| `required` | กำหนดให้ต้องกรอก | ไม่กรอกจะส่งไม่ได้ |

::: tip
ฟอร์มนี้สร้างเฉพาะหน้าตา การส่งและบันทึกข้อมูลจริงต้องใช้ Back-end เพิ่มเติม
:::

::: details ภาพประกอบที่แนะนำ
Screenshot ฟอร์มติดต่อทั้งสถานะปกติและตอนแจ้งช่องที่ยังไม่ได้กรอก
:::
