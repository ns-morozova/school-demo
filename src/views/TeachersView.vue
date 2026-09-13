<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="space-y-10">
    <section aria-labelledby="teachers-title" class="space-y-4">
      <span class="badge badge-secondary badge-outline">Команда Nova School</span>
      <h1 id="teachers-title" class="text-3xl font-bold sm:text-4xl">Преподаватели</h1>
      <p class="max-w-2xl text-base-content/70">
        Здесь мы познакомим вас с преподавателями онлайн-школы: расскажем об их опыте и курсах,
        которые они ведут.
      </p>
      <div class="card border border-base-300 bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Скоро познакомимся</h2>
          <p>
            Мы готовимся к запуску. Профили преподавателей появятся на этой странице перед
            открытием записи на обучение.
          </p>
          <div class="card-actions mt-2">
            <RouterLink to="/" class="btn btn-primary btn-outline">Посмотреть курсы</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
