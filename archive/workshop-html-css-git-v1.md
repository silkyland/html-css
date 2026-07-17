# 01. โครงการอบรมสร้างเว็บไซต์ด้วย HTML + CSS และ Git เบื้องต้น

**โครงการอบรมเชิงปฏิบัติการเสริมสมรรถนะทักษะด้านการสร้างเว็บไซต์**

- วิทยากร: **นายบัณฑิต นันทะเทศ**
- ตำแหน่ง: Senior Full Stack Developer, Data Horizon Co., Ltd.
- วันที่: **18 กรกฎาคม 2569**
- สถานที่: **ห้องปฏิบัติการคอมพิวเตอร์ FMS 2811**
- คณะวิทยาการจัดการ มหาวิทยาลัยราชภัฏเชียงใหม่

> วันนี้เราจะสร้างเว็บไซต์หน้าแรกของเรา และเผยแพร่โค้ดขึ้น GitHub ไปพร้อมกัน

**ภาพประกอบที่แนะนำ:** ภาพหน้าจอเว็บไซต์ร้านค้าสวย ๆ บนโน้ตบุ๊กและโทรศัพท์

---

# 02. รู้จักวิทยากร

## นายบัณฑิต นันทะเทศ

- Senior Full Stack Developer
- Data Horizon Co., Ltd.
- ทำงานด้านการพัฒนาเว็บไซต์ทั้งส่วนหน้าบ้านและหลังบ้าน
- สนใจการเปลี่ยนโจทย์ทางธุรกิจให้เป็นระบบที่ใช้งานได้จริง

> ไม่จำเป็นต้องเขียนโค้ดเก่งตั้งแต่วันแรก ขอเพียงกล้าลองและเรียนรู้จากข้อผิดพลาด

**ภาพประกอบที่แนะนำ:** รูปวิทยากร โลโก้บริษัท และไอคอน Front-end / Back-end

---

# 03. กำหนดการวันนี้ (Agenda)

| เวลา | กิจกรรม |
|---|---|
| 09:00–09:30 | รู้จักการทำงานของเว็บไซต์ |
| 09:30–10:30 | HTML: สร้างโครงสร้างและเนื้อหา |
| 10:30–10:45 | พักเบรก |
| 10:45–12:00 | CSS: ตกแต่งและจัดวางหน้าเว็บ |
| 12:00–13:00 | พักกลางวัน |
| 13:00–14:15 | Git และ GitHub เบื้องต้น |
| 14:15–15:45 | Workshop: หน้าโปรไฟล์ร้านค้า |
| 15:45–16:00 | สรุปและถาม–ตอบ |

> รูปแบบการเรียนวันนี้: **ฟังสั้น ๆ → ดูตัวอย่าง → ลงมือทำ**

**ภาพประกอบที่แนะนำ:** Timeline แสดงลำดับกิจกรรมตลอดวัน

---

# 04. โลกของเว็บไซต์ทำงานอย่างไร?

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

> วันนี้เราจะเน้น Front-end ด้วย HTML และ CSS

**ภาพประกอบที่แนะนำ:** Diagram แบบ Client → Server → Database พร้อมลูกศร Request/Response

---

# 05. รู้จัก HTML และโครงสร้างเอกสาร

**HTML (HyperText Markup Language)** ใช้กำหนดโครงสร้างและความหมายของเนื้อหาบนหน้าเว็บ เปรียบเหมือน “โครงกระดูก” ของเว็บไซต์

```html
<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ร้านกาแฟบ้านเรา</title>
  </head>
  <body>
    <h1>ร้านกาแฟบ้านเรา</h1>
    <p>กาแฟดี ๆ จากชุมชนของเรา</p>
  </body>
</html>
```

- `<head>` เก็บข้อมูลเกี่ยวกับหน้าเว็บ
- `<title>` คือชื่อที่แสดงบนแท็บ Browser
- `<body>` เก็บเนื้อหาที่ผู้ใช้มองเห็น

**ภาพประกอบที่แนะนำ:** Screenshot เปรียบเทียบโค้ด HTML กับผลลัพธ์ใน Browser

---

# 06. Tag พื้นฐานสำหรับเนื้อหา

HTML ใช้ **Tag** เพื่อบอกว่าเนื้อหาแต่ละส่วนมีหน้าที่อะไร

