<script setup>
const router = useRouter()
const { siteUrl } = useAppConfig()
const breadcrumbs = computed(() => {

  const { fullPath } = useRoute()

  let params = fullPath.startsWith('/')
    ? fullPath.substring(1).split('/')
    : fullPath.split('/')

  params = params.filter(v => v)
  const crumbs = []
  let path = ''
  let title = ''

  params.forEach((param, index) => {
    path = `${path}/${param}`
    title = titleCase(param.replace(/-/g, ' '))

    crumbs.push({
      name: title,
      ...(index != (params.length - 1) && {
        item: `${path}${path.match(/\/$/) ? '' : '/'}`
      })
    })
  })
  return crumbs
})

function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => {
    return (word.charAt(0).toUpperCase() + word.slice(1))
  }).join(' ')
}
</script>

<template>
	<ContentDoc v-slot="{ doc }">

		<!-- ArticleHeader.vue -->
		<header class="bg-black/20">
			<div class="container mx-auto py-16">

				<!-- Breadcrumbs -->
				<div class="flex items-center">
					<div class="bg-white/10 w-7 h-7 flex justify-center">
						<NuxtLink class="flex items-center justify-center" to="/"><Icon name="heroicons:home-20-solid" class="h-5 w-5"/></NuxtLink>
					</div>
					<ul v-for="(item, key) in breadcrumbs" :key="key">
	          <li class="flex items-center flex-shrink-0 text-sm">
	          	<span class="h-7 w-7 flex items-center justify-center">
	              	<Icon name="heroicons:chevron-right-20-solid"/>
	              </span>
	            <div v-if="item.item">
	              <NuxtLink :to="item.item" class="font-semibold hover:underline">{{ item.name }}</NuxtLink>
	            </div>
	            <span v-else>{{ item.name }}</span>
	          </li>
	        </ul>
				</div>

				<div class="w-full lg:w-1/2">
					<h1 class="mt-4">{{ doc.title }}</h1>
					<p class="mt-8 mb-0">{{ doc.publishDate }}</p>
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