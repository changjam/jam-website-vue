<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import rough from 'roughjs'
import type { BranchColor } from '@/locales/types'
import { BRANCH_HEX } from '@/theme'

const props = defineProps<{
  label: string
  sub: string
  emoji: string
  color: BranchColor
  rotate: number
  floatDelay: number
  floatDur: number
  drawDelay: number
  active: boolean
}>()

defineEmits<{ activate: [] }>()

const W = 176
const H = 68
const svgRef = ref<SVGSVGElement | null>(null)
const mounted = ref(false)
const hex = computed(() => BRANCH_HEX[props.color])

function rgba(h: string, a: number) {
  const n = parseInt(h.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

onMounted(() => {
  const svg = svgRef.value
  if (svg) {
    const rc = rough.svg(svg)
    svg.appendChild(
      rc.rectangle(4, 4, W - 8, H - 8, {
        stroke: hex.value,
        strokeWidth: 2.2,
        roughness: 1.9,
        bowing: 1.6,
        fill: rgba(hex.value, 0.12),
        fillStyle: 'solid',
        seed: 42,
      }),
    )
  }
  requestAnimationFrame(() => (mounted.value = true))
})
</script>

<template>
  <div
    class="node"
    :class="{ 'is-in': mounted }"
    :style="{ transitionDelay: `${drawDelay}ms` }"
  >
    <div
      class="floater"
      :style="{ animationDelay: `${floatDelay}s`, animationDuration: `${floatDur}s` }"
    >
      <button
        type="button"
        class="card"
        :class="{ active }"
        :style="{
          '--rot': `${rotate}deg`,
          '--hex': hex,
          '--tint': rgba(hex, 0.18),
          width: `${W}px`,
          height: `${H}px`,
        }"
        @click="$emit('activate')"
      >
        <svg ref="svgRef" class="bg" :viewBox="`0 0 ${W} ${H}`" :width="W" :height="H" />
        <span class="emoji">{{ emoji }}</span>
        <span class="text">
          <span class="label">{{ label }}</span>
          <span class="sub">{{ sub }}</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.node {
  position: absolute;
  transform: translate(-50%, -50%) scale(0.6);
  opacity: 0;
  transition:
    opacity 420ms ease,
    transform 480ms cubic-bezier(0.22, 1.2, 0.36, 1);
}
.node.is-in {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.floater {
  animation: float ease-in-out infinite;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
}

.card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  background: var(--color-paper);
  border-radius: 16px;
  transform: rotate(var(--rot));
  transition:
    transform 220ms cubic-bezier(0.22, 1.2, 0.36, 1),
    box-shadow 220ms ease,
    background 220ms ease;
  box-shadow: 0 6px 14px rgba(38, 50, 61, 0.1);
  cursor: pointer;
}
.card:hover,
.card:focus-visible {
  transform: rotate(0deg) scale(1.07);
  box-shadow: 0 14px 26px color-mix(in srgb, var(--hex) 34%, transparent);
  background: var(--tint);
  outline: none;
}
.card.active {
  transform: rotate(0deg) scale(1.05);
  background: var(--tint);
  box-shadow: 0 12px 24px color-mix(in srgb, var(--hex) 40%, transparent);
}

.bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.emoji {
  font-size: 1.5rem;
  line-height: 1;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.15));
  z-index: 1;
}
.text {
  display: flex;
  flex-direction: column;
  z-index: 1;
  text-align: left;
}
.label {
  font-family: var(--font-round);
  font-weight: 800;
  font-size: 1rem;
  color: var(--color-ink);
  line-height: 1.1;
}
.sub {
  font-family: var(--font-hand);
  font-size: 1.05rem;
  color: var(--hex);
  line-height: 1;
}
</style>
