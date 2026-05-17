<template>
	<div>
		<!-- Enhanced Page Header -->
		<section
			class="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-slate-100 to-accent-100/20 dark:from-slate-900 dark:via-slate-800 dark:to-accent-900/20 overflow-hidden"
		>
			<!-- Background decorations -->
			<div class="absolute top-10 left-10 text-4xl opacity-5 animate-bounce">🌟</div>
			<div
				class="absolute bottom-10 right-10 text-5xl opacity-5 animate-pulse"
				style="animation-delay: 1s"
			>
				💫
			</div>
			<div
				class="absolute top-1/2 left-1/4 text-3xl opacity-5 animate-spin"
				style="animation-duration: 20s"
			>
				🎵
			</div>
			<div
				class="absolute top-1/3 right-1/4 text-4xl opacity-5 animate-bounce"
				style="animation-delay: 2s"
			>
				✨
			</div>

			<!-- Gradient orbs -->
			<div
				class="absolute top-20 right-20 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl animate-pulse"
			></div>
			<div
				class="absolute bottom-20 left-20 w-24 h-24 bg-accent-400/15 rounded-full blur-2xl animate-pulse"
				style="animation-delay: 1.5s"
			></div>

			<div class="max-w-7xl mx-auto relative z-10">
				<div class="text-center">
					<div
						class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium mb-8"
					>
						<span class="text-lg">🤝</span>
						<span>Connect & Engage</span>
					</div>

					<h1
						class="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 mb-6 leading-tight"
					>
						Connect with BINI & BLOOMS
					</h1>

					<p
						class="page-description text-slate-700 dark:text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
					>
						Follow BINI on their official social media accounts and join our vibrant
						BLOOMS community across different platforms. Stay updated on the latest
						news, updates, and exclusive content.
					</p>

					<!-- Animated call-to-action -->
					<div class="mt-8 flex justify-center">
						<div
							class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-500/20 to-accent-600/20 border border-accent-500/30 rounded-2xl text-accent-300 font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
						>
							<span class="text-xl">📱</span>
							<span>Follow All Platforms</span>
							<span class="text-lg animate-bounce">→</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Enhanced Official Accounts Section -->
		<section
			class="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 overflow-hidden"
		>
			<!-- Background decorations -->
			<div class="absolute top-20 left-20 text-6xl opacity-5 animate-pulse">👑</div>
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
				🎯
			</div>

			<div class="max-w-7xl mx-auto relative z-10">
				<div class="text-center mb-16">
					<div
						class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium mb-6"
					>
						<span class="text-lg">🏆</span>
						<span>Official Channels</span>
					</div>

					<h2
						class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4"
					>
						Official Accounts
					</h2>
					<p
						class="text-slate-700 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto"
					>
						Follow BINI's official social media channels for the latest updates and
						exclusive content
					</p>
				</div>

				<!-- Enhanced Loading State -->
				<div
					v-if="loading"
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
				>
					<div v-for="i in 4" :key="`official-${i}`" class="animate-pulse">
						<div
							class="h-80 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50"
						></div>
					</div>
				</div>

				<!-- Enhanced Official Accounts Grid -->
				<div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					<SocialCard
						v-for="account in official"
						:key="account.id"
						:name="account.name"
						:description="account.description"
						:platforms="account.platforms"
						:avatar="account.avatar"
						class="official-card"
					/>
				</div>
			</div>
		</section>

		<!-- Enhanced Fanbases Section -->
		<section
			class="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-hidden"
		>
			<!-- Background decorations -->
			<div class="absolute top-20 right-20 text-6xl opacity-5 animate-pulse">🌸</div>
			<div
				class="absolute bottom-20 left-20 text-5xl opacity-5 animate-bounce"
				style="animation-delay: 1s"
			>
				💖
			</div>
			<div
				class="absolute top-1/2 left-10 text-4xl opacity-5 animate-spin"
				style="animation-duration: 18s"
			>
				🎉
			</div>

			<div class="max-w-7xl mx-auto relative z-10">
				<div class="text-center mb-16">
					<div
						class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium mb-6"
					>
						<span class="text-lg">🌸</span>
						<span>BLOOMS Community</span>
					</div>

					<h2
						class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4"
					>
						Official Fanbases
					</h2>
					<p
						class="text-slate-700 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto"
					>
						Join our thriving BLOOMS community across all platforms and connect with
						fellow fans
					</p>
				</div>

				<!-- Enhanced Loading State -->
				<div
					v-if="loading"
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
				>
					<div v-for="i in 5" :key="`fanbase-${i}`" class="animate-pulse">
						<div
							class="h-80 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50"
						></div>
					</div>
				</div>

				<!-- Enhanced Fanbases Grid -->
				<div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					<SocialCard
						v-for="fanbase in fanbases"
						:key="fanbase.id"
						:name="fanbase.name"
						:description="fanbase.description"
						:platforms="fanbase.platforms"
						:avatar="fanbase.avatar"
						class="fanbase-card"
					/>
				</div>

				<!-- Community Call-to-Action -->
				<div class="text-center mt-16">
					<div
						class="inline-block p-8 bg-gradient-to-r from-accent-500/10 via-accent-600/10 to-accent-500/10 border border-accent-500/20 rounded-3xl"
					>
						<h3
							class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4"
						>
							Join the BLOOMS Family
						</h3>
						<p class="text-slate-700 dark:text-slate-300 text-lg mb-6 max-w-xl mx-auto">
							Connect with millions of BINI fans worldwide. Share your love, create
							content, and be part of something amazing.
						</p>
						<div class="flex flex-wrap justify-center gap-4">
							<div class="flex items-center gap-2 text-accent-300">
								<span class="text-2xl">👥</span>
								<span class="font-semibold">Millions of Fans</span>
							</div>
							<div class="flex items-center gap-2 text-accent-300">
								<span class="text-2xl">🌍</span>
								<span class="font-semibold">Global Community</span>
							</div>
							<div class="flex items-center gap-2 text-accent-300">
								<span class="text-2xl">💫</span>
								<span class="font-semibold">Exclusive Content</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialCard from "~/components/SocialCard.vue";

