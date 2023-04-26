<template>
    <div class="drawerContentBox h100 relative flex column">
        <div class="topBar absolute top0 right0 flex justifyEnd">
            <DrawerCloseButton />
        </div>

        <div class="box">
            <p class="paragraph">
                {{ aboutIntro[locale] }}
            </p>

            <div class="flex justifyEnd">
                <NuxtLink class="drawerLink" :to="localePath({ name: 'about' })">{{ aboutLink[locale] }}</NuxtLink>
            </div>
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
const aboutIntro = {
    fr: "Krismenn est un mec cool qui chante du kan ha diskan, mais qui fait aussi du beatbox. Il aime couper des arbres et faire du feu pour cuire des saussices.Sa couleur préférée est le marron et même s'il a l'air d'un hippie, il aime jouer de la musique avec des instrument électroniques.",
    en: "Krismenn is a cool guy who sings kan ha diskan, but also beatboxes. He likes to cut trees and make fire to cook sausages. His favorite color is brown and even if he looks like a hippie, he likes to play music with electronic instruments.",
    bzh: "Krismenn kan ha diskan abesten duen tipo polita da, baina baita beatbox-ak ere. Zuhaitzak moztea eta txistorra prestatzeko sua egitea gustatzen zaio.Bere kolorerik gogokoena marroia da eta hippie baten itxura badu ere, musika tresna elektronikoekin jotzea gustatzen zaio."
}
</script>

<style scoped>

</style>