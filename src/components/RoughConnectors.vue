<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import rough from 'roughjs'
import type { PositionedNode } from '@/composables/useGraphLayout'
import { CANVAS } from '@/composables/useGraphLayout'
import { BRANCH_HEX } from '@/theme'

const props = defineProps<{ nodes: PositionedNode[] }>()

const svgRef = ref<SVGSVGElement | null>(null)

function draw() {
  const svg = svgRef.value
  if (!svg) return
  svg.innerHTML = ''
  const rc = rough.svg(svg)

  props.nodes.forEach((pn) => {
    const color = BRANCH_HEX[pn.node.color]
    const g = rc.path(pn.path, {
      stroke: color,
      strokeWidth: 2.4,
      roughness: 1.8,
      bowing: 2.2,
      seed: hash(pn.node.id),
    })
    g.style.opacity = '0.55'
    svg.appendChild(g)

    // draw-in: animate each stroke path from hidden to full
    g.querySelectorAll('path').forEach((p) => {
      const len = p.getTotalLength?.() ?? 600
      p.style.strokeDasharray = `${len}`
      p.style.strokeDashoffset = `${len}`
      p.style.transition = `stroke-dashoffset 700ms ease ${pn.drawDelay}ms`
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          p.style.strokeDashoffset = '0'
        }),
      )
    })
  })
}

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100000
  return h
}

onMounted(draw)
watch(
  () => props.nodes.length,
  () => draw(),
)
</script>

<template>
  <svg
    ref="svgRef"
    class="pointer-events-none absolute inset-0"
    :viewBox="`0 0 ${CANVAS.w} ${CANVAS.h}`"
    :width="CANVAS.w"
    :height="CANVAS.h"
  />
</template>
