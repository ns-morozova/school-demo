<script setup lang="ts">
import { courses } from '@/data/courses'
import CourseCard from '@/components/CourseCard.vue'
</script>

<template>
  <div class="space-y-10">
    <section aria-labelledby="catalog-title" class="space-y-4">
      <h1 id="catalog-title" class="text-3xl font-bold sm:text-4xl">Курсы</h1>
      <p class="text-base-content/70">
        Готовим первые программы. Даты старта и условия обучения появятся здесь.
      </p>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CourseCard v-for="course in courses" :key="course.title" :course="course" />
      </div>
    </section>
  </div>
</template>
