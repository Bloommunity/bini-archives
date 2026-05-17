<template>
	<footer
		class="border-t border-slate-200/80 mt-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-950 backdrop-blur-xl relative overflow-hidden"
	>
		<!-- Enhanced animated background elements -->
		<div
			class="absolute top-20 -right-40 w-80 h-80 bg-slate-200/5 rounded-full blur-3xl pointer-events-none"
			style="animation: float 20s ease-in-out infinite"
		></div>
		<div
			class="absolute bottom-40 -left-40 w-80 h-80 bg-slate-300/4 rounded-full blur-3xl pointer-events-none"
			style="animation: float 25s ease-in-out infinite; animation-delay: 5s"
		></div>
		<div
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-100/2 rounded-full blur-3xl pointer-events-none"
			style="animation: float 30s ease-in-out infinite; animation-delay: 10s"
		></div>

		<!-- Floating particles -->
		<div
			class="absolute top-10 left-10 text-2xl animate-bounce opacity-10"
			style="animation-delay: 0s"
		>
			✨
		</div>
		<div
			class="absolute top-20 right-20 text-xl animate-pulse opacity-15"
			style="animation-delay: 2s"
		>
			🎵
		</div>
		<div
			class="absolute bottom-20 left-1/4 text-lg animate-bounce opacity-20"
			style="animation-delay: 4s"
		>
			🏆
		</div>

		<!-- Main footer content -->
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 pb-12 border-b border-slate-200/80 dark:border-slate-700/40"
			>
				<!-- Column 1: Archive Info -->
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-2">
						<span class="text-3xl">📚</span>
						<h3 class="text-lg font-black text-accent-600 dark:text-accent-300">
							ABOUT THIS ARCHIVE
						</h3>
					</div>
					<p class="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
						A comprehensive chronicle of BINI's monumental achievements, milestones, and
						journey. Celebrating every moment that made BINI's legacy bloom.
					</p>
					<div class="flex items-center gap-2 pt-2">
						<span class="text-accent-400">✨</span>
						<span class="text-xs font-medium text-slate-700 dark:text-slate-500"
							>Last updated: {{ buildDate }}</span
						>
					</div>
				</div>

				<!-- Column 2: Quick Navigation -->
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-2">
						<span class="text-3xl">🔗</span>
						<h3 class="text-lg font-black text-slate-900 dark:text-accent-300">
							QUICK LINKS
						</h3>
					</div>
					<nav class="flex flex-col gap-2.5" aria-label="Mobile navigation menu">
						<NuxtLink
							to="/"
							class="group relative flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white shadow-sm shadow-slate-200/10 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300/70 dark:border-slate-700/60 text-slate-900 dark:text-slate-200 hover:text-slate-900 transition-all duration-300 font-medium overflow-hidden"
						>
							<span
								class="text-slate-500 group-hover:text-slate-900 transition-all duration-300"
								>🏠</span
							>
							<span>Home</span>
						</NuxtLink>
						<NuxtLink
							to="/achievements"
							class="group relative flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white shadow-sm shadow-slate-200/10 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300/70 dark:border-slate-700/60 text-slate-900 dark:text-slate-200 hover:text-slate-900 transition-all duration-300 font-medium overflow-hidden"
						>
							<span
								class="text-slate-500 group-hover:text-slate-900 transition-all duration-300"
								>🏆</span
							>
							<span>All Achievements</span>
						</NuxtLink>
						<NuxtLink
							to="/socials"
							class="group relative flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white shadow-sm shadow-slate-200/10 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300/70 dark:border-slate-700/60 text-slate-900 dark:text-slate-200 hover:text-slate-900 transition-all duration-300 font-medium overflow-hidden"
						>
							<span
								class="text-slate-500 group-hover:text-slate-900 transition-all duration-300"
								>🌐</span
							>
							<span>Official Links</span>
						</NuxtLink>
						<NuxtLink
							to="/contributors"
							class="group relative flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white shadow-sm shadow-slate-200/10 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300/70 dark:border-slate-700/60 text-slate-900 dark:text-slate-200 hover:text-slate-900 transition-all duration-300 font-medium overflow-hidden"
						>
							<span
								class="text-slate-500 group-hover:text-slate-900 transition-all duration-300"
								>👥</span
							>
							<span>Contributors</span>
						</NuxtLink>
					</nav>
				</div>

				<!-- Column 3: Archive Statistics -->
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-2">
						<span class="text-3xl">📊</span>
						<h3 class="text-lg font-black text-accent-600 dark:text-accent-300">
							ARCHIVE STATISTICS
						</h3>
					</div>
					<div class="grid grid-cols-2 gap-3">
						<div
							class="bg-slate-100 shadow-sm shadow-slate-200/20 dark:bg-slate-800/80 rounded-lg p-3 border border-slate-300/70 dark:border-slate-700/50"
						>
							<div class="text-2xl font-bold text-slate-900 dark:text-accent-400">
								{{ achievementCount }}
							</div>
							<div class="text-xs text-slate-700 dark:text-slate-400">
								Achievements
							</div>
						</div>
						<div
							class="bg-slate-100 shadow-sm shadow-slate-200/20 dark:bg-slate-800/80 rounded-lg p-3 border border-slate-300/70 dark:border-slate-700/50"
						>
							<div class="text-2xl font-bold text-slate-900 dark:text-accent-400">
								{{ contributorsCount }}
							</div>
							<div class="text-xs text-slate-700 dark:text-slate-400">
								Contributors
							</div>
						</div>
						<div
							class="bg-slate-100 shadow-sm shadow-slate-200/20 dark:bg-slate-800/80 rounded-lg p-3 border border-slate-300/70 dark:border-slate-700/50"
						>
							<div class="text-2xl font-bold text-slate-900 dark:text-accent-400">
								{{ categoryCount }}
							</div>
							<div class="text-xs text-slate-700 dark:text-slate-400">Categories</div>
						</div>
						<div
							class="bg-slate-100 shadow-sm shadow-slate-200/20 dark:bg-slate-800/80 rounded-lg p-3 border border-slate-300/70 dark:border-slate-700/50"
						>
							<div class="text-2xl font-bold text-slate-900 dark:text-accent-400">
								{{ startedYear }}
							</div>
							<div class="text-xs text-slate-700 dark:text-slate-400">Started</div>
						</div>
					</div>
					<div class="pt-2">
						<p class="text-xs text-slate-700 dark:text-slate-400 mb-2 text-center">
							Achievement Categories:
						</p>
						<div class="flex flex-wrap gap-1 justify-center">
							<span
								v-for="category in categories"
								:key="category"
								class="px-2 py-1 bg-accent-500/10 text-accent-400 text-xs rounded-full border border-accent-500/20"
							>
								{{ category }}
							</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Footer Bottom: Copyright and Credits -->
			<div
				class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-400"
			>
				<div class="flex items-center gap-2 order-2 sm:order-1">
					<span class="text-accent-500/40">◆</span>
					<span>© 2024-2026 BINI ARCHIVES | All achievements documented with ❤️</span>
					<span class="text-accent-500/40">◆</span>
				</div>
				<div class="flex items-center gap-3 order-1 sm:order-2 text-accent-300 font-medium">
					<span class="text-xs text-slate-700 dark:text-slate-400"
						>Fan-made | Non-official</span
					>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { loadAllAchievements } from "~/utils/achievements";

const buildDate = __BUILD_DATE__;

const allAchievements = await loadAllAchievements();
const achievementCount = allAchievements.length;
const categories = [...new Set(allAchievements.map((achievement) => achievement.category))].sort(
	(a, b) => a.localeCompare(b),
);
const categoryCount = categories.length;
const startedYear =
	allAchievements.length > 0
		? String(
				Math.min(
					...allAchievements.map((achievement) =>
						new Date(achievement.date).getFullYear(),
					),
				),
			)
		: "2022";

let contributorsCount = 0;
try {
	const contributorsData = await import("~/data/contributors/index.json");
	contributorsCount = contributorsData.default?.contributors?.length ?? 0;
} catch (error) {
	console.error("Failed to load contributors data:", error);
}
</script>
