<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { useGraphLayout, CANVAS } from '@/composables/useGraphLayout'
import type { GraphNode } from '@/locales/types'
import RoughConnectors from '@/components/RoughConnectors.vue'
import CenterNode from '@/components/CenterNode.vue'
import BranchNode from '@/components/BranchNode.vue'
import DetailPanel from '@/components/DetailPanel.vue'

const { t } = useLocale()
const { positioned } = useGraphLayout(computed(() => t.value.nodes))

const activeId = ref<string | null>(null)
const activeNode = computed<GraphNode | null>(
  () => t.value.nodes.find((n) => n.id === activeId.value) ?? null,
)

// ── fit + pan ──
const scale = ref(1)
const pan = ref({ x: 0, y: 0 })

function computeScale() {
  const pad = 48
  const s = Math.min((window.innerWidth - pad) / CANVAS.w, (window.innerHeight - pad) / CANVAS.h)
  scale.value = Math.max(0.42, Math.min(1, s))
}

const dragging = ref(false)
const suppressClick = ref(false)
let start = { x: 0, y: 0, px: 0, py: 0 }
let moved = false

function onDown(e: PointerEvent) {
  // ignore right-click; let button clicks proceed without pointer capture
  if (e.button !== 0) return
  dragging.value = true
  moved = false
  start = { x: e.clientX, y: e.clientY, px: pan.value.x, py: pan.value.y }
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp, { once: true })
}
function onMove(e: PointerEvent) {
  if (!dragging.value) return
  const dx = e.clientX - start.x
  const dy = e.clientY - start.y
  if (!moved && Math.hypot(dx, dy) > 6) moved = true
  if (moved) {
    pan.value = { x: start.px + dx, y: start.py + dy }
    suppressClick.value = true
  }
}
function onUp() {
  dragging.value = false
  window.removeEventListener('pointermove', onMove)
  setTimeout(() => (suppressClick.value = false), 0)
}

function openNode(node: GraphNode) {
  if (suppressClick.value) return
  activeId.value = node.id
}
function recenter() {
  pan.value = { x: 0, y: 0 }
}

onMounted(() => {
  computeScale()
  window.addEventListener('resize', computeScale)
})
onBeforeUnmount(() => window.removeEventListener('resize', computeScale))
</script>

<template>
  <div
    class="viewport"
    :class="{ grabbing: dragging }"
    @pointerdown="onDown"
  >
    <div
      class="stage"
      :style="{
        width: `${CANVAS.w}px`,
        height: `${CANVAS.h}px`,
        transform: `translate(-50%, -50%) translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
      }"
    >
      <RoughConnectors :nodes="positioned" />

      <CenterNode
        :name="t.center.name"
        :latin="t.center.latin"
        :title="t.center.title"
        :tagline="t.center.tagline"
      />

      <BranchNode
        v-for="p in positioned"
        :key="p.node.id"
        :style="{ left: `${p.x}px`, top: `${p.y}px` }"
        class="branch"
        :label="p.node.label"
        :sub="p.node.sub"
        :emoji="p.node.emoji"
        :color="p.node.color"
        :rotate="p.rotate"
        :float-delay="p.floatDelay"
        :float-dur="p.floatDur"
        :draw-delay="p.drawDelay"
        :active="activeId === p.node.id"
        @activate="openNode(p.node)"
      />
    </div>

    <p class="hint">{{ t.ui.hintDrag }}</p>
    <button v-if="pan.x || pan.y" class="recenter" @click="recenter">⟳</button>

    <DetailPanel :node="activeNode" :ui="t.ui" @close="activeId = null" />
  </div>
</template>

<style scoped>
.viewport {
  position: fixed;
  inset: 0;
  overflow: hidden;
  cursor: grab;
  touch-action: none;
}
.viewport.grabbing {
  cursor: grabbing;
}
.stage {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center center;
}
.branch {
  position: absolute;
}

.hint {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-family: var(--font-hand);
  font-size: 1.15rem;
  color: var(--color-ink-soft);
  opacity: 0.7;
  pointer-events: none;
  white-space: nowrap;
}
.recenter {
  position: fixed;
  bottom: 14px;
  right: 16px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--color-paper);
  color: var(--color-navy);
  font-size: 1.3rem;
  box-shadow: 0 6px 14px rgba(38, 50, 61, 0.16);
  transition: transform 200ms ease;
}
.recenter:hover {
  transform: rotate(-90deg);
}
</style>
