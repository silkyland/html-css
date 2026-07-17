---
title: สร้าง Repository บน GitHub
---

# สร้าง Repository บน GitHub

1. เข้าสู่ระบบที่ [github.com](https://github.com)
2. เลือก **New repository**
3. ตั้งชื่อ `my-shop-profile`
4. เลือก Public หรือ Private ตามต้องการ
5. หากมีไฟล์ในเครื่องแล้ว ไม่ต้องเลือกสร้าง README
6. กด **Create repository**

เชื่อมโปรเจกต์ในเครื่องกับ GitHub:

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/my-shop-profile.git
git remote -v
```

::: tip
เปลี่ยน `USERNAME` เป็นชื่อบัญชี GitHub ของตนเอง
:::

::: details ภาพประกอบที่แนะนำ
Screenshot หน้าสร้าง Repository และตำแหน่ง URL ของ Repository
:::
