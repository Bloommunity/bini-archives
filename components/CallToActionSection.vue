<template>
	<section
		class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-900/80"
	>
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<div class="space-y-4">
				<h3 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
					Join the BINI Community
				</h3>
				<p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
					Connect with fellow BLOOMS, stay updated with the latest news, and be part of
					BINI's incredible journey.
				</p>
			</div>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<NuxtLink
					to="/socials"
					class="px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold rounded-full shadow-xl shadow-slate-900/30 hover:shadow-slate-900/50 hover:scale-105 transition-all duration-300"
				>
					🌐 Official Socials
				</NuxtLink>
				<NuxtLink
					to="/contributors"
					class="px-8 py-4 border border-slate-800/50 text-slate-700 font-bold rounded-full hover:bg-slate-800/10 transition-all duration-300"
				>
					👥 Meet Contributors
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
