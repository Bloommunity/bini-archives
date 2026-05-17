<template>
	<section class="relative mt-10 py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
		<!-- Animated background elements -->
		<div
			class="absolute top-10 left-10 text-4xl animate-spin opacity-10"
			style="animation-duration: 20s"
		>
			🔍
		</div>
		<div
			class="absolute bottom-10 right-10 text-3xl animate-pulse opacity-15"
			style="animation-delay: 3s"
		>
			✨
		</div>
		<div
			class="absolute top-1/2 left-1/4 text-2xl animate-bounce opacity-20"
			style="animation-delay: 1s"
		>
			🎯
		</div>

		<div class="max-w-4xl mx-auto text-center relative z-10">
			<div class="space-y-6">
				<div
					class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-300/60 text-slate-700 text-sm font-medium"
				>
					<span class="text-lg">🔍</span>
					<span>Smart Search</span>
				</div>

				<h2
					class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white"
				>
					Find Your Favorite
					<span
						class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500"
						>BINI Moments</span
					>
				</h2>

				<p class="text-lg text-slate-800 dark:text-slate-300 max-w-2xl mx-auto">
					Search through awards, milestones, tours, and achievements.
					<span class="text-accent-400 font-medium">Discover the magic instantly.</span>
				</p>
			</div>

			<!-- Enhanced Search Box -->
			<div class="mt-10 max-w-2xl mx-auto">
				<div class="relative group">
					<div
						class="absolute inset-0 bg-gradient-to-r from-slate-200/20 to-slate-300/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"
					></div>
					<div
						class="relative bg-slate-50 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/70 dark:border-accent-500/30 rounded-3xl p-2 shadow-2xl shadow-slate-300/20 dark:shadow-slate-900/50 group-hover:shadow-accent-500/20 transition-all duration-300"
					>
						<div class="flex items-center gap-3">
							<div class="flex-1 relative">
								<span
									class="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-700 dark:text-slate-400 text-xl group-hover:text-accent-400 transition-colors"
								>
									🔍
								</span>
								<input
									v-model="searchTerm"
									@keyup.enter="handleSearch"
									type="text"
									placeholder="Try 'awards', 'tours', '2024', or any achievement..."
									class="w-full pl-14 pr-4 py-4 bg-slate-100 text-slate-900 dark:bg-slate-900/95 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 text-lg focus:outline-none focus:ring-2 focus:ring-slate-400/50 rounded-2xl transition-all border border-slate-300/90 dark:border-slate-700/80 shadow-sm shadow-slate-300/10"
								/>
							</div>
							<button
								@click="handleSearch"
								class="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold rounded-2xl shadow-lg shadow-slate-900/30 hover:shadow-slate-900/50 hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
							>
								<span>Search</span>
								<span class="text-lg group-hover:translate-x-1 transition-transform"
									>⚡</span
								>
							</button>
						</div>
					</div>
				</div>

				<!-- Popular Search Tags -->
				<div class="flex flex-wrap justify-center gap-3 mt-6">
					<button
						v-for="tag in popularTags"
						:key="tag"
						@click="
							searchTerm = tag;
							handleSearch();
						"
						class="px-4 py-2 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300/60 dark:border-slate-700/60 hover:border-slate-400/60 text-slate-700 dark:text-accent-200 hover:text-slate-900 dark:hover:text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
					>
						#{{ tag }}
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchTerm = ref("");

const popularTags = [
	"awards",
	"tours",
	"2024",
	"music",
	"charts",
	"milestones",
	"debut",
	"international",
];

const handleSearch = () => {
	const query = searchTerm.value.trim();
	router.push({
		path: "/achievements",
		query: query ? { q: query } : {},
	});
};
</script>
