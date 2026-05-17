<template>
	<div
		class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 px-4 py-8 sm:px-6 lg:px-8"
	>
		<div class="max-w-6xl mx-auto space-y-6">
			<NuxtLink
				to="/achievements"
				class="inline-flex items-center gap-2 text-accent-300 hover:text-accent-200"
			>
				← Back to Achievements
			</NuxtLink>

			<div
				class="rounded-3xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-950/95 p-8 shadow-2xl shadow-slate-200/20 dark:shadow-black/30"
			>
				<div v-if="achievement" class="space-y-10">
					<div class="grid gap-10 lg:grid-cols-[320px_1fr]">
						<div class="space-y-6">
							<div
								class="overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-100 dark:border-slate-800 dark:bg-slate-950"
							>
								<img
									v-if="achievement.thumbnail"
									:src="achievement.thumbnail"
									:alt="achievement.title"
									class="h-80 w-full object-cover"
								/>
								<div
									v-else
									class="flex h-80 items-center justify-center bg-slate-100 text-6xl dark:bg-slate-900"
								>
									{{ achievement.icon }}
								</div>
							</div>

							<div
								class="space-y-4 rounded-3xl border border-slate-200/70 bg-white/95 p-6 dark:border-slate-800 dark:bg-slate-950/90"
							>
								<div class="space-y-2">
									<p class="text-sm uppercase tracking-[0.3em] text-accent-300">
										{{ achievement.category }}
									</p>
									<h1
										class="text-3xl font-extrabold text-slate-900 dark:text-white"
									>
										{{ achievement.title }}
									</h1>
									<p class="text-sm text-slate-600 dark:text-slate-400">
										{{ formatDate(achievement.date) }}
									</p>
								</div>

								<div
									v-if="contributorHandle"
									class="rounded-2xl bg-slate-200/80 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
								>
									<strong class="text-accent-300">Added by </strong>
									<a
										:href="`https://x.com/${contributorHandle}`"
										target="_blank"
										rel="noopener noreferrer"
										class="text-accent-400 hover:text-accent-300 underline transition-colors"
									>
										@{{ contributorHandle }}
									</a>
								</div>
								<div v-if="tags.length" class="flex flex-wrap gap-2">
									<span
										v-for="tag in tags"
										:key="tag"
										class="rounded-full border border-slate-300 bg-slate-200/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-700 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-300"
									>
										{{ tag }}
									</span>
								</div>
							</div>
						</div>

						<div class="space-y-8">
							<div
								class="space-y-5 rounded-2xl border border-slate-200/70 bg-white/95 p-6 dark:border-slate-700/80 dark:bg-slate-800/50"
							>
								<p class="text-sm uppercase tracking-[0.3em] text-accent-300">
									Achievement details
								</p>
								<p class="text-lg leading-8 text-slate-700 dark:text-slate-200">
									{{ achievement.description }}
								</p>
								<p
									v-if="achievement.details"
									class="text-slate-600 dark:text-slate-400 leading-relaxed"
								>
									{{ achievement.details }}
								</p>
							</div>

							<div class="flex flex-wrap gap-3">
								<a
									v-if="achievement.reference"
									:href="achievement.reference"
									class="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-accent-400"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Reference
									<span>↗</span>
								</a>
							</div>
						</div>
					</div>

					<div
						v-if="related.length"
						class="space-y-4 rounded-2xl border border-slate-200/70 bg-white/95 p-6 dark:border-slate-700/80 dark:bg-slate-800/50"
					>
						<p class="text-sm uppercase tracking-[0.3em] text-accent-300">
							Related achievements
						</p>
						<div class="grid gap-4 sm:grid-cols-2">
							<NuxtLink
								v-for="item in related"
								:key="item.slug"
								:to="getAchievementRoutePath(item)"
								class="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 dark:border-slate-800 dark:bg-slate-950/80 p-4 transition hover:-translate-y-1 hover:border-accent-500"
							>
								<div class="flex items-center gap-3">
									<div
										class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl dark:bg-slate-900"
									>
										<span v-if="item.thumbnail">🏆</span>
										<span v-else>{{ item.icon }}</span>
									</div>
									<div>
										<p
											class="text-sm uppercase tracking-[0.24em] text-accent-300"
										>
											{{ item.category }}
										</p>
										<h3
											class="text-base font-semibold text-slate-900 dark:text-white"
										>
											{{ item.title }}
										</h3>
									</div>
								</div>
								<p
									class="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-3"
								>
									{{ item.description }}
								</p>
							</NuxtLink>
						</div>
					</div>
				</div>

				<div v-else-if="loading" class="space-y-4">
					<div
						class="h-6 w-48 animate-pulse rounded bg-slate-200 dark:bg-slate-700"
					></div>
					<div
						class="h-4 w-64 animate-pulse rounded bg-slate-200 dark:bg-slate-700"
					></div>
					<div
						class="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700"
					></div>
				</div>

				<div v-else class="text-slate-700 dark:text-slate-400">Achievement not found.</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import {
	computeAchievementTags,
	getAchievementRoutePath,
	loadAchievement,
	loadRelatedAchievements,
	type Achievement,
} from "~/utils/achievements";
import { useSeo } from "~/composables/useSeo";

definePageMeta({ name: "achievements-year-month-day-slug" });

const route = useRoute();
const achievement = ref<Achievement | null>(null);
const related = ref<Achievement[]>([]);
const loading = ref(true);
const { setSeoMetadata, setSeoJsonLd } = useSeo();

const year = computed(() => route.params.year as string);
const month = computed(() => route.params.month as string);
const day = computed(() => route.params.day as string);
const slug = computed(() => route.params.slug as string);
const tags = computed(() => (achievement.value ? computeAchievementTags(achievement.value) : []));
const authorLine = computed(() => achievement.value?.contributor || "");
const contributorHandle = computed(() => {
	const contributor = achievement.value?.contributor?.trim() || "";
	const handle = contributor.replace(/^@+/, "");
	return /^\w{1,15}$/.test(handle) ? handle : "";
});

const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

const loadAchievementData = async () => {
	loading.value = true;
	try {
		const achievementSlug = slug.value;
		if (!achievementSlug) {
			achievement.value = null;
			return;
		}

		const data = await loadAchievement(achievementSlug);
		achievement.value = data;

		if (data) {
			related.value = await loadRelatedAchievements(data);
			const baseUrl = "https://bini-blooming-legacy.vercel.app";
			setSeoMetadata({
				title: `${data.title} | BINI Blooming Legacy`,
				description: data.seo?.description || data.description,
				keywords: data.seo?.keywords,
				image: data.thumbnail,
				url: `${baseUrl}${getAchievementRoutePath(data)}`,
				type: "article",
			});
			setSeoJsonLd({
				"@context": "https://schema.org",
				"@type": "NewsArticle",
				headline: data.title,
				description: data.description,
				image: data.thumbnail,
				datePublished: data.date,
				author: {
					"@type": "Organization",
					name: "BINI",
				},
			});
		}
	} catch (error) {
		console.error("Error loading achievement:", error);
		achievement.value = null;
	} finally {
		loading.value = false;
	}
};

onMounted(() => {
	loadAchievementData();
});
</script>
