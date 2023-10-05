<script setup lang="ts">
  definePageMeta({
    title: 'Articles'
  })
  const route = useRoute()
  const {data: posts } = await useAsyncData('posts', () => queryContent('/articles').find());
</script>

<template>
  <h1 class="text-6xl font-bold my-8">{{ route.meta.title }}</h1>
  <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-12">
    <div v-for="post in posts">
      <a :href="post._path">
        <img :src="post.featureImage.url" :alt="post.featureImage.title" />
        <h2>{{ post.title }}</h2>
        <time :datetime="post.publishDate">{{ post.publishDate }}</time>
        <p>{{ post.description }}</p>
      </a>
    </div>
  </div>
</template>