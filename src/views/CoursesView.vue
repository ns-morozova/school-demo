<script setup lang="ts">
import { RouterLink } from 'vue-router'

const courses = [
  {
    title: 'Веб-разработка',
    description:
      'От первой HTML-страницы до адаптивного сайта. Разбираемся в HTML, CSS и основах JavaScript на практике.',
    tag: 'Для начинающих',
  },
  {
    title: 'Дизайн интерфейсов',
    description:
      'Учимся работать с композицией, цветом и типографикой. Создаём первые экраны и прототипы в Figma.',
    tag: 'С нуля',
  },
]
</script>

<template>
  <div class="space-y-10">
    <section
      class="hero rounded-box border border-base-300 bg-base-100"
      aria-labelledby="courses-title"
    >
      <div class="hero-content w-full flex-col items-start p-6 sm:p-10">
        <span class="badge badge-primary badge-outline">Онлайн-школа Nova School</span>
        <h1 id="courses-title" class="max-w-3xl text-3xl font-bold sm:text-5xl">
          Новые знания. Ваш следующий шаг.
        </h1>
        <p class="max-w-2xl text-base-content/70">
          Осваивайте цифровые навыки шаг за шагом: от понятной теории к собственным проектам.
          Выберите направление, которое вам интересно.
        </p>
        <RouterLink to="/teachers" class="btn btn-primary mt-2">Наши преподаватели</RouterLink>
      </div>
    </section>

    <section aria-labelledby="catalog-title" class="space-y-4">
      <h2 id="catalog-title" class="text-2xl font-semibold">Курсы</h2>
      <p class="text-base-content/70">
        Готовим первые программы. Даты старта и условия обучения появятся здесь.
      </p>
      <div class="grid gap-4 sm:grid-cols-2">
        <article
          v-for="course in courses"
          :key="course.title"
          class="card border border-base-300 bg-base-100"
        >
          <div class="card-body gap-4">
            <span class="badge badge-secondary badge-outline">{{ course.tag }}</span>
            <h3 class="card-title">{{ course.title }}</h3>
            <p>{{ course.description }}</p>
            <span class="text-sm text-base-content/60">Скоро открытие</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
