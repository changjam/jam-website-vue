<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t, toggleLocale } = useLocale()
</script>

<template>
  <button
    type="button"
    class="fixed right-6 top-6 text-sm text-ink/60 transition-colors duration-150 hover:text-ink"
    @click="toggleLocale"
  >
    {{ t.localeSwitch.label }}
  </button>
</template>
