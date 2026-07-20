<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{
  label: string
  x: number
  y: number
  delay: number
  active: boolean
}>()

defineEmits<{ activate: [] }>()

const visible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    visible.value = true
  })
})
</script>

<template>
  <button
    type="button"
    class="node"
    :class="{ 'node-visible': visible, 'node-active': props.active }"
    :style="{
      left: `${props.x}%`,
      top: `${props.y}%`,
      transitionDelay: `${props.delay}ms`,
    }"
    @click="$emit('activate')"
  >
    {{ props.label }}
  </button>
</template>

<style scoped>
.node {
  position: absolute;
  transform: translate(-50%, -50%) scale(0.5);
  opacity: 0;
  white-space: nowrap;
  border-radius: 9999px;
  border: 1px solid color-mix(in srgb, var(--color-accent) 35%, transparent);
  background-color: var(--color-bg);
  color: var(--color-ink);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition:
    opacity 400ms ease,
    transform 200ms ease,
    border-color 200ms ease,
    background-color 200ms ease;
}

.node-visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.node-visible:hover,
.node-visible:focus-visible {
  transform: translate(-50%, -50%) scale(1.08);
  border-color: var(--color-accent);
}

.node-active {
  border-color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 12%, var(--color-bg));
}
</style>
