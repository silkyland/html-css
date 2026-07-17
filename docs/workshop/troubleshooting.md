---
title: คู่มือแก้ปัญหา
---

# คู่มือแก้ปัญหาแบบดูอาการ

## เป้าหมาย

หาสาเหตุจากข้อความจริง แก้ทีละจุด แล้วรันคำสั่งตรวจซ้ำ ห้ามลบ `.git` หรือสร้างโปรเจกต์ใหม่เพื่อหนีอาการ เพราะอาจทำให้ประวัติหาย

## อยู่ผิดโฟลเดอร์

**อาการ:** `fatal: not a git repository` หรือ `ls`/`dir` ไม่เห็น `index.html`

```bash
pwd
ls
```

ใช้ `cd` กลับไป `my-shop-profile` แล้วตรวจอีกครั้ง ตัวอย่างเมื่อโฟลเดอร์อยู่บน Desktop:

```bash
cd Desktop/my-shop-profile
git status
```

อย่าคัดลอก path ของคนอื่น ให้ดูตำแหน่งจริงจาก file explorer หรือเปิด Terminal จากโฟลเดอร์ใน VS Code

## ไฟล์ที่สั่งเพิ่มหาไม่พบ

**อาการ:** `pathspec 'index.html' did not match any files`

ตรวจชื่อและตัวพิมพ์เล็ก/ใหญ่:

```bash
pwd
ls
git status --short
```

ถ้าไฟล์ชื่อ `Index.html` ให้เปลี่ยนชื่อให้ตรงกับหลักสูตร หรือใช้ชื่อจริงใน `git add` ระบบบางชนิดถือว่า `Index.html` กับ `index.html` คนละไฟล์

## รูปภาพไม่แสดง

1. เปิด DevTools → Network/Console แล้วดู path ที่ 404
2. ตรวจว่าไฟล์อยู่ใต้ `images/` และตัวพิมพ์ตรงกับ `src`
3. ใช้ path สัมพัทธ์จาก `index.html` เช่น `images/shop-front.webp` ไม่ใช่ path จากเครื่องผู้สอน
4. เปิดไฟล์ผ่าน browser ใหม่หลังบันทึก

```html
<img src="images/shop-front.webp" alt="หน้าร้านของแบรนด์">
```

## CSS ไม่ทำงาน

ตรวจว่า `<link>` อยู่ใน `<head>` และชื่อไฟล์ตรง:

```html
<link rel="stylesheet" href="style.css">
```

จากนั้นเปิด DevTools → Network แล้ว reload; `style.css` ต้องไม่เป็น 404 หากไฟล์โหลดแล้ว ให้ Inspect element และดูว่า rule ถูก selector อื่นทับหรือพิมพ์ syntax ผิดหรือไม่

## Nothing to commit

**อาการ:** `nothing to commit, working tree clean`

นี่ไม่ใช่ error หากเพิ่ง commit เสร็จ แต่ถ้าคาดว่าแก้งานแล้ว:

```bash
git status --short
git diff
```

- ไม่มี output: ไฟล์อาจยังไม่ได้ Save หรือแก้ไฟล์คนละโฟลเดอร์
- ขึ้น `M`: มีการแก้แต่ยังไม่ stage ให้ตรวจ `git diff` แล้ว `git add <ชื่อไฟล์>`
- ขึ้น `M` ช่องซ้าย: stage แล้ว ให้ตรวจ `git diff --cached` และ commit

## Remote origin มีอยู่แล้ว

**อาการ:** `error: remote origin already exists.`

อย่าเพิ่มซ้ำ ให้ดูก่อน:

```bash
git remote -v
```

หาก URL ถูกต้อง ไม่ต้องทำอะไร หากชี้ repository ผิด ให้เปลี่ยนเฉพาะ URL:

```bash
git remote set-url origin https://github.com/USERNAME/my-shop-profile.git
git remote -v
```

## Authentication rejected

**อาการ:** `Authentication failed`, ขอ password ซ้ำ หรือ push ถูกปฏิเสธเพราะ credential

1. ยืนยันว่า browser เข้าบัญชี GitHub ที่เป็นเจ้าของ repository
2. ตรวจ `git remote -v` ว่า username/repository ถูกต้อง
3. ใช้ browser authentication จาก Git Credential Manager หรือรัน `gh auth login` หากห้องเรียนติดตั้ง GitHub CLI ไว้แล้ว
4. อย่าใช้รหัสผ่านบัญชีเป็น Git password และอย่าแปะ token ใน URL
5. หากยังไม่ผ่าน เก็บ local commits ไว้ ส่ง `git log --oneline -3` เป็นหลักฐานชั่วคราว แล้วให้ผู้สอนช่วยหลังชั้นเรียน

อ้างอิง: [GitHub Docs: caching credentials](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git)

## Push ถูกปฏิเสธเพราะ remote มีงานก่อน

**อาการ:** `[rejected] main -> main (fetch first)`

มักเกิดจากสร้าง README บน GitHub ทั้งที่ local มี commit แล้ว หยุดก่อนและให้ผู้สอนตรวจกราฟ:

```bash
git log --oneline --all --graph --decorate
```

อย่าใช้ `git push --force` ในเวิร์กชอป เพราะอาจเขียนทับประวัติบน remote วิธีแก้ขึ้นกับว่าประวัติใดต้องเก็บ จึงควรตัดสินจากกราฟจริง

## ตรวจว่ากลับมาปกติแล้ว

หลังแก้ทุกอาการ ให้รัน:

```bash
git status
git remote -v
git log --oneline --decorate -3
```

ผ่านเมื่ออยู่ branch `main`, ไม่มีงานค้างที่ไม่ตั้งใจ, remote ถูก URL และเห็น commit ตามที่คาด

