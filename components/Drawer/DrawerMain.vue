<template>
    <div class="tabBox relative r" :class="barPosition">
        <div class="tabTitleBox flex alignCenter justifyCenter w100 h100 r">
            <h2 class="tabTitle" :class="barPosition">{{ drawerTitle }}</h2>
        </div>
    </div>

</template>

<script setup>
const props = defineProps({
    drawerTitle: {
        type: String
    },
    barPosition: {
        type: String
    }
})
</script>

<style scoped>



</style>