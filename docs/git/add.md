# `git add`: เลือกไฟล์สำหรับจุดบันทึก

ตรวจสอบสถานะของไฟล์ก่อน:

```bash
git status
```

เลือกไฟล์ที่ต้องการ:

```bash
git add index.html
git add style.css
```

หรือเลือกไฟล์ที่เปลี่ยนแปลงทั้งหมดในโฟลเดอร์:

```bash
git add .
```

ตรวจสอบอีกครั้ง:

```bash
git status
```

::: tip
`git add` ยังไม่ใช่การบันทึกถาวร แต่เป็นการเตรียมไฟล์ไว้สำหรับ Commit ถัดไป
:::

::: details ภาพประกอบที่แนะนำ
Diagram `Working Directory → Staging Area`
:::
