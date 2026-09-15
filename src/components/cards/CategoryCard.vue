<script setup lang="ts">
defineProps<{
  name: string
  icon: string
}>()
</script>

<template>
  <article
    class="card card-body flex-row items-center justify-between gap-4 overflow-hidden border border-base-300 bg-base-100"
  >
    <h3 class="card-title">{{ name }}</h3>
    <img :src="icon" alt="" width="64" height="64" class="size-16 shrink-0" />
  </article>
</template>
