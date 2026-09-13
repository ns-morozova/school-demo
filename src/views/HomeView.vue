<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { courses } from '@/data/courses'
import CourseCard from '@/components/CourseCard.vue'

const popularCourses = courses.filter((course) => course.popular).slice(0, 3)
</script>

<template>
  <div class="space-y-10">
    <section
      class="hero rounded-box border border-base-300 bg-base-100"
      aria-labelledby="home-title"
    >
      <div class="hero-content w-full flex-col items-start p-6 sm:p-10">
        <span class="badge badge-primary badge-outline">Более 10 000 студентов уже с нами</span>
        <h1 id="home-title" class="max-w-3xl text-3xl font-bold sm:text-5xl">
          Онлайн-школа <span class="text-primary">современных</span> навыков
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
    </section>
    <section aria-labelledby="popular-courses-title" class="space-y-4">
      <div class="flex justify-between items-end">
        <h2 id="popular-courses-title" class="text-2xl font-semibold">Популярные курсы</h2>
        <RouterLink to="/courses" class="btn btn-primary btn-outline">Посмотреть все →</RouterLink>
      </div>
      
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CourseCard
          v-for="course in popularCourses"
          :key="course.title"
          :course="course"
          heading-tag="h3"
        />
      </div>
    </section>
  </div>
</template>
