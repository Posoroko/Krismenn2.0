// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/reset.css',
        '@/assets/css/main.css',
        '@/assets/css/utility.css',
        '@/assets/css/fonts.css',
        '@/assets/css/utility.css',
        '@/assets/css/animations.css'
    ],
    ssr: false,
    modules: ["nuxt-directus"],
    directus: {
        url: "https://krismenn.monsieuredgar.com",
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/images/logo-square.jpg',
                },
            ],
            charset: 'utf-8',
            viewport: 'width=500, initial-scale=1',
            title: 'Krismenn',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                // { name: 'description', content: 'Site de la Mairie de Poullaouën.' },
                // { name: "og:description", content: 'Site de la Mairie de Poullaouën.' },
                // { name: "og:site_name", content: "Mairie de Poullaouen" },
                { name: "og:type", content: "website" },
                // { name: "og:image", content: "@carine_leduc" },
                // { name: "og:url", content: "https://mairie-poullaouen.fr" },
            ],
        }
    }
})
