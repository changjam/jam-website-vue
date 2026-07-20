import { computed, ref } from 'vue'
import zh from '@/locales/zh'
import en from '@/locales/en'

type LocaleCode = 'zh' | 'en'

const dictionaries = { zh, en }

const STORAGE_KEY = 'jam-website-locale'

function readInitialLocale(): LocaleCode {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'zh' || stored === 'en') return stored
  return navigator.language.startsWith('zh') ? 'zh' : 'en'
}

const locale = ref<LocaleCode>(readInitialLocale())

export function useLocale() {
  const t = computed(() => dictionaries[locale.value])

  function toggleLocale() {
    locale.value = locale.value === 'zh' ? 'en' : 'zh'
    localStorage.setItem(STORAGE_KEY, locale.value)
  }

  return { locale, t, toggleLocale }
}
