<template>
    <div class="tabBox relative" :class="barPosition">
        <div class="tabTitleBox flex alignCenter justifyCenter w100 h100">
            <h2 class="tabTitle pointer" :class="barPosition" @click="handleClick">{{ drawerTitle }}</h2>
        </div>

        <div class="drawerBox absoluteFull" :class="[barPosition]">
            <div class="drawer absolute" :class="[ drawerPosition, barPosition, { open: openDrawer == drawerTitle }, drawerState]">
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
        type: String //drawer_top, drawer_bottom, drawer_middle, drawer_center_responsive2
    },
    barPosition: {
        type: String //bar_left, bar_right, bar_bottom
    }
})
</script>

<style scoped>
.drawerBox {
    pointer-events: none;
}
.drawerBox * {
    pointer-events: all;
}
.drawer {
    width: min(500px, calc(100vw - (2 * var(--bar-thickness))));
    height: min(500px, calc(100vh - (2 * var(--bar-thickness))));
    border: 5px solid rgba(255, 255, 255, 0.192);
    border-radius: 5px;
    backdrop-filter: blur(10px);
}

/* right and left bar drawers */
    .drawer.bar_left { left: 100%; }    /* outside of frame */
    .drawer.bar_right { right: 100%; }  /* outside of frame */
    .drawer.drawer_top { top: 0%; }
    .drawer.drawer_middle { top: 50%; }
    .drawer.drawer_bottom { bottom: 0%; }

    /* top and bottom drawers animation */
        .drawer.bar_left.drawer_top.closed, .drawer.bar_left.drawer_bottom.closed {
            transform: translateX(calc(-100% - var(--bar-thickness)));
            transition:  var(--drawer-transition);
        }   
        .drawer.bar_left.drawer_top.open, .drawer.bar_left.drawer_bottom.open {
            transform: translateX(0px);
            transition: var(--drawer-transition);
        }
        .drawer.bar_right.drawer_top.closed, .drawer.bar_right.drawer_bottom.closed {
            transform: translateX(calc(100% + var(--bar-thickness)));
            transition: var(--drawer-transition);
        }
        .drawer.bar_right.drawer_top.open, .drawer.bar_right.drawer_bottom.open {
            transform: translateX(0px);
            transition: var(--drawer-transition);
        }

    /* middle drawers */
        .drawer.bar_left.drawer_middle.closed {
            transform: translate(calc(-100% - var(--bar-thickness)), -50%);
            transition: var(--drawer-transition);
        }
        .drawer.bar_left.drawer_middle.open {
            transform: translate(0px, -50%);
            transition: var(--drawer-transition);
        }
        .drawer.bar_right.drawer_middle.closed {
            transform: translate(calc(100% + var(--bar-thickness)), -50%);
            transition: var(--drawer-transition);
        }
        .drawer.bar_right.drawer_middle.open {
            transform: translate(0px, -50%);
            transition: var(--drawer-transition);
        }

/* bottom bar drawers */

    .drawer.bar_bottom {
        top: 100%;
    }   
    

    /* left and right drawers */

        .drawer.bar_bottom.drawer_left_responsive.closed, .drawer.bar_bottom.drawer_right_responsive.closed { 
            transform: translateY(0%);
            transition: var(--drawer-transition);
        }
        .drawer.bar_bottom.drawer_left_responsive.open, .drawer.bar_bottom.drawer_right_responsive.open { 
            transform: translateY(calc(-100% - var(--bar-thickness)));
            transition: var(--drawer-transition);
        }

    /* center drawers */
        .drawer.bar_bottom.drawer_center { left: 50%; transform: translate(-50%, 0%); }
        .drawer.bar_bottom.drawer_center.closed { 
            transform: translate(-50%, 0%);
            transition: var(--drawer-transition);
        }

        .drawer.bar_bottom.drawer_center.open { 
            transform: translate(-50%, calc(-100% - var(--bar-thickness))); 
            transition: var(--drawer-transition);
        }


        /*  drawer_left_responsive drawers */

        @media (min-width: 1150px) {
            .drawer.bar_bottom.drawer_left_responsive {
                right: 0%;
            }
            .drawer.bar_bottom.drawer_right_responsive {
                left: 0%;
            }
        }
        @media (max-width: 1149px) {
            .drawer.bar_bottom.drawer_left_responsive {
                left: 0%;
            }
            .drawer.bar_bottom.drawer_right_responsive {
                right: 0%;
            }
        }





</style>