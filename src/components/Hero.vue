<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">{{ t.hero.name }}</h1>
    <p class="mt-4 text-lg text-ink/70">{{ t.hero.title }}</p>
    <p class="mt-8 max-w-md text-base text-ink/60">{{ t.hero.tagline }}</p>
  </section>
</template>
