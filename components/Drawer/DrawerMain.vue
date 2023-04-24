<template>
    <div class="tabBox relative" :class="barPosition">
        <div class="tabTitleBox flex alignCenter justifyCenter w100 h100">
            <h2 class="tabTitle pointer" :class="barPosition" @click="handleClick">{{ drawerTitle }}</h2>
        </div>

        <div class="drawerBox absoluteFull flex g noEvents_kidsEvents" :class="[barPosition]">
            <div class="drawer r" :class="[ drawerPosition, barPosition, { open: openDrawer == drawerTitle }, drawerState]">
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script setup>
const openDrawer = useState('openDrawer', () => "none")
const drawerState = ref("closed")

function handleClick(e)  {
    console.log(props.drawerTitle, openDrawer.value)
    if(props.drawerTitle == openDrawer.value) {
        drawerState.value = "closed"
        openDrawer.value = "none"
        return
    }
    openDrawer.value = props.drawerTitle
}

const props = defineProps({
    drawerTitle: {
        type: String
    },
    drawerPosition: {
        type: String //drawer_top, drawer_bottom, drawer_middle
    },
    barPosition: {
        type: String //bar_left, bar_right, bar_bottom
    }
})
</script>

<style scoped>
.drawer.bar_left, .drawer.bar_right {
    width: min(500px, calc(100vw - (2 * var(--bar-thickness)) ));
    height: 700px;
}
.drawer.bar_bottom {
    width: 400px;
    height: 300px;
}
.drawerBox {
    pointer-events: none;
}
.drawerBox * {
    pointer-events: all;
}
.drawerBox.bar_left, .drawerBox.bar_right {
    flex-direction: column;
}

/* drawer left */

.drawer.bar_left.closed {
    transform: translateX(-100%);
    transition: 300ms ease;
}
.drawer.bar_left.open {
    transform: translateX(var(--bar-thickness));
    transition: 300ms ease;
}

/* drawer right */

.drawer.bar_right.closed {
    transform: translateX(var(--bar-thickness));
    transition: 300ms ease;
}
.drawer.bar_right.open {
    transform: translateX(-100%);
    transition: 300ms ease;
}



/* drawer bottom */

.drawer.bar_bottom.closed {
    transform: translateY(var(--bar-thickness));
    transition: 300ms ease;
}
.drawer.bar_bottom.open {
    transform: translateY(-100%);
    transition: 300ms ease;
}



</style>