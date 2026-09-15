<script setup lang="ts">
import CategoryCard from '@/components/cards/CategoryCard.vue'
import { categories } from '@/data/categories'
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold">Направления</h2>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :name="category.name"
        :icon="category.icon"
      />
    </div>
  </section>
</template>
