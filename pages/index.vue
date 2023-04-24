<template>
    <main class="pageMainBox centered relative">
        <p>{{ openBox }}</p>
        <div class="backgroundImage absolute top0 left0 h100 w100" :class="{ darkenBg: openBox != 'none' }"></div>
    </main>
</template>

<script setup>
const openBox = useState('openDrawer', () => "none")

</script>


<style scoped>
.backgroundImage {
    background-image: url('/images/bleu-double-doudoune_flat.jpg');
    background-position: center;
    background-size: cover;
    filter: brightness(1);
    transition: 300ms ease;
    z-index: -1;
}
.darkenBg {
    filter: brightness(0.5);
    transition: 300ms ease;
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