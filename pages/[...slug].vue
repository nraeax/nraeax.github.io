<script setup lang="ts">

	const route = useRoute()
	
	const fullPath = route.fullPath
  const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
  const crumbs = []

  let path = ''

  params.forEach((param, index) => {
    path = `${path}/${param}`
    const match = route.fullPath.match(path)

		if (match.name !== null) {
			crumbs.push(match)
		}
		console.log(crumbs)

  })

</script>

<template>
	<ContentDoc v-slot="{ doc }">

		<!-- ArticleHeader.vue -->
		<header class="bg-black/20">
			<div class="container mx-auto py-16">
				<div class="mb-4 flex items-center">
					<div class="bg-black w-7 h-7 flex items-center justify-center mr-4">
						<Icon name="heroicons:home-20-solid"/>
					</div>
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