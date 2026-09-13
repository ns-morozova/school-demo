<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import logoMain from '@/assets/logo/logo-main.svg'
import moonIcon from '@/assets/icons/moon.svg'
import sunIcon from '@/assets/icons/sun.svg'

const route = useRoute()
const theme = ref(document.documentElement.dataset.theme ?? 'emerald')
const menuOpen = ref(false)
const header = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLButtonElement | null>(null)
const links = [
  { to: '/', label: 'Главная' },
  { to: '/courses', label: 'Курсы' },
  { to: '/teachers', label: 'Преподаватели' },
]

function toggleTheme() {
  theme.value = theme.value === 'forest' ? 'emerald' : 'forest'
  document.documentElement.dataset.theme = theme.value
}

function closeMenu() {
  menuOpen.value = false
}

function onEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    closeMenu()
    menuButton.value?.focus()
  }
}

function onOutsideInteraction(event: Event) {
  if (event.target instanceof Node && !header.value?.contains(event.target)) closeMenu()
}

let desktopQuery: MediaQueryList | undefined
watch(() => route.fullPath, closeMenu)

onMounted(() => {
  document.addEventListener('keydown', onEscape)
  document.addEventListener('pointerdown', onOutsideInteraction)
  document.addEventListener('focusin', onOutsideInteraction)
  desktopQuery = window.matchMedia('(min-width: 1024px)')
  desktopQuery.addEventListener('change', closeMenu)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEscape)
  document.removeEventListener('pointerdown', onOutsideInteraction)
  document.removeEventListener('focusin', onOutsideInteraction)
  desktopQuery?.removeEventListener('change', closeMenu)
})
</script>

<template>
  <header ref="header" class="fixed inset-x-0 top-0 z-50 border-b border-base-300 bg-base-100">
    <div
      class="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
    >
      <RouterLink
        to="/"
        class="flex min-w-0 items-center gap-3 justify-self-start text-base"
        @click="closeMenu"
      >
        <img :src="logoMain" alt="" class="size-10 shrink-0" />
        <div class="flex min-w-0 flex-col">
          <span class="text-base font-semibold leading-5 sm:text-lg">Nova School</span>
          <span class="hidden text-xs text-base-content/60 sm:block">
            Развивайся. Создавай. Меняй будущее.
          </span>
        </div>
      </RouterLink>

      <nav aria-label="Основная навигация" class="hidden justify-self-center lg:block">
        <ul class="flex items-center gap-6">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="inline-flex min-h-11 items-center rounded-sm font-medium hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              exact-active-class="text-primary"
              >{{ link.label }}</RouterLink
            >
          </li>
        </ul>
      </nav>

      <div class="flex justify-self-end">
        <button
          type="button"
          class="btn btn-ghost btn-square"
          :aria-label="theme === 'forest' ? 'Включить светлую тему' : 'Включить тёмную тему'"
          :title="theme === 'forest' ? 'Включить светлую тему' : 'Включить тёмную тему'"
          @click="toggleTheme"
        >
          <img :src="theme === 'forest' ? sunIcon : moonIcon" alt="" class="size-6" />
        </button>
        <button
          ref="menuButton"
          type="button"
          class="btn btn-ghost btn-square lg:hidden"
          :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
          :aria-expanded="menuOpen"
          aria-controls="mobile-navigation"
          @click="menuOpen = !menuOpen"
        >
          <svg
            class="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path v-if="menuOpen" d="m6 6 12 12M6 18 18 6" />
            <path v-else d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      v-show="menuOpen"
      id="mobile-navigation"
      aria-label="Мобильная навигация"
      class="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-base-300 px-4 py-3 sm:px-6 lg:hidden"
    >
      <ul class="space-y-1">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="flex min-h-11 items-center rounded-sm font-medium hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            exact-active-class="text-primary"
            @click="closeMenu"
            >{{ link.label }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
