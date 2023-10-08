<script setup lang="ts">
  const {data: posts } = await useAsyncData('posts', () => queryContent('/projects').find())
  definePageMeta({
    title: 'Projects',
    description: 'My development projects'
  })
</script>

<template>

  <PageHeader/>

  <div class="container">
    <div class="text-center">Category filter</div>
    <div class="grid grid-cols-12 py-16">
      <Card 
        v-for="post in posts" 
        :title="post.title" 
        :href="post._path" 
        :date="post.publishDate"
        :src="post.featuredImage.url"
        :alt="post.featuredImage.title"
        class="col-span-3"
      />
    </div>
  </div>
</template>