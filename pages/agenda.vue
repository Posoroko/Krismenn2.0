<template>
    <main class="pageMainBox">
        <div v-for="date in dates" :key="date.id">
            <p>{{ date.date }}</p>
            <p>{{ date.city.name }}</p>
        </div> 
    </main>
</template>

<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, date, city, city.*'
    }
}

const { data: dates } = await useAsyncData(
    "agenda",
    async () => {
        const _dates = await $fetch(`${directusItems}Agenda`, fetchOptions)
        const dates = _dates.data
        return dates
    }
    ,
    { server: true }
)


</script>

<style scoped>
p {
    color: white;
}
</style>