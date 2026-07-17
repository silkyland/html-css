---
title: ฟอร์มติดต่อ
---

# บทเสริม: ฟอร์มติดต่อเบื้องต้น

**สถานะ: บทเสริม (Enrichment) · เวลาแนะนำ 25 นาที**

บทนี้สร้างเฉพาะส่วนรับข้อมูลใน Browser การส่งอีเมล บันทึกฐานข้อมูล ป้องกัน spam และประมวลผลข้อมูลต้องมีระบบฝั่ง Server ซึ่งอยู่นอกขอบเขตเวิร์กชอป

## เป้าหมาย

สร้างฟอร์มที่ใช้คีย์บอร์ดได้ มี label เชื่อมกับช่องกรอก และสังเกต validation พื้นฐานที่ Browser ทำให้

## สถานะเริ่มต้น

ใช้ `index.html` ร้านกาแฟบ้านดอย แล้วเพิ่มฟอร์มใน `<section id="contact-form">` ภายใน `<main>` ก่อนปิด `</main>`

## ลงมือ

```html
<section id="contact-form">
  <h2>สอบถามเมล็ดกาแฟ</h2>
  <form action="" method="get">
    <p>
      <label for="customer-name">ชื่อผู้ติดต่อ</label>
      <input id="customer-name" name="name" type="text" autocomplete="name" required>
    </p>

    <p>
      <label for="customer-email">อีเมล</label>
      <input id="customer-email" name="email" type="email" autocomplete="email" required>
    </p>

    <p>
      <label for="question">คำถาม</label>
      <textarea id="question" name="question" rows="5" required></textarea>
    </p>

    <button type="submit">ตรวจข้อมูล</button>
  </form>
</section>
```

<script setup>
const formsExample = {
  html: `<section id="contact-form">
  <h2>สอบถามเมล็ดกาแฟ</h2>
  <form action="" method="get">
    <p>
      <label for="customer-name">ชื่อผู้ติดต่อ</label>
      <input id="customer-name" name="name" type="text" autocomplete="name" required>
    </p>
    <p>
      <label for="customer-email">อีเมล</label>
      <input id="customer-email" name="email" type="email" autocomplete="email" required>
    </p>
    <p>
      <label for="question">คำถาม</label>
      <textarea id="question" name="question" rows="5" required></textarea>
    </p>
    <button type="submit">ตรวจข้อมูล</button>
  </form>
</section>`
}
</script>

<LivePreview v-bind="formsExample" height="360px" title="ฟอร์มติดต่อ — ลองกดปุ่มโดยไม่กรอกอะไรดูข้อความ required" />

## สิ่งที่แต่ละส่วนทำ

| ส่วน | หน้าที่ |
|---|---|
| `label for="customer-email"` | เชื่อมข้อความอธิบายกับ `id="customer-email"` |
| `name` | ชื่อ key ที่ใช้เมื่อ Browser เตรียมข้อมูลส่ง |
| `type="email"` | บอกชนิดข้อมูลและเปิด validation รูปแบบพื้นฐาน |
| `autocomplete` | ช่วย Browser เสนอข้อมูลที่ผู้ใช้เคยอนุญาตให้จำ |
| `required` | ห้ามส่งเมื่อช่องยังว่าง |
| `method="get"` | ใช้เพื่อสังเกตข้อมูลใน URL เท่านั้น ไม่เหมาะกับข้อมูลลับ |

::: warning อย่าใส่ข้อมูลจริงหรือข้อมูลลับ
ตัวอย่างนี้ไม่มี Server รับข้อมูล ปุ่ม submit อาจ reload หน้าและแสดงค่าที่กรอกใน URL เพราะใช้ `get` ใช้ข้อมูลสมมติเท่านั้น และอย่าใช้ GET ส่งรหัสผ่านหรือข้อมูลอ่อนไหว
:::

## ทดลองพฤติกรรม Browser

1. กดปุ่มโดยไม่กรอกอะไร สังเกตข้อความ required
2. กรอกอีเมลที่ไม่มี `@` แล้วกดอีกครั้ง
3. กรอกข้อมูลสมมติให้ครบแล้ว submit
4. สังเกตว่า Browser ตรวจเพียงรูปแบบพื้นฐาน ไม่ได้ส่งข้อความให้ร้านจริง

## ผลที่ควรเห็น

- คลิกข้อความ label แล้ว focus ย้ายไปช่องที่เกี่ยวข้อง
- กด `Tab` ผ่านช่องกรอกตามลำดับบนหน้า
- Browser ป้องกันการ submit เมื่อช่อง required ว่างหรือ email ผิดรูปแบบ
- เมื่อข้อมูลผ่าน หน้า reload เพราะยังไม่มี backend จัดการ

## จุดที่พลาดบ่อย

- `for` ของ `<label>` สะกดไม่ตรงกับ `id` ของ input เช่น `for="customer_email"` แต่ input มี `id="customer-email"`
- ใช้ `id` ซ้ำกันสองช่อง ทำให้ label เชื่อมกับช่องแรกที่เจอเท่านั้น
- ลืม `name` ให้ input ทำให้ค่านั้นไม่ถูกส่งไปกับฟอร์มเลย
- ใช้ `<div>` ครอบ label กับ input แทน `<label>` ทั้งที่ยังต้องมี `for`/`id` เชื่อมกันอยู่ดี
- ใช้ `method="post"` แล้วคาดว่าข้อมูลถูกบันทึกจริง ทั้งที่ยังไม่มี backend รับค่า

## Checkpoint

- [ ] `for` ทุกตัวตรงกับ `id` ที่ไม่ซ้ำกัน
- [ ] ช่องที่ต้องกรอกมี `required` และมี `name`
- [ ] ปุ่มส่งระบุ `type="submit"`
- [ ] อธิบายได้ว่า client-side validation ไม่แทน server-side validation

## บันทึกแหล่งข้อมูล

โครงสร้าง form controls และ label อ้างจาก [WHATWG — Forms](https://html.spec.whatwg.org/multipage/forms.html)

