<template>
	<div
		class="group relative flex flex-col h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 border border-slate-700/50 hover:border-accent-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-500/20 overflow-hidden hover:scale-105 transform"
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

		<div class="relative flex flex-col h-full space-y-6">
			<!-- Enhanced Profile Image -->
			<div class="flex justify-center mb-4">
				<div
					class="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-3 border-accent-500/30 group-hover:border-accent-500/70 transition-all duration-500 shadow-lg shadow-accent-500/10 group-hover:shadow-accent-500/30"
				>
					<img
						:src="profilePic"
						:alt="name"
						class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						@error="onImageError"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-accent-500/10 transition-all duration-300"
					></div>
					<!-- Glow effect on hover -->
					<div
						class="absolute inset-0 rounded-full bg-accent-500/0 group-hover:bg-accent-500/20 transition-all duration-500 blur-xl"
					></div>
				</div>
			</div>

			<!-- Enhanced Name and Role -->
			<div class="text-center flex-shrink-0">
				<h3
					class="font-black text-xl sm:text-2xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-300 group-hover:to-accent-400 transition-all duration-300"
				>
					{{ name }}
				</h3>
				<p
					class="text-sm sm:text-base text-accent-400/70 font-semibold group-hover:text-accent-300 transition-colors duration-300"
				>
					{{ role }}
				</p>
			</div>

			<!-- Enhanced Bio -->
			<p
				class="text-sm sm:text-base text-slate-200 dark:text-slate-300 text-center line-clamp-3 flex-shrink-0 group-hover:text-slate-100 transition-colors duration-300"
			>
				{{ bio }}
			</p>

			<!-- Enhanced Platform Info -->
			<div
				class="flex items-center justify-center gap-4 text-xs text-slate-200 dark:text-slate-300 flex-shrink-0"
			>
				<span
					class="flex items-center gap-1.5 px-2 py-1 bg-slate-800/50 rounded-full border border-slate-700/50 group-hover:border-accent-500/30 transition-all duration-300"
				>
					<span class="text-accent-400">{{ platform === "github" ? "🐙" : "𝕏" }}</span>
					<span class="font-medium">{{
						platform === "github" ? "GitHub" : "X (Twitter)"
					}}</span>
				</span>
				<span
					v-if="followers > 0"
					class="flex items-center gap-1.5 px-2 py-1 bg-accent-500/10 rounded-full border border-accent-500/20 text-accent-300"
				>
					<span>{{ formatFollowers(followers) }}</span>
					<span class="text-xs">followers</span>
				</span>
			</div>

			<!-- Enhanced Profile Link Button -->
			<div class="flex justify-center mt-auto flex-shrink-0">
				<a
					:href="profileUrl"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
				>
					<span>View Profile</span>
					<span class="text-lg">→</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { getAvatarUrl } from "~/utils/contributors";

interface Props {
	name: string;
	role: string;
	bio: string;
	github?: string;
	twitter?: string;
	followers?: number;
	customAvatar?: string;
}

const props = withDefaults(defineProps<Props>(), {
	followers: 0,
});

const imageError = ref(false);
const platform = computed(() => (props.github ? "github" : "twitter"));
const profileUrl = computed(() =>
	props.github ? `https://github.com/${props.github}` : `https://twitter.com/${props.twitter}`,
);

const profilePic = computed(() => {
	if (props.customAvatar) return props.customAvatar;

	if (imageError.value) {
		// Fallback avatar
		return `https://avatar.vercel.sh/${
			props.github || props.twitter
		}?size=400&background=0d8780`;
	}

	if (props.github) {
		return `https://github.com/${props.github}.png`;
	} else if (props.twitter) {
		return `https://avatar.vercel.sh/${props.twitter}?size=400&background=0d8780`;
	}

	return `https://avatar.vercel.sh/user?size=400`;
});

const formatFollowers = (count: number): string => {
	if (count >= 1000000) {
		return `${(count / 1000000).toFixed(1)}M`;
	} else if (count >= 1000) {
		return `${(count / 1000).toFixed(1)}K`;
	}
	return count.toString();
};

const onImageError = () => {
	imageError.value = true;
};
</script>
