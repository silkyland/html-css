---
title: เชื่อมโปรเจกต์กับ GitHub
---

# GitHub: เชื่อม Local กับ Remote

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 10 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะแยก local repository กับ remote repository และตรวจการเชื่อมต่อชื่อ `origin` ได้

## สถานะเริ่มต้น

ตรวจ local repository ก่อน:

```bash
git status
git log --oneline -1
```

ต้องอยู่ branch `main` และเห็น baseline commit ชื่อ `Import workshop website baseline` หนึ่งรายการ ส่วนอีกสอง commit จะเกิดจาก Capstone หลัง push ครั้งแรก

ขั้นตอนนี้ต้องใช้อินเทอร์เน็ตและบัญชี GitHub แต่ **commit ในเครื่องยังปลอดภัยอยู่** แม้ push ยังไม่สำเร็จ

![แผนภาพเครื่อง local ส่งประวัติขึ้น GitHub remote](/images/workshop/git-local-remote.webp)

## Local กับ Remote ต่างกันอย่างไร

| | Local | Remote (GitHub) |
|---|---|---|
| อยู่ที่ไหน | เครื่องของคุณ | เซิร์ฟเวอร์ออนไลน์ |
| ใช้เมื่อไร | แก้ไฟล์, `add`, `commit` | สำรองและแบ่งปัน |
| ชื่อที่พบบ่อย | โฟลเดอร์โปรเจกต์ | `origin` |

## ลงมือ

### 1. สร้าง repository ว่างบน GitHub

1. เข้าสู่ระบบ [GitHub](https://github.com/)
2. สร้าง repository ชื่อ `my-shop-profile`
3. เลือก **Public** หากต้องการส่งเป็น portfolio หรือ **Private** หากต้องการจำกัดผู้ชม
4. เพราะเรามี commit ในเครื่องแล้ว ให้สร้าง repository ปลายทางแบบ**ว่าง** — ไม่เพิ่ม README, `.gitignore` หรือ license ในขั้นตอนนี้
5. คัดลอก HTTPS URL ซึ่งมีรูปแบบ `https://github.com/USERNAME/my-shop-profile.git`

### 2. เชื่อมชื่อ `origin`

กลับมาที่ Terminal แล้วแทน `USERNAME` ด้วยชื่อบัญชีจริง:

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/my-shop-profile.git
git remote -v
```

ผลที่ควรเห็น:

```text
origin  https://github.com/USERNAME/my-shop-profile.git (fetch)
origin  https://github.com/USERNAME/my-shop-profile.git (push)
```

`origin` เป็นเพียงชื่อย่อมาตรฐานที่นิยมใช้กับ remote หลัก ส่วน `fetch` และ `push` ในตัวอย่างนี้ชี้ URL เดียวกัน

::: warning อย่าใส่รหัสผ่านหรือ token ลงใน URL
ใช้ URL ธรรมดาตามตัวอย่าง และให้เครื่องมือยืนยันตัวตนถามเมื่อ `push` ห้ามเผยแพร่ token ในคำสั่ง ภาพหน้าจอ หรือไฟล์โปรเจกต์
:::

::: tip ทำไมต้องเป็น repo ว่าง?
ถ้าสร้าง README บน GitHub ก่อน แล้วค่อยเชื่อมจากเครื่องที่มี commit อยู่แล้ว ประวัติสองฝั่งจะไม่ตรงกัน และ `push` อาจถูกปฏิเสธ ในหลักสูตรนี้จึงเริ่มจาก repo ว่างแล้วส่งจากเครื่องเป็นหลัก
:::

## ผลที่ควรเห็น

`git remote -v` แสดง `origin` สองบรรทัดโดยไม่มี token และ URL เปิดไปยัง repository ของตัวเองได้

ยัง**ไม่ได้ส่งไฟล์** จนกว่าจะ `push` ในบทถัดไป

## จุดที่พลาดบ่อย

- ลืมแทน `USERNAME` ด้วยชื่อบัญชีจริง
- สร้าง README บน GitHub ก่อน ทำให้ประวัติชนกัน
- ใส่ token ใน URL แล้วเผลอแปะลงแชทหรือภาพหน้าจอ

## Checkpoint

- [ ] `git log --oneline -1` แสดง baseline commit ในเครื่อง
- [ ] `git remote -v` แสดง username/repository ของตนเอง ไม่ใช่ `USERNAME`
- [ ] อธิบายได้ว่าเพิ่ม remote แล้วยังไม่ได้ส่งไฟล์ จนกว่าจะ `push`

หากเห็น `remote origin already exists` ให้ดู [Remote มีอยู่แล้ว](/workshop/troubleshooting#remote-origin-มีอยู่แล้ว)

## ไปต่อ

เมื่อเชื่อม `origin` แล้ว ไปที่ [`git push`](/git/push) เพื่อส่งประวัติขึ้น GitHub

## แหล่งอ้างอิง

- [Git: git-remote](https://git-scm.com/docs/git-remote)
- [GitHub Docs: adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
