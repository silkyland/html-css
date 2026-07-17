---
title: Color Palette
---

# Color Palette — เลือกชุดสีร้าน

เครื่องมือช่วยเลือกชุดสีสำหรับ `style.css` ของโปรเจกต์ `my-shop-profile` มีประมาณ 50 ชุด ให้ดูตัวอย่างแล้วคัดลอกตัวแปร CSS ไปวางที่ `:root`

ใช้ร่วมกับบท [สีและตัวอักษร](/css/colors-fonts) และช่วง Capstone ที่ปรับแบรนด์เป็นของตนเอง

## วิธีใช้

1. กรองตามหมวด หรือค้นหาชื่อชุดสี
2. คลิกชุดสีเพื่อดูตัวอย่างหน้าร้านด้านซ้าย
3. กด **คัดลอก CSS ตัวแปร** แล้ววางทับบล็อก `:root` ใน `style.css`
4. บันทึกไฟล์ แล้ว reload หน้าเว็บของคุณ

::: tip ตรวจ contrast หลังเปลี่ยนสี
ชุดสีออกแบบให้อ่านง่ายโดยประมาณ แต่ยังควรตรวจด้วย DevTools หรือ [WAI Contrast Checker](https://www.w3.org/WAI/test-evaluate/tools/list/) โดยเฉพาะข้อความบนพื้น `--color-paper` และสีขาวบน `--color-brand`
:::

<ColorPalette />

## ความหมายของตัวแปร

| ตัวแปร | ใช้กับ |
|---|---|
| `--color-paper` | พื้นหลังหน้า |
| `--color-surface` | พื้นการ์ด / กล่องเนื้อหา |
| `--color-ink` | ข้อความหลัก |
| `--color-brand` | header, หัวเรื่อง, โทนแบรนด์ |
| `--color-accent` | ราคา จุดเน้น |
| `--color-focus` | กรอบ `:focus-visible` |

## ไปต่อ

- กลับไปบท [สีและตัวอักษร](/css/colors-fonts) เพื่อใส่ focus และ typography
- หรือไป [โจทย์ Capstone](/workshop/project) เพื่อปรับแบรนด์ทั้งหน้า
