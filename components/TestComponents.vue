<script setup lang="ts">
const isModalOpen = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="p-4 flex flex-col justify-center items-center gap-4">
      <h1
        class="text-4xl text-center bg-gradient-to-r from-primary-300 via-primary-600 to-primary-300 text-transparent bg-clip-text
      dark:from-primary-600 dark:via-primary-300 dark:to-primary-600"
      >
        Welcome to tmpl-nuxtui
      </h1>
      <UButton
        icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank"
        label="Open Nuxt UI Documentation"
      />
    </div>
    <UCard>
      <template #header>
        Test components
      </template>
      <div class="flex justify-start items-center gap-4">
        <div class="w-12 h-12">
          <BaseImage src="/favicon.ico" />
        </div>
        <UButton label="Open" @click="isModalOpen = !isModalOpen" />
        <BaseModal v-model="isModalOpen" title="Modal" button-close>
          <div>This is a BaseModal test</div>
        </BaseModal>
        <div>
          <ButtonColorMode />
        </div>
      </div>
    </UCard>
  </div>
</template>

<style scoped>

</style>
