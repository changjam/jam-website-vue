<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import type { GraphNode } from '@/locales/types'

const props = defineProps<{
  node: GraphNode | null
  closeLabel: string
}>()

const emit = defineEmits<{ close: [] }>()

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="props.node"
        class="fixed inset-0 z-20 flex items-center justify-center bg-ink/30 px-6"
        @click.self="emit('close')"
      >
        <Transition name="pop" appear>
          <div
            :key="props.node.id"
            class="w-full max-w-sm rounded-2xl border border-accent/20 bg-bg p-8 text-ink shadow-lg"
          >
            <div class="flex items-start justify-between gap-4">
              <h2 class="text-lg font-semibold">{{ props.node.label }}</h2>
              <button
                type="button"
                class="text-sm text-ink/50 transition-colors duration-150 hover:text-ink"
                :aria-label="props.closeLabel"
                @click="emit('close')"
              >
                ✕
              </button>
            </div>

            <div class="mt-4">
              <div v-if="props.node.content.type === 'text'" class="space-y-3">
                <p
                  v-for="(paragraph, i) in props.node.content.paragraphs"
                  :key="i"
                  class="text-sm leading-relaxed text-ink/80"
                >
                  {{ paragraph }}
                </p>
              </div>

              <div v-else-if="props.node.content.type === 'tags'" class="flex flex-wrap gap-2">
                <span
                  v-for="item in props.node.content.items"
                  :key="item"
                  class="rounded-full border border-accent/30 px-3 py-1 text-sm text-ink/80"
                >
                  {{ item }}
                </span>
              </div>

              <ul v-else-if="props.node.content.type === 'links'" class="space-y-2">
                <li v-for="link in props.node.content.items" :key="link.label">
                  <a
                    :href="link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-ink/80 underline decoration-accent/40 underline-offset-4 transition-colors duration-150 hover:text-accent"
                  >
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 180ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}
.pop-leave-active {
  transition:
    opacity 120ms ease,
    transform 120ms ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
