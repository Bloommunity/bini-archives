<template>
	<section
		class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-12"
	>
		<!-- Background Effects -->
		<div
			class="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
		></div>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.3),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(232,121,249,0.2),_transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.1),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(232,121,249,0.05),_transparent_50%)] bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.15),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(232,121,249,0.1),_transparent_50%)]"
		></div>

		<!-- Floating Elements -->
		<div class="absolute top-20 left-10 text-6xl animate-bounce opacity-20">✨</div>
		<div class="absolute top-40 right-20 text-4xl animate-pulse opacity-30">🌟</div>
		<div
			class="absolute bottom-40 left-1/4 text-5xl animate-bounce opacity-25"
			style="animation-delay: 1s"
		>
			🎵
		</div>
		<div
			class="absolute bottom-20 right-10 text-3xl animate-pulse opacity-20"
			style="animation-delay: 2s"
		>
			🏆
		</div>

		<div class="relative z-10 max-w-6xl mx-auto text-center space-y-12">
			<!-- Main Title -->
			<div class="space-y-6">
				<div class="inline-block">
					<div
						class="text-6xl sm:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500 animate-pulse"
					>
						∞
					</div>
				</div>

				<h1
					class="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-tight text-slate-950 dark:text-white drop-shadow-[0_20px_35px_rgba(15,23,42,0.12)]"
				>
					<span
						class="block text-slate-950 dark:text-white text-6xl sm:text-7xl lg:text-8xl leading-tight"
					>
						BINI
					</span>
					<span
						class="block text-slate-800 dark:text-accent-400 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
					>
						Archives
					</span>
				</h1>

				<p
					class="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
				>
					The definitive chronicle of BINI's extraordinary journey.
					<br class="hidden sm:block" />
					<span class="text-accent-400 font-medium"
						>Every milestone, every bloom, forever preserved.</span
					>
				</p>
			</div>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
				<NuxtLink
					to="/achievements"
					class="group relative px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold text-lg rounded-full shadow-2xl shadow-slate-900/50 hover:shadow-slate-900/70 transform hover:scale-105 transition-all duration-300 overflow-hidden"
				>
					<div
						class="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					></div>
					<span class="relative flex items-center gap-3">
						<span class="text-2xl">🏆</span>
						<span>Explore Achievements</span>
						<span class="text-xl group-hover:translate-x-1 transition-transform"
							>→</span
						>
					</span>
				</NuxtLink>

				<NuxtLink
					to="/socials"
					class="group px-8 py-4 border-2 border-slate-800/50 text-slate-700 font-bold text-lg rounded-full hover:bg-slate-800/10 hover:border-slate-800 transform hover:scale-105 transition-all duration-300"
				>
					<span class="flex items-center gap-3">
						<span class="text-2xl">🌐</span>
						<span>Connect with BINI</span>
						<span class="text-xl group-hover:translate-x-1 transition-transform"
							>→</span
						>
					</span>
				</NuxtLink>
			</div>
		</div>

		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
			<div class="w-6 h-10 border-2 border-accent-400/50 rounded-full flex justify-center">
				<div class="w-1 h-3 bg-accent-400 rounded-full mt-2 animate-pulse"></div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
