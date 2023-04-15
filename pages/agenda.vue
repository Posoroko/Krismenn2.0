<template>
    <main class="pageMainBox">

        <div class="dateBox flex column">
            <div v-for="date in dates" :key="date.id" class="flex column">
                <p>{{ ddmmyyyy(date.date) }}</p>
                <p>{{ date.city.name }}</p>
            </div> 
        </div>
    </main>
</template>

<script setup>
import { ddmmyyyy } from '@/utils/dataManipulation.js'

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const { getItems } = useDirectusItems();

const { data: dates } = await useAsyncData('agenda', () => {
    return getItems ({
        collection: "Agenda",
        fields: 'id, date, city, city.*, venue, event, event_website, more_info, project.name, category.*',
        params: {
            filter: {
                status: {
                    _eq: "true"
                }
            }
        }
    })
})

// const fetchOptions = {
//     server: true,
//     params: {
//         fields: 'id, date, city, city.*, venue, event, event_website, more_info, project.name, category.*'
//     }
// }

// const { data: dates } = await useAsyncData(
//     "agenda",
//     async () => {
//         const _dates = await $fetch(`${directusItems}Agenda`, fetchOptions)
//         const dates = _dates.data
//         return dates
//     }
//     ,
//     { server: true }
// )


</script>

<style scoped>
p {
    color: white;
}
</style>