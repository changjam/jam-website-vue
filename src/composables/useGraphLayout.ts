import { computed, type Ref } from 'vue'
import type { GraphNode } from '@/locales/types'

const RADIUS = 38

export interface PositionedNode {
  node: GraphNode
  x: number
  y: number
  delay: number
}

export function useGraphLayout(nodes: Ref<GraphNode[]>) {
  const positioned = computed<PositionedNode[]>(() =>
    nodes.value.map((node, index) => {
      const angle = (-90 + (360 / nodes.value.length) * index) * (Math.PI / 180)
      return {
        node,
        x: 50 + RADIUS * Math.cos(angle),
        y: 50 + RADIUS * Math.sin(angle),
        delay: index * 60,
      }
    }),
  )

  return { positioned }
}
