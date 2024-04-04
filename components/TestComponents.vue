<script setup lang="ts">
const isModalOpen = ref(false)

const cmdRef = useTemplateRef()
const cmdString = ref('')
onMounted(() => {
  cmdString.value = cmdRef.value?.textContent ?? ''
})

const { copy, copied, isSupported } = useClipboard({ source: cmdString, legacy: true })
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
    <div class="flex justify-center">
      <div class="flex flex-col gap-2">
        <code
          class="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border dark:border-neutral-700 flex flex-col gap-2 relative"
        >
          <span>
            <span class="text-gray-400 dark:text-gray-500"># Run this line to copy tmpl-nuxiui and install dependencies</span>
          </span>
          <span ref="cmdRef">
            <span class="text-purple-700 dark:text-green-400">npx</span><span class="text-sky-800 dark:text-sky-300"> giget@latest gh:GloryWong/tmpl-nuxtui --install &lt;Your project name&gt;</span>
          </span>
          <span v-if="isSupported" class="absolute top-1 right-1">
            <UButton variant="ghost" :icon="copied ? 'i-heroicons-check-solid' : 'i-heroicons-clipboard-document-list'" @click="copy()" />
          </span>
        </code>
        <p class="text-neutral-400 dark:text-neutral-600">
          * Don't forget to check outdated dependencies
        </p>
      </div>
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
