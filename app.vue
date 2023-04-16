<template>
    <div class="siteBox full relative">
        <nav>
            <BarTopMain />
            <BarRightMain />
            <BarLeftMain />
        </nav>

        <NuxtPage />

        <footer class="absolute full top0 left0">
            <BarBottomMain />
        </footer>
        
    </div>
</template>

<script setup>
const menuIsOpen = useState('menuIsOpen', () => false)

</script>

<style scoped>

.siteBox {
    width: 100%;
    height: 100vh;
}

</style>