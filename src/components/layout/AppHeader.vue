<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logoMain from '@/assets/logo/logo-main.svg'
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-base-300 bg-base-100">
    <div
      class="navbar mx-auto h-28 max-w-6xl flex-wrap justify-between px-4 sm:h-16 sm:flex-nowrap sm:px-6"
    >
      <RouterLink to="/" class="flex items-center gap-2 text-base sm:text-lg">
        <img :src="logoMain" alt="" class="size-8 shrink-0" />
        <span>Nova School</span>
      </RouterLink>

      <nav
        aria-label="Основная навигация"
        class="order-3 flex w-full justify-center sm:order-0 sm:w-auto"
      >
        <ul class="menu menu-horizontal gap-1 p-0">
          <li><RouterLink to="/" exact-active-class="menu-active">Курсы</RouterLink></li>
          <li><RouterLink to="/teachers" exact-active-class="menu-active">Преподаватели</RouterLink></li>
        </ul>
      </nav>

      <label class="flex cursor-pointer items-center gap-2 text-sm">
        <span>Тёмная тема</span>
        <input type="checkbox" value="forest" class="toggle toggle-primary theme-controller" />
      </label>
    </div>
  </header>
</template>
