# CSS Grid: จัดวางหน้าเว็บแบบสองมิติ

CSS Grid ช่วยให้เราจัดวาง Element ได้ทั้งแถวและคอลัมน์ในเวลาเดียวกัน เหมาะกับ Layout หน้าเว็บ เช่น ส่วนหัว เนื้อหาหลัก Sidebar และส่วนท้าย

<script setup>
const basic = {
  html: `<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>`,
  css: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.item {
  background: #d4a373;
  color: white;
  padding: 24px;
  text-align: center;
  border-radius: 8px;
}`
}

const rows = {
  html: `<div class="grid-container">
  <div class="item tall">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>`,
  css: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 16px;
}

.item {
  background: #8b4513;
  color: white;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
}

.tall {
  grid-row: span 2;
}`
}

const areas = {
  html: `<div class="layout">
  <header>ส่วนหัว</header>
  <aside>Sidebar</aside>
  <main>เนื้อหาหลัก</main>
  <footer>ส่วนท้าย</footer>
</div>`,
  css: `.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  min-height: 200px;
}

.layout > * {
  padding: 16px;
  color: white;
  border-radius: 8px;
}

header { grid-area: header; background: #8b4513; }
aside { grid-area: sidebar; background: #cd853f; }
main { grid-area: main; background: #d4a373; }
footer { grid-area: footer; background: #2f241f; }`
}

const autoFit = {
  html: `<div class="responsive-grid">
  <div class="card">สินค้า A</div>
  <div class="card">สินค้า B</div>
  <div class="card">สินค้า C</div>
  <div class="card">สินค้า D</div>
</div>`,
  css: `.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.card {
  background: #fffaf2;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}`
}
</script>

## Grid พื้นฐาน

<LivePreview v-bind="basic" height="160px" />

- `display: grid` เปิดใช้งาน Grid
- `grid-template-columns` กำหนดจำนวนและขนาดคอลัมน์
- `gap` กำหนดช่องว่างระหว่างช่อง
- `1fr` คือ “เศษส่วนที่เหลือ” ให้คอลัมน์ขยายตามพื้นที่

## กำหนดแถวและคอลัมน์

<LivePreview v-bind="rows" height="240px" />

- `grid-template-rows` กำหนดความสูงแถว
- `grid-column: span 2` ทำให้ช่องกินพื้นที่ 2 คอลัมน์
- `grid-row: span 2` ทำให้ช่องกินพื้นที่ 2 แถว

## จัดวาง Layout ด้วย grid-area

<LivePreview v-bind="areas" height="280px" />

## Responsive Grid ด้วย auto-fit

<LivePreview v-bind="autoFit" height="180px" />

- `repeat(auto-fit, minmax(150px, 1fr))` สร้างคอลัมน์ที่ยืดหยุ่นตามหน้าจอ
- `minmax(150px, 1fr)` กำหนดขนาดต่ำสุดและสูงสุดของแต่ละคอลัมน์

## เลือกใช้ Flexbox หรือ Grid?

- **Flexbox** เหมาะกับการจัดวางในแนวเดียว (แถวหรือคอลัมน์)
- **Grid** เหมาะกับการจัดวางทั้งแถวและคอลัมน์พร้อมกัน
- ทั้งสองใช้ร่วมกันได้ เช่น Grid จัดโครงหน้า ส่วน Flexbox จัดเนื้อหาภายใน Card
