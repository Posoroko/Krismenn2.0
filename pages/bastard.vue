<template>
    <div>
        <main class="full_screen centered ag-book">

            <NuxtLink to="/">
                Home
            </NuxtLink>
        
            <div v-for="item in items" :key="item.id">
            <p v-if="item.media == 'text'" v-html="item.text">
            
            </p>
        </div>

        <!-- <img src="/images/orange.jpeg" alt="absoluteFull" class="bgImage"> -->
        </main>
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems();


const { data: items } = await useAsyncData(
    "bastardBits",

    async () => {
        try {

            const filters = { 
                media: "text" };
            const items = getItems({
                collection: "Bastard_bits",
                params: {
                    filter: filters,
                },
            });
            console.log(items) 
            return items

        } catch (err) {
            console.log(err.message)
        }
    } ,
    { server: true }
)


</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>