```html
<h1>ร้านเบเกอรีหอมกรุ่น</h1>
<h2>เมนูแนะนำ</h2>

<p>ขนมปังอบสดใหม่ทุกเช้า</p>
<p><strong>โปรโมชั่น:</strong> ซื้อ 2 ชิ้น ฟรี 1 ชิ้น</p>

<hr>

<p>เปิดทุกวัน<br>เวลา 08:00–18:00 น.</p>
```

- `<h1>` ถึง `<h6>` ใช้สร้างหัวข้อตามลำดับ
- `<p>` ใช้สร้างย่อหน้า
- `<strong>` เน้นข้อความสำคัญ
- `<br>` ขึ้นบรรทัดใหม่ และ `<hr>` สร้างเส้นคั่น

> เลือก Tag จาก “ความหมาย” ของเนื้อหา ไม่ใช่เพียงรูปลักษณ์

---

# 07. ลิงก์และรูปภาพ

ใช้ลิงก์เชื่อมไปยังหน้าอื่น และใช้รูปภาพช่วยสื่อสารสินค้าให้ชัดเจนขึ้น

```html
<h1>กระเป๋าผ้ารักษ์โลก</h1>

<img
  src="images/eco-bag.jpg"
  alt="กระเป๋าผ้าสีครีมพิมพ์ลายใบไม้"
  width="320"
>

<p>
  <a href="contact.html">สอบถามสินค้า</a>
</p>
```

- `<a href="...">` สร้างลิงก์
- `<img src="...">` แสดงรูปภาพ
- `alt` อธิบายรูปสำหรับผู้ที่มองไม่เห็นภาพและกรณีโหลดภาพไม่ได้
- ควรใช้ชื่อไฟล์ที่อ่านเข้าใจง่าย เช่น `eco-bag.jpg`

**ภาพประกอบที่แนะนำ:** Screenshot หน้าแสดงสินค้าที่มีภาพ ชื่อสินค้า และปุ่มติดต่อ

---

# 08. รายการและตารางข้อมูลธุรกิจ

## รายการสินค้า

```html
<h2>บริการของเรา</h2>
<ul>
  <li>ออกแบบนามบัตร</li>
  <li>ออกแบบโปสเตอร์</li>
  <li>ดูแลเพจธุรกิจ</li>
</ul>
```

## ตารางราคา

```html
<table>
  <tr>
    <th>แพ็กเกจ</th>
    <th>ราคา</th>
  </tr>
  <tr>
    <td>Starter</td>
    <td>1,500 บาท</td>
  </tr>
</table>
```

- `<ul>` คือรายการแบบไม่มีลำดับ
- `<ol>` คือรายการแบบมีลำดับ
- ตารางเหมาะกับข้อมูลที่ต้องเปรียบเทียบเป็นแถวและคอลัมน์

**ภาพประกอบที่แนะนำ:** ผลลัพธ์ของรายการบริการและตารางราคาใน Browser

---

# 09. Semantic HTML: Tag ที่บอกความหมาย

**Semantic Tag** ช่วยให้คน Browser และ Search Engine เข้าใจโครงสร้างหน้าเว็บได้ดีขึ้น

```html
<header>
  <h1>ร้านดอกไม้เชียงใหม่</h1>
  <nav><a href="#products">สินค้า</a></nav>
</header>

<main>
  <section id="products">
    <h2>ช่อดอกไม้แนะนำ</h2>
    <article>
      <h3>ช่อทานตะวัน</h3>
      <p>ราคา 590 บาท</p>
    </article>
  </section>
</main>

<footer>ติดต่อ: 08x-xxx-xxxx</footer>
```

- `<header>` ส่วนหัวของหน้า
- `<nav>` เมนูนำทาง
- `<main>` เนื้อหาหลัก
- `<section>` กลุ่มเนื้อหาที่เกี่ยวข้องกัน
- `<article>` เนื้อหาที่แยกเป็นชิ้นได้
- `<footer>` ส่วนท้ายของหน้า

**ภาพประกอบที่แนะนำ:** Wireframe หน้าเว็บที่แบ่งพื้นที่ Header, Nav, Main และ Footer

---

# 10. ฟอร์มติดต่อเบื้องต้น

ฟอร์ม (Form) ใช้รับข้อมูลจากผู้ใช้ เช่น ชื่อ อีเมล และข้อความสอบถาม

