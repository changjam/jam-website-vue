<script setup lang="ts">
import { onMounted, ref } from 'vue'
import rough from 'roughjs'
import { asset, BRANCH_HEX } from '@/theme'

defineProps<{
  name: string
  latin: string
  title: string
  tagline: string
}>()

const ringRef = ref<SVGSVGElement | null>(null)
const mounted = ref(false)

onMounted(() => {
  const svg = ringRef.value
  if (svg) {
    const rc = rough.svg(svg)
    svg.appendChild(
      rc.circle(130, 130, 224, {
        stroke: BRANCH_HEX.navy,
        strokeWidth: 3,
        roughness: 2.1,
        bowing: 1.4,
        seed: 7,
      }),
    )
    svg.appendChild(
      rc.circle(130, 130, 206, {
        stroke: BRANCH_HEX.navy,
        strokeWidth: 1.4,
        roughness: 2.6,
        bowing: 2,
        seed: 21,
      }),
    )
  }
  requestAnimationFrame(() => (mounted.value = true))
})
</script>

<template>
  <div class="center" :class="{ 'is-in': mounted }">
    <div class="halo-wrap">
      <svg ref="ringRef" class="halo" viewBox="0 0 260 260" width="260" height="260" />
      <img :src="asset('avatar.webp')" alt="avatar" class="avatar" />
      <span class="star star-a">✦</span>
      <span class="star star-b">✳</span>
    </div>
    <div class="label">
      <p class="latin">{{ latin }}</p>
      <p class="name">{{ name }}</p>
      <p class="title">{{ title }}</p>
      <p class="tagline">“{{ tagline }}”</p>
    </div>
  </div>
</template>

<style scoped>
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  transition:
    opacity 600ms ease,
    transform 600ms cubic-bezier(0.22, 1.2, 0.36, 1);
}
.center.is-in {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.halo-wrap {
  position: relative;
  width: 260px;
  height: 260px;
  display: grid;
  place-items: center;
}
.halo {
  position: absolute;
  inset: 0;
  animation: spin 90s linear infinite;
}
.avatar {
  width: 176px;
  height: 176px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  box-shadow: 0 10px 26px rgba(38, 50, 61, 0.22);
}
.star {
  position: absolute;
  color: var(--color-projects);
  font-size: 1.4rem;
  opacity: 0.85;
}
.star-a {
  top: 6px;
  right: 26px;
  animation: twinkle 3.5s ease-in-out infinite;
}
.star-b {
  bottom: 14px;
  left: 20px;
  color: var(--color-frontend);
  animation: twinkle 4.2s ease-in-out infinite 0.8s;
}

.label {
  margin-top: 6px;
  text-align: center;
}
.latin {
  font-family: var(--font-hand);
  font-size: 2.6rem;
  line-height: 1;
  color: var(--color-navy);
  margin: 0;
}
.name {
  font-family: var(--font-round);
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 0.12em;
  color: var(--color-ink);
  margin: 2px 0 0;
}
.title {
  font-size: 0.85rem;
  color: var(--color-ink-soft);
  margin: 4px 0 0;
}
.tagline {
  max-width: 240px;
  font-size: 0.8rem;
  color: var(--color-ink-soft);
  margin: 6px auto 0;
  line-height: 1.4;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.25;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.95;
    transform: scale(1.15);
  }
}
</style>
