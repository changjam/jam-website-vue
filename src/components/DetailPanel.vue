<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import type { GraphNode } from '@/locales/types'
import { asset, BRANCH_HEX } from '@/theme'

const props = defineProps<{
  node: GraphNode | null
  ui: { close: string; viewProject: string }
}>()

const emit = defineEmits<{ close: [] }>()

const hex = computed(() => (props.node ? BRANCH_HEX[props.node.color] : '#000'))

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="node" class="overlay" @click.self="emit('close')">
        <Transition name="pop" appear>
          <div :key="node.id" class="panel" :style="{ '--hex': hex }">
            <div class="accent" />
            <header class="head">
              <span class="emoji">{{ node.emoji }}</span>
              <div class="titles">
                <h2>{{ node.label }}</h2>
                <p>{{ node.sub }}</p>
              </div>
              <button class="close" :aria-label="ui.close" @click="emit('close')">✕</button>
            </header>

            <div class="body">
              <!-- About -->
              <template v-if="node.content.type === 'about'">
                <p v-for="(p, i) in node.content.paragraphs" :key="i" class="para">{{ p }}</p>
                <div class="chips">
                  <span v-for="h in node.content.highlights" :key="h" class="chip">{{ h }}</span>
                </div>
              </template>

              <!-- Skill -->
              <template v-else-if="node.content.type === 'skill'">
                <p class="para">{{ node.content.description }}</p>
                <div class="tech-grid">
                  <div v-for="item in node.content.items" :key="item.name" class="tech">
                    <img v-if="item.logo" :src="asset(`logos/${item.logo}.webp`)" :alt="item.name" />
                    <span v-else class="tech-dot">◆</span>
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </template>

              <!-- Career / Education -->
              <template
                v-else-if="node.content.type === 'career' || node.content.type === 'education'"
              >
                <div
                  v-for="(item, i) in node.content.type === 'career'
                    ? node.content.jobs
                    : node.content.schools"
                  :key="i"
                  class="entry"
                >
                  <div class="entry-head">
                    <h3>{{ 'company' in item ? item.company : item.school }}</h3>
                    <span class="period">{{ item.period }}</span>
                  </div>
                  <p class="role">
                    {{ 'position' in item ? item.position : item.degree }} · {{ item.location }}
                  </p>
                  <ul>
                    <li v-for="(a, j) in item.achievements" :key="j">{{ a }}</li>
                  </ul>
                </div>
              </template>

              <!-- Projects -->
              <template v-else-if="node.content.type === 'projects'">
                <div class="proj-grid">
                  <a
                    v-for="proj in node.content.projects"
                    :key="proj.name"
                    class="proj"
                    :href="proj.link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="proj-img">
                      <img
                        v-if="proj.image"
                        :src="asset(`projects/${proj.image}.webp`)"
                        :alt="proj.name"
                        loading="lazy"
                      />
                    </div>
                    <div class="proj-info">
                      <h4>{{ proj.name }}</h4>
                      <p>{{ proj.desc }}</p>
                      <div class="tags">
                        <span v-for="t in proj.tags" :key="t">{{ t }}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </template>

              <!-- Contact -->
              <template v-else-if="node.content.type === 'links'">
                <a
                  v-for="link in node.content.links"
                  :key="link.label"
                  class="link-row"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="link-emoji">{{ link.emoji }}</span>
                  <span class="link-text">
                    <span class="link-label">{{ link.label }}</span>
                    <span class="link-handle">{{ link.handle }}</span>
                  </span>
                  <span class="link-arrow">↗</span>
                </a>
              </template>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(38, 50, 61, 0.32);
  backdrop-filter: blur(3px);
}

.panel {
  position: relative;
  width: 100%;
  max-width: 560px;
  max-height: 84vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--color-paper);
  border: 2px solid color-mix(in srgb, var(--hex) 55%, transparent);
  border-radius: 22px;
  box-shadow: 0 30px 60px rgba(38, 50, 61, 0.3);
}
.accent {
  height: 8px;
  background: var(--hex);
}

