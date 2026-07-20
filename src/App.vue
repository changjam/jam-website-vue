<script setup lang="ts">
import LocaleSwitch from '@/components/LocaleSwitch.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
  <div class="min-h-screen bg-bg text-ink">
    <LocaleSwitch />
    <main>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  </div>
</template>