gsap.registerPlugin(ScrollTrigger);

interface SocialPlatform {
	handle: string;
	platform: string;
	url: string;
	avatar?: string;
	followers?: number;
}

interface SocialAccount {
	id: number;
	name: string;
	description?: string;
	platforms: SocialPlatform[];
	avatar?: string;
}

interface Fanbase {
	id: number;
	name: string;
	description?: string;
	platforms: SocialPlatform[];
	avatar?: string;
}

interface SocialsData {
	official: SocialAccount[];
	fanbases: Fanbase[];
}

const official = ref<SocialAccount[]>([]);
const fanbases = ref<Fanbase[]>([]);
const loading = ref(true);

/**
 * Get platform emoji for fallback display
 */
function getPlatformEmoji(platform: string): string {
	const emojis: Record<string, string> = {
		X: "𝕏",
		Twitter: "𝕏",
		Facebook: "f",
		Instagram: "📷",
		TikTok: "🎵",
		YouTube: "▶",
		Weverse: "💬",
		Website: "🔗",
		Linktree: "🔗",
		Spotify: "🎵",
		"Apple Music": "🎵",
	};
	return emojis[platform] || "🔗";
}

function getPlatformIcon(platform: string): string {
	return getPlatformEmoji(platform);
}

function getAvatarFallback(name: string): string {
	return `https://avatar.vercel.sh/${name}?size=400&background=0d8780`;
}

/**
 * Get X/Twitter profile data for official accounts
 */
async function getXProfilePicture(account: SocialAccount) {
	try {
		// Find X platform in the account
		const xPlatform = account.platforms.find(
			(p) => p.platform === "X" || p.platform === "Twitter",
		);

		if (!xPlatform) {
			// No X account, use fallback
			account.avatar = getAvatarFallback(account.name);
			return;
		}

		// Try multiple times with delay
		let attempts = 0;
		const maxAttempts = 3;

		while (attempts < maxAttempts) {
			try {
				// Fetch X profile picture from the API
				const response = await fetch(
					`/api/twitter-profile?username=${encodeURIComponent(xPlatform.handle)}`,
				);

				if (response.ok) {
					const data = await response.json();
					if (data.avatar) {
						account.avatar = data.avatar;
						console.log(
							`✅ Successfully loaded avatar for ${account.name}: ${data.avatar}`,
						);
						return;
					}
				}
			} catch (error) {
				console.warn(`Attempt ${attempts + 1} failed for ${account.name}:`, error);
			}

			attempts++;
			if (attempts < maxAttempts) {
				// Wait 1 second before retry
				await new Promise((resolve) => setTimeout(resolve, 1000));
			}
		}

		console.warn(`❌ All attempts failed for ${account.name}, using fallback`);
	} catch (error) {
		console.warn(`Could not fetch X profile picture for ${account.name}:`, error);
	}

	// Fallback if all attempts fail
	account.avatar = getAvatarFallback(account.name);
}

function normalizeHandle(handle: string): string {
	return handle.replace(/^@/, "").trim();
}

function fanbasePlatformHandles(account: SocialAccount | Fanbase): string {
	return account.platforms
		.map((platform) => {
			const handle = normalizeHandle(platform.handle);
			return handle ? `@${handle}` : platform.platform;
		})
		.join(" · ");
}

function fanbasePrimaryUrl(fanbase: Fanbase): string | null {
	return (
		fanbase.platforms.find((platform) => {
			const normalized = platform.platform.toLowerCase();
			return normalized === "x" || normalized === "twitter";
		})?.url ||
		fanbase.platforms[0]?.url ||
		null
	);
}

function isFanbase(account: SocialAccount | Fanbase): account is Fanbase {
	return (account as Fanbase).platforms !== undefined;
}

/**
 * Format follower count for display
 */
