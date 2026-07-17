<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  html?: string
  css?: string
  code?: string
  height?: string | number
  title?: string
}>()

const showPreview = ref(true)

const displayCode = computed(() => {
  if (props.code) return props.code
  const parts: string[] = []
  if (props.css) parts.push(props.css)
  if (props.html) parts.push(props.html)
  return parts.join('\n\n')
})

const frameHeight = computed(() => {
  if (typeof props.height === 'number') return `${props.height}px`
  return props.height || '200px'
})

const srcdoc = computed(() => {
  const h = (props.html || '').trim()
  if (/^\s*<!doctype|^\s*<html/i.test(h)) {
    return h
  }
  return `<!doctype html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ตัวอย่าง</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 16px;
      margin: 0;
    }
    ${props.css || ''}
  </style>
</head>
<body>
${h}
</body>
</html>`
})
</script>

<template>
  <div class="live-preview">
    <div class="lp-header">
      <span class="lp-label">{{ title || 'โค้ด' }}</span>
    </div>
    <div class="lp-code">
      <pre><code v-text="displayCode" /></pre>
    </div>
    <div class="lp-header">
      <span class="lp-label">ผลลัพธ์</span>
      <button class="lp-toggle" @click="showPreview = !showPreview">
        {{ showPreview ? 'ซ่อนผลลัพธ์' : 'แสดงผลลัพธ์' }}
      </button>
    </div>
    <iframe
      v-show="showPreview"
      class="lp-frame"
      :srcdoc="srcdoc"
      :title="`${title || 'ตัวอย่างโค้ด'} — ผลลัพธ์`"
      :style="{ height: frameHeight }"
      sandbox="allow-forms"
      frameborder="0"
      width="100%"
    ></iframe>
  </div>
</template>

<style scoped>
.live-preview {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}
.lp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.lp-code pre {
  margin: 0;
  padding: 16px;
  background: var(--vp-code-block-bg);
  color: var(--vp-code-block-color);
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.6;
  font-family: var(--vp-font-family-mono);
}
.lp-frame {
  display: block;
  background: #ffffff;
  width: 100%;
}
.lp-toggle {
  background: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
  border: 1px solid var(--vp-button-alt-border);
  border-radius: 4px;
  padding: 2px 10px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}
.lp-toggle:hover {
  background: var(--vp-button-alt-hover-bg);
}
</style>
