<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="mx-auto max-w-2xl px-6 py-24">
    <h2 class="text-sm font-medium uppercase tracking-widest text-ink/50">
      {{ t.about.heading }}
    </h2>
    <div class="mt-6 space-y-5">
      <p v-for="(paragraph, index) in t.about.paragraphs" :key="index" class="text-lg leading-relaxed text-ink/80">
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>
