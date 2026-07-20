<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t, toggleLocale } = useLocale()
</script>

<template>
  <button type="button" class="switch" @click="toggleLocale">
    <span class="globe">🌐</span>
    {{ t.ui.localeSwitch }}
  </button>
</template>

<style scoped>
.switch {
  position: fixed;
  top: 18px;
  right: 20px;
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: var(--color-paper);
  border: 2px solid color-mix(in srgb, var(--color-navy) 40%, transparent);
  font-family: var(--font-round);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--color-ink);
  box-shadow: 0 6px 14px rgba(38, 50, 61, 0.14);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}
.switch:hover {
  transform: translateY(-2px) rotate(-2deg);
  box-shadow: 0 10px 20px rgba(38, 50, 61, 0.2);
}
.globe {
  font-size: 1rem;
}
</style>
