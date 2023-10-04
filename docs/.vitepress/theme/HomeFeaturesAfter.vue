<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="container mx-auto">
        Custom content: Home Features After
    </div>
    </template>
  </Layout>
</template>

<style scoped>

</style>