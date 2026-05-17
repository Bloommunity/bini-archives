<template>
	<section
		class="py-12 px-4 sm:px-6 lg:px-8 bg-white/95 dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-900/80"
	>
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
					Recent Highlights
				</h2>
				<p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
					Celebrating BINI's latest milestones and achievements
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				<AchievementCard
					v-for="(achievement, index) in achievements.slice(0, 6)"
					:key="achievement.slug"
					:title="achievement.title"
					:description="achievement.description"
					:icon="achievement.icon"
					:date="achievement.date"
					:category="'Hall of Fame'"
					:read-more-link="getAchievementRoutePath(achievement)"
					class="transform hover:scale-105 transition-transform duration-300"
					:style="{ animationDelay: `${index * 0.1}s` }"
					data-animate
				/>
			</div>

			<div class="text-center mt-12">
				<NuxtLink
					to="/achievements"
					class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all duration-300"
				>
					<span>View All Achievements</span>
					<span class="text-xl">→</span>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import AchievementCard from "~/components/AchievementCard.vue";
import {
	getAchievementRoutePath,
	loadAllAchievements,
	type Achievement,
} from "~/utils/achievements";

const achievements = ref<Achievement[]>([]);

onMounted(async () => {
	const allAchievements = await loadAllAchievements();
	achievements.value = allAchievements.filter((achievement) => achievement.hallOfFame);
});
</script>
