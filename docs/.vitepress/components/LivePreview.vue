<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  html?: string
  css?: string
  code?: string
  height?: string | number
}>()

const displayCode = computed(() => {
  if (props.code) return props.code
  const parts: string[] = []
  if (props.html) parts.push(props.html)
  if (props.css) parts.push(props.css)
  return parts.join('\n')
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
    body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 16px; }
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
    <div class="live-preview-code">
      <pre><code v-text="displayCode" /></pre>
    </div>
    <iframe
      class="live-preview-frame"
      :srcdoc="srcdoc"
      :style="{ height: frameHeight }"
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
.live-preview-code pre {
  margin: 0;
  padding: 16px;
  background: var(--vp-code-block-bg);
  color: var(--vp-code-block-color);
  overflow-x: auto;
  font-size: 14px;
}
.live-preview-frame {
  display: block;
  border-top: 1px solid var(--vp-c-divider);
  background: #ffffff;
  width: 100%;
}
</style>