.head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px 12px;
  border-bottom: 1.5px dashed color-mix(in srgb, var(--hex) 40%, transparent);
}
.emoji {
  font-size: 2rem;
}
.titles {
  flex: 1;
}
.titles h2 {
  margin: 0;
  font-family: var(--font-round);
  font-weight: 800;
  font-size: 1.35rem;
  color: var(--color-ink);
}
.titles p {
  margin: 0;
  font-family: var(--font-hand);
  font-size: 1.15rem;
  color: var(--hex);
}
.close {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: var(--color-ink-soft);
  font-size: 0.95rem;
  transition:
    background 150ms ease,
    color 150ms ease;
}
.close:hover {
  background: color-mix(in srgb, var(--hex) 16%, transparent);
  color: var(--color-ink);
}

.body {
  padding: 18px 20px 22px;
  overflow-y: auto;
}
.para {
  margin: 0 0 12px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-ink);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}
.chip {
  padding: 5px 12px;
  border-radius: 9999px;
  font-size: 0.85rem;
  background: color-mix(in srgb, var(--hex) 14%, transparent);
  color: var(--color-ink);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 6px;
}
.tech {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--hex) 9%, transparent);
  border: 1.5px solid color-mix(in srgb, var(--hex) 22%, transparent);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-ink);
}
.tech img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}
.tech-dot {
  color: var(--hex);
  font-size: 0.8rem;
}

.entry {
  padding: 14px 0;
  border-bottom: 1.5px dashed color-mix(in srgb, var(--hex) 26%, transparent);
}
.entry:last-child {
  border-bottom: none;
}
.entry-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}
.entry-head h3 {
  margin: 0;
  font-family: var(--font-round);
  font-weight: 800;
  font-size: 1.05rem;
  color: var(--color-ink);
}
.period {
  flex-shrink: 0;
  font-size: 0.8rem;
  color: var(--hex);
  font-weight: 700;
}
.role {
  margin: 2px 0 8px;
  font-size: 0.85rem;
  color: var(--color-ink-soft);
}
.entry ul {
  margin: 0;
  padding-left: 4px;
  list-style: none;
}
.entry li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 6px;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-ink);
}
.entry li::before {
  content: "✦";
  position: absolute;
  left: 0;
  color: var(--hex);
  font-size: 0.75rem;
  top: 3px;
}

.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
}
.proj {
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  border: 1.5px solid color-mix(in srgb, var(--hex) 22%, transparent);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}
.proj:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 22px color-mix(in srgb, var(--hex) 26%, transparent);
}
.proj-img {
  aspect-ratio: 16 / 10;
  background: color-mix(in srgb, var(--hex) 10%, #fff);
  overflow: hidden;
}
.proj-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.proj-info {
  padding: 10px 12px 12px;
}
.proj-info h4 {
  margin: 0 0 4px;
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--color-ink);
}
.proj-info p {
  margin: 0 0 8px;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--color-ink-soft);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tags span {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 9999px;
  background: color-mix(in srgb, var(--hex) 14%, transparent);
  color: var(--color-ink);
}

.link-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  margin-bottom: 10px;
  border-radius: 14px;
  background: color-mix(in srgb, var(--hex) 9%, transparent);
  border: 1.5px solid color-mix(in srgb, var(--hex) 22%, transparent);
  transition:
    transform 160ms ease,
    background 160ms ease;
}
.link-row:hover {
  transform: translateX(4px);
  background: color-mix(in srgb, var(--hex) 16%, transparent);
}
.link-emoji {
  font-size: 1.5rem;
}
.link-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.link-label {
  font-weight: 800;
  color: var(--color-ink);
}
.link-handle {
  font-size: 0.82rem;
  color: var(--color-ink-soft);
}
.link-arrow {
  color: var(--hex);
  font-size: 1.1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.pop-enter-active {
  transition:
    opacity 240ms ease,
    transform 240ms cubic-bezier(0.22, 1.2, 0.36, 1);
}
.pop-leave-active {
  transition:
    opacity 140ms ease,
    transform 140ms ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.94) translateY(8px);
}
</style>
