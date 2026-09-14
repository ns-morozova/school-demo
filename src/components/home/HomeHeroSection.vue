<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Hero from '@/assets/images/hero.png'
</script>

<template>
  <section class="flex flex-col gap-10 lg:grid lg:grid-cols-2" aria-labelledby="home-title">
    <div class="flex flex-col gap-4">
      <span class="badge badge-primary badge-outline">Более 10 000 студентов уже с нами</span>
      <h1 id="home-title" class="max-w-3xl text-3xl font-bold sm:text-5xl">
        Онлайн-школа <br /> <span class="text-primary">современных</span> навыков
      </h1>
      <p class="max-w-2xl text-base-content/70">
        Онлайн-обучение с практикой, поддержкой наставников и реальными навыками для карьеры и
        жизни.
      </p>
      <div class="w-full flex flex-col gap-3 lg:flex-row">
        <RouterLink to="/" class="btn btn-primary">Начать обучение</RouterLink>
        <RouterLink to="/courses" class="btn btn-outline">Посмотреть программы</RouterLink>
      </div>
    </div>

    <div class="">
      <img :src="Hero" alt="" class="w-full h-full object-cover" />
    </div>
  </section>
</template>
