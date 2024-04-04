import pkgJson from './package.json'

const APP_NAME = 'tmpl-nuxtui'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  appConfig: {
    appId: pkgJson.name,
    appName: APP_NAME,
    appDescription: pkgJson.description,
    appVersion: pkgJson.version,
    appHost: 'https://tmpl-nuxtui.com',
  },

  app: {
    keepalive: true,
    layoutTransition: { name: 'blur', mode: 'out-in' },
    pageTransition: { name: 'blur', mode: 'out-in' },
  },

  vite: {
    build: {
      sourcemap: true,
    },
  },

  css: ['@/assets/css/tailwind.css', '@/assets/css/transitions.css'],

  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    'nuxt-security',
    '@morev/vue-transitions/nuxt',
    '@vite-pwa/nuxt',
  ],

  ui: {
    icons: ['line-md'],
  },

  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },

  pwa: {
    includeAssets: ['favicon.ico', '*.png', 'logo.svg'],
    manifest: {
      name: APP_NAME,
      short_name: APP_NAME,
      lang: 'en-US',
      description: pkgJson.description,
      theme_color: '#181818',
      background_color: '#181818',
      start_url: '/',
      icons: [],
    },
    workbox: {
      // globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 1800,
    },
    devOptions: {
      // enabled: true,
      suppressWarnings: true,
    },
  },
})
