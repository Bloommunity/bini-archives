<template>
	<div class="relative">
		<!-- Page Header -->
		<section
			class="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
		>
			<!-- Enhanced Background Effects -->
			<div
				class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.15),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(232,121,249,0.1),_transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.05),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(232,121,249,0.02),_transparent_50%)] bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.2),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(232,121,249,0.15),_transparent_50%)]"
			></div>

			<!-- Floating Elements -->
			<div
				class="absolute top-20 left-10 text-6xl animate-bounce opacity-10"
				style="animation-delay: 0s"
			>
				🏆
			</div>
			<div
				class="absolute top-40 right-20 text-4xl animate-pulse opacity-15"
				style="animation-delay: 2s"
			>
				✨
			</div>
			<div
				class="absolute bottom-40 left-1/4 text-5xl animate-bounce opacity-20"
				style="animation-delay: 1s"
			>
				🎵
			</div>
			<div
				class="absolute bottom-20 right-10 text-3xl animate-pulse opacity-15"
				style="animation-delay: 3s"
			>
				🌟
			</div>
			<div
				class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl animate-spin opacity-5"
				style="animation-duration: 20s"
			>
				∞
			</div>

			<div class="relative z-10 max-w-6xl mx-auto text-center">
				<div class="space-y-8">
					<!-- Enhanced Title Section -->
					<div class="space-y-6">
						<div
							class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium"
						>
							<span class="text-lg animate-pulse">🏆</span>
							<span>Achievement Gallery</span>
						</div>

						<h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
							<span
								class="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-accent-600 to-accent-700 dark:from-white dark:via-accent-200 dark:to-accent-400 from-slate-900 via-accent-600 to-accent-700"
							>
								BINI's
							</span>
							<br />
							<span
								class="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-700 dark:from-accent-400 dark:to-accent-500"
							>
								Achievements
							</span>
						</h1>

						<p
							class="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
						>
							Discover every milestone, every victory, every moment that made BINI's
							journey
							<span class="text-accent-600 dark:text-accent-400 font-medium"
								>truly extraordinary</span
							>.
						</p>
					</div>

					<!-- Enhanced Search Section -->
					<div class="max-w-2xl mx-auto">
						<div class="relative group">
							<div
								class="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"
							></div>
							<div
								class="relative bg-slate-50 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/50 dark:border-accent-500/30 rounded-3xl p-2 shadow-2xl dark:shadow-slate-900/50 shadow-slate-300/20 group-hover:shadow-accent-500/20 transition-all duration-300"
							>
								<div class="flex items-center gap-3">
									<div class="flex-1 relative">
										<span
											class="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-600 dark:text-slate-400 text-xl group-hover:text-accent-400 transition-colors"
										>
											🔍
										</span>
										<input
											v-model="searchTerm"
											@keyup.enter="applySearch"
											type="text"
											placeholder="Search achievements, awards, tours..."
											class="w-full pl-14 pr-4 py-4 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-600 dark:placeholder:text-slate-500 text-lg focus:outline-none focus:ring-2 focus:ring-accent-500/50 rounded-2xl transition-all"
										/>
									</div>
									<button
										@click="applySearch"
										class="px-6 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
									>
										<span>Search</span>
										<span class="text-lg">⚡</span>
									</button>
								</div>
							</div>
						</div>

						<!-- Results Counter -->
						<div class="mt-4 text-center">
							<span
								class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-sm"
							>
								<span class="text-accent-400">📊</span>
								<span>
									{{
										searchTerm
											? `${filteredAchievements.length} result(s) for "${searchTerm}"`
											: `${filteredAchievements.length} achievements found`
									}}
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Scroll Indicator -->
			<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div
					class="w-6 h-10 border-2 border-accent-400/50 rounded-full flex justify-center"
				>
					<div class="w-1 h-3 bg-accent-400 rounded-full mt-2 animate-pulse"></div>
				</div>
			</div>
		</section>

		<!-- Content Section -->
		<section
			class="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 overflow-hidden"
		>
			<!-- Background decorations -->
			<div class="absolute top-20 left-20 text-6xl opacity-5 animate-pulse">🏆</div>
			<div
				class="absolute bottom-20 right-20 text-5xl opacity-5 animate-bounce"
				style="animation-delay: 2s"
			>
				⭐
			</div>
			<div
				class="absolute top-1/2 right-10 text-4xl opacity-5 animate-spin"
				style="animation-duration: 15s"
			>
				🎵
			</div>

			<div class="max-w-7xl mx-auto relative z-10">
				<!-- Enhanced Year Filters -->
				<div class="mb-16 text-center">
					<div
						class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium mb-8"
					>
						<span class="text-lg">📅</span>
						<span>Filter by Year</span>
					</div>

					<div class="flex flex-wrap justify-center gap-3">
						<button
							v-for="year in years"
							:key="year"
							@click="selectedYear = year"
							class="year-filter-btn"
							:class="[
								'px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg',
								selectedYear === year
									? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-accent-500/40 hover:shadow-accent-500/60'
									: 'bg-white/90 dark:bg-slate-900/70 text-slate-800 dark:text-slate-300 hover:text-accent-600 border border-slate-200/80 dark:border-slate-700/60 hover:border-accent-500/40 hover:shadow-accent-500/10',
							]"
						>
							<span class="relative z-10">{{ year }}</span>
							<div
								v-if="selectedYear === year"
								class="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-20 rounded-2xl blur"
							></div>
						</button>
					</div>
				</div>

				<!-- Enhanced Achievements Grid -->
				<div
					v-if="filteredAchievements.length > 0"
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
				>
					<NuxtLink
						v-for="achievement in filteredAchievements"
						:key="achievement.slug"
						:to="buildAchievementUrl(achievement)"
						class="achievement-card group relative flex flex-col h-full p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 dark:bg-slate-950 dark:border-slate-700/70 hover:border-accent-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-500/20 overflow-hidden hover:scale-105 transform"
					>
						<!-- Enhanced gradient overlay on hover -->
						<div
							class="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/0 group-hover:from-accent-500/10 group-hover:via-accent-500/5 group-hover:to-accent-500/0 transition-all duration-500 rounded-3xl"
						></div>

						<!-- Floating particles -->
						<div
							class="absolute top-4 right-4 text-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-bounce"
							style="animation-delay: 0.5s"
						>
							✨
						</div>
						<div
							class="absolute bottom-4 left-4 text-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"
							style="animation-delay: 1s"
						>
							⭐
						</div>

						<!-- Icon with enhanced animation -->
						<div
							class="relative z-10 text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 flex-shrink-0"
						>
							{{ achievement.icon }}
						</div>

						<!-- Title with gradient effect -->
						<h3
							class="relative z-10 font-black text-lg sm:text-xl text-slate-900 dark:text-white mb-3 line-clamp-2 flex-shrink-0 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-300 group-hover:to-accent-400 transition-all duration-300"
						>
							{{ achievement.title }}
						</h3>

						<!-- Description -->
						<p
							class="relative z-10 text-sm sm:text-base text-slate-700 dark:text-slate-400 mb-4 line-clamp-2 flex-shrink-0 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300"
						>
							{{ achievement.description }}
						</p>

						<!-- Details -->
						<div
							class="relative z-10 text-xs sm:text-sm text-slate-600 dark:text-slate-500 mb-6 line-clamp-2 flex-grow group-hover:text-slate-700 dark:group-hover:text-accent-300 transition-colors duration-300"
							v-html="formatRichText(achievement.details)"
						></div>

						<!-- Enhanced Footer -->
						<div
							class="relative z-10 flex items-center justify-between flex-wrap gap-3 mb-4 flex-shrink-0"
						>
							<span
								class="inline-block px-3 py-1.5 text-xs bg-gradient-to-r from-accent-500/20 to-accent-500/10 text-slate-700 dark:text-accent-300 text-accent-600 rounded-full border border-accent-500/30 font-semibold hover:scale-105 transition-transform duration-300"
							>
								{{ achievement.category }}
							</span>
							<span
								class="text-xs text-slate-700 dark:text-slate-400 bg-slate-200/70 dark:bg-slate-800/50 px-2 py-1 rounded-full"
							>
								{{ formatDate(achievement.date) }}
							</span>
						</div>

						<!-- Enhanced Read More Button -->
						<div
							class="relative z-10 flex items-center justify-center gap-2 text-accent-400 dark:text-accent-400 text-accent-600 group-hover:text-accent-300 dark:group-hover:text-accent-300 group-hover:text-accent-700 transition-all duration-300 font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
						>
							<span>Explore Achievement</span>
							<span class="text-lg group-hover:translate-x-1 transition-transform"
								>→</span
							>
						</div>
					</NuxtLink>
				</div>

				<!-- Enhanced No achievements message -->
				<div v-else class="text-center py-20 sm:py-24">
					<div class="relative">
						<div class="text-7xl sm:text-8xl mb-6 animate-bounce">📭</div>
						<div
							class="absolute top-4 left-1/2 transform -translate-x-1/2 text-3xl animate-pulse opacity-20"
						>
							😔
						</div>
					</div>
					<h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4">
						No Achievements Found
					</h3>
					<p class="text-slate-600 dark:text-slate-400 text-lg max-w-md mx-auto">
						No achievements found for {{ selectedYear }}. Try selecting a different year
						or clearing your search.
					</p>
					<button
						@click="selectedYear = '2025'"
						class="mt-6 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 transition-all duration-300"
					>
						View Latest Achievements
					</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	loadAllAchievements,
	getAchievementYears,
	getAchievementRoutePath,
	type Achievement,
} from "~/utils/achievements";
import { formatRichText } from "~/utils/formatRichText";
import { useSeo } from "~/composables/useSeo";

