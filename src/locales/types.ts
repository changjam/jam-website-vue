export interface TechItem {
  name: string
  /** filename (without path) under public/logos, e.g. "vue_logo" */
  logo?: string
}

export interface Job {
  company: string
  position: string
  period: string
  location: string
  achievements: string[]
}

export interface School {
  school: string
  degree: string
  period: string
  location: string
  achievements: string[]
}

export interface Project {
  name: string
  desc: string
  /** filename (without path) under public/projects, e.g. "kashi_o" */
  image?: string
  link: string
  tags: string[]
}

export interface LinkItem {
  label: string
  handle?: string
  href: string
  emoji: string
}

export type NodeContent =
  | { type: 'about'; paragraphs: string[]; highlights: string[] }
  | { type: 'skill'; description: string; items: TechItem[] }
  | { type: 'career'; jobs: Job[] }
  | { type: 'education'; schools: School[] }
  | { type: 'projects'; projects: Project[] }
  | { type: 'links'; links: LinkItem[] }

export type BranchColor =
  | 'navy'
  | 'frontend'
  | 'backend'
  | 'ai'
  | 'devops'
  | 'extension'
  | 'career'
  | 'education'
  | 'projects'
  | 'contact'

export interface GraphNode {
  id: string
  label: string
  sub: string
  emoji: string
  color: BranchColor
  side: 'left' | 'right'
  content: NodeContent
}

export interface Dictionary {
  center: {
    name: string
    latin: string
    title: string
    tagline: string
  }
  nodes: GraphNode[]
  ui: {
    localeSwitch: string
    close: string
    viewProject: string
    hintDrag: string
  }
}
