<template>
	<section
		class="relative mt-12 py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/90 overflow-hidden border-t border-slate-200/70 dark:border-slate-900/80"
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
			🎵
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<div class="text-center mb-16">
				<div
					class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-300/60 text-slate-700 text-sm font-medium mb-6"
				>
					<span class="text-lg animate-pulse">🎬</span>
					<span>Featured Highlights</span>
				</div>

				<h2
					class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4"
				>
					BINI's
					<span
						class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500"
						>Journey</span
					>
				</h2>

				<p class="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
					Experience the most memorable moments through our interactive showcase.
					<span class="text-accent-400 font-medium"
						>Swipe, explore, and relive the magic.</span
					>
				</p>
			</div>

			<!-- Enhanced Slider -->
			<div class="relative max-w-6xl mx-auto">
				<div
					class="relative overflow-hidden rounded-[40px] shadow-2xl shadow-slate-900/50 group"
				>
					<!-- Slide Image -->
					<div class="relative h-80 sm:h-[500px] lg:h-[600px] overflow-hidden">
						<img
							:src="slides[currentSlide].image"
							:alt="slides[currentSlide].title"
							class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
						/>

						<!-- Gradient overlays -->
						<div
							class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"
						></div>
						<div
							class="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30"
						></div>

						<!-- Content overlay -->
						<div class="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
							<div class="max-w-3xl">
								<h3
									class="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
								>
									{{ slides[currentSlide].title }}
								</h3>
								<p
									class="text-lg sm:text-xl text-slate-700 dark:text-slate-200/90 mb-6 max-w-2xl"
								>
									{{ slides[currentSlide].description }}
								</p>
								<NuxtLink
									:to="currentSlideLink"
									class="inline-flex items-center gap-3 px-6 py-3 bg-accent-500/90 hover:bg-accent-500 text-white font-bold rounded-full shadow-lg hover:shadow-accent-500/30 transition-all duration-300 hover:scale-105"
								>
									<span>Explore More</span>
									<span class="text-lg">→</span>
								</NuxtLink>
							</div>
						</div>
					</div>

					<!-- Navigation arrows -->
					<button
						@click="previousSlide"
						class="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 hover:bg-accent-500/30 text-white hover:text-accent-300 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-accent-500/20 hover:scale-110"
						aria-label="Previous slide"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<button
						@click="nextSlide"
						class="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 hover:bg-accent-500/30 text-white hover:text-accent-300 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-accent-500/20 hover:scale-110"
						aria-label="Next slide"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>

					<!-- Enhanced indicators -->
					<div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
						<button
							v-for="(_, i) in slides"
							:key="i"
							@click="currentSlide = i"
							:class="[
								'rounded-full transition-all duration-500 hover:scale-125',
								i === currentSlide
									? 'w-12 h-3 bg-accent-400 shadow-lg shadow-accent-400/50'
									: 'w-3 h-3 bg-white/40 hover:bg-white/70',
							]"
							:aria-label="`Go to slide ${i + 1}`"
						></button>
					</div>

					<!-- Auto-play indicator -->
					<div class="absolute top-6 right-6 z-20">
						<div
							class="flex items-center gap-2 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-xs text-white/80"
						>
							<div class="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
							<span>Auto-playing</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import slidesData from "~/data/slides";

gsap.registerPlugin();

const slides = ref(slidesData.slides);
const currentSlide = ref(0);
const currentSlideLink = computed(() => slides.value[currentSlide.value]?.link ?? "/achievements");
const sliderSelector = String.raw`.relative.overflow-hidden.rounded-[40px]`;
let autoPlayInterval: NodeJS.Timeout | null = null;

const nextSlide = () => {
	gsap.to(sliderSelector, {
		opacity: 0.8,
		scale: 0.98,
		duration: 0.3,
		yoyo: true,
		repeat: 1,
		ease: "power2.inOut",
	});
	currentSlide.value = (currentSlide.value + 1) % slides.value.length;
	resetAutoPlay();
};

const previousSlide = () => {
	gsap.to(sliderSelector, {
		opacity: 0.8,
		scale: 0.98,
		duration: 0.3,
		yoyo: true,
		repeat: 1,
		ease: "power2.inOut",
	});
	currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
	resetAutoPlay();
};

const resetAutoPlay = () => {
	if (autoPlayInterval) {
		clearInterval(autoPlayInterval);
	}
	startAutoPlay();
};

const startAutoPlay = () => {
	autoPlayInterval = setInterval(() => {
		nextSlide();
	}, 5000);
};

onMounted(() => {
	startAutoPlay();
});

onUnmounted(() => {
	if (autoPlayInterval) {
		clearInterval(autoPlayInterval);
	}
});
</script>
