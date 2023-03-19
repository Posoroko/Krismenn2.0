<template>
    <div>
        <main class="pageMainBox centered ag-book relative">
            <h1>homepage</h1>
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