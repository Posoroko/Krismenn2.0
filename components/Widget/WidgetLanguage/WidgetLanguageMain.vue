<template>
    <div class="languageBox flex gap10">
        <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" class="langBtn pointer"
            :class="{ activeLangBtn: locale == loc.code }">
            {{ loc.code }}
        </NuxtLink>
    </div>
</template>

<script setup>
import { useLocalStorage } from '@vueuse/core'
import { useI18n, useLocalePath } from '#imports'
const { locale, locales } = useI18n()

const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})

function toggleLanguage(e) {
    language.value = e.currentTarget.innerText
}
</script>

<style scoped>
.languageBox {
    padding: 10px;
}
.langBtn {
    color: rgb(120, 120, 120);
    font-size: 12px;
}

.activeLangBtn {
    color: white;
    /* border-bottom: 1px solid white; */
}
</style>