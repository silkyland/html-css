# โลกของเว็บไซต์ทำงานอย่างไร?

## เมื่อเราเปิดเว็บไซต์ เกิดอะไรขึ้นบ้าง?

1. ผู้ใช้เปิด **Browser** และพิมพ์ที่อยู่เว็บไซต์
2. Browser ส่งคำขอ (Request) ไปยัง **Server**
3. Server ประมวลผลและส่งคำตอบ (Response) กลับมา
4. Browser แสดงผล HTML, CSS และ JavaScript ให้ผู้ใช้เห็น

## ส่วนประกอบสำคัญ

- **Client:** อุปกรณ์และ Browser ของผู้ใช้
- **Front-end:** สิ่งที่ผู้ใช้มองเห็นและโต้ตอบ
- **Back-end:** ระบบเบื้องหลัง เช่น การคำนวณและกฎทางธุรกิจ
- **Database:** พื้นที่จัดเก็บข้อมูล เช่น สินค้า ลูกค้า และคำสั่งซื้อ

```text
ผู้ใช้ → Browser → Internet → Server → Database
ผู้ใช้ ← หน้าเว็บไซต์ ← Response ← Server
```

::: tip
วันนี้เราจะเน้น Front-end ด้วย HTML และ CSS
:::

::: details ภาพประกอบที่แนะนำ
Diagram แบบ Client → Server → Database พร้อมลูกศร Request/Response
:::