```html
<form>
  <label for="name">ชื่อผู้ติดต่อ</label>
  <input id="name" name="name" type="text" required>

  <label for="email">อีเมล</label>
  <input id="email" name="email" type="email" required>

  <label for="message">ข้อความ</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">ส่งข้อความ</button>
</form>
```

- `<label>` บอกความหมายของช่องกรอกข้อมูล
- `<input>` รับข้อมูลแบบสั้น
- `<textarea>` รับข้อความหลายบรรทัด
- `required` กำหนดให้ผู้ใช้ต้องกรอกข้อมูล

> ฟอร์มนี้สร้างเฉพาะหน้าตา การส่งและบันทึกข้อมูลจริงต้องใช้ Back-end เพิ่มเติม

**ภาพประกอบที่แนะนำ:** Screenshot ฟอร์มติดต่อทั้งสถานะปกติและตอนแจ้งช่องที่ยังไม่ได้กรอก

---

# 11. พักเบรก

พักสายตา ยืดเส้นยืดสาย และกลับมาพบกันในอีก **15 นาที**

## ภารกิจระหว่างพัก

- บันทึกไฟล์ให้เรียบร้อย
- ทดลอง Refresh หน้าเว็บ
- เตรียมคำถามที่ยังสงสัย 1 ข้อ

**ภาพประกอบที่แนะนำ:** ภาพแก้วกาแฟพร้อมข้อความนับเวลาพัก 15 นาที

---

# 12. รู้จัก CSS และการเชื่อมกับ HTML

**CSS (Cascading Style Sheets)** ใช้ควบคุมสี ตัวอักษร ระยะห่าง และการจัดวาง เปรียบเหมือน “เสื้อผ้าและการตกแต่ง” ของเว็บไซต์

## `index.html`

```html
<head>
  <meta charset="UTF-8">
  <title>ร้านกาแฟบ้านเรา</title>
  <link rel="stylesheet" href="style.css">
</head>
```

## `style.css`

```css
body {
  background-color: #fffaf2;
  color: #2f241f;
}
```

> แยก HTML และ CSS คนละไฟล์ ช่วยให้โค้ดอ่านง่ายและดูแลสะดวก

**ภาพประกอบที่แนะนำ:** Diagram แสดง `index.html` เชื่อมไปยัง `style.css`

---

# 13. CSS Selector: เลือกสิ่งที่จะตกแต่ง

Selector ใช้ระบุว่าเราต้องการตกแต่ง Element ใด

```html
<h1 id="shop-name">ร้านกาแฟบ้านเรา</h1>
<p class="highlight">เมล็ดกาแฟจากเกษตรกรท้องถิ่น</p>
<p>เปิดทุกวัน 08:00–17:00 น.</p>
```

```css
/* เลือกด้วยชื่อ Tag */
p {
  line-height: 1.6;
}

/* เลือกด้วย Class ใช้ซ้ำได้ */
.highlight {
  color: #b45309;
}

/* เลือกด้วย ID ซึ่งควรไม่ซ้ำกัน */
#shop-name {
  font-size: 40px;
}
```

- Tag selector: `p`
- Class selector: `.highlight`
- ID selector: `#shop-name`

---

# 14. Box Model: ทุก Element คือกล่อง

ทุก Element ประกอบด้วย 4 ชั้น

1. **Content:** เนื้อหาภายใน
2. **Padding:** ระยะห่างรอบเนื้อหา
3. **Border:** เส้นขอบ
4. **Margin:** ระยะห่างภายนอกกล่อง

```css
.product-card {
  width: 280px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  margin: 16px;
  border-radius: 12px;
}
```

```css
* {
  box-sizing: border-box;
}
```

> `box-sizing: border-box` ทำให้คำนวณขนาดกล่องได้ง่ายขึ้น

**ภาพประกอบที่แนะนำ:** Diagram Box Model แยกสี Content, Padding, Border และ Margin

---

# 15. สีและตัวอักษรสร้างภาพลักษณ์ธุรกิจ

```css
body {
  font-family: Arial, sans-serif;
  background-color: #fffaf2;
  color: #3f2d20;
}

h1 {
  color: #8b4513;
  font-size: 36px;
}

.price {
  color: #15803d;
  font-weight: 700;
}
```

## หลักจำง่าย

