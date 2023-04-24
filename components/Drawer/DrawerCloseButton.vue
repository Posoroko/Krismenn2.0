<template> 
    <span class="drawerCloseButton centered">
        <span class="icon drawerCloseIcon" 
            @click="openBox = 'none'">
            close
        </span>
    </span>
</template>

<script setup>
const openBox = useState('openBox', () => "none")

</script>

<style scoped>
.drawerCloseButton {
    height: 100%;
    width: 50px;
    aspect-ratio: 1/1;
}

.drawerCloseButton .icon {
    font-weight: 900;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.278);
    cursor: pointer;
    /* transform: rotate(0deg); */
    /* transition: 300ms ease; */
}
.drawerCloseButton .icon:hover {
    transform: rotate(360deg);
    transition: 300ms ease;
}
</style>