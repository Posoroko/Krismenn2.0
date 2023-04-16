<template>
    <section>
        <h2 class="boxTitle boxTitle_left" @click="handleTitleClick">projects</h2>
    </section>
</template>

<script setup>
const openBox = useState('openBox', () => "none")

const handleTitleClick = () => {
    openBox.value = 'projects'
}

</script>

<style scoped></style>