- ใช้สีหลัก 1–2 สี เพื่อให้ภาพรวมสม่ำเสมอ
- ให้สีตัวอักษรตัดกับพื้นหลังและอ่านง่าย
- ใช้ขนาดตัวอักษรสร้างลำดับความสำคัญ
- อย่าใช้ฟอนต์หลายแบบเกินความจำเป็น

**ภาพประกอบที่แนะนำ:** ตัวอย่างชุดสีของร้านกาแฟ พร้อมรหัสสี Hex

---

# 16. Flexbox: จัดวางสินค้าให้อยู่ในแถว

Flexbox เหมาะกับการจัด Element ในหนึ่งแนว เช่น แถวสินค้า เมนู หรือปุ่ม

```html
<section class="products">
  <article class="product-card">กาแฟดริป</article>
  <article class="product-card">กาแฟลาเต้</article>
  <article class="product-card">ชาไทย</article>
</section>
```

```css
.products {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
}

.product-card {
  flex: 1 1 220px;
}
```

- `gap` กำหนดช่องว่างระหว่างกล่อง
- `justify-content` จัดตำแหน่งตามแนวหลัก
- `align-items` จัดตำแหน่งตามแนวขวาง
- `flex-wrap` อนุญาตให้กล่องขึ้นบรรทัดใหม่

**ภาพประกอบที่แนะนำ:** Diagram แสดง Main Axis และ Cross Axis ของ Flexbox

---

# 17. Responsive Design: ใช้งานได้หลายขนาดหน้าจอ

Responsive Design คือการทำให้เว็บไซต์ปรับตัวตามหน้าจอคอมพิวเตอร์ แท็บเล็ต และโทรศัพท์

```css
.container {
  width: min(100% - 32px, 960px);
  margin-inline: auto;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  h1 {
    font-size: 28px;
  }

  .products {
    flex-direction: column;
  }
}
```

## ทดลองง่าย ๆ

เปิด Developer Tools แล้วสลับเป็นโหมดโทรศัพท์ จากนั้นลองย่อและขยายหน้าจอ

**ภาพประกอบที่แนะนำ:** Screenshot เว็บไซต์เดียวกันบน Desktop และ Mobile

---

# 18. พักกลางวัน

พักรับประทานอาหารกลางวัน **60 นาที**

ก่อนกลับมาเรียนช่วงบ่าย:

- ตรวจสอบว่าเปิด Terminal ได้
- เตรียมบัญชี GitHub ให้พร้อม
- เก็บไฟล์ `index.html` และ `style.css` ไว้ในโฟลเดอร์เดียวกัน

**ภาพประกอบที่แนะนำ:** ภาพอาหารกลางวันหรือภาพนาฬิกาพร้อมเวลานัดหมายกลับเข้าห้อง

---

# 19. Version Control คืออะไร?

**Version Control** คือระบบบันทึกประวัติการเปลี่ยนแปลงของไฟล์ เปรียบเหมือน “จุดบันทึก” ในเกม

```text
เวอร์ชัน 1 → เพิ่มข้อมูลร้าน
เวอร์ชัน 2 → เพิ่มรายการสินค้า
เวอร์ชัน 3 → ปรับสีและหน้า Mobile
```

เราสามารถรู้ได้ว่า:

- ใครเปลี่ยนอะไร
- เปลี่ยนเมื่อไร
- เหตุผลของการเปลี่ยนคืออะไร
- ต้องการย้อนกลับไปเวอร์ชันใด

> **Git** คือโปรแกรม Version Control ส่วน **GitHub** คือบริการออนไลน์สำหรับเก็บและแบ่งปัน Git Repository

**ภาพประกอบที่แนะนำ:** Timeline ของไฟล์จาก Version 1 ไป Version 3

---

# 20. ทำไมเราจึงควรใช้ Git?

- **เก็บประวัติ:** ดูการเปลี่ยนแปลงย้อนหลังได้
- **ลดความเสี่ยง:** ไม่ต้องสร้างไฟล์ชื่อ `final-final-v2.html`
- **ทำงานร่วมกัน:** หลายคนพัฒนาโปรเจกต์เดียวกันได้
- **สำรองออนไลน์:** เก็บ Repository บน GitHub
- **สร้าง Portfolio:** แสดงผลงานและพัฒนาการของเรา

## คำศัพท์ที่ควรรู้

