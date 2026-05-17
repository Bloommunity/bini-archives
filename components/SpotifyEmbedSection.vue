<template>
	<section
		class="relative mt-12 py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 overflow-hidden rounded-[40px] shadow-2xl shadow-slate-300/20 dark:bg-slate-950 dark:text-white dark:shadow-slate-900/20"
	>
		<div
			class="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900/95 dark:via-slate-900/70 dark:to-slate-950/95"
		></div>
		<div class="relative z-10 max-w-7xl mx-auto text-center">
			<div class="mb-12">
				<div
					class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200/70 text-sm font-medium text-slate-700 mb-4 dark:bg-white/10 dark:border-white/10 dark:text-slate-200"
				>
					<span class="text-2xl">🎧</span>
					<span>Spotify Playlist</span>
				</div>
				<h2 class="text-4xl sm:text-5xl font-black tracking-tight">Listen with BINI</h2>
				<p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto dark:text-slate-300">
					Enjoy the un-official playlist that captures the sound and spirit of BINI's
					story.
				</p>
			</div>

			<div
				class="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-slate-200/80 shadow-2xl shadow-slate-300/20 bg-white dark:border-white/10 dark:shadow-slate-950/40 dark:bg-slate-900"
			>
				<div class="aspect-[12/7] sm:aspect-[16/9] bg-transparent">
					<iframe
						loading="lazy"
						src="https://open.spotify.com/embed/playlist/1eoVOqdyxzDkOtkGnVf58V?si=9b72739f2c444b65"
						width="100%"
						height="100%"
						allow="
							autoplay;
							clipboard-write;
							encrypted-media;
							fullscreen;
							picture-in-picture;
						"
						title="BINI Spotify Playlist"
						style="border: 0; background: transparent"
						referrerpolicy="no-referrer"
					></iframe>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
