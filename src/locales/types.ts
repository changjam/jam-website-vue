export interface SkillGroup {
  category: string
  items: string[]
}

export interface ContactLink {
  label: string
  href: string
}

export interface Dictionary {
  hero: {
    name: string
    title: string
    tagline: string
  }
  about: {
    heading: string
    paragraphs: string[]
  }
  skills: {
    heading: string
    groups: SkillGroup[]
  }
  contact: {
    heading: string
    links: ContactLink[]
  }
  localeSwitch: {
    label: string
  }
}