- **Repository (Repo):** โฟลเดอร์โปรเจกต์ที่ Git ติดตาม
- **Commit:** จุดบันทึกการเปลี่ยนแปลง
- **Remote:** Repository ที่อยู่บนบริการออนไลน์

**ภาพประกอบที่แนะนำ:** เปรียบเทียบโฟลเดอร์ที่มีไฟล์หลายเวอร์ชันกับ Timeline ของ Git

---

# 21. `git init`: เริ่มต้น Repository

เปิด Terminal แล้วเข้าไปยังโฟลเดอร์โปรเจกต์

```bash
mkdir my-shop-profile
cd my-shop-profile
git init
```

ผลลัพธ์ที่คาดหวัง:

```text
Initialized empty Git repository in .../my-shop-profile/.git/
```

- `mkdir` สร้างโฟลเดอร์ใหม่
- `cd` เข้าไปในโฟลเดอร์
- `git init` เริ่มให้ Git ติดตามโปรเจกต์นี้

> ใช้ `git init` เพียงครั้งเดียวต่อหนึ่งโปรเจกต์

**ภาพประกอบที่แนะนำ:** Screenshot Terminal หลังใช้ `git init` สำเร็จ

---

# 22. `git add`: เลือกไฟล์สำหรับจุดบันทึก

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

> `git add` ยังไม่ใช่การบันทึกถาวร แต่เป็นการเตรียมไฟล์ไว้สำหรับ Commit ถัดไป

**ภาพประกอบที่แนะนำ:** Diagram `Working Directory → Staging Area`

---

# 23. `git commit`: สร้างจุดบันทึก

ก่อน Commit ครั้งแรก ให้ตั้งชื่อและอีเมล:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

สร้าง Commit:

```bash
git commit -m "Create shop profile page"
```

ดูประวัติแบบย่อ:

```bash
git log --oneline
```

## ข้อความ Commit ที่ดี

- บอกให้ชัดว่าเปลี่ยนอะไร
- สั้นและอ่านเข้าใจง่าย
- ตัวอย่าง: `Add contact form` หรือ `Improve mobile layout`

**ภาพประกอบที่แนะนำ:** Screenshot ผลลัพธ์ `git log --oneline`

---

# 24. สร้าง Repository บน GitHub