gsap.registerPlugin(ScrollTrigger);

const { setSeoMetadata, setSeoJsonLd } = useSeo();

const route = useRoute();
const router = useRouter();
const years = ref<string[]>([]);
const selectedYear = ref("All");
const searchTerm = ref((route.query.q as string) || "");
const achievements = ref<Achievement[]>([]);

const filteredAchievements = computed(() => {
	const query = searchTerm.value.trim().toLowerCase();
	return achievements.value
		.filter((a) => {
			if (selectedYear.value === "All") return true;
			return new Date(a.date).getFullYear().toString() === selectedYear.value;
		})
		.filter((a) => {
			if (!query) return true;
			return [a.title, a.description, a.details, a.category].some((field) =>
				field.toLowerCase().includes(query),
			);
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};

const buildAchievementUrl = (achievement: Achievement) => getAchievementRoutePath(achievement);

const applySearch = () => {
	const q = searchTerm.value.trim();
	router.push({
		path: "/achievements",
		query: q ? { q } : {},
	});
};

const animateAchievements = () => {
	// Animate achievement cards with enhanced effects
	gsap.utils.toArray(".achievement-card").forEach((element: any, index: number) => {
		gsap.fromTo(
			element,
			{ opacity: 0, y: 60, scale: 0.8, rotateY: -15 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				rotateY: 0,
				duration: 0.8,
				delay: index * 0.1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: element,
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			},
		);
	});

	// Animate year filter buttons with stagger
	gsap.fromTo(
		".year-filter-btn",
		{ opacity: 0, y: -20, scale: 0.9 },
		{
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 0.5,
			stagger: 0.08,
			ease: "back.out(1.7)",
		},
	);
};

onMounted(async () => {
	achievements.value = await loadAllAchievements();
	const loadedYears = await getAchievementYears();
	years.value = ["All", ...loadedYears];

	// Set SEO metadata
	const baseUrl = "https://bini-blooming-legacy.vercel.app";
	setSeoMetadata({
		title: "Achievements | BINI Blooming Legacy",
		description:
			"Explore all of BINI's remarkable achievements and milestones throughout the years",
		keywords: ["BINI", "achievements", "milestones", "awards"],
		url: baseUrl + "/achievements",
	});

	// Set JSON-LD structured data
	setSeoJsonLd({
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "BINI Achievements",
		description: "All achievements and milestones of BINI",
		url: baseUrl + "/achievements",
	});

	// Enhanced header animations
	gsap.fromTo(
		"h1",
		{ opacity: 0, y: -30, scale: 0.9 },
		{ opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
	);

	gsap.fromTo(
		".page-description",
		{ opacity: 0, y: 20 },
		{ opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" },
	);

	// Animate floating elements
	gsap.utils
		.toArray(".absolute.text-6xl, .absolute.text-4xl, .absolute.text-5xl, .absolute.text-3xl")
		.forEach((element: any, index: number) => {
			gsap.fromTo(
				element,
				{ opacity: 0, scale: 0.5 },
				{
					opacity: 1,
					scale: 1,
					duration: 1,
					delay: index * 0.2 + 0.6,
					ease: "elastic.out(1, 0.5)",
				},
			);
		});

	// Animate initial achievements and year filter
	setTimeout(() => {
		animateAchievements();
	}, 200);
});

onUnmounted(() => {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});

watch(selectedYear, () => {
	// Re-animate when year changes
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	setTimeout(() => {
		animateAchievements();
	}, 100);
});

watch(
	() => route.query.q,
	(newQuery) => {
		searchTerm.value = (newQuery as string) || "";
	},
);
</script>
