import type { Dictionary } from './types'

const en: Dictionary = {
  center: {
    name: 'Jam Chang',
    title: 'Software Engineer',
    tagline: 'I like turning ideas into things people can see and use.',
  },
  nodes: [
    {
      id: 'about',
      label: 'About',
      content: {
        type: 'text',
        paragraphs: [
          "I'm a software engineer focused on web frontend and backend development, with some experience in AI applications and DevOps.",
          'I enjoy breaking complex problems into simple steps, and trying out new tools and technologies.',
        ],
      },
    },
    {
      id: 'frontend',
      label: 'Frontend',
      content: { type: 'tags', items: ['Vue.js', 'React.js', 'TypeScript', 'Tailwind CSS'] },
    },
    {
      id: 'backend',
      label: 'Backend',
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
      label: 'Contact',
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
    label: '中',
  },
  closeLabel: 'Close',
}

export default en
