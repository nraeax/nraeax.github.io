<script setup lang="ts">
  const route = useRoute()
  definePageMeta({
    title: 'Articles',
    description: 'A bunch of articles about code'
  })
  
  const {data: posts } = await useAsyncData('posts', () => queryContent('/articles').find());
</script>

<template>

  <PageHeader/>

  <div class="grid grid-cols-12">
    <Sidebar/>
    <div class="grid grid-cols-3 gap-8 col-span-9">
      <Card 
        v-for="post in posts" 
        :title="post.title" 
        :href="post._path" 
        :date="post.publishDate"
        :src="post.featuredImage.url"
        :alt="post.featuredImage.title"
      />
    </div>
  </div>
</template>