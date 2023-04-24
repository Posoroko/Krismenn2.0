<template>
    <div ref="loader" class="loaderBackdrop w100 h100 flex justifyCenter alignCenter wrap">
        <p class="loaderTitle">KRISMENN</p>
    </div>
</template>
<script setup>
const loader = ref(null)

const initLoader = () => {
    const l = loader.value

    for(let i = 0; i < 100; i++) {
        const p = document.createElement('p')
        p.innerText = i
        p.classList.add('loaderNumber')
        p.style.width = '1%'
        l.appendChild(p)
    }
}
onMounted(() => {
    // initLoader()
})
</script>

<style scoped>
.loaderBackdrop {
    background-color: #093157;
}
.loaderTitle{
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: 900;
}
.loaderNumber {
    color: green;
    width: 1%;
    font-size: 5px;
    border: 1px solid red;
}
</style>