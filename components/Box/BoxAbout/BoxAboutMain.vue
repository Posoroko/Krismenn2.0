<template>
    <section>
        <h2 class="boxTitle" @click="handleTitleClick('about', openBox)">{{ about[language] }}</h2>
    </section>
</template>

<script setup>
import { about } from '@/content/text.js'
const language = useLanguage()
console.log(language.value)

const openBox = useState('openBox', () => "none")

const handleTitleClick = (text, _openBox) => {
    console.log(text, _openBox)
    if(text == _openBox) {
        _openBox= 'none'
        return
    }
    openBox.value = text
}

</script>

<style scoped></style>