<script setup>
const menuIsOpen = useState('menuIsOpen', () => false)

</script>

<template>
    <div class="topBar flex justifyBetween alignCenter w100">
        <h1 class="topBarTitleBox ag-bold relative">
            <NuxtLink class="topBarTitle" to="/"> KRISMENN </NuxtLink>
            <!-- <p class="topBarTitleDecoy" >KRISMENN</p> -->
        </h1>

        <div class="icon topBarMenuIcon pointer" @click="menuIsOpen = true">menu</div>

    </div>
</template>



<style scoped>
.topBar {
    height: 5vh;
    position: fixed;
    top: 0;
    z-index: 10000;
}
.topBarTitle, .topBarTitleDecoy{
    font-family: 'avant-garde-gothic-2-bold-1';
}

.topBarTitleBox,  .topBarMenuBox{
    padding: var(--page-padding);
}

.topBarMenuIcon {
    font-size: 40px;
    transition: var(--trans-300);
}
.topBarMenuIcon:hover {
    transform: rotateZ(180deg);
    transition: var(--trans-300);
}

</style>