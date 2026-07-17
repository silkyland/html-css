import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'th-TH',
  title: 'เวิร์กชอป HTML + CSS + Git',
  description: 'คู่มืออบรมสร้างเว็บไซต์ด้วย HTML, CSS และ Git เบื้องต้น',
  srcExclude: ['PLAN.md', 'ARCHITECTURE.md', 'CONTRIBUTING.md', 'ILLUSTRATION-BACKLOG.md'],
  themeConfig: {
    nav: [
      { text: 'หน้าแรก', link: '/' },
      {
        text: 'แนะนำ',
        items: [
          { text: 'ภาพรวม', link: '/intro/overview' },
          { text: 'เตรียมเครื่องมือ', link: '/intro/setup' },
          { text: 'วิทยากร', link: '/intro/instructor' },
          { text: 'กำหนดการ', link: '/intro/agenda' },
          { text: 'ประวัติ Web, HTML และ CSS', link: '/intro/web-history' },
          { text: 'เว็บทำงานอย่างไร', link: '/intro/how-web-works' },
        ],
      },
      {
        text: 'HTML',
        items: [
          { text: 'โครงสร้างเอกสาร', link: '/html/structure' },
          { text: 'Tag พื้นฐาน', link: '/html/tags' },
          { text: 'ลิงก์และรูปภาพ', link: '/html/links-images' },
          { text: 'Semantic HTML', link: '/html/semantic' },
          { text: 'Accessibility และ Validation', link: '/html/accessibility-validation' },
          { text: 'รายการและตาราง (เสริม)', link: '/html/lists-tables' },
          { text: 'ฟอร์ม (เสริม)', link: '/html/forms' },
        ],
      },
      {
        text: 'CSS',
        items: [
          { text: 'รู้จัก CSS', link: '/css/intro' },
          { text: 'Selector', link: '/css/selectors' },
          { text: 'Box Model', link: '/css/box-model' },
          { text: 'สีและตัวอักษร', link: '/css/colors-fonts' },
          { text: 'Flexbox', link: '/css/flexbox' },
          { text: 'CSS Grid', link: '/css/grid' },
          { text: 'Responsive', link: '/css/responsive' },
        ],
      },
      {
        text: 'Git',
        items: [
          { text: 'Version Control', link: '/git/version-control' },
          { text: 'git init', link: '/git/init' },
          { text: 'git add', link: '/git/add' },
          { text: 'git commit', link: '/git/commit' },
          { text: 'GitHub', link: '/git/github' },
          { text: 'git push', link: '/git/push' },
          { text: 'git clone', link: '/git/clone' },
        ],
      },
      {
        text: 'เวิร์กชอป',
        items: [
          { text: 'โจทย์', link: '/workshop/project' },
          { text: 'แก้ปัญหา', link: '/workshop/troubleshooting' },
          { text: 'เช็กลิสต์ผู้สอน', link: '/workshop/instructor-checklist' },
          { text: 'สรุป', link: '/workshop/summary' },
          { text: 'แหล่งเรียนรู้', link: '/workshop/resources' },
          { text: 'ถาม–ตอบ', link: '/workshop/qna' },
        ],
      },
      {
        text: 'Tools',
        items: [
          { text: 'Color Palette', link: '/tools/color-palette' },
        ],
      },
    ],
    sidebar: {
      '/intro/': [
        {
          text: 'แนะนำ',
          items: [
            { text: 'ภาพรวม', link: '/intro/overview' },
            { text: 'เตรียมเครื่องมือ', link: '/intro/setup' },
            { text: 'วิทยากร', link: '/intro/instructor' },
            { text: 'กำหนดการ', link: '/intro/agenda' },
            { text: 'ประวัติ Web, HTML และ CSS', link: '/intro/web-history' },
            { text: 'เว็บทำงานอย่างไร', link: '/intro/how-web-works' },
          ],
        },
      ],
      '/html/': [
        {
          text: 'HTML',
          items: [
            { text: 'โครงสร้างเอกสาร', link: '/html/structure' },
            { text: 'Tag พื้นฐาน', link: '/html/tags' },
            { text: 'ลิงก์และรูปภาพ', link: '/html/links-images' },
            { text: 'Semantic HTML', link: '/html/semantic' },
            { text: 'Accessibility และ Validation', link: '/html/accessibility-validation' },
            { text: 'รายการและตาราง (เสริม)', link: '/html/lists-tables' },
            { text: 'ฟอร์ม (เสริม)', link: '/html/forms' },
          ],
        },
      ],
      '/css/': [
        {
          text: 'CSS',
          items: [
            { text: 'รู้จัก CSS', link: '/css/intro' },
            { text: 'Selector', link: '/css/selectors' },
            { text: 'Box Model', link: '/css/box-model' },
            { text: 'สีและตัวอักษร', link: '/css/colors-fonts' },
            { text: 'Flexbox', link: '/css/flexbox' },
            { text: 'CSS Grid', link: '/css/grid' },
            { text: 'Responsive', link: '/css/responsive' },
          ],
        },
      ],
      '/git/': [
        {
          text: 'Git',
          items: [
            { text: 'Version Control', link: '/git/version-control' },
            { text: 'git init', link: '/git/init' },
            { text: 'git add', link: '/git/add' },
            { text: 'git commit', link: '/git/commit' },
            { text: 'GitHub', link: '/git/github' },
            { text: 'git push', link: '/git/push' },
            { text: 'git clone', link: '/git/clone' },
          ],
        },
      ],
      '/workshop/': [
        {
          text: 'เวิร์กชอป',
          items: [
            { text: 'โจทย์', link: '/workshop/project' },
            { text: 'แก้ปัญหา', link: '/workshop/troubleshooting' },
            { text: 'เช็กลิสต์ผู้สอน', link: '/workshop/instructor-checklist' },
            { text: 'สรุป', link: '/workshop/summary' },
            { text: 'แหล่งเรียนรู้', link: '/workshop/resources' },
            { text: 'ถาม–ตอบ', link: '/workshop/qna' },
          ],
        },
      ],
      '/tools/': [
        {
          text: 'Tools',
          items: [
            { text: 'Color Palette', link: '/tools/color-palette' },
          ],
        },
      ],
    },
    outline: { label: 'บนหน้านี้' },
    search: { provider: 'local' },
  },
  markdown: {
    container: {
      tipLabel: 'คำแนะนำ',
      warningLabel: 'คำเตือน',
      dangerLabel: 'ระวัง',
      infoLabel: 'ข้อมูล',
      detailsLabel: 'รายละเอียด',
    },
  },
})
