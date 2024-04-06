// import vue from '@vitejs/plugin-vue';
import {fileURLToPath} from "url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  // srcDir: 'src/',
  css: ['@/assets/scss/main.scss', 'bootstrap/dist/css/bootstrap.min.css'],
  alias: {
    assets: "/<rootDir>/assets",
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./", import.meta.url)),
            // "@": fileURLToPath(new URL("./src", import.meta.url)),
            "~": fileURLToPath(new URL("./", import.meta.url)),
            // "~": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";',
        },
      }
    }
  },
  modules: [
    "@nuxt/image",
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/device'
  ]
})
