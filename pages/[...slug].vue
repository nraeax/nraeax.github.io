<script setup lang="ts">
	const { data: articles } = await useAsyncData('article', () => queryContent('/articles').find())
	const route = useRoute()
	const router = useRouter()
	const fullPath = route.path
	
	const requestPath = fullPath.startsWith("/")
    ? fullPath.substring(1)
    : fullPath;

  const crumbs = requestPath.split("/");
  const breadcrumbs = [];
  let path = "";

  crumbs.forEach((crumb) => {
    if (crumb) {
      path = `${path}/${crumb}`;
      const breadcrumb = crumb // This line doesn't work
      if (breadcrumb) {
      	breadcrumbs.push(breadcrumb)
      }
    }
  });

  // const breadcrumb = router.getRoutes().find((r) => r.path === path);

</script>

<template>
	<ContentDoc v-slot="{ doc }">

		<!-- ArticleHeader.vue -->
		<header class="bg-black/20">
			<div class="container mx-auto py-16">

				<!-- Breadcrumbs -->
				<div class="mb-4 flex items-center">
					<div class="bg-white/10 w-7 h-7 flex justify-center mr-4">
						<NuxtLink class="flex items-center justify-center" to="/"><Icon name="heroicons:home-20-solid" class="h-5 w-5"/></NuxtLink>
					</div>
					<ul class="flex gap-4">
						<li v-for="breadcrumb in breadcrumbs" :key="index">

			          {{ breadcrumb }}

						</li>
					</ul>
				</div>

				<div class="w-full lg:w-1/2">
					<h1>{{ doc.title }}</h1>
					<p>{{ doc.description }}</p>
				</div>
			</div>
		</header>

		<main>
			<div class="container mx-auto py-8">
				<div class="grid grid-cols-12 gap-16">
					<div class="col-span-9">
						<ContentRenderer :value="doc" />
					</div>
					<div class="col-span-3 sticky top-24 z-40">

						<!-- ArticleSidebar.vue -->
						<h3>Table of contents</h3>
						<ul v-if="doc.body.toc && doc.body.toc.links">
							<li v-for="link in doc.body.toc.links" class="py-1 text-sm">
								<a :href="`#${link.id}`">
									{{ link.text }}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>

	</ContentDoc>
</template>