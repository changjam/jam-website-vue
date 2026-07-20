<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { useGraphLayout } from '@/composables/useGraphLayout'
import type { GraphNode } from '@/locales/types'
import CenterNode from '@/components/CenterNode.vue'
import SkillNode from '@/components/SkillNode.vue'
import NodeDetail from '@/components/NodeDetail.vue'

const { t } = useLocale()
const { positioned } = useGraphLayout(computed(() => t.value.nodes))

const activeNodeId = ref<string | null>(null)
const activeNode = computed<GraphNode | null>(
  () => t.value.nodes.find((node) => node.id === activeNodeId.value) ?? null,
)
const linesVisible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    linesVisible.value = true
  })
})

function openNode(node: GraphNode) {
  activeNodeId.value = node.id
}

function closeNode() {
  activeNodeId.value = null
}
</script>

<template>
  <div class="relative mx-auto aspect-square w-[min(88vw,80vh,640px)]">
    <svg
      class="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <line
        v-for="{ node, x, y, delay } in positioned"
        :key="node.id"
        x1="50"
        y1="50"
        :x2="x"
        :y2="y"
        pathLength="1"
        class="connector"
        :class="{ 'connector-visible': linesVisible }"
        :style="{ transitionDelay: `${delay}ms` }"
      />
    </svg>

    <CenterNode :name="t.center.name" :title="t.center.title" :tagline="t.center.tagline" />

    <SkillNode
      v-for="{ node, x, y, delay } in positioned"
      :key="node.id"
      :label="node.label"
      :x="x"
      :y="y"
      :delay="delay"
      :active="activeNodeId === node.id"
      @activate="openNode(node)"
    />

    <NodeDetail :node="activeNode" :close-label="t.closeLabel" @close="closeNode" />
  </div>
</template>

<style scoped>
.connector {
  stroke: var(--color-accent);
  stroke-opacity: 0.3;
  stroke-width: 0.3;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 500ms ease;
}

.connector-visible {
  stroke-dashoffset: 0;
}
</style>
