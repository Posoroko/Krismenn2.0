<template>
    <section>
        <h2 class="boxTitle" @click="handleTitleClick">contact</h2>
    </section>
</template>

<script setup>
const openBox = useState('openBox', () => "none")

const handleTitleClick = () => {
    openBox.value = 'contact'
}
</script>

<style scoped></style>