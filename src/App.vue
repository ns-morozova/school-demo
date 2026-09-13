<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-base-200 text-base-content">
    <a
      href="#main-content"
      class="btn btn-primary fixed left-4 top-4 z-[60] -translate-y-24 focus:translate-y-0"
    >
      К содержимому
    </a>
    <AppHeader />
    <!-- Отступ сверху соответствует высоте фиксированного хедера. -->
    <main
      id="main-content"
      tabindex="-1"
      class="mx-auto w-full max-w-6xl flex-1 px-4 pt-24 pb-10 sm:px-6"
    >
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
