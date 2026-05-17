<template>
	<div
		class="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-300"
	>
		<!-- Animated decorative elements -->
		<div
			class="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse bg-accent-500/3 dark:bg-accent-500/5"
			style="animation-duration: 6s"
		></div>
		<div
			class="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse bg-accent-600/3 dark:bg-accent-600/5"
			style="animation-duration: 8s; animation-delay: 2s"
		></div>

		<!-- Interactive animated background particles -->
		<div
			v-for="i in 5"
			:key="i"
			class="absolute w-2 h-2 rounded-full pointer-events-none bg-accent-500/20 dark:bg-accent-500/30"
			:style="{
				top: `${Math.random() * 100}%`,
				left: `${Math.random() * 100}%`,
				animation: `float ${5 + i}s ease-in-out infinite`,
			}"
		></div>

		<!-- Header Component -->
		<Header />

		<transition name="fade">
			<div
				v-if="selectedAlert"
				class="fixed inset-0 z-50 flex items-end justify-center p-4 bg-slate-950/90 backdrop-blur-sm sm:items-center sm:p-6"
			>
				<div
					class="w-full max-w-2xl rounded-[1.75rem] border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/15 dark:border-slate-700/80 dark:bg-slate-950 dark:shadow-none overflow-hidden"
				>
					<div class="p-6 sm:p-8">
						<div class="flex items-start justify-between gap-4">
							<div>
								<p
									class="text-sm uppercase tracking-[0.24em] text-accent-500 font-semibold"
								>
									Reminder
								</p>
								<h2
									class="mt-3 text-xl sm:text-2xl font-black text-slate-900 dark:text-white"
								>
									{{ selectedAlert.title }}
								</h2>
							</div>
							<button
								@click="closeAlert"
								class="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-200 dark:hover:bg-slate-800 dark:hover:text-white"
							>
								<span class="text-2xl leading-none">×</span>
							</button>
						</div>

						<div
							v-if="selectedAlert.image"
							class="mt-5 overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900"
						>
							<img
								:src="selectedAlert.image"
								:alt="selectedAlert.title"
								class="h-56 w-full object-cover"
							/>
						</div>

						<p
							class="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
							v-html="selectedAlertMessage"
						></p>

						<div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
							<button
								@click="handleSeeMore(selectedAlert?.route)"
								class="inline-flex items-center justify-center rounded-2xl bg-accent-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 transition hover:bg-accent-600"
							>
								See more
							</button>
							<button
								@click="snoozeAlert(selectedAlert.snoozeDays)"
								class="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
							>
								Don't show for {{ selectedAlert.snoozeDays }} day{{
									selectedAlert.snoozeDays === 1 ? "" : "s"
								}}
							</button>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- Main Content -->
		<main class="relative z-10">
			<slot />
		</main>

		<!-- Footer Component -->
		<Footer />

		<!-- Scroll to top button -->
		<ScrollTopButton />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDarkMode } from "~/composables/useDarkMode";

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ScrollTopButton from "~/components/ScrollTopButton.vue";
import { useAchievementAlerts } from "~/composables/useAchievementAlerts";

gsap.registerPlugin(ScrollTrigger);

useDarkMode();
const { selectedAlert, closeAlert, snoozeAlert } = useAchievementAlerts();
const router = useRouter();

const linkifyText = (text: string) => {
	const urlPattern = /https?:\/\/[^\s)]+/g;
	return text.replace(urlPattern, (url) => {
		return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-700 underline decoration-1 decoration-accent-500/50">${url}</a>`;
	});
};

const selectedAlertMessage = computed(() => {
	if (!selectedAlert.value) {
		return "";
	}
	return linkifyText(selectedAlert.value.message);
});

const handleSeeMore = (route?: string) => {
	if (process.client && route) {
		router.push(route);
	}
	closeAlert();
};

onMounted(() => {
	// Animate main content sections on scroll
	gsap.utils.toArray("[data-animate]").forEach((element: any) => {
		gsap.fromTo(
			element,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: element,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			},
		);
	});

	// Animate footer on scroll
	gsap.fromTo(
		"footer",
		{ opacity: 0, y: 50 },
		{
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "footer",
				start: "top 90%",
			},
		},
	);

	// Parallax effect on scroll
	gsap.to(".absolute.top-0.right-0", {
		y: () => window.innerHeight * 0.5,
		ease: "none",
		scrollTrigger: {
			trigger: "body",
			start: "top top",
			end: "bottom bottom",
			scrub: 1,
			markers: false,
		},
	});

	// Add floating animation to decorative elements
	gsap.to(".absolute.w-2.h-2", {
		duration: () => gsap.utils.random(4, 8),
		attr: { cx: () => gsap.utils.random(0, 100) },
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
	});

	// Refresh ScrollTrigger after all content loads
	setTimeout(() => {
		ScrollTrigger.refresh();
	}, 500);
});

// Ensure dark mode composable initializes on page load
useDarkMode();

// Add animation styles
const addAnimationStyles = () => {
	if (process.client) {
		const style = document.createElement("style");
		style.textContent = `
			@keyframes float {
				0%, 100% { transform: translateY(0px) translateX(0px); }
				50% { transform: translateY(-20px) translateX(10px); }
			}
			
			@keyframes glow {
				0%, 100% { box-shadow: 0 0 20px rgba(77, 247, 247, 0.3); }
				50% { box-shadow: 0 0 40px rgba(77, 247, 247, 0.6); }
			}
			
			@keyframes shimmer {
				0% { background-position: -1000px 0; }
				100% { background-position: 1000px 0; }
			}
			
			.animate-glow {
				animation: glow 2s ease-in-out infinite;
			}
			
			.animate-shimmer {
				background: linear-gradient(90deg, transparent 0%, rgba(77, 247, 247, 0.2) 50%, transparent 100%);
				background-size: 1000px 100%;
				animation: shimmer 3s infinite;
			}
		`;
		document.head.appendChild(style);
	}
};

addAnimationStyles();
</script>
