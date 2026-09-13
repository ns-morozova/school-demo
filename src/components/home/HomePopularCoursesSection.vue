<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { courses } from '@/data/courses'
import CourseCard from '@/components/CourseCard.vue'

const popularCourses = courses.filter((course) => course.popular).slice(0, 3)
</script>

<template>
  <section aria-labelledby="popular-courses-title" class="space-y-4">
    <div class="flex justify-between items-end">
      <h2 id="popular-courses-title" class="text-2xl font-semibold">Популярные курсы</h2>
      <RouterLink to="/courses" class="text-secondary">Посмотреть все →</RouterLink>
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
</template>
