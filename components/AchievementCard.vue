<template>
	<div
		class="group relative p-5 sm:p-6 rounded-xl bg-slate-100 border border-slate-300/90 shadow-2xl shadow-slate-300/25 hover:border-slate-400/90 hover:shadow-[0_20px_60px_rgba(148,163,184,0.18)] transition-all duration-300 overflow-hidden dark:bg-slate-800/90 dark:border-slate-700/60"
	>
		<!-- Gradient overlay on hover -->
		<div
			class="absolute inset-0 bg-gradient-to-br from-slate-100/0 via-slate-100/0 to-slate-100/0 group-hover:from-slate-100/20 group-hover:via-slate-100/10 group-hover:to-slate-100/0 transition-all duration-300 pointer-events-none"
		></div>

		<div class="relative">
			<div class="flex items-start gap-3 sm:gap-4">
				<!-- Icon -->
				<div
					v-if="icon"
					class="text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
				>
					{{ icon }}
				</div>

				<!-- Content -->
				<div class="flex-1 min-w-0">
					<!-- Title -->
					<h3
						class="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2 group-hover:text-slate-800 transition-colors line-clamp-2"
					>
						{{ title }}
					</h3>

					<!-- Description -->
					<p
						v-if="description"
						class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-2 line-clamp-2"
					>
						{{ description }}
					</p>

					<!-- Details -->
					<p
						v-if="details"
						class="text-xs text-accent-400/70 mb-3"
						v-html="formattedDetails"
					></p>

					<!-- Footer -->
					<div class="flex items-center justify-between flex-wrap gap-2">
						<span
							v-if="category"
							class="inline-block px-2 sm:px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded-full border border-slate-300/50"
						>
							{{ category }}
						</span>
						<span v-if="date" class="text-xs text-slate-600 dark:text-slate-500">
							{{ formatDate(date) }}
						</span>
					</div>

					<!-- Read More Button -->
					<div v-if="readMoreLink" class="mt-3">
						<NuxtLink
							:to="readMoreLink"
							class="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-800 transition-colors group/btn"
						>
							<span>Read more</span>
							<svg
								class="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								></path>
							</svg>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { formatRichText } from "~/utils/formatRichText";

interface Props {
	title: string;
	description?: string;
	details?: string;
	icon?: string;
	category?: string;
	date?: string;
	readMoreLink?: string;
}

defineProps<Props>();

const formattedDetails = computed(() => (details ? formatRichText(details) : ""));

const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};
</script>
