<script setup lang="ts">
import LocaleSwitch from '@/components/LocaleSwitch.vue'
import GraphView from '@/components/GraphView.vue'
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center overflow-hidden bg-bg text-ink">
    <LocaleSwitch />
    <main>
      <GraphView />
    </main>
  </div>
</template>
