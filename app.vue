<template>
	<div
		class="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300"
	>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useDarkMode } from "./composables/useDarkMode";

const { isDark } = useDarkMode();

// useHead({
// 	link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
// });

onMounted(() => {
	// Initialize any global animations or effects here
	if (process.client) {
		// Add data-animate to page sections for scroll animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("in-view");
					}
				});
			},
			{ threshold: 0.1 },
		);

		// Observe elements with animation attributes
		const animatedElements = document.querySelectorAll("[data-animate]");
		animatedElements.forEach((el) => observer.observe(el));
	}
});
</script>

<style>
@keyframes slideInUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes slideInDown {
	from {
		opacity: 0;
		transform: translateY(-30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes slideInLeft {
	from {
		opacity: 0;
		transform: translateX(-30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes slideInRight {
	from {
		opacity: 0;
		transform: translateX(30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes fadeInScale {
	from {
		opacity: 0;
		transform: scale(0.95);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}

.in-view {
	animation: slideInUp 0.6s ease-out;
}
</style>
