<template>
    <nav class="topBar flex justifyBetween alignCenter w100">
        <h1 class="topBarTitleBox ag-bold relative">
            <NuxtLink class="topBarTitle" to="/"> KRISMENN </NuxtLink>
            <!-- <p class="topBarTitleDecoy" >KRISMENN</p> -->
        </h1>

        <div class="topBarMenuBox">
            <div class="topBarMenuIcon icon pointer">menu</div>
        </div>
    </nav>
</template>

<script setup>
</script>

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
/* .topBarTitleDecoy {
    display: none;
    position: absolute;
    top: var(--page-padding);
    left: var(--page-padding);
    
}
.topBarTitleBox:hover .topBarTitleDecoy{
    top: 12px;
    left: 11px;
    display: block;
    color: rgba(255, 0, 0, 0.308);
} */


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