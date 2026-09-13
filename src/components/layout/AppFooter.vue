<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="border-t border-base-300 bg-base-100">
    <div class="footer mx-auto max-w-6xl items-center gap-4 px-4 py-6 sm:footer-horizontal sm:px-6">
      <p class="text-base-content/70">© {{ new Date().getFullYear() }} Nova School</p>
    </div>
  </footer>
</template>
