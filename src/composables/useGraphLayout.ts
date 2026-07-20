import { computed, type Ref } from 'vue'
import type { GraphNode } from '@/locales/types'

/** Logical canvas the mind-map is authored in; scaled to fit the viewport. */
export const CANVAS = { w: 1200, h: 720 }
const CENTER = { x: CANVAS.w / 2, y: CANVAS.h / 2 }
const CENTER_R = 108

export interface PositionedNode {
  node: GraphNode
  x: number
  y: number
  rotate: number
  floatDelay: number
  floatDur: number
  drawDelay: number
  /** SVG cubic-bezier path from the center to this node's inner edge. */
  path: string
}

// deterministic "hand-placed" jitter so the layout feels organic but stable
const JITTER = [0, 34, -26, 40, -18, 22, -38, 12]

function buildSidePositions(nodes: GraphNode[], side: 'left' | 'right'): PositionedNode[] {
  const list = nodes.filter((n) => n.side === side)
  const n = list.length
  const dir = side === 'left' ? -1 : 1
  const topPad = 96
  const usableH = CANVAS.h - topPad * 2

  return list.map((node, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1)
    const y = topPad + usableH * t
    // base horizontal distance from center, with organic in/out jitter
    const jitter = JITTER[i % JITTER.length] ?? 0
    const x = CENTER.x + dir * (322 + jitter)

    // anchor on the center circle pointing toward the node
    const ang = Math.atan2(y - CENTER.y, x - CENTER.x)
    const sx = CENTER.x + Math.cos(ang) * CENTER_R
    const sy = CENTER.y + Math.sin(ang) * CENTER_R
    // node inner edge (cards are ~168 wide; approach from the center-facing side)
    const ex = x - dir * 92
    const ey = y
    // organic control points: leave the hub sideways, sweep into the node
    const c1x = sx + dir * 150
    const c1y = sy
    const c2x = ex - dir * 90
    const c2y = ey + (i % 2 === 0 ? -24 : 26)
    const path = `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`

    return {
      node,
      x,
      y,
      rotate: (i % 2 === 0 ? -1 : 1) * (1.2 + (i % 3) * 0.9),
      floatDelay: (i * 0.7 + (side === 'left' ? 0 : 0.35)) % 4,
      floatDur: 6 + (i % 3),
      drawDelay: 220 + i * 130,
      path,
    }
  })
}

export function useGraphLayout(nodes: Ref<GraphNode[]>) {
  const positioned = computed<PositionedNode[]>(() => [
    ...buildSidePositions(nodes.value, 'left'),
    ...buildSidePositions(nodes.value, 'right'),
  ])

  return { positioned, center: CENTER, canvas: CANVAS }
}
