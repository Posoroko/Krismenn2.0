<template>
    <section>
        <h2 class="boxTitle boxTitle_right" @click="handleTitleClick">agenda</h2>
    </section>
</template>

<script setup>
const openBox = useState('openBox', () => "none")

const handleTitleClick = () => {
    openBox.value = 'agenda'
}

</script>

<style scoped></style>