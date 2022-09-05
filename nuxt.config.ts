import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-Hans-CN",
      },
      titleTemplate: "%s - 争逐",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {name: "charset", content: "utf-8"},
        {name: "Author", content: "争逐"},
      ],
    },
  },
  modules: ["@vueuse/nuxt"],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },

  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    "vite:extendConfig": function (config: any, {isServer}: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true;
      }
    },
  },
});
