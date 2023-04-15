<template>

    <!-- Box that hold the actu photo and texct on the homepage -->
    
    <article class="actuBigBox flex relative" :class="[actuIsOpen ? 'actuBigBox_open' : 'actuBigBox_closed']">
        <figure class="actuFrame">
            <img class="actuFrameImage" :src="`${directusAssets}${actu.image}`" :alt="actu.imageAlt">
        </figure>

        <div class="actuContentBox flex column gap10 relative">
            <h3 class="ag-book">{{ actu.title }}</h3>
            <p class="paragraph ag-book">{{ actu.content }}</p>
            
        </div>


        <div class="tabBox flex align-center pointer" @click="actuIsOpen = !actuIsOpen" :class="[actuIsOpen ? 'arrowRight' : 'arrowLeft']">
            <div class="icon actuArrow" >arrow_back</div>
            <p class="tabBoxText flex alignCenter">Actualité</p>
        </div>


        <div class="absolute background"></div>

    </article>
</template>

<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const actuIsOpen = ref(false)

const fetchOptions = {
    server: true,
    // params: {
    //     fields: 'id, title, date, time, location, content, organiser, moreInfo, image, imageAlt, price, file, filename'
    // }
}

const { data: actu } = await useAsyncData(
    "actualite",
    async () => {
        const actu = await $fetch(`${directusItems}Actualite`, fetchOptions)

        return actu.data[0]
    }
    ,
    { server: true }
)

</script>

<style scoped>
.actuBigBox {
    width: 100%;
    height: 100%;
    position: relative;
    transition: 300ms ease;
}
.actuBigBox_closed {
    transform: translateX(calc(103%));
    transition: 300ms ease;
}

.tabBox .tabBoxText{
    font-size: 24px;
}
.actuArrow {
    font-size: 30px;
}

.actuBigBox_open .tabBox {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0%, -105%);
    transition: 300ms ease;
}
.actuBigBox_open .tabBox .icon{
    transform: rotate(180deg);
    transition: 300ms ease;
}
.actuBigBox_closed .tabBox {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-70%, 50%) rotate(90deg);
    transition: 300ms ease;
}
.actuBigBox_closed .tabBox .icon{
    transform: rotate(-90deg);
    transition: 300ms ease;
}






.actuBigBox .background {
    background-color: #00000023;
    backdrop-filter: blur(12px);
    /* opacity: 0.5; */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
}




.actuFrame {
    width: 20%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    position: relative;
}
.actuFrameImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.actuContentBox{
    width: 80%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 1px solid white;
    border-left: none;
    z-index: 1;
    position: relative;
}

.paragraph {
    letter-spacing: 0.5px;
}
.actuContentBox .paragraph {
    height: 50%;
    padding-right: 5px;
    overflow: scroll;
    white-space: pre-wrap;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>