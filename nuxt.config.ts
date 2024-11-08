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
    "vue-yandex-maps/nuxt",
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
    apikey: "de0ee812-515f-4988-a580-639be65741a6",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Название сайта", // Заголовок страницы
      meta: [
        {
          name: "description",
          content: "Описание сайта для SEO и пользователей",
        },
        { name: "keywords", content: "Ключевые слова, разделенные запятыми" },
        { property: "og:title", content: "Название сайта" },
        { property: "og:description", content: "Описание сайта для соцсетей" },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: process.env.BASE_URL || "https://example.com",
        },
        { property: "og:image", content: "/path/to/your-image.jpg" }, // изображение для превью
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
