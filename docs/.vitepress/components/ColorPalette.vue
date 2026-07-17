<script setup lang="ts">
import { computed, ref } from 'vue'

type Palette = {
  id: string
  name: string
  mood: string
  category: 'อุ่น' | 'เย็น' | 'ดิน' | 'สด' | 'นุ่ม' | 'เข้ม'
  paper: string
  surface: string
  ink: string
  brand: string
  accent: string
  focus: string
}

const categories = ['ทั้งหมด', 'อุ่น', 'เย็น', 'ดิน', 'สด', 'นุ่ม', 'เข้ม'] as const
const activeCategory = ref<(typeof categories)[number]>('ทั้งหมด')
const selectedId = ref('doi-coffee')
const copiedId = ref<string | null>(null)
const query = ref('')

const palettes: Palette[] = [
  { id: 'doi-coffee', name: 'กาแฟบ้านดอย', mood: 'ชุดเริ่มต้นของเวิร์กชอป', category: 'อุ่น', paper: '#fffaf2', surface: '#ffffff', ink: '#2f241f', brand: '#5c3317', accent: '#216e39', focus: '#ffbf47' },
  { id: 'espresso', name: 'เอสเปรสโซ่เข้ม', mood: 'น้ำตาลไหม้บนครีม', category: 'อุ่น', paper: '#f7f0e8', surface: '#fffdf9', ink: '#1c1410', brand: '#3b2314', accent: '#a35a2a', focus: '#f0b429' },
  { id: 'honey-latte', name: 'ฮันนี่ลาเต้', mood: 'น้ำผึ้งอุ่น ๆ', category: 'อุ่น', paper: '#fff8eb', surface: '#ffffff', ink: '#3a2a18', brand: '#8a5a1f', accent: '#c47a1a', focus: '#ffe08a' },
  { id: 'caramel', name: 'คาราเมลซอฟต์', mood: 'หวานนุ่ม', category: 'อุ่น', paper: '#fff6ee', surface: '#ffffff', ink: '#2d2118', brand: '#9a5b2f', accent: '#d97706', focus: '#fcd34d' },
  { id: 'apricot', name: 'แอปริคอต', mood: 'ส้มอ่อนอบอุ่น', category: 'อุ่น', paper: '#fff8f2', surface: '#ffffff', ink: '#3a281c', brand: '#c56a3a', accent: '#e0914f', focus: '#ffd19a' },
  { id: 'golden-hour', name: 'โกลเด้นอาวร์', mood: 'ทองอุ่น', category: 'อุ่น', paper: '#fff9ef', surface: '#ffffff', ink: '#2c2414', brand: '#b45309', accent: '#ca8a04', focus: '#fde68a' },
  { id: 'sunset', name: 'พระอาทิตย์ตก', mood: 'ส้มม่วงเย็น', category: 'อุ่น', paper: '#fff7f2', surface: '#ffffff', ink: '#2c1c24', brand: '#c2410c', accent: '#7c3aed', focus: '#fdba74' },
  { id: 'copper', name: 'ทองแดง', mood: 'เมทัลลิกอุ่น', category: 'อุ่น', paper: '#faf6f2', surface: '#ffffff', ink: '#2a1c14', brand: '#9a3412', accent: '#c2410c', focus: '#fdba74' },
  { id: 'campfire', name: 'กองไฟ', mood: 'ส้มแดงอุ่น', category: 'อุ่น', paper: '#fff7f2', surface: '#ffffff', ink: '#2a1810', brand: '#9a3412', accent: '#ea580c', focus: '#fdba74' },
  { id: 'bakery', name: 'เบเกอรี่', mood: 'ช็อกโกแลตครีม', category: 'อุ่น', paper: '#faf6f1', surface: '#ffffff', ink: '#2a1c14', brand: '#6b3e26', accent: '#b45309', focus: '#fcd34d' },
  { id: 'matcha', name: 'มัทฉะลาเต้', mood: 'เขียวชาอ่อน', category: 'เย็น', paper: '#f4f7f1', surface: '#ffffff', ink: '#1f2a1c', brand: '#4a6741', accent: '#8fae6e', focus: '#d9e87a' },
  { id: 'forest', name: 'ป่าดอย', mood: 'เขียวเข้มเย็น', category: 'เย็น', paper: '#f3f6f3', surface: '#ffffff', ink: '#152018', brand: '#1f4d3a', accent: '#3d8b6e', focus: '#b7e0a5' },
  { id: 'mint-cream', name: 'มิ้นต์ครีม', mood: 'สดชื่นเบา', category: 'เย็น', paper: '#f2faf7', surface: '#ffffff', ink: '#1c2e2a', brand: '#2a7a6b', accent: '#4db6a0', focus: '#9ef0d8' },
  { id: 'ocean-mist', name: 'หมอกทะเล', mood: 'ฟ้าอมเขียว', category: 'เย็น', paper: '#f2f7fa', surface: '#ffffff', ink: '#1a2830', brand: '#2f5f73', accent: '#3d8ea0', focus: '#8fd6e8' },
  { id: 'sky-linen', name: 'ท้องฟ้าผ้าลินิน', mood: 'ฟ้าอ่อนสะอาด', category: 'เย็น', paper: '#f5f8fc', surface: '#ffffff', ink: '#1e2a38', brand: '#3b6ea5', accent: '#5b8fc7', focus: '#a8d0ff' },
  { id: 'indigo-ink', name: 'หมึกคราม', mood: 'ครามคลาสสิก', category: 'เย็น', paper: '#f4f6fb', surface: '#ffffff', ink: '#171b2a', brand: '#2f3f8f', accent: '#4f6ad1', focus: '#c4d0ff' },
  { id: 'slate-sage', name: 'เสจกับสเลท', mood: 'เทาเขียวสงบ', category: 'เย็น', paper: '#f4f6f5', surface: '#ffffff', ink: '#1f2724', brand: '#4b635c', accent: '#6f8f84', focus: '#b7d0c6' },
  { id: 'jade', name: 'หยก', mood: 'เขียวหยก', category: 'เย็น', paper: '#f2f8f5', surface: '#ffffff', ink: '#14241c', brand: '#0f766e', accent: '#14b8a6', focus: '#99f6e4' },
  { id: 'monsoon', name: 'ฤดูฝน', mood: 'ฟ้าเทาฝน', category: 'เย็น', paper: '#f3f6f8', surface: '#ffffff', ink: '#1a2430', brand: '#334155', accent: '#0284c7', focus: '#7dd3fc' },
  { id: 'terracotta', name: 'เทอร์ราคอตตา', mood: 'ดินเผาเชียงใหม่', category: 'ดิน', paper: '#faf6f1', surface: '#ffffff', ink: '#2a211c', brand: '#b65c3a', accent: '#6b7f3b', focus: '#f2c14e' },
  { id: 'clay-leaf', name: 'ใบไม้กับดิน', mood: 'ธรรมชาติอบอุ่น', category: 'ดิน', paper: '#f8f4ec', surface: '#fffcf7', ink: '#24301f', brand: '#7a4e2d', accent: '#4f6f3a', focus: '#e8c547' },
  { id: 'sand-dune', name: 'เนินทราย', mood: 'เบจอบอุ่น', category: 'ดิน', paper: '#faf7f2', surface: '#ffffff', ink: '#3b3228', brand: '#a8895a', accent: '#6d8b74', focus: '#e6c98a' },
  { id: 'rosewood', name: 'ไม้ชิงชัน', mood: 'ไม้แดงอมน้ำตาล', category: 'ดิน', paper: '#f9f4f0', surface: '#ffffff', ink: '#2a1c18', brand: '#7a3e36', accent: '#2f6b4f', focus: '#e7b56a' },
  { id: 'olive-grove', name: 'สวนมะกอก', mood: 'เขียวมะกอก', category: 'ดิน', paper: '#f7f6ef', surface: '#ffffff', ink: '#242418', brand: '#5b6b2f', accent: '#8a9a4a', focus: '#d4e08a' },
  { id: 'moss', name: 'มอสชื้น', mood: 'เขียวมอส', category: 'ดิน', paper: '#f4f5ef', surface: '#ffffff', ink: '#1c2418', brand: '#3f5d3a', accent: '#6b8f71', focus: '#c5d9a8' },
  { id: 'bronze', name: 'บรอนซ์', mood: 'โลหะทองแดง', category: 'ดิน', paper: '#f8f4ee', surface: '#ffffff', ink: '#2a2218', brand: '#854d0e', accent: '#a16207', focus: '#fde047' },
  { id: 'bamboo', name: 'ไผ่', mood: 'เขียวไผ่ไทย', category: 'ดิน', paper: '#f5f8f1', surface: '#ffffff', ink: '#1c2a14', brand: '#3f6212', accent: '#65a30d', focus: '#d9f99d' },
  { id: 'rice-field', name: 'ทุ่งนา', mood: 'เขียวเหลืองนา', category: 'ดิน', paper: '#f7f8ef', surface: '#ffffff', ink: '#242814', brand: '#4d7c0f', accent: '#a3e635', focus: '#ecfccb' },
  { id: 'bookstore', name: 'ร้านหนังสือ', mood: 'น้ำตาลหมึก', category: 'ดิน', paper: '#f7f3ec', surface: '#fffdf8', ink: '#1f1812', brand: '#4a3728', accent: '#7c5a3a', focus: '#e7c27d' },
  { id: 'citrus', name: 'ซิตรัสซัน', mood: 'ส้มมะนาวสด', category: 'สด', paper: '#fffaf0', surface: '#ffffff', ink: '#2c2414', brand: '#d97706', accent: '#65a30d', focus: '#fde047' },
  { id: 'lemon-grove', name: 'สวนเลมอน', mood: 'เหลืองเขียวสด', category: 'สด', paper: '#fcfbef', surface: '#ffffff', ink: '#2a2a14', brand: '#a3a312', accent: '#4d7c0f', focus: '#facc15' },
  { id: 'berry', name: 'เบอร์รีจัม', mood: 'แดงม่วงฉ่ำ', category: 'สด', paper: '#fbf5f7', surface: '#ffffff', ink: '#2a1820', brand: '#9f1239', accent: '#be185d', focus: '#fda4af' },
  { id: 'pomegranate', name: 'ทับทิม', mood: 'แดงสดหรู', category: 'สด', paper: '#fff5f5', surface: '#ffffff', ink: '#2b1616', brand: '#b91c1c', accent: '#dc2626', focus: '#fecaca' },
  { id: 'coral-reef', name: 'ปะการัง', mood: 'คอรัลสดใส', category: 'สด', paper: '#fff6f3', surface: '#ffffff', ink: '#2f1c18', brand: '#e11d48', accent: '#fb7185', focus: '#fecdd3' },
  { id: 'turquoise', name: 'เทอร์ควอยซ์', mood: 'ฟ้าอมเขียวสด', category: 'สด', paper: '#f0faf9', surface: '#ffffff', ink: '#12302e', brand: '#0e7490', accent: '#06b6d4', focus: '#a5f3fc' },
  { id: 'azure', name: 'อะซัวร์', mood: 'ฟ้าสดใส', category: 'สด', paper: '#f0f7ff', surface: '#ffffff', ink: '#0f1c2e', brand: '#1d4ed8', accent: '#3b82f6', focus: '#bfdbfe' },
  { id: 'lavender-fog', name: 'หมอกลาเวนเดอร์', mood: 'ม่วงอ่อนนุ่ม', category: 'นุ่ม', paper: '#f7f5fb', surface: '#ffffff', ink: '#2a2438', brand: '#6b5b95', accent: '#8e7cc3', focus: '#d9c8ff' },
  { id: 'lilac-tea', name: 'ชากุหลาบม่วง', mood: 'นุ่มละมุน', category: 'นุ่ม', paper: '#fbf7fb', surface: '#ffffff', ink: '#312436', brand: '#8a5a84', accent: '#b07aa8', focus: '#f0c6ea' },
  { id: 'rose-milk', name: 'นมกุหลาบ', mood: 'ชมพูนุ่ม', category: 'นุ่ม', paper: '#fff6f7', surface: '#ffffff', ink: '#3a2428', brand: '#b05c6d', accent: '#d48493', focus: '#ffc9d4' },
  { id: 'peach-blossom', name: 'ดอกพีช', mood: 'พีชอ่อนหวาน', category: 'นุ่ม', paper: '#fff7f2', surface: '#ffffff', ink: '#3a2a24', brand: '#c76a5a', accent: '#e08b6d', focus: '#ffd0b8' },
  { id: 'sakura', name: 'ซากุระ', mood: 'ชมพูดอกไม้', category: 'นุ่ม', paper: '#fff5f8', surface: '#ffffff', ink: '#3a1f2a', brand: '#db2777', accent: '#ec4899', focus: '#fbcfe8' },
  { id: 'orchid', name: 'กล้วยไม้', mood: 'ม่วงดอกไม้', category: 'นุ่ม', paper: '#faf5ff', surface: '#ffffff', ink: '#2a1838', brand: '#7c3aed', accent: '#a855f7', focus: '#e9d5ff' },
  { id: 'lotus', name: 'ดอกบัว', mood: 'ชมพูอ่อนสงบ', category: 'นุ่ม', paper: '#fff6f8', surface: '#ffffff', ink: '#3a2430', brand: '#9d174d', accent: '#be185d', focus: '#fbcfe8' },
  { id: 'stone', name: 'หินแม่น้ำ', mood: 'เทาอุ่นสะอาด', category: 'นุ่ม', paper: '#f6f5f3', surface: '#ffffff', ink: '#26231f', brand: '#57534e', accent: '#78716c', focus: '#d6d3d1' },
  { id: 'foggy-morning', name: 'เช้าหมอก', mood: 'เทาฟ้าอ่อน', category: 'นุ่ม', paper: '#f5f7f9', surface: '#ffffff', ink: '#1e293b', brand: '#475569', accent: '#64748b', focus: '#cbd5e1' },
  { id: 'charcoal-cream', name: 'ชาร์โคลครีม', mood: 'เทาเข้มบนครีม', category: 'เข้ม', paper: '#f7f5f2', surface: '#ffffff', ink: '#171412', brand: '#292524', accent: '#78716c', focus: '#fbbf24' },
  { id: 'ink-night', name: 'กลางคืนหมึก', mood: 'พื้นเข้มตัวอักษรอ่อน', category: 'เข้ม', paper: '#161412', surface: '#221f1c', ink: '#f5efe6', brand: '#d6a45a', accent: '#7dcea0', focus: '#f0c47a' },
  { id: 'navy-paper', name: 'กรมท่าบนกระดาษ', mood: 'น้ำเงินเข้มคลาสสิก', category: 'เข้ม', paper: '#f4f6fa', surface: '#ffffff', ink: '#0f172a', brand: '#1e3a5f', accent: '#2563eb', focus: '#93c5fd' },
  { id: 'midnight-teal', name: 'มิดไนท์ทีล', mood: 'เขียวน้ำเงินกลางคืน', category: 'เข้ม', paper: '#f2f7f7', surface: '#ffffff', ink: '#0f1f1f', brand: '#134e4a', accent: '#0f766e', focus: '#5eead4' },
  { id: 'plum-dusk', name: 'พลัมสนธยา', mood: 'ม่วงพลัมหรู', category: 'เข้ม', paper: '#f8f4f8', surface: '#ffffff', ink: '#1f1424', brand: '#581c87', accent: '#7e22ce', focus: '#e9d5ff' },
  { id: 'wine-cellar', name: 'ห้องไวน์', mood: 'แดงไวน์', category: 'เข้ม', paper: '#faf4f4', surface: '#ffffff', ink: '#271416', brand: '#7f1d1d', accent: '#b91c1c', focus: '#fecaca' },
  { id: 'studio', name: 'สตูดิโอขาวดำ', mood: 'มินิมอลคอนทราสต์', category: 'เข้ม', paper: '#f8f8f7', surface: '#ffffff', ink: '#111111', brand: '#171717', accent: '#525252', focus: '#facc15' },
]

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return palettes.filter((p) => {
    const catOk = activeCategory.value === 'ทั้งหมด' || p.category === activeCategory.value
    if (!catOk) return false
    if (!q) return true
    return [p.name, p.mood, p.category].join(' ').toLowerCase().includes(q)
  })
})

