---
title: เว็บไซต์ทำงานอย่างไร
---

# Browser และ Server ทำงานร่วมกันอย่างไร

**สถานะ: บทหลัก (Core) · เวลาแนะนำ 20 นาที**

## เป้าหมาย

เมื่อจบบทนี้ คุณจะแยก URL, request, response, Browser และ Server ได้ และใช้ Developer Tools ดูไฟล์ที่หน้าเว็บโหลดได้

## สถานะเริ่มต้น

เปิด `my-shop-profile/index.html` ใน Browser ไว้ บท setup ใช้ไฟล์ในเครื่อง จึงยังไม่ต้องมี Server ภายนอก

## ภาพรวมหนึ่งรอบการเปิดเว็บ

เมื่อเปิดเว็บออนไลน์ กระบวนการอย่างย่อคือ:

1. ผู้ใช้ใส่ **URL** ซึ่งเป็นที่อยู่ของทรัพยากรบน Web
2. Browser ส่ง **request** ผ่าน Internet ไปยัง Server
3. Server ส่ง **response** กลับมา โดยอาจมี HTML, CSS, รูปภาพ หรือไฟล์ชนิดอื่น
4. Browser อ่าน HTML เพื่อสร้างโครงสร้าง อ่าน CSS เพื่อกำหนดหน้าตา แล้วแสดงผลบนจอ

```text
ผู้ใช้ → URL → Browser → request → Server
ผู้ใช้ ← หน้าเว็บ ← Browser ← response ← Server
```

> เส้นทางจริงมีรายละเอียดมากกว่านี้ เช่น DNS, TLS และ cache แต่ยังไม่จำเป็นต่อการสร้างเว็บหน้าแรก

## สามคำที่ทำงานร่วมกัน

| คำ | คำถามที่ตอบ | ตัวอย่างในโปรเจกต์ |
|---|---|---|
| **URL** | ทรัพยากรอยู่ที่ไหน | ที่อยู่ของหน้าเว็บหรือภาพ |
| **HTTP/HTTPS** | Browser และ Server ขอ–ส่งทรัพยากรกันอย่างไร | request และ response เมื่อเปิดเว็บออนไลน์ |
| **HTML** | เอกสารมีโครงสร้างและความหมายอย่างไร | หัวเรื่อง ย่อหน้า ลิงก์ และรูปภาพใน `index.html` |

HTTPS คือการสื่อสาร HTTP ที่มีการป้องกันระหว่างทาง ในเวิร์กชอปนี้เราเพียงสังเกต request/response ยังไม่ลงรายละเอียด protocol

## เปรียบเทียบกับไฟล์ในเครื่อง

ตอนนี้แถบที่อยู่ของคุณน่าจะขึ้นต้นด้วย `file://` หมายถึง Browser อ่าน `index.html` จากเครื่องโดยตรง เมื่อเว็บอยู่บน Server ที่ใช้ HTTPS ที่อยู่จะคล้าย `https://example.com/` แต่ Browser ยังทำหน้าที่อ่าน HTML และ CSS เช่นเดิม

## ลงมือ

### ดูสิ่งที่ Browser โหลด

1. เปิด [หน้า The World Wide Web project ที่ CERN เก็บไว้](https://info.cern.ch/hypertext/WWW/TheProject.html) เพื่อดูว่าหน้าเว็บยุคแรกเน้นเอกสารและลิงก์อย่างไร
2. เปิด Developer Tools ด้วย `F12` หรือ `Ctrl+Shift+I` (`Cmd+Option+I` บน macOS)
3. เปิดแท็บ **Network** แล้วกด reload
4. คลิกรายการเอกสารหลัก แล้วสังเกต URL, method, status และชนิดไฟล์
5. กลับมาเปิด `my-shop-profile/index.html` แล้วใช้แท็บ **Elements/Inspector** หา `<h1>กาแฟบ้านดอย</h1>`

หากอินเทอร์เน็ตในห้องไม่พร้อม ให้ข้ามข้อ 1–4 แล้วใช้ Elements กับไฟล์ local ได้ บท HTML/CSS ยังทำต่อได้ตามปกติ

## HTML ที่ Browser อ่าน

```html
<h1>กาแฟบ้านดอย</h1>
<p>กาแฟจากชุมชน เพื่อชุมชน</p>
```

Browser ไม่แสดงเครื่องหมาย `<` และ `>` เป็นข้อความ แต่ตีความ tag เพื่อสร้างโครงสร้างหน้า

## ผลที่ควรเห็น

- ใน Elements/Inspector มี `<html>`, `<head>` และ `<body>`
- `<h1>` ในเครื่องมือตรงกับหัวเรื่องบนหน้า
- เมื่อแก้ HTML ใน Developer Tools ผลเปลี่ยนชั่วคราว แต่หายเมื่อ reload เพราะยังไม่ได้แก้ไฟล์ต้นฉบับ

## Checkpoint

- [ ] ชี้ได้ว่าส่วนไหนคือ Browser และไฟล์ไหนคือ HTML
- [ ] แยกบทบาท URL, HTTP/HTTPS และ HTML ได้
- [ ] อธิบาย request/response ได้โดยไม่ต้องจำรายละเอียด protocol
- [ ] เปิด Elements หรือ Network และหา `index.html` ได้
- [ ] เข้าใจว่าการแก้ใน Developer Tools ไม่แทนการบันทึกไฟล์จริง

## บันทึกแหล่งข้อมูล

ภาพรวม Web ในฐานะระบบข้อมูลที่ทำงานบน Internet และจุดเริ่มต้นของ Browser/Server อ้างจาก [CERN — A short history of the Web](https://home.cern/science/computing/the-birth-of-the-web/short-history-web/) ส่วนบทบาทของ HTML ในการอธิบายเอกสารอ้างจาก [WHATWG — Background](https://html.spec.whatwg.org/multipage/introduction.html#background)
