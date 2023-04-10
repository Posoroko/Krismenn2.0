<template>
        <main class="indexPageBox centered ag-book relative h100"  :style="{ backgroundImage: `url('/images/${bgImage}')`}">
            <div class="compBox_actu">
                <ActuBoxMain />
            </div>
        </main>
</template>

<script setup>
const bgImage = ref('orange.jpeg')
</script>

<style scoped>

.indexPageBox {
    border: 1px solid rgb(126, 126, 126);
    background-size: cover;
    background-position: center;
}

.compBox_actu {
    width: min(calc(100vw - var(--page-padding) - var(--page-padding)), 400px);
    height: 500px;
    position: absolute;
    bottom: var(--page-padding);
    right: var(--page-padding);
}

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