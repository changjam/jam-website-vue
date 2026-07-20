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

// ── fit the whole map into the viewport ──
const scale = ref(1)

function computeScale() {
  const pad = 48
  const s = Math.min((window.innerWidth - pad) / CANVAS.w, (window.innerHeight - pad) / CANVAS.h)
  scale.value = Math.max(0.42, Math.min(1, s))
}

function openNode(node: GraphNode) {
  activeId.value = node.id
}

onMounted(() => {
  computeScale()
  window.addEventListener('resize', computeScale)
})
onBeforeUnmount(() => window.removeEventListener('resize', computeScale))
</script>

<template>
  <div class="viewport">
    <div
      class="stage"
      :style="{
        width: `${CANVAS.w}px`,
        height: `${CANVAS.h}px`,
        transform: `translate(-50%, -50%) scale(${scale})`,
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

    <DetailPanel :node="activeNode" :ui="t.ui" @close="activeId = null" />
  </div>
</template>

<style scoped>
.viewport {
  position: fixed;
  inset: 0;
  overflow: hidden;
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
</style>
