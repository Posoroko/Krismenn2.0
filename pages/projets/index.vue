<template>
    <main class="pageMainBox">
        <h1>projets</h1>
    </main>
</template>

<script setup>

const { locale, t } = useI18n()
const localePath = useLocalePath()
const appConfig = useAppConfig()
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;


</script>