---
title: git clone (บทเสริม)
---

# `git clone`: เส้นทางเริ่มต้นอีกแบบ

**สถานะ: บทเสริม (Enrichment) · เวลาแนะนำ 15 นาที · ไม่อยู่ในเกณฑ์ผ่าน core**

เลือกทำบทนี้**แทน** `git init` เมื่อ repository มีอยู่บน GitHub ก่อนแล้ว  
**ห้าม** clone ต่อท้าย core flow ลงใน `my-shop-profile` เดิม — จะซ้อน repository และสับสน

## เป้าหมาย

เมื่อจบบทนี้ คุณจะเลือกได้ว่าควรใช้ `init` หรือ `clone` และดาวน์โหลด repository ไปยังโฟลเดอร์ใหม่โดยไม่ซ้อน repository

## สถานะเริ่มต้น

เปิด Terminal ที่โฟลเดอร์แม่ เช่น `Desktop` ไม่ใช่ภายใน `my-shop-profile` ตรวจด้วย:

```bash
pwd
ls
```

ถ้ามีโฟลเดอร์ `my-shop-profile` อยู่แล้ว ให้ใช้ชื่อปลายทางอื่นเพื่อไม่ให้ชนกัน

## เมื่อไหร่ใช้ `init` เมื่อไหร่ใช้ `clone`

| สถานการณ์ | เลือก |
|---|---|
| มีโฟลเดอร์เว็บไซต์ในเครื่องแล้ว อยากเริ่มเก็บประวัติ | `git init` (เส้นทางหลักของวันนี้) |
| มี repository บน GitHub แล้ว อยากได้ทั้งไฟล์และประวัติลงเครื่องใหม่ | `git clone` |
| อยากสำเนาโปรเจกต์เพื่อนมาฝึก (ไม่ทับงานตัวเอง) | `git clone` ไปโฟลเดอร์ชื่อใหม่ |

![เปรียบเทียบการทำงานบนเครื่องกับ remote บน GitHub](/images/workshop/git-local-remote.webp)

## ลงมือ

```bash
git clone https://github.com/USERNAME/my-shop-profile.git my-shop-profile-clone
cd my-shop-profile-clone
git status
git remote -v
git log --oneline -3
```

แทน `USERNAME` ด้วยเจ้าของ repository จริง

`clone` ทำสามเรื่องให้พร้อมกัน:

1. ดาวน์โหลดไฟล์
2. ดาวน์โหลดประวัติ
3. สร้าง remote `origin` พร้อม upstream ให้ branch เริ่มต้น

จึง**ไม่ต้อง** `git init` หรือ `git remote add origin` ซ้ำ

## ผลที่ควรเห็น

```text
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

และ `git remote -v` แสดง URL ที่ clone มา

## จุดที่พลาดบ่อย

- clone เข้าไปข้างในโฟลเดอร์ที่มี `.git` อยู่แล้ว → ได้ repo ซ้อน repo
- ตั้งชื่อปลายทางซ้ำกับโฟลเดอร์ที่มีอยู่ → คำสั่งล้มเหลวหรือทับงาน
- คิดว่า clone แล้วต้อง `init` อีกครั้ง

## Checkpoint

- [ ] โฟลเดอร์ใหม่ชื่อ `my-shop-profile-clone` มีไฟล์เว็บไซต์
- [ ] `git status` ทำงานและ working tree clean
- [ ] `git remote -v` มี `origin` โดยไม่ได้เพิ่มเอง
- [ ] อธิบายได้ว่า `init` เริ่มประวัติในโฟลเดอร์ที่มีอยู่ ส่วน `clone` คัดลอก repository พร้อมประวัติ

## ไปต่อ

ถ้ายังอยู่ในเส้นทางหลักของวันนี้ ให้กลับไปที่ [`git init`](/git/init) และใช้โฟลเดอร์ `my-shop-profile` เดิม

## แหล่งอ้างอิง

- [Git: git-clone](https://git-scm.com/docs/git-clone)
- [Git: git-init](https://git-scm.com/docs/git-init)