1. เข้าสู่ระบบที่ [github.com](https://github.com)
2. เลือก **New repository**
3. ตั้งชื่อ `my-shop-profile`
4. เลือก Public หรือ Private ตามต้องการ
5. หากมีไฟล์ในเครื่องแล้ว ไม่ต้องเลือกสร้าง README
6. กด **Create repository**

เชื่อมโปรเจกต์ในเครื่องกับ GitHub:

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/my-shop-profile.git
git remote -v
```

> เปลี่ยน `USERNAME` เป็นชื่อบัญชี GitHub ของตนเอง

**ภาพประกอบที่แนะนำ:** Screenshot หน้าสร้าง Repository และตำแหน่ง URL ของ Repository

---

# 25. `git push`: ส่ง Commit ขึ้น GitHub

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

> หาก GitHub ขอให้ยืนยันตัวตน ให้ทำตามขั้นตอนใน Browser หรือใช้วิธีที่ผู้สอนกำหนด

**ภาพประกอบที่แนะนำ:** Diagram `Local Repository → GitHub` และ Screenshot ไฟล์ที่ปรากฏบน GitHub

---

# 26. `git clone`: ดาวน์โหลด Repository มาทำงาน

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

> โดยทั่วไปไม่ต้องใช้ `git init` ซ้ำภายในโฟลเดอร์ที่ Clone มาแล้ว

**ภาพประกอบที่แนะนำ:** Diagram `GitHub → git clone → โฟลเดอร์ในเครื่อง`

---

# 27. Workshop: สร้างหน้าโปรไฟล์ร้านค้า

## โจทย์

สร้างเว็บไซต์หนึ่งหน้าสำหรับธุรกิจสมมติ เช่น ร้านกาแฟ ร้านเบเกอรี ร้านเสื้อผ้า หรือบริการออกแบบ

## สิ่งที่ต้องมี

- ชื่อร้านและคำโปรย
- รูปภาพร้านหรือสินค้า พร้อม `alt`
- แนะนำร้านแบบสั้น
- รายการสินค้าหรือบริการอย่างน้อย 3 รายการ
- ราคา หรือจุดเด่นของสินค้า
- ช่องทางติดต่อ
- Semantic HTML อย่างน้อย 3 Tag
- CSS สำหรับสี ฟอนต์ Box Model และ Flexbox
- แสดงผลบน Mobile ได้อย่างเหมาะสม

## ขั้นตอนส่งงาน

```bash
git add .
git commit -m "Complete shop profile website"
git push
```

ส่งลิงก์ GitHub Repository ให้ผู้สอน

## เกณฑ์ตรวจงาน

- เนื้อหาครบและโครงสร้าง HTML ถูกต้อง
- รูปแบบอ่านง่ายและเหมาะกับธุรกิจ
- หน้าเว็บไม่ล้นจอบนโทรศัพท์
- เปิดดูโค้ดและ Commit บน GitHub ได้

**ภาพประกอบที่แนะนำ:** Mockup หน้าโปรไฟล์ร้านค้าที่ระบุตำแหน่ง Header, About, Products และ Contact

---

# 28. สรุปสิ่งที่เรียนรู้วันนี้

## HTML

สร้างโครงสร้างและบอกความหมายของเนื้อหา

## CSS

กำหนดรูปลักษณ์ ระยะห่าง การจัดวาง และการตอบสนองต่อขนาดหน้าจอ

## Git และ GitHub

บันทึกประวัติการพัฒนาและเผยแพร่โค้ดออนไลน์

```text
ไอเดียธุรกิจ
   ↓
HTML สร้างเนื้อหา
   ↓
CSS สร้างภาพลักษณ์
   ↓
Git บันทึกการพัฒนา
   ↓
GitHub แบ่งปันผลงาน
```

> เว็บไซต์ที่ดีไม่ได้เกิดจากการเขียนครั้งเดียว แต่เกิดจากการทดลอง ตรวจสอบ และปรับปรุงทีละขั้น

**ภาพประกอบที่แนะนำ:** Infographic สรุป HTML + CSS + Git + GitHub

---

# 29. แหล่งเรียนรู้ต่อยอด

## HTML และ CSS

- [MDN Web Docs](https://developer.mozilla.org/) — เอกสารมาตรฐานและตัวอย่าง
- [web.dev](https://web.dev/learn/) — บทเรียนเว็บไซต์จาก Google
- [W3Schools](https://www.w3schools.com/) — ตัวอย่างสำหรับผู้เริ่มต้น
- [Flexbox Froggy](https://flexboxfroggy.com/) — เกมฝึก Flexbox

## Git และ GitHub

- [Git Documentation](https://git-scm.com/doc) — เอกสารอย่างเป็นทางการของ Git
- [GitHub Skills](https://skills.github.com/) — แบบฝึกหัด GitHub
- [GitHub Docs](https://docs.github.com/) — คู่มือการใช้งาน GitHub

## ฝึกอย่างไรให้ได้ผล?

1. สร้างหน้าเว็บเล็ก ๆ สัปดาห์ละ 1 หน้า
2. เปิดดูโค้ดของเว็บไซต์ที่ชอบ
3. Commit ทุกครั้งที่ทำส่วนสำคัญเสร็จ
4. เก็บผลงานไว้ใน GitHub Portfolio

**ภาพประกอบที่แนะนำ:** QR Code ไปยังหน้า Bookmark ที่รวมลิงก์ทั้งหมด

---

# 30. ขอบคุณ และถาม–ตอบ

## ขอบคุณทุกคนที่ร่วมลงมือทำ

วันนี้คุณไม่ได้เพียงเรียนรู้โค้ด แต่ได้สร้างและเผยแพร่ผลงานชิ้นแรกของตนเองแล้ว

### มีคำถามอะไรบ้าง?

- ส่วนไหนที่ยังไม่เข้าใจ?
- ระหว่าง HTML, CSS และ Git ส่วนไหนท้าทายที่สุด?
- อยากสร้างเว็บไซต์อะไรเป็นโปรเจกต์ถัดไป?

**นายบัณฑิต นันทะเทศ**  
Senior Full Stack Developer  
Data Horizon Co., Ltd.

> เริ่มจากหน้าเล็ก ๆ แล้วพัฒนาให้ดีขึ้นวันละนิด

**ภาพประกอบที่แนะนำ:** QR Code สำหรับช่องทางติดต่อหรือแบบประเมิน พร้อมข้อความ “Thank You”
