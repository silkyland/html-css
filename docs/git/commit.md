---
title: git commit
---

# `git commit`: สร้างจุดบันทึก

ก่อน Commit ครั้งแรก ให้ตั้งชื่อและอีเมล:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

สร้าง Commit:

```bash
git commit -m "Create shop profile page"
```

ดูประวัติแบบย่อ:

```bash
git log --oneline
```

## ข้อความ Commit ที่ดี

- บอกให้ชัดว่าเปลี่ยนอะไร
- สั้นและอ่านเข้าใจง่าย
- ตัวอย่าง: `Add contact form` หรือ `Improve mobile layout`

::: details ภาพประกอบที่แนะนำ
Screenshot ผลลัพธ์ `git log --oneline`
:::