function formatFollowers(count: number | string): string {
	if (typeof count === "string") return count;
	if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
	if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
	return count.toString();
}

/**
 * Fetch X/Twitter profile data
 */
async function getTwitterData(handle: string) {
	try {
		const response = await fetch(`/api/twitter-profile?username=${encodeURIComponent(handle)}`);
		if (response.ok) {
			const data = await response.json();
			return {
				avatar: data.avatar,
				followers: data.followers || 0,
			};
		}
	} catch (_error: unknown) {
		console.warn(`Could not fetch Twitter data for ${handle}, using fallback`);
	}
	return { avatar: null, followers: 0 };
}

/**
 * Fetch Instagram profile data using available APIs
 */
async function getInstagramData(handle: string) {
	try {
		// Remove @ if present
		const username = handle.replace("@", "");

		// Try using unavatar.io for Instagram profile picture
		// This is a reliable service that provides avatar endpoints
		return {
			avatar: `https://unavatar.io/instagram/${username}?fallback=false`,
			followers: 0, // Instagram API is heavily restricted, we can't get follower count without official API
		};
	} catch (_error: unknown) {
		console.warn(`Could not fetch Instagram data for ${handle}, using fallback`);
	}
	return { avatar: null, followers: 0 };
}

/**
 * Fetch YouTube channel data
 */
async function getYouTubeData(handle: string) {
	try {
		// YouTube API requires an API key, so we'll use a fallback approach
		// Try to fetch channel info from the channel URL as a backup
		return { avatar: null, followers: 0 };
	} catch (_error: unknown) {
		console.warn(`Could not fetch YouTube data for ${handle}, using fallback`);
		return { avatar: null, followers: 0 };
	}
}

/**
 * Get profile data based on platform
 */
async function getProfileData(account: SocialAccount | Fanbase) {
	// Skip fetching profile data since external APIs are unreliable
	// All accounts will use emoji fallbacks
}

/**
 * Load social accounts from JSON and fetch profile data
 */
const loadSocials = async () => {
	loading.value = true;
	try {
		const data = await import("~/utils/socials");
		const socialsData: SocialsData = data.default || data;

		// Copy data
		official.value = [...socialsData.official];
		fanbases.value = [...socialsData.fanbases];

		// Fetch X profile pictures for official accounts in parallel
		await Promise.all(official.value.map((account) => getXProfilePicture(account)));
	} catch (error) {
		console.error("Error loading socials:", error);
	} finally {
		loading.value = false;
	}
};

onMounted(() => {
	loadSocials();

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
		.toArray(".absolute.text-4xl, .absolute.text-5xl, .absolute.text-6xl, .absolute.text-3xl")
		.forEach((element: any, index: number) => {
			gsap.fromTo(
				element,
				{ opacity: 0, scale: 0.5 },
				{
					opacity: 1,
					scale: 1,
					duration: 1,
					delay: index * 0.2 + 0.4,
					ease: "elastic.out(1, 0.5)",
				},
			);
		});

	// Animate gradient orbs
	gsap.utils.toArray(".absolute.w-32, .absolute.w-24").forEach((element: any, index: number) => {
		gsap.fromTo(
			element,
			{ opacity: 0, scale: 0.8 },
			{ opacity: 1, scale: 1, duration: 1.5, delay: index * 0.3 + 0.6, ease: "power2.out" },
		);
	});

	// Animate CTA button
	gsap.fromTo(
		".inline-flex.items-center.gap-3",
		{ opacity: 0, y: 20, scale: 0.9 },
		{ opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.8, ease: "back.out(1.7)" },
	);

	// Animate sections when they come into view
	const animateSections = () => {
		// Animate section headers
		gsap.utils.toArray("h2").forEach((element: any, index: number) => {
			gsap.fromTo(
				element,
				{ opacity: 0, y: 30, scale: 0.95 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					delay: index * 0.2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: element,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);
		});

		// Animate social cards with enhanced effects
		gsap.utils
			.toArray(".official-card, .fanbase-card")
			.forEach((element: any, index: number) => {
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

		// Animate community CTA
		gsap.fromTo(
			".inline-block.p-8",
			{ opacity: 0, y: 40, scale: 0.9 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.8,
				ease: "back.out(1.7)",
				scrollTrigger: {
					trigger: ".inline-block.p-8",
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			},
		);
	};

	// Delay section animations to allow content to load
	setTimeout(() => {
		animateSections();
	}, 500);
});

useSeoMeta({
	title: "Connect with BINI & BLOOMS - Official Social Media",
	description:
		"Follow BINI on official social media accounts and join the BLOOMS community. Stay updated with the latest news and exclusive content.",
	ogTitle: "Connect with BINI & BLOOMS - Official Social Media",
	ogDescription:
		"Follow BINI on official social media accounts and join the BLOOMS community. Stay updated with the latest news and exclusive content.",
});
</script>

<style scoped>
.group:hover {
	transform: translateY(-4px);
}
</style>
