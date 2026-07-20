import type { Dictionary } from './types'

const en: Dictionary = {
  hero: {
    name: 'Jam Chang',
    title: 'Software Engineer',
    tagline: 'I like turning ideas into things people can see and use.',
  },
  about: {
    heading: 'About',
    paragraphs: [
      "I'm a software engineer focused on web frontend and backend development, with some experience in AI applications and DevOps.",
      'I enjoy breaking complex problems into simple steps, and trying out new tools and technologies.',
    ],
  },
  skills: {
    heading: 'Skills',
    groups: [
      { category: 'Frontend', items: ['Vue.js', 'React.js', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Python', 'Go', 'PostgreSQL', 'MongoDB'] },
      { category: 'AI', items: ['YOLO', 'Stable Diffusion', 'LLM'] },
      { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions'] },
    ],
  },
  contact: {
    heading: 'Contact',
    links: [
      { label: 'GitHub', href: 'https://github.com/changjam' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { label: 'Email', href: 'mailto:changjam60@gmail.com' },
    ],
  },
  localeSwitch: {
    label: '中',
  },
}

export default en
