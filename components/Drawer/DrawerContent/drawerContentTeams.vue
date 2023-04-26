<template>
    <div class="drawerContentBox h100 relative flex column">
            <div class="topBar absolute top0 right0 flex justifyEnd">
                <DrawerCloseButton />
            </div>

            <div class="box flex column alignCenter justifyCenter gap10">
                <article class="teamBox w100 flex column justifyCenter alignCenter r" v-for="team in teams" :key="team.id">
                    <h3>{{ team.name }}</h3>
                    
                    <p>
                        {{ team.definition }}
                    </p>
                </article>  
            </div>
        </div>
</template>
<script setup>
const { locale, t } = useI18n()
const localePath = useLocalePath()
const appConfig = useAppConfig()
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const { getItems } = useDirectusItems();

const { data: teams } = await useAsyncData(
    "teams",
    async () => {
        const items = await getItems({ 
            collection: "Teams",
            params:  {
                fields: ["id", "name", "definition", "description", "image", "link", "teammates.*"],
            }
        })
        return items
    }
    ,
    { server: true }
)


const aboutLink = {
    en: 'read more...',
    fr: 'en savoir plus...',
    bzh: 'gouzout hiroc\'h...'
}
</script>

<style scoped>
</style>