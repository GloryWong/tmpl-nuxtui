<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.appName}` : appConfig.appName
  },
  meta: [
    {
      name: 'description',
      content: appConfig.appDescription,
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
      content: '',
    },
  ],
  htmlAttrs: {
    lang: 'en-US',
  },
  link: [
    // {
    //   rel: 'icon',
    //   href: '/favicon-32x32.png',
    //   type: 'image/png',
    //   sizes: '32x32',
    // },
    // {
    //   rel: 'icon',
    //   href: '/favicon-16x16.png',
    //   type: 'image/png',
    //   sizes: '16x16',
    // },
    // {
    //   rel: 'icon',
    //   href: '/favicon.ico',
    //   sizes: 'any',
    // },
    // {
    //   rel: 'apple-touch-icon',
    //   href: '/apple-touch-icon.png',
    //   type: 'image/png',
    //   sizes: '180x180',
    // },
    // {
    //   rel: 'mask-icon',
    //   href: '/logo.svg',
    //   color: '#181818',
    // },
  ],
})

const HOST = appConfig.appHost
const ogImage = `${import.meta.dev ? '' : HOST}/og-image.png`
useSeoMeta({
  description: appConfig.appDescription,
  ogTitle: appConfig.appName,
  ogSiteName: appConfig.appName,
  ogDescription: appConfig.appDescription,
  ogImage,
  ogImageAlt: 'logo',
  ogType: 'website',
  ogUrl: HOST,
  ogLocale: 'zh-CN',
  ogLocaleAlternate: ['en-US'],
  twitterTitle: appConfig.appName,
  twitterDescription: appConfig.appDescription,
  twitterImage: ogImage,
  twitterImageAlt: 'logo',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UContainer>
    <TestComponents />
  </UContainer>
</template>
