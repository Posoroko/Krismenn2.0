<template>
       <div class="bar noEvents_kidsEvents" :class="barPosition">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    barPosition: {
        type: String
    },
    tabs: {
        type: Array //array of objects containing the tab translations from '@/content/texts.js'
    }
})
</script>

<style scoped>
.bar {
    position: absolute;
}
.bar.bar_left, 
.bar.barPosition_right {
    margin: 0 var(--bar-thickness);
}


.bar.bar_left, 
.bar.bar_right {
    width: var(--bar-thickness);
    height: calc(100% - (2 * var(--bar-thickness)));
    margin: var(--bar-thickness) 0;
    top: 0;
}

.bar.bar_left {
    left: 0;
}
.bar.bar_right {
    right: 0;
}
.bar.bar_bottom {
    height: var(--bar-thickness);
    width: calc(100% - (2 * var(--bar-thickness)));
    left: 0;
    bottom: 0;
    margin: 0 var(--bar-thickness);
}
</style>