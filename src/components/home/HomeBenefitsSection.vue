<script setup lang="ts">
import calendarIcon from '@/assets/icons/calendar.svg'
import feedbackIcon from '@/assets/icons/feedback.svg'
import certificateIcon from '@/assets/icons/certificate.svg'

const benefits = [
  {
    title: 'Гибкий график',
    icon: calendarIcon,
    description: 'Учитесь в удобное время и совмещайте занятия с работой и личными делами.',
  },
  {
    title: 'Обратная связь',
    icon: feedbackIcon,
    description:
      'Получайте комментарии к заданиям и рекомендации, которые помогут двигаться дальше.',
  },
  {
    title: 'Сертификат по итогам обучения',
    icon: certificateIcon,
    description: 'Дополните портфолио сертификатом о прохождении курса.',
  },
]
</script>

<template>
  <section aria-labelledby="benefits-title" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <article
      v-for="benefit in benefits"
      :key="benefit.title"
      class="card border border-base-300 bg-base-100 bg-linear-to-br from-primary/30 to-secondary/10"
    >
      <div class="card-body gap-2">
        <img :src="benefit.icon" alt="" width="64" height="64" class="size-16" />
        <h3 class="card-title">{{ benefit.title }}</h3>
        <p class="text-base-content/70">{{ benefit.description }}</p>
      </div>
    </article>
  </section>
</template>
