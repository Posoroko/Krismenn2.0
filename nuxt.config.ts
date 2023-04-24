// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/reset.css',
        '@/assets/css/main.css',
        '@/assets/css/utility.css',
        '@/assets/css/fonts.css',
        '@/assets/css/components/Box.css',
        '@/assets/css/components/Bar.css',
        '@/assets/css/animations.css'
    ],
    ssr: false,
    modules: [
        "nuxt-directus",
        "@nuxtjs/i18n"
    ],
    i18n: {
        baseUrl: 'https://krismenn.netlify.app',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'kouingig',
            redirectOn: 'root',  // recommended
        },
        strategy: 'prefix',
        defaultLocale: 'en',
        locale: 'En',
        locales: [
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
            },
            {
                code: 'fr',
                name: 'Français',
                iso: 'fr-FR',
            },
            {
                code: 'bzh',
                name: 'Brezhoneg',
                iso: 'bzh-BZH',
            },
        ],
        customRoutes: 'config',
        vueI18nLoader : true,
        pages: {
            home: { en: '/', fr: '/', bzh: '/' },
            about: { en: '/about', fr: '/a-propos', bzh: '/diwar-benn' },
        }
    },
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
                    href: '/images/logo1.svg',
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
