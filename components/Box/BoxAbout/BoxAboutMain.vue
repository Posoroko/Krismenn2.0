<template>
    <section>
        <h2 class="boxTitle" @click="handleTitleClick('about', openBox)">à propos</h2>
    </section>
</template>

<script setup>
const openBox = useState('openBox', () => "none")

const handleTitleClick = (text, openBox) => {
    console.log(text, openBox)
    if(text == openBox) {
        openBox= 'none'
        return
    }
    openBox.value = text
}

</script>

<style scoped></style>