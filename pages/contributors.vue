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
				🎨
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
						<span class="text-lg">👥</span>
						<span>Our Team</span>
					</div>

					<h1
						class="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 mb-6 leading-tight"
					>
						Our Contributors
					</h1>

					<p
						class="page-description text-slate-700 dark:text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
					>
						Meet the talented individuals who make this project possible. These are the
						passionate developers, designers, and creators behind BINI Blooming Legacy.
					</p>

					<!-- Animated call-to-action -->
					<div class="mt-8 flex justify-center">
						<div
							class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-500/20 to-accent-600/20 border border-accent-500/30 rounded-2xl text-accent-300 font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
						>
							<span class="text-xl">🤝</span>
							<span>Join Our Team</span>
							<span class="text-lg animate-bounce">→</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Enhanced Contributors Section -->
		<section
			class="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 overflow-hidden"
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
				💻
			</div>

			<div class="max-w-7xl mx-auto relative z-10">
				<div class="text-center mb-16">
					<div
						class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium mb-6"
					>
						<span class="text-lg">🌟</span>
						<span>Meet the Team</span>
					</div>

					<h2
						class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4"
					>
						Amazing Contributors
					</h2>
					<p
						class="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto"
					>
						The brilliant minds behind BINI Blooming Legacy who bring creativity and
						passion to every line of code
					</p>
				</div>

				<!-- Enhanced Loading State -->
				<div v-if="loading" class="flex justify-center items-center py-20">
					<div class="text-center">
						<div class="mb-6 text-6xl animate-bounce">✨</div>
						<div class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
							Loading Amazing Contributors
						</div>
						<p class="text-slate-600 dark:text-slate-400 text-lg">
							Fetching profile data...
						</p>
						<div class="mt-6 flex justify-center space-x-2">
							<div class="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
							<div
								class="w-3 h-3 bg-accent-500 rounded-full animate-pulse"
								style="animation-delay: 0.2s"
							></div>
							<div
								class="w-3 h-3 bg-accent-500 rounded-full animate-pulse"
								style="animation-delay: 0.4s"
							></div>
						</div>
					</div>
				</div>

				<!-- Enhanced Contributors Grid -->
				<div
					v-else-if="contributors.length > 0"
					class="contributor-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
				>
					<ContributorCard
						v-for="contributor in contributors"
						:key="contributor.id"
						:name="contributor.name"
						:role="contributor.role"
						:bio="contributor.description"
						:github="contributor.github"
						:twitter="contributor.twitter"
						:followers="contributor.followers"
						:custom-avatar="contributor.avatar"
						class="contributor-card"
					/>
				</div>

				<!-- Enhanced Empty State -->
				<div v-else class="text-center py-20">
					<div class="relative">
						<div class="text-7xl sm:text-8xl mb-6 animate-bounce">👥</div>
						<div
							class="absolute top-4 left-1/2 transform -translate-x-1/2 text-3xl animate-pulse opacity-20"
						>
							😔
						</div>
					</div>
					<h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4">
						No Contributors Found
					</h3>
					<p class="text-slate-600 dark:text-slate-400 text-lg max-w-md mx-auto mb-6">
						We're still building our amazing team. Check back soon to meet the talented
						contributors!
					</p>
					<button
						class="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 transition-all duration-300"
					>
						Join Our Team
					</button>
				</div>

				<!-- Enhanced Info Box -->
				<div
					class="info-box mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-accent-500/10 via-accent-600/10 to-accent-500/10 border border-accent-500/20 shadow-2xl shadow-accent-500/10"
				>
					<div class="text-center mb-8">
						<div class="text-4xl mb-4">🚀</div>
						<h3 class="text-2xl sm:text-3xl font-black text-white mb-4">
							Want to Contribute?
						</h3>
						<p
							class="text-slate-700 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
						>
							We welcome contributions from developers, designers, and everyone who
							wants to be part of this amazing project! Whether it's code, design,
							documentation, or ideas, your contribution matters.
						</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
						<div
							class="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50"
						>
							<div class="text-3xl mb-3">💻</div>
							<h4 class="font-bold text-white mb-2">Code</h4>
							<p class="text-slate-300 text-sm">Help build amazing features</p>
						</div>
						<div
							class="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50"
						>
							<div class="text-3xl mb-3">🎨</div>
							<h4 class="font-bold text-white mb-2">Design</h4>
							<p class="text-slate-300 text-sm">Create beautiful interfaces</p>
						</div>
						<div
							class="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50"
						>
							<div class="text-3xl mb-3">📚</div>
							<h4 class="font-bold text-white mb-2">Documentation</h4>
							<p class="text-slate-300 text-sm">Help others learn and contribute</p>
						</div>
					</div>

					<div class="text-center mt-8">
						<p
							class="text-xs sm:text-sm text-slate-300 bg-slate-800/50 px-4 py-3 rounded-full inline-block"
						>
							🌟 To add yourself as a contributor, update the contributors.json file
							with your GitHub or X (Twitter) username, and your profile will be
							automatically fetched!
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Contributor {
	id: number;
	name: string;
	role: string;
	description: string;
	github?: string;
	twitter?: string;
	followers?: number;
	avatar?: string;
}

