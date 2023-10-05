<script setup lang="ts">
  definePageMeta({
    title: 'Articles'
  })
  const route = useRoute()
  const {data: posts } = await useAsyncData('posts', () => queryContent('/articles').find());
</script>

<template>
  <PageTitle/>
  <div class="grid grid-cols-4 gap-8">
    <Card 
      v-for="post in posts" 
      :title="post.title" 
      :href="post._path" 
      :date="post.publishDate"
      :src="post.featuredImage.url"
      :alt="post.featuredImage.title"
    />
  </div>
</template>