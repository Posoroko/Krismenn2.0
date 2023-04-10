<template>
    <div class="siteBox full relative">
        <TopBarMain />
        <div class="relative h100">
            <NuxtPage  />
        </div>
        <Transition name="fade">
            <MenuMain v-if="menuIsOpen" />
        </Transition>

        <BottomBarMain />
    </div>
</template>

<script setup>
const menuIsOpen = useState('menuIsOpen', () => false)

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.siteBox {
    width: 100%;
    height: 100vh;
    background-image: ;
    background-size: cover;
    background-position: center;
    overflow: hidden;
}

</style>