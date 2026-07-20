import type { Dictionary } from './types'

const zh: Dictionary = {
  center: {
    name: '張家誠',
    title: '軟體工程師',
    tagline: '喜歡把想法做成看得到、用得到的東西。',
  },
  nodes: [
    {
      id: 'about',
      label: '關於我',
      content: {
        type: 'text',
        paragraphs: [
          '我是一名軟體工程師，平常專注在網站前後端開發，也做過一些 AI 應用與 DevOps 相關的專案。',
          '喜歡把複雜的問題拆解成簡單的步驟解決，也喜歡嘗試新的工具和技術。',
        ],
      },
    },
    {
      id: 'frontend',
      label: '前端',
      content: { type: 'tags', items: ['Vue.js', 'React.js', 'TypeScript', 'Tailwind CSS'] },
    },
    {
      id: 'backend',
      label: '後端',
      content: { type: 'tags', items: ['Python', 'Go', 'PostgreSQL', 'MongoDB'] },
    },
    {
      id: 'ai',
      label: 'AI',
      content: { type: 'tags', items: ['YOLO', 'Stable Diffusion', 'LLM'] },
    },
    {
      id: 'devops',
      label: 'DevOps',
      content: { type: 'tags', items: ['Docker', 'Kubernetes', 'GitHub Actions'] },
    },
    {
      id: 'contact',
      label: '聯絡',
      content: {
        type: 'links',
        items: [
          { label: 'GitHub', href: 'https://github.com/changjam' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
          { label: 'Email', href: 'mailto:changjam60@gmail.com' },
        ],
      },
    },
  ],
  localeSwitch: {
    label: 'EN',
  },
  closeLabel: '關閉',
}

export default zh
