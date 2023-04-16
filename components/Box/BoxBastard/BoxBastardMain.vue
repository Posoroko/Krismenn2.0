<template>
    <section>
        <h2 class="boxTitle boxTitle_left" @click="handleTitleClick">Bastard</h2>
    </section>
</template>

<script setup>
const openBox = useState('openBox', () => "none")

const handleTitleClick = () => {
    openBox.value = 'Bastard'
}

</script>

<style scoped>

</style>