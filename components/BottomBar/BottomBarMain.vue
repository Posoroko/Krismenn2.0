<script setup>

const menuIsOpen = useState('menuIsOpen', () => false)



</script>

<template>
    <div class="bottomBar flex justifyBetween alignCenter w100">
        <p>2023</p>
        <!-- <button @click="click" class="pointer">click</button>
        <p>{{ animatedText }}</p> -->
    </div>
</template>



<style scoped>
.bottomBar {
    height: 5vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1000;
    padding: var(--page-padding);
}
</style>