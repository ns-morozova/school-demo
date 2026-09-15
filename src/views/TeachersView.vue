<script setup lang="ts">
import TeacherCard from '@/components/cards/TeacherCard.vue'

const teachers = [
{
    id: 1,
    name: 'Анна Иванова',
    category: 'Frontend',
    course: 'Vue.js',
  },
  {
    id: 2,
    name: 'Иван Петров',
    category: 'Backend',
    course: 'Node.js',
  },
  {
    id: 3,
    name: 'Мария Сидорова',
    category: 'Дизайн',
    course: 'UI/UX',
  },
]
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold sm:text-4xl">Наши преподаватели</h1>

    <p class="text-base-content/70">
        Познакомьтесь с нашими преподавателями
      </p>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <TeacherCard
        v-for="teacher in teachers"
        :key="teacher.id"
        :name="teacher.name"
        :category="teacher.category"
        :course="teacher.course"
      />
    </div>
  </div>
</template>
