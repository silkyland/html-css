---
title: git clone
---

# `git clone`: ดาวน์โหลด Repository มาทำงาน

ใช้เมื่อ Repository มีอยู่บน GitHub แล้ว และเราต้องการสำเนามาไว้ในเครื่อง

```bash
git clone https://github.com/USERNAME/my-shop-profile.git
cd my-shop-profile
```

ตรวจสอบ Remote:

```bash
git remote -v
```

## `init` กับ `clone` ต่างกันอย่างไร?

- `git init` เริ่ม Git ในโฟลเดอร์ที่มีอยู่ในเครื่อง
- `git clone` ดาวน์โหลด Repository พร้อมประวัติจาก Remote

::: tip
โดยทั่วไปไม่ต้องใช้ `git init` ซ้ำภายในโฟลเดอร์ที่ Clone มาแล้ว
:::

::: details ภาพประกอบที่แนะนำ
Diagram `GitHub → git clone → โฟลเดอร์ในเครื่อง`
:::
