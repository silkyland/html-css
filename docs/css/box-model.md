---
title: Box Model
---

# Box Model: ทำให้เมนูอ่านง่ายและไม่ล้น

> **CORE · 15 นาที** — บทนี้เปลี่ยนการ์ดเมนูจริงในโปรเจกต์ ไม่ได้สร้างกล่องตัวอย่างแยกอีกชุด

## เป้าหมายการเรียนรู้

- แยก `content`, `padding`, `border` และ `margin`
- อธิบายผลของ `box-sizing: border-box`
- ใช้หน่วย `px`, `%`, `rem` และ `ch` เฉพาะงานที่เหมาะ
- ตรวจและแก้ horizontal overflow ขั้นต้น

## สถานะเริ่มต้น

การ์ดมี class และสีแล้ว แต่ข้อความชิดขอบ การ์ดไม่แยกจากกัน และขนาดอาจคำนวณยาก

## กล่อง 4 ชั้น

จากด้านในออกด้านนอก ได้แก่ **content → padding → border → margin** พื้นหลังของ element วาดใต้ content และ padding ส่วน margin เป็นช่องว่างนอกขอบ ([W3C CSS Box Model Level 3](https://www.w3.org/TR/css-box-3/))

<img src="/images/workshop/css-before-after.webp" alt="เปรียบเทียบหน้าเว็บร้านกาแฟก่อนตกแต่งกับหลังใช้สี ระยะห่าง และการจัดวางด้วย CSS" loading="lazy">

> ภาพนี้ใช้เปรียบเทียบ “ก่อน–หลังใส่ CSS” ระหว่างอธิบายกล่อง ให้เปิด DevTools → Elements → Computed เพื่อดูแผนภาพ Box Model ที่คำนวณจากการ์ดจริงด้วย

## ลงมือทำ: ปรับกล่องทั้งหน้า

เพิ่มโค้ดนี้ต่อท้าย `style.css`:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

main {
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
  padding-block: 2rem;
}

.product-card {
  padding: 1.25rem;
  border: 1px solid #d8c3ad;
  border-radius: 0.75rem;
  background-color: #ffffff;
}

.product-card + .product-card {
  margin-top: 1rem;
}

p {
  max-width: 65ch;
}
```

`border-box` ทำให้ `width` รวม content, padding และ border จึงคาดเดาขนาดได้ง่ายขึ้น ส่วน margin ยังอยู่นอก width

## เลือกหน่วยแบบมีเหตุผล

| หน่วย | เหมาะกับ | ตัวอย่างในบท |
|---|---|---|
| `px` | เส้นบางที่ต้องการค่าคงที่ | `border: 1px` |
| `%` | สัดส่วนเทียบกับพื้นที่อ้างอิง | ส่วนหนึ่งของ `100%` |
| `rem` | ระยะและขนาดที่สัมพันธ์กับตัวอักษรราก | `padding: 1.25rem` |
| `ch` | จำกัดความยาวบรรทัดโดยประมาณ | `max-width: 65ch` |

อย่าจำว่า “หน่วยหนึ่งดีที่สุดทุกกรณี” ให้เลือกตามสิ่งที่ต้องสัมพันธ์กัน ข้อกำหนด Values and Units นิยามทั้ง absolute และ relative lengths ไว้แยกกัน ([W3C CSS Values and Units Level 4](https://www.w3.org/TR/css-values-4/))

<script setup>
const example = {
  html: `<main><article class="product-card"><h2>อเมริกาโน่น้ำผึ้ง</h2><p>กาแฟชุมชนกับน้ำผึ้งป่า</p><p class="price">65 บาท</p></article></main>`,
  css: `*,*::before,*::after{box-sizing:border-box}body{margin:0;background:#fffaf2;color:#2f241f}main{width:min(100% - 2rem,60rem);margin-inline:auto;padding-block:2rem}.product-card{padding:1.25rem;border:1px solid #d8c3ad;border-radius:.75rem;background:#fff}.price{color:#216e39;font-weight:700}p{max-width:65ch}`
}
</script>

<LivePreview v-bind="example" height="260px" />

## ผลที่ควรเห็น

เนื้อหาไม่ติดขอบจอ การ์ดมีพื้นที่หายใจ เส้นขอบ และมุมโค้ง โดยไม่เกิดแถบเลื่อนแนวนอน

## จุดที่พลาดบ่อย

- กำหนด `width: 100%` พร้อม padding แล้วล้น เพราะยังใช้ `content-box`
- ใช้ margin เพื่อดันเนื้อหาภายใน ทั้งที่ควรใช้ padding
- ใส่ `height` ตายตัวแล้วข้อความล้นเมื่อผู้ใช้ขยายตัวอักษร; ใช้ `min-height` หรือปล่อยให้เนื้อหากำหนดความสูง
- ลืมหน่วย เช่น `padding: 16` ซึ่งไม่ใช่ค่าความยาวที่ใช้ได้ (ยกเว้นศูนย์)

## Checkpoint

- [ ] DevTools แสดง `box-sizing: border-box` บน `.product-card`
- [ ] การ์ดมี padding อยู่ด้านในและระยะระหว่างการ์ดอยู่ด้านนอก
- [ ] ย่อหน้าต่างเหลือประมาณ 320px แล้วไม่มี horizontal scrollbar
- [ ] ลองซูม 200% ข้อความยังอยู่ในกล่องและอ่านได้

## แหล่งอ้างอิงมาตรฐาน

- [W3C CSS Box Model Level 3](https://www.w3.org/TR/css-box-3/)
- [W3C CSS Values and Units Level 4](https://www.w3.org/TR/css-values-4/)
