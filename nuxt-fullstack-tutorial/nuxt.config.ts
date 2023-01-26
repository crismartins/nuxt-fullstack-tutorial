// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/scss/main.scss', '@/assets/scss/variables.scss'],
    plugins: [{ src: '@/plugins/oruga.js' }]
})
