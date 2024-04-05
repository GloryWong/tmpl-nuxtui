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
    head: {
      meta: [
        {
          name: 'description',
          content: pkgJson.description,
        },
        {
          name: 'theme-color',
          content: '#181818',
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black',
        },
        {
          name: 'keywords',
          content: 'nuxt, nuxt ui, template, starter',
        },
      ],
      htmlAttrs: {
        lang: 'en-US',
      },
      noscript: [
        { children: 'JavaScript is required' },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: '48x48',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon-180x180.png',
          type: 'image/png',
          sizes: '180x180',
        },
      ],
    },
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
      icons: [{
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      }, {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }, {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      }],
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