const selected = computed(() => palettes.find((p) => p.id === selectedId.value) ?? palettes[0])

function cssBlock(p: Palette) {
  return `:root {
  --color-paper: ${p.paper};
  --color-surface: ${p.surface};
  --color-ink: ${p.ink};
  --color-brand: ${p.brand};
  --color-accent: ${p.accent};
  --color-focus: ${p.focus};
}`
}

async function copyCss(p: Palette) {
  selectedId.value = p.id
  try {
    await navigator.clipboard.writeText(cssBlock(p))
    copiedId.value = p.id
    window.setTimeout(() => {
      if (copiedId.value === p.id) copiedId.value = null
    }, 1800)
  } catch {
    copiedId.value = null
  }
}

function selectPalette(p: Palette) {
  selectedId.value = p.id
}
</script>

<template>
  <div class="cp">
    <div class="cp-toolbar">
      <label class="cp-search">
        <span class="sr-only">ค้นหาชุดสี</span>
        <input v-model="query" type="search" placeholder="ค้นหาชื่อชุดสี หรือ mood..." />
      </label>
      <div class="cp-filters" role="tablist" aria-label="หมวดชุดสี">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          role="tab"
          class="cp-chip"
          :class="{ active: activeCategory === cat }"
          :aria-selected="activeCategory === cat"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
      <p class="cp-count">แสดง {{ filtered.length }} จาก {{ palettes.length }} ชุด</p>
    </div>

    <div class="cp-layout">
      <div
        class="cp-preview"
        :style="{
          '--paper': selected.paper,
          '--surface': selected.surface,
          '--ink': selected.ink,
          '--brand': selected.brand,
          '--accent': selected.accent,
          '--focus': selected.focus,
        }"
      >
        <header class="cp-shop-header">
          <strong>{{ selected.name }}</strong>
          <nav>
            <a href="#preview-menu">เมนู</a>
            <a href="#preview-hours">เวลา</a>
          </nav>
        </header>
        <div class="cp-shop-body">
          <h3 id="preview-menu">เมนูแนะนำ</h3>
          <article class="cp-card">
            <h4>อเมริกาโน่น้ำผึ้ง</h4>
            <p>กาแฟจากชุมชน เพื่อชุมชน</p>
            <p class="price">65 บาท</p>
            <a class="focus-demo" href="#preview-hours">ดูเวลาเปิดร้าน</a>
          </article>
          <p id="preview-hours" class="hours">เปิดทุกวัน 08:00–17:00 น.</p>
        </div>
        <div class="cp-actions">
          <button type="button" class="cp-copy" @click="copyCss(selected)">
            {{ copiedId === selected.id ? 'คัดลอกแล้ว' : 'คัดลอก CSS ตัวแปร' }}
          </button>
        </div>
        <pre class="cp-code"><code>{{ cssBlock(selected) }}</code></pre>
      </div>

      <div class="cp-grid" role="list">
        <button
          v-for="p in filtered"
          :key="p.id"
          type="button"
          role="listitem"
          class="cp-item"
          :class="{ selected: selectedId === p.id }"
          :aria-pressed="selectedId === p.id"
          @click="selectPalette(p)"
          @dblclick="copyCss(p)"
        >
          <div class="cp-swatches" aria-hidden="true">
            <span :style="{ background: p.paper }" />
            <span :style="{ background: p.brand }" />
            <span :style="{ background: p.accent }" />
            <span :style="{ background: p.ink }" />
            <span :style="{ background: p.focus }" />
          </div>
          <div class="cp-meta">
            <strong>{{ p.name }}</strong>
            <span>{{ p.mood }}</span>
            <em>{{ p.category }}</em>
          </div>
          <span class="cp-mini-copy" @click.stop="copyCss(p)">
            {{ copiedId === p.id ? 'คัดลอกแล้ว' : 'คัดลอก' }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cp {
  margin: 1rem 0 2rem;
  font-family: system-ui, -apple-system, 'Segoe UI', 'Sarabun', sans-serif;
}

.cp-toolbar {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.cp-search input {
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
}

.cp-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.cp-chip {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border-radius: 999px;
  padding: 0.3rem 0.75rem;
  font-size: 0.85rem;
  cursor: pointer;
}

.cp-chip.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}

.cp-count {
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.cp-layout {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 960px) {
  .cp-layout {
    grid-template-columns: minmax(280px, 360px) 1fr;
    align-items: start;
  }

  .cp-preview {
    position: sticky;
    top: 5rem;
  }
}

.cp-preview {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--paper);
  color: var(--ink);
}

.cp-shop-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: center;
  padding: 0.9rem 1rem;
  background: var(--brand);
  color: #fff;
}

