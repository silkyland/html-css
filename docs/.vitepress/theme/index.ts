import type { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import LivePreview from '../components/LivePreview.vue'
import ColorPalette from '../components/ColorPalette.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('LivePreview', LivePreview)
    app.component('ColorPalette', ColorPalette)
  },
}
