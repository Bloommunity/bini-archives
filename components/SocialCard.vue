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

			<!-- Enhanced Name and Description -->
			<div class="text-center flex-shrink-0">
				<h3
					class="font-black text-xl sm:text-2xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-300 group-hover:to-accent-400 transition-all duration-300"
				>
					{{ name }}
				</h3>
				<p
					class="text-sm sm:text-base text-accent-400/70 font-semibold group-hover:text-accent-300 transition-colors duration-300"
				>
					{{ description || "Official Account" }}
				</p>
			</div>

			<!-- Enhanced Platform Handles -->
			<div
				class="flex items-center justify-center gap-2 text-xs text-slate-200 dark:text-slate-300 flex-wrap flex-shrink-0"
			>
				<span
					v-for="platform in platforms"
					:key="platform.platform"
					class="flex items-center gap-1.5 px-2 py-1 bg-slate-800/50 rounded-full border border-slate-700/50 group-hover:border-accent-500/30 transition-all duration-300"
				>
					<PlatformIcon :platform="platform.platform" :size="14" />
					<span class="font-medium">@{{ normalizeHandle(platform.handle) }}</span>
				</span>
			</div>

			<!-- Enhanced Platform Info -->
			<div
				class="flex items-center justify-center gap-4 text-xs text-slate-200 dark:text-slate-300 flex-shrink-0"
			>
				<span
					class="flex items-center gap-1 px-2 py-1 bg-accent-500/10 rounded-full border border-accent-500/20"
				>
					<span class="text-accent-400">📱</span>
					<span
						>{{ platforms.length }} platform{{
							platforms.length !== 1 ? "s" : ""
						}}</span
					>
				</span>
				<span
					v-if="xFollowers > 0"
					class="flex items-center gap-1 px-2 py-1 bg-accent-500/10 rounded-full border border-accent-500/20 text-accent-300"
				>
					<span>𝕏</span>
					<span class="font-semibold">{{ formatFollowers(xFollowers) }}</span>
				</span>
			</div>

			<!-- Enhanced Platform Links -->
			<div class="flex flex-wrap gap-3 justify-center mt-auto flex-shrink-0">
				<a
					v-for="platform in platforms"
					:key="platform.platform"
					:href="platform.url"
					target="_blank"
					rel="noopener noreferrer"
					:title="platform.platform"
					class="p-3 rounded-2xl bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 hover:border-accent-500/50 text-white dark:text-slate-100 hover:text-accent-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-accent-500/20 hover:to-accent-600/20 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/30 transform group/link"
				>
					<PlatformIcon :platform="platform.platform" :size="22" />
				</a>
			</div>

			<!-- Enhanced Follow Button -->
			<div class="flex justify-center mt-4 flex-shrink-0">
				<a
					v-if="primaryUrl"
					:href="primaryUrl"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
				>
					<span>Follow</span>
					<span class="text-lg">→</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import PlatformIcon from "./PlatformIcon.vue";

interface SocialPlatform {
	handle: string;
	platform: string;
	url: string;
	avatar?: string;
	followers?: number;
}

interface Props {
	name: string;
	description?: string;
	platforms: SocialPlatform[];
	avatar?: string;
}

const props = defineProps<Props>();

const imageError = ref(false);
const xFollowers = ref(0);
const cacheKey = computed(() => `social-card-${props.name}`);

// Cache structure
interface CacheData {
	avatar?: string;
	followers: number;
	timestamp: number;
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const profilePic = computed(() => {
	if (props.avatar) return props.avatar;

	if (imageError.value) {
		// Fallback avatar
		return `https://avatar.vercel.sh/${props.name}?size=400&background=0d8780`;
	}

	// Try to get cached X profile picture
	const cached = getCachedData();
	if (cached?.avatar) {
		return cached.avatar;
	}

	// Try to get X profile picture
	const xPlatform = props.platforms.find((p) => p.platform === "X" || p.platform === "Twitter");
	if (xPlatform) {
		return `https://unavatar.io/twitter/${normalizeHandle(xPlatform.handle)}?fallback=false`;
	}

	return `https://avatar.vercel.sh/${props.name}?size=400&background=0d8780`;
});

const primaryUrl = computed(() => {
	const xPlatform = props.platforms.find((p) => p.platform === "X" || p.platform === "Twitter");
	return xPlatform?.url || props.platforms[0]?.url || null;
});

const normalizeHandle = (handle: string): string => {
	return handle.replace(/^@/, "").trim();
};

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

// Cache helper functions
const getCachedData = (): CacheData | null => {
	try {
		const cached = localStorage.getItem(cacheKey.value);
		if (cached) {
			const data: CacheData = JSON.parse(cached);
			if (Date.now() - data.timestamp < CACHE_DURATION) {
				return data;
			} else {
				// Cache expired, remove it
				localStorage.removeItem(cacheKey.value);
			}
		}
	} catch (error) {
		console.warn("Error reading cache:", error);
	}
	return null;
};

const setCachedData = (data: Partial<CacheData>) => {
	try {
		const cacheData: CacheData = {
			avatar: data.avatar,
			followers: data.followers || 0,
			timestamp: Date.now(),
		};
		localStorage.setItem(cacheKey.value, JSON.stringify(cacheData));
	} catch (error) {
		console.warn("Error writing cache:", error);
	}
};

// Fetch X followers count and avatar
const fetchXData = async () => {
	const xPlatform = props.platforms.find((p) => p.platform === "X" || p.platform === "Twitter");
	if (!xPlatform) return;

	// Check cache first
	const cached = getCachedData();
	if (cached) {
		xFollowers.value = cached.followers;
		return;
	}

	try {
		const response = await fetch(
			`/api/twitter-profile?username=${encodeURIComponent(normalizeHandle(xPlatform.handle))}`,
		);
		if (response.ok) {
			const data = await response.json();
			xFollowers.value = data.followers || 0;

			// Cache the data
			setCachedData({
				avatar: data.avatar,
				followers: data.followers || 0,
			});
		}
	} catch (error) {
		console.warn(`Could not fetch X data for ${props.name}:`, error);
	}
};

onMounted(() => {
	// Load cached followers immediately
	const cached = getCachedData();
	if (cached) {
		xFollowers.value = cached.followers;
	}

	// Fetch fresh data in background
	fetchXData();
});
</script>
