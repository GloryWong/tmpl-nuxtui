<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.appName}` : appConfig.appName
  },
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
  ogLocale: 'en-US',
  ogLocaleAlternate: ['en-US'],
  twitterTitle: appConfig.appName,
  twitterDescription: appConfig.appDescription,
  twitterImage: ogImage,
  twitterImageAlt: 'logo',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />
    <UContainer>
      <TestComponents />
    </UContainer>
  </div>
</template>
