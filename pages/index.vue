<template>
    <div>
        <main class="full_screen centered ag-book relative">
            <NuxtLink to="/bastard">
                Bastard
            </NuxtLink>

            <!-- <img src="/images/orange.jpeg" alt="absoluteFull" class="bgImage"> -->
        </main>
    </div>
</template>

<script setup>
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>