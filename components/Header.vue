<template>
	<nav
		ref="navElement"
		:class="[
			'sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ease-out',
			isDark
				? 'bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 border-accent-500/20 shadow-lg shadow-accent-500/10'
				: 'bg-white border-slate-200/70 shadow-sm shadow-slate-300/10',
		]"
		aria-label="Main navigation"
	>
		<!-- Animated gradient line -->
		<div
			v-if="isDark"
			class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent"
		></div>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16 gap-4 flex-nowrap">
				<div class="flex items-center gap-3 min-w-0 flex-shrink-0">
					<NuxtLink to="/" class="flex items-center gap-3 group">
						<div
							:class="[
								'relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-accent-500/50 group-hover:shadow-2xl group-hover:scale-110',
								isDark
									? 'border border-accent-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-lg shadow-accent-500/30'
									: 'border border-slate-200/70 bg-white shadow-sm shadow-slate-300/20',
							]"
						>
							<div
								class="absolute inset-0 bg-gradient-to-br from-accent-400/30 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur"
							></div>
							<img
								:src="logoSrc"
								alt="BINI Archives Logo"
								class="w-8 h-8 object-cover relative z-20 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
							/>
						</div>
						<div class="flex flex-col leading-tight justify-center gap-0">
							<span
								class="text-sm uppercase tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300 font-bold whitespace-nowrap"
							>
								BINI Archives
							</span>
							<span
								class="text-[0.68rem] font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-[0.12em] whitespace-nowrap"
							>
								Blooming Legacy
							</span>
						</div>
					</NuxtLink>
				</div>

				<div class="hidden md:flex items-center justify-center gap-3 flex-1 min-w-0">
					<NuxtLink
						to="/"
						:class="[
							'px-4 py-2 text-sm font-semibold transition-all duration-300 relative group',
							isActive('/')
								? isDark
									? 'text-accent-300'
									: 'text-accent-600'
								: isDark
									? 'text-slate-400 hover:text-accent-300'
									: 'text-slate-900 hover:text-accent-600',
						]"
					>
						<span class="relative z-10">Home</span>
						<div
							class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-accent-400 to-accent-300 rounded-full transition-all duration-300 shadow-lg shadow-accent-400/50"
							:class="isActive('/') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
						></div>
					</NuxtLink>
					<NuxtLink
						to="/achievements"
						:class="[
							'px-4 py-2 text-sm font-semibold transition-all duration-300 relative group',
							isActive('/achievements')
								? isDark
									? 'text-accent-300'
									: 'text-accent-600'
								: isDark
									? 'text-slate-400 hover:text-accent-300'
									: 'text-slate-900 hover:text-accent-600',
						]"
					>
						<span class="relative z-10">Achievements</span>
						<div
							class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-accent-400 to-accent-300 rounded-full transition-all duration-300 shadow-lg shadow-accent-400/50"
							:class="
								isActive('/achievements')
									? 'opacity-100 scale-100'
									: 'opacity-0 scale-0'
							"
						></div>
					</NuxtLink>
					<NuxtLink
						to="/socials"
						:class="[
							'px-4 py-2 text-sm font-medium transition-all duration-300 relative group',
							isActive('/socials')
								? isDark
									? 'text-accent-400'
									: 'text-accent-600'
								: isDark
									? 'text-slate-300 hover:text-accent-300'
									: 'text-slate-900 hover:text-accent-600',
						]"
					>
						<span class="relative z-10">Socials</span>
						<div
							class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-400 rounded-full transition-all duration-300"
							:class="isActive('/socials') ? 'opacity-100' : 'opacity-0'"
						></div>
					</NuxtLink>
					<NuxtLink
						to="/contributors"
						:class="[
							'px-4 py-2 text-sm font-semibold transition-all duration-300 relative group',
							isActive('/contributors')
								? isDark
									? 'text-accent-300'
									: 'text-accent-600'
								: isDark
									? 'text-slate-400 hover:text-accent-300'
									: 'text-slate-900 hover:text-accent-600',
						]"
					>
						<span class="relative z-10">Contributors</span>
						<div
							class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-accent-400 to-accent-300 rounded-full transition-all duration-300 shadow-lg shadow-accent-400/50"
							:class="
								isActive('/contributors')
									? 'opacity-100 scale-100'
									: 'opacity-0 scale-0'
							"
						></div>
					</NuxtLink>
				</div>

				<div class="flex items-center justify-end gap-2 flex-shrink-0">
					<button
						@click="toggleDarkMode"
						:class="[
							'flex w-10 h-10 items-center justify-center rounded-full transition-all duration-300 group relative overflow-hidden border shadow-sm',
							isDark
								? 'bg-slate-900/75 border-slate-700/70 text-slate-100 hover:text-accent-300 shadow-accent-500/10 hover:shadow-accent-500/20'
								: 'bg-white/95 border-slate-200/70 text-slate-900 hover:text-accent-600 shadow-slate-300/15 hover:shadow-accent-500/10',
						]"
						:title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
					>
						<div
							:class="[
								'absolute inset-0 rounded-2xl transition-all duration-300',
								isDark
									? 'bg-accent-500/10 opacity-0 group-hover:opacity-100'
									: 'bg-accent-500/5 opacity-0 group-hover:opacity-100',
							]"
						></div>
						<span class="relative z-10 text-base">{{ isDark ? "🌙" : "☀️" }}</span>
					</button>

					<button
						@click="toggleMobileMenu"
						class="flex md:hidden w-10 h-10 items-center justify-center rounded-2xl transition-all duration-300 group relative overflow-hidden border shadow-md"
						:class="[
							isDark
								? 'bg-slate-900/75 border-slate-700/70 text-slate-100 hover:text-accent-300 shadow-accent-500/10 hover:shadow-accent-500/20'
								: 'bg-white/95 border-slate-200/70 text-slate-900 hover:text-accent-600 shadow-slate-300/15 hover:shadow-accent-500/10',
						]"
						:title="mobileMenuOpen ? 'Close Menu' : 'Open Menu'"
					>
						<div
							:class="[
								'absolute inset-0 rounded-2xl transition-all duration-300',
								'bg-accent-500/5 opacity-0 group-hover:opacity-100',
							]"
						></div>
						<span class="relative z-10 text-base">{{
							mobileMenuOpen ? "✕" : "☰"
						}}</span>
					</button>
				</div>
			</div>
			<!-- Mobile Menu -->
			<div
				v-show="mobileMenuOpen"
				class="md:hidden overflow-hidden transition-all duration-300"
				:class="['border-t', isDark ? 'border-accent-500/20' : 'border-slate-200/50']"
			>
				<div class="px-4 py-3 space-y-2">
					<!-- Mobile Menu Items -->
					<div class="space-y-1">
						<NuxtLink
							to="/"
							@click="closeMobileMenu"
							:class="[
								'block px-3 py-2 text-base font-semibold rounded-2xl transition-all duration-300 relative group overflow-hidden',
								isActive('/')
									? isDark
										? 'text-accent-300 bg-accent-500/20 border border-accent-500/40 shadow-md shadow-accent-500/20'
										: 'text-accent-600 bg-accent-500/10 border border-accent-500/30 shadow-md shadow-accent-500/15'
									: isDark
										? 'text-slate-300 hover:text-accent-300 hover:bg-accent-500/10 hover:shadow-accent-500/10'
										: 'text-slate-900 hover:text-accent-600',
							]"
						>
							<span class="relative z-10">🏠 Home</span>
							<div
								:class="[
									'absolute inset-0 rounded-2xl transition-all duration-300',
									isActive('/')
										? 'bg-gradient-to-r from-accent-500/10 to-accent-600/10 opacity-100'
										: 'bg-gradient-to-r from-accent-400/5 to-accent-500/5 opacity-0 group-hover:opacity-100',
								]"
							></div>
						</NuxtLink>
						<NuxtLink
							to="/achievements"
							@click="closeMobileMenu"
							:class="[
								'block px-3 py-2 text-base font-semibold rounded-2xl transition-all duration-300 relative group overflow-hidden',
								isActive('/achievements')
									? isDark
										? 'text-accent-400'
										: 'text-accent-600'
									: isDark
										? 'text-slate-300 hover:text-accent-300 hover:bg-accent-500/10 hover:shadow-accent-500/10'
										: 'text-slate-900 hover:text-accent-600',
							]"
						>
							<span class="relative z-10">🏆 Achievements</span>
							<div
								:class="[
									'absolute inset-0 rounded-2xl transition-all duration-300',
									isActive('/achievements')
										? 'bg-gradient-to-r from-accent-500/10 to-accent-600/10 opacity-100'
										: 'bg-gradient-to-r from-accent-400/5 to-accent-500/5 opacity-0 group-hover:opacity-100',
								]"
							></div>
						</NuxtLink>
						<NuxtLink
							to="/socials"
							@click="closeMobileMenu"
							:class="[
								'block px-3 py-2 text-base font-semibold rounded-2xl transition-all duration-300 relative group overflow-hidden',
								isActive('/socials')
									? isDark
										? 'text-accent-400'
										: 'text-accent-600'
									: isDark
										? 'text-slate-300 hover:text-accent-300 hover:bg-accent-500/10 hover:shadow-accent-500/10'
										: 'text-slate-900 hover:text-accent-600',
							]"
						>
							<span class="relative z-10">🌐 Socials</span>
							<div
								:class="[
									'absolute inset-0 rounded-2xl transition-all duration-300',
									isActive('/socials')
										? 'bg-gradient-to-r from-accent-500/10 to-accent-600/10 opacity-100'
										: 'bg-gradient-to-r from-accent-400/5 to-accent-500/5 opacity-0 group-hover:opacity-100',
								]"
							></div>
						</NuxtLink>
						<NuxtLink
							to="/contributors"
							@click="closeMobileMenu"
							:class="[
								'block px-3 py-2 text-base font-semibold rounded-2xl transition-all duration-300 relative group overflow-hidden',
								isActive('/contributors')
									? isDark
										? 'text-accent-300 bg-accent-500/20 border border-accent-500/40 shadow-md shadow-accent-500/20'
										: 'text-accent-600 bg-accent-500/10 border border-accent-500/30 shadow-md shadow-accent-500/15'
									: isDark
										? 'text-slate-300 hover:text-accent-300 hover:bg-accent-500/10 hover:shadow-accent-500/10'
										: 'text-slate-900 hover:text-accent-600',
							]"
						>
							<span class="relative z-10">👥 Contributors</span>
							<div
								:class="[
									'absolute inset-0 rounded-2xl transition-all duration-300',
									isActive('/contributors')
										? 'bg-gradient-to-r from-accent-500/10 to-accent-600/10 opacity-100'
										: 'bg-gradient-to-r from-accent-400/5 to-accent-500/5 opacity-0 group-hover:opacity-100',
								]"
							></div>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useDarkMode } from "~/composables/useDarkMode";
import logoLight from "~/assets/images/b-archives-logo.png";
import logoDark from "~/assets/images/b-archives-logo-wh.png";

const navElement = ref<HTMLElement | null>(null);

const { isDark, toggleDarkMode } = useDarkMode();
const logoSrc = computed(() => (isDark.value ? logoDark : logoLight));

const route = useRoute();

const isActive = (path: string) => {
	if (path === "/") {
		return route.path === "/";
	}
	return route.path.startsWith(path);
};

// Mobile menu state
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
	mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
	mobileMenuOpen.value = false;
};

// Close mobile menu when clicking outside or on route change
watch(
	() => route.path,
	() => {
		mobileMenuOpen.value = false;
	},
);
</script>
