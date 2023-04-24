<template>
    <div class="bottomDrawerContent relative flex column gap20">
        <p class="drawerContentText">
            Krismenn est un mec cool qui chante du kan ha diskan, mais qui fait aussi du beatbox.
            Il aime couper des arbres et faire du feu pour cuire des saussices. Sa couleur préférée est le marron 
            et même s'il a l'air d'un hippie, il aime jouer de la musique avec des instrument électroniques
        </p> 
        <div class="flex justifyEnd">
            <NuxtLink class="drawerLink" :to="localePath({ name: 'about' })">{{ aboutLink[locale] }}</NuxtLink>
        </div>

        <div class="absolute top0 right0">
                <DrawerCloseButton />
            </div>
    </div>
</template>
<script setup>
const { locale, t } = useI18n()
const localePath = useLocalePath()

const aboutLink = {
    en: 'read more...',
    fr: 'en savoir plus...',
    bzh: 'gouzout hiroc\'h...'
}
</script>