.cp-shop-header nav {
  display: flex;
  gap: 0.85rem;
}

.cp-shop-header a {
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
}

.cp-shop-header a:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.cp-shop-body {
  padding: 1rem;
}

.cp-shop-body h3 {
  margin: 0 0 0.75rem;
  color: var(--brand);
  font-size: 1.1rem;
}

.cp-card {
  background: var(--surface);
  border: 1px solid color-mix(in srgb, var(--ink) 12%, transparent);
  border-radius: 0.75rem;
  padding: 1rem;
}

.cp-card h4 {
  margin: 0 0 0.35rem;
  color: var(--brand);
}

.cp-card p {
  margin: 0 0 0.5rem;
}

.price {
  color: var(--accent) !important;
  font-weight: 700;
}

.focus-demo {
  color: var(--brand);
  font-weight: 600;
}

.focus-demo:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.hours {
  margin: 0.85rem 0 0;
  font-size: 0.92rem;
}

.cp-actions {
  padding: 0 1rem 0.75rem;
}

.cp-copy {
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  background: var(--brand);
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.cp-code {
  margin: 0;
  padding: 0.85rem 1rem 1rem;
  background: color-mix(in srgb, var(--ink) 8%, var(--paper));
  overflow-x: auto;
  font-size: 0.78rem;
  line-height: 1.55;
}

.cp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
}

.cp-item {
  display: grid;
  gap: 0.55rem;
  text-align: left;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.75rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.cp-item:hover,
.cp-item.selected {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 1px var(--vp-c-brand-1);
}

.cp-swatches {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.25rem;
  height: 2rem;
}

.cp-swatches span {
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, #000 10%, transparent);
}

.cp-meta {
  display: grid;
  gap: 0.15rem;
}

.cp-meta strong {
  font-size: 0.95rem;
}

.cp-meta span {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.cp-meta em {
  font-style: normal;
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.cp-mini-copy {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
