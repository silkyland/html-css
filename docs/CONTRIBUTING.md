# Curriculum authoring contract

ไฟล์ใน `docs/` คือแหล่งเนื้อหาหลักเพียงชุดเดียว คู่มือรุ่นเก่าใน `archive/` ห้ามแก้เพื่อใช้สอนต่อ

## โครงบทหลัก

บทหลักทุกบทต้องมีหัวข้อต่อไปนี้และใช้ชื่อตามนี้เพื่อให้ `scripts/check-curriculum.mjs` ตรวจได้:

1. `## เป้าหมาย`
2. `## สถานะเริ่มต้น` หรือ `## เริ่มจาก`
3. `## ลงมือ...`
4. `## ผลที่ควรเห็น`
5. `## Checkpoint...`

เพิ่ม “จุดที่พลาดบ่อย” และ “แหล่งอ้างอิง” เมื่อเนื้อหาต้องการ ข้อเท็จจริงด้านมาตรฐานต้องอ้างแหล่งปฐมภูมิ เช่น CERN, W3C, WHATWG หรือ git-scm

## เส้นทางชิ้นงาน

- ใช้โปรเจกต์ `my-shop-profile` และแบรนด์ “กาแฟบ้านดอย” ต่อเนื่องทุกบทหลัก
- HTML สะสมใน `index.html`, CSS สะสมใน `style.css`, Git เริ่มในโฟลเดอร์เดิม
- โค้ดที่แสดงต้อง copy แล้วให้ผลเดียวกับ preview ห้ามใช้ path หรือ asset ที่ไม่มีจริง
- หน้า Core ต้องทำได้ในเวลาตาม agenda; Forms, Tables, Grid และ Clone เป็น Enrichment

## รูปภาพและ accessibility

- เก็บภาพ learner-facing ใน `docs/public/images/workshop/`
- ทุก `<img>`/Markdown image ต้องมี alt ที่อธิบายสาระ ไม่บรรยายคำว่า “รูปภาพ” ซ้ำ
- ภาพตกแต่งใช้ `alt=""`; ห้ามสร้าง alt เพื่อยัด keyword
- `LivePreview` ต้องคง `sandbox` และ `title`; หลักสูตรนี้ไม่อนุญาต script ใน preview

## ตรวจงาน

```bash
npm run docs:check
npm run docs:build
npm test
```

ก่อนส่ง ให้ทำ manual path ตั้งแต่ Setup → HTML → CSS → Git → Capstone ในโฟลเดอร์ใหม่อย่างน้อยหนึ่งครั้ง
