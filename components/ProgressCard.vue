<template>
	<div
		class="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/30 border border-slate-600/50 hover:border-accent-500/30 transition-all duration-300"
	>
		<!-- Title -->
		<h3
			class="font-heading font-bold text-base sm:text-lg text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300"
		>
			{{ title }}
		</h3>

		<!-- Progress Items -->
		<div class="space-y-5 sm:space-y-6">
			<div v-for="item in items" :key="item.id" class="space-y-2">
				<!-- Label and Percentage -->
				<div class="flex items-center justify-between">
					<p class="font-medium text-sm sm:text-base text-white">
						{{ item.label }}
					</p>
					<span class="text-xs sm:text-sm font-bold text-accent-400">
						{{ item.progress }}%
					</span>
				</div>

				<!-- Progress Bar -->
				<div class="w-full bg-slate-700/50 rounded-full h-2 sm:h-3 overflow-hidden">
					<div
						class="h-full bg-gradient-to-r from-accent-500 to-accent-400 transition-all duration-700 ease-out rounded-full shadow-lg shadow-accent-500/20"
						:style="{ width: `${item.progress}%` }"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface ProgressItem {
	id: number | string;
	label: string;
	progress: number;
}

interface Props {
	title: string;
	items: ProgressItem[];
}

defineProps<Props>();
</script>
