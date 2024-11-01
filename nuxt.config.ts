// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/scss/style.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_variables.scss";
          `,
        },
      },
    },
  },
  modules: [
    "nuxt-swiper",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "vue-yandex-maps/nuxt"
  ],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
  nitro: {
    devProxy: {
      "/api/": {
        target: process.env.BASE_URL,
        changeOrigin: true,
      },
    },
  },
  yandexMaps: {
    apikey: 'de0ee812-515f-4988-a580-639be65741a6',
  },
});