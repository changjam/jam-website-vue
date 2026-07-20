<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="mx-auto max-w-2xl border-t border-ink/10 px-6 py-24">
    <h2 class="text-sm font-medium uppercase tracking-widest text-ink/50">
      {{ t.skills.heading }}
    </h2>
    <div class="mt-8 space-y-6">
      <div v-for="group in t.skills.groups" :key="group.category">
        <h3 class="text-sm text-ink/50">{{ group.category }}</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="item in group.items"
            :key="item"
            class="rounded-full border border-accent/30 px-3 py-1 text-sm text-ink/80"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
