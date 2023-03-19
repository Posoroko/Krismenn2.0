<script setup>
const language = useLanguage()

function toggleLanguage(e) {
    language.value = e.currentTarget.innerText
    console.log(typeof useLanguage().value)
}
</script>

<template>
    <div class="languageBox flex gap10">
        <p class="langBtn fr pointer" :class="{ activeLangBtn : language == 'fr'}" @click.stop="toggleLanguage">fr</p>

        <p class="langBtn en pointer" :class="{ activeLangBtn: language == 'en' }" @click.stop="toggleLanguage">en</p>

        <p class="langBtn bzh pointer" :class="{ activeLangBtn: language == 'bzh' }" @click.stop="toggleLanguage">bzh</p>
    </div>
</template>

<style scoped>
.langBtn {
    font-size: 10px;
}

.activeLangBtn {
    border-bottom: 1px solid white;
}
</style>