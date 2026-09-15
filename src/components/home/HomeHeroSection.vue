<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import AuthModal from '@/components/auth/AuthModal.vue';
import Hero from '@/assets/images/hero.png'

const isAuthModalOpen = ref(false)

function openAuthModal() {
  isAuthModalOpen.value = true
}

function closeAuthModal() {
  isAuthModalOpen.value = false
}
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
        <button
          class="btn btn-primary"
          @click="openAuthModal"
        >
          Начать обучение
        </button>
        <RouterLink to="/courses" class="btn btn-outline">Посмотреть программы</RouterLink>
      </div>
    </div>

    <div class="">
      <img :src="Hero" alt="" class="w-full h-full object-cover" />
    </div>
  </section>

  <AuthModal
    v-if="isAuthModalOpen"
    @close="closeAuthModal"
  />
</template>
