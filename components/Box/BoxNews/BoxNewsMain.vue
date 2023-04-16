<template>
    <section>
        <h2 class="boxTitle boxTitle_right" @click="handleTitleClick">news</h2>
    </section>
</template>

<script setup>
const openBox = useState('openBox', () => "none")

const handleTitleClick = () => {
    openBox.value = 'news'
}

</script>

<style scoped></style>