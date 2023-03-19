<template>
    <div class="menuBackdrop absolute centered" @click="menuIsOpen = false">
        <div class="menuBox relative flex column justifyBetween alignCenter gap20" @click.stop>
            <MenuLanguageBox />

            <div class="linkBox flex column alignCenter justifyCenter gap20">
                <NuxtLink to="/agenda" @click.stop="menuIsOpen = false">{{ menuTabs.agenda[language] }}</NuxtLink>
                <NuxtLink to="/projets" @click.stop="menuIsOpen = false">{{ menuTabs.projects[language] }}</NuxtLink>
                <NuxtLink to="/formations" @click.stop="menuIsOpen = false">{{ menuTabs.teams[language] }}</NuxtLink>
            </div>
            <div class="decoy"></div>

            <span class="icon closeIcon absolute top0 right0 pointer" @click="menuIsOpen = false">close</span>
        </div>
    </div>
</template>

<script setup>
const menuIsOpen = useState('menuIsOpen', () => false)

const menuTabs = useMenuContent().tabs
const language = useLanguage()



</script>

<style scoped>

.menuBackdrop {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10000;
    background: radial-gradient(circle, rgba(0,0,0,0.33776838372067575) 0%, rgba(0,0,0,0.6626983557094712) 32%, rgba(0,0,0,0.8083566190147934) 67%, rgba(0,0,0,0.886787991563813) 100%);
}
.menuBox {
    width: 400px;
    height: 400px;
    padding: 10px;
    background-color: black;
    margin: auto;
    border-radius: 5px;
    top: 0%;
    right: 0%;
}
.linkBox a {
    font-size: 24px;
}
.closeIcon {
    font-size: 40px;
    font-weight: 100;
    transform: rotateZ(0deg);
    transition: var(--trans-300);
}
.closeIcon:hover {
    transform: rotateZ(180deg);
    transition: var(--trans-300);
}

</style>