const contributors = ref<Contributor[]>([]);
const loading = ref(true);

/**
 * Fetch GitHub profile data
 */
async function getGitHubData(username: string) {
	try {
		const response = await fetch(`https://api.github.com/users/${username}`);
		if (response.ok) {
			const data = await response.json();
			return {
				avatar: data.avatar_url,
				followers: data.followers,
			};
		}
	} catch (error) {
		console.error(`Error fetching GitHub data for ${username}:`, error);
	}
	return { avatar: null, followers: 0 };
}

/**
 * Get Twitter/X profile data using server API route
 */
async function getTwitterData(username: string) {
	try {
		const response = await fetch(
			`/api/twitter-profile?username=${encodeURIComponent(username)}`,
		);

		if (response.ok) {
			const data = await response.json();
			return {
				avatar: data.avatar,
				followers: data.followers || 0,
			};
		}
	} catch (error) {
		console.error(`Error fetching Twitter data for ${username}:`, error);
	}

	// Fallback to generated avatar if API fails
	return {
		avatar: `https://avatar.vercel.sh/${username}?size=400&background=0d8780`,
		followers: 0,
	};
}

/**
 * Load contributors from JSON and fetch profile data
 */
const loadContributors = async () => {
	loading.value = true;
	try {
		const data = await import("~/data/contributors");
		const contributorsList: Contributor[] = data.default?.contributors || [];

		// Fetch profile data for each contributor
		for (const contributor of contributorsList) {
			if (contributor.github) {
				const { avatar, followers } = await getGitHubData(contributor.github);
				contributor.avatar = avatar;
				contributor.followers = followers;
			} else if (contributor.twitter) {
				const { avatar, followers } = await getTwitterData(contributor.twitter);
				contributor.avatar = avatar;
				contributor.followers = followers;
			}
		}

		contributors.value = contributorsList;

		// Trigger animations after contributors are loaded
		setTimeout(() => {
			animateContributors();
		}, 100);
	} catch (error) {
		console.error("Error loading contributors:", error);
	} finally {
		loading.value = false;
	}
};

const animateContributors = () => {
	// Animate contributor cards with enhanced effects
	gsap.utils.toArray(".contributor-card").forEach((element: any, index: number) => {
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

	// Animate info box on scroll with enhanced effects
	gsap.fromTo(
		".info-box",
		{ opacity: 0, y: 40, scale: 0.9 },
		{
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 0.8,
			ease: "back.out(1.7)",
			scrollTrigger: {
				trigger: ".info-box",
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
		},
	);
};

onMounted(async () => {
	// Animate header
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

	// Load contributors
	await loadContributors();
});

onUnmounted(() => {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
