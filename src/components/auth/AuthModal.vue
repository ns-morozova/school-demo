<script setup lang="ts">
const emit = defineEmits<{
    close: [];
}>()
</script>

<template>
    <Teleport to="body">
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div class="relative w-full max-w-md rounded-box bg-base-100 p-6 shadow-xl">
                <button
                    type="button"
                    class="btn btn-circle btn-ghost btn-sm absolute right-3 top-3"
                    @click="emit('close')"
                >
                    ✕
                </button>

                <h2 class="mb-6 text-2xl font-bold">
                    Авторизация
                </h2>

                <div class="flex flex-col gap-4">
                    <input
                        type="email"
                        class="input input-bordered w-full"
                        placeholder="Email"
                    />

                    <button
                        type="button"
                        class="btn btn-primary"
                    >
                        Войти
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>