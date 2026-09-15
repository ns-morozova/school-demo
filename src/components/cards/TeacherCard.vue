<script setup lang="ts">
import AvatarPlaceholder from "@/assets/images/avatar-placeholder.png"
defineProps<{
    name: string;
    category: string;
    course: string;
}
>();
</script>

<template>
    <article class="card overflow-hidden border border-base-300 bg-base-100">
        <figure class="aspect-3/2 bg-base-200">
            <img
                :src="AvatarPlaceholder"
                alt=""
                class="w-full h-full object-cover"
                width="768"
                height="512"
                loading="lazy"
            />
        </figure>

        <div class="card-body gap-4">
            <h3 class="card-title">{{ name }}</h3>
            <p>Направление: {{ category }}</p>
            <p>Курс: {{ course }}</p>
        </div>
    </article>
</template>