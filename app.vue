<template>
    <div class="siteBox full relative">
        <div class="nuxtPageBox absoluteFull">
            <NuxtPage />
        </div>
        

        <nav class="absolute full top0 left0 noEvents_kidsEvents ">
            <BarTopMain />
            <BarMain barPosition="bar_left">
                <BarContentLeft />
            </BarMain>

            <BarMain barPosition="bar_right">
                <BarContentRight />
            </BarMain>

            <BarMain barPosition="bar_bottom">
                <BarContentBottom />
            </BarMain>
        </nav>

        

        <footer class="absolute full top0 left0">
            <BarMain barPosition="barPosition_bottom" />
        </footer>

        <!-- widgets -->

        <div class="loaderBox absolute top0 left0 w100 h100" v-if="loaderIsOn" :class="{ faded : fadedLoader == true}">
            <WidgetLoader />
        </div>

        <div class="absolute top0 right0 centered">
            <WidgetLanguageMain />
        </div>
    </div>
</template>

<script setup>
import tabs from '@/content/tabs.js'





const menuIsOpen = useState('menuIsOpen', () => false)

const fadedLoader = ref(false)
const loaderIsOn = ref(true)

setTimeout(() => {
    animateLoader()
}, 1000)

function animateLoader() {
    fadedLoader.value = true

    setTimeout(() => {
        loaderIsOn.value = false
    }, 1000)
}

</script>

<style scoped>
.loaderBox {
    opacity: 1;
    transition: 300ms ease;
}
.loaderBox.faded {
    opacity: 0;
    transition: 300ms ease;
}
.siteBox {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

</style>