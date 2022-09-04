import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
