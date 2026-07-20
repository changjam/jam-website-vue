<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{
  name: string
  title: string
  tagline: string
}>()

const visible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    visible.value = true
  })
})
</script>

<template>
  <div class="center" :class="{ 'center-visible': visible }">
    <p class="text-lg font-semibold sm:text-xl">{{ name }}</p>
    <p class="mt-1 text-xs text-ink/60 sm:text-sm">{{ title }}</p>
    <p class="mt-2 max-w-[10rem] text-[0.7rem] leading-snug text-ink/50 sm:max-w-[12rem] sm:text-xs">
      {{ tagline }}
    </p>
  </div>
</template>

<style scoped>
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 10;
  display: flex;
  width: 9rem;
  flex-direction: column;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid color-mix(in srgb, var(--color-accent) 45%, transparent);
  background-color: var(--color-bg);
  padding: 1.5rem 1rem;
  text-align: center;
  transform: translate(-50%, -50%) scale(0.7);
  opacity: 0;
  transition:
    opacity 500ms ease,
    transform 500ms ease;
}

@media (min-width: 640px) {
  .center {
    width: 11rem;
    padding: 1.75rem 1.25rem;
  }
}

.center-visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
</style>
