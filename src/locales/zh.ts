import type { Dictionary } from './types'

const zh: Dictionary = {
  hero: {
    name: '張家誠',
    title: '軟體工程師',
    tagline: '喜歡把想法做成看得到、用得到的東西。',
  },
  about: {
    heading: '關於我',
    paragraphs: [
      '我是一名軟體工程師，平常專注在網站前後端開發，也做過一些 AI 應用與 DevOps 相關的專案。',
      '喜歡把複雜的問題拆解成簡單的步驟解決，也喜歡嘗試新的工具和技術。',
    ],
  },
  skills: {
    heading: '技能',
    groups: [
      { category: '前端', items: ['Vue.js', 'React.js', 'TypeScript', 'Tailwind CSS'] },
      { category: '後端', items: ['Python', 'Go', 'PostgreSQL', 'MongoDB'] },
      { category: 'AI', items: ['YOLO', 'Stable Diffusion', 'LLM'] },
      { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions'] },
    ],
  },
  contact: {
    heading: '聯絡方式',
    links: [
      { label: 'GitHub', href: 'https://github.com/changjam' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { label: 'Email', href: 'mailto:changjam60@gmail.com' },
    ],
  },
  localeSwitch: {
    label: 'EN',
  },
}

export default zh
