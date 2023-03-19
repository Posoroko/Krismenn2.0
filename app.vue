<template>
    <div class="siteBox full relative"  :style="{ backgroundImage: `url('/images/${bgImage}')` }">
        <TopBarMain />
        <div class="relative h100">
            <NuxtPage  />
        </div>
        <Transition name="fade">
            <MenuMain v-if="menuIsOpen" />
        </Transition>
    </div>
</template>

<script setup>
const bgImage = ref('orange.jpeg')
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
}

</style>