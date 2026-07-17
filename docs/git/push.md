# `git push`: ส่ง Commit ขึ้น GitHub

ส่ง Branch `main` ขึ้น Remote ชื่อ `origin` ครั้งแรก:

```bash
git push -u origin main
```

ครั้งต่อไปใช้คำสั่งสั้น ๆ:

```bash
git push
```

ลำดับงานประจำวันที่ควรจำ:

```bash
git status
git add .
git commit -m "Update product details"
git push
```

::: tip
หาก GitHub ขอให้ยืนยันตัวตน ให้ทำตามขั้นตอนใน Browser หรือใช้วิธีที่ผู้สอนกำหนด
:::

::: details ภาพประกอบที่แนะนำ
Diagram `Local Repository → GitHub` และ Screenshot ไฟล์ที่ปรากฏบน GitHub
:::
