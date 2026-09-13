<script setup lang="ts">
import type { courses } from '@/data/courses'

withDefaults(
  defineProps<{
    course: (typeof courses)[number]
    headingTag?: 'h2' | 'h3'
  }>(),
  { headingTag: 'h2' },
)
</script>

<template>
  <article class="card overflow-hidden border border-base-300 bg-base-100">
    <figure class="aspect-3/2 bg-base-200">
      <img
        :src="course.image"
        alt=""
        width="768"
        height="512"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover"
      />
    </figure>
    <div class="card-body gap-4">
      <span class="badge badge-secondary badge-outline">{{ course.category }}</span>
      <component :is="headingTag" class="card-title">{{ course.title }}</component>
      <p>{{ course.description }}</p>
      <span class="text-sm text-base-content/60">Скоро открытие</span>
    </div>
  </article>
</template>
