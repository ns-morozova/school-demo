<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="border-t border-base-300 bg-base-100">
    <div class="footer mx-auto max-w-6xl items-center gap-4 px-4 py-6 sm:footer-horizontal sm:px-6">
      <p class="text-base-content/70">© {{ new Date().getFullYear() }} Nova School</p>
      <nav aria-label="Навигация в футере" class="flex gap-4 sm:justify-self-end">
        <RouterLink to="/" class="link link-hover">Курсы</RouterLink>
        <RouterLink to="/teachers" class="link link-hover">Преподаватели</RouterLink>
      </nav>
    </div>
  </footer>
</template>
