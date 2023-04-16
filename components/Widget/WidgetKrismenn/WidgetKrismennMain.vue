<template>
    <NuxtLink to="/" class="pointer">
        <span class="krismennLetter">K</span>
        <span class="krismennLetter">R</span>
        <span class="krismennLetter">I</span>
        <span class="krismennLetter">S</span>
        <span class="krismennLetter">M</span>
        <span class="krismennLetter">E</span>
        <span class="krismennLetter">N</span>
        <span class="krismennLetter">N</span>
    </NuxtLink>
</template>

<script setup>
import { useMouse } from '@vueuse/core'

const { x, y, sourceType } = useMouse()


</script>

<style scoped>
.krismennLetter {
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: 700;
}
</style>