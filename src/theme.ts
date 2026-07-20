import type { BranchColor } from '@/locales/types'

/** Hex values mirroring the CSS @theme tokens (rough.js needs real colors). */
export const BRANCH_HEX: Record<BranchColor, string> = {
  navy: '#35597f',
  frontend: '#2f8f83',
  backend: '#c77b34',
  ai: '#8a5cc0',
  devops: '#4e7cc9',
  extension: '#c25b6e',
  career: '#b5502e',
  education: '#5c9a46',
  projects: '#cf9a2b',
  contact: '#4a6572',
}

export const INK = '#26323d'
export const PAPER = '#f6f1e7'

/** base URL aware asset path for files under /public */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
