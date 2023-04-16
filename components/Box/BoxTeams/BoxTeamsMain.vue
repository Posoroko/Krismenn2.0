<template>
    <section>
        <h2 class="boxTitle boxTitle_left" @click="handleTitleClick">teams</h2>
    </section>
</template>

<script setup>
const openBox = useState('openBox', () => "none")

const handleTitleClick = () => {
    openBox.value = 'teams'
}

</script>

<style scoped>

</style>