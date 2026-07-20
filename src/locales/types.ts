export interface ContactLink {
  label: string
  href: string
}

export type NodeContent =
  | { type: 'text'; paragraphs: string[] }
  | { type: 'tags'; items: string[] }
  | { type: 'links'; items: ContactLink[] }

export interface GraphNode {
  id: string
  label: string
  content: NodeContent
}

export interface Dictionary {
  center: {
    name: string
    title: string
    tagline: string
  }
  nodes: GraphNode[]
  localeSwitch: {
    label: string
  }
  closeLabel: string
}
