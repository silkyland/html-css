---
title: git clone (บทเสริม)
---

# `git clone`: เส้นทางเริ่มต้นอีกแบบ

> **บทเสริม (Enrichment / alternate start)** — เลือกทำบทนี้แทน `git init` เมื่อ repository มีอยู่บน GitHub ก่อนแล้ว ห้าม clone ต่อท้าย core flow ลงใน `my-shop-profile` เดิม

## เป้าหมาย

เมื่อจบบทนี้ คุณจะเลือกได้ว่าควรใช้ `init` หรือ `clone` และดาวน์โหลด repository ไปยังโฟลเดอร์ใหม่โดยไม่ซ้อน repository

## เริ่มจาก

เปิด Terminal ที่โฟลเดอร์แม่ เช่น `Desktop` ไม่ใช่ภายใน `my-shop-profile` ตรวจด้วย:

```bash
pwd
ls
```

ถ้ามีโฟลเดอร์ `my-shop-profile` อยู่แล้ว ให้ใช้ชื่อปลายทางอื่นเพื่อไม่ให้ชนกัน

## ลงมือทำ

```bash
git clone https://github.com/USERNAME/my-shop-profile.git my-shop-profile-clone
cd my-shop-profile-clone
git status
git remote -v
git log --oneline -3
```

`clone` ทำสามเรื่องให้: ดาวน์โหลดไฟล์, ดาวน์โหลดประวัติ และสร้าง remote `origin` พร้อม upstream ให้ branch เริ่มต้น จึงไม่ต้อง `git init` หรือ `git remote add origin` ซ้ำ

## ผลที่ควรเห็น

```text
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

และ `git remote -v` แสดง URL ที่ clone มา

## Checkpoint

- [ ] โฟลเดอร์ใหม่ชื่อ `my-shop-profile-clone` มีไฟล์เว็บไซต์
- [ ] `git status` ทำงานและ working tree clean
- [ ] `git remote -v` มี `origin` โดยไม่ได้เพิ่มเอง
- [ ] อธิบายได้ว่า `init` เริ่มประวัติในโฟลเดอร์ที่มีอยู่ ส่วน `clone` คัดลอก repository พร้อมประวัติ

## แหล่งอ้างอิง

- [Git 2.54: git-clone](https://git-scm.com/docs/git-clone)
- [Git 2.54: git-init](https://git-scm.com/docs/git-init)

