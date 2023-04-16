<template>
    <main class="pageMainBox centered">
        <p>{{ openBox }}</p>
    </main>
</template>

<script setup>
const openBox = useState('openBox', () => "none")

</script>


<style scoped>

.pageMainBox {
    background-image: url('/images/bleu-double-doudoune_flat.jpg');
    background-position: center;
    background-size: cover;
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