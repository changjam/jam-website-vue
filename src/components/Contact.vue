<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="mx-auto max-w-2xl border-t border-ink/10 px-6 py-24 pb-32">
    <h2 class="text-sm font-medium uppercase tracking-widest text-ink/50">
      {{ t.contact.heading }}
    </h2>
    <ul class="mt-6 space-y-3">
      <li v-for="link in t.contact.links" :key="link.label">
        <a
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-lg text-ink/80 underline decoration-accent/40 underline-offset-4 transition-colors duration-150 hover:text-accent"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </section>
</template>
