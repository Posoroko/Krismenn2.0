<template>
    <div class="topBar r">
        <WidgetKrismennMain />
    </div>
</template>

<script setup>

</script>

<style scoped>
.topBar {
    width: calc(100% - (2 * var(--bar-thickness)));
    height: var(--bar-thickness);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 var(--bar-thickness);
}
</style>