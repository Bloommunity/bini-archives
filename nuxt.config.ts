export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	experimental: {
		appManifest: true,
	},
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	tailwindcss: {
		exposeConfig: true,
	},
	css: ["~/assets/css/main.css", "~/assets/css/animations.css"],
	vite: {
		define: {
			__BUILD_DATE__: JSON.stringify(
				process.env.BUILD_DATE ||
					new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
			),
		},
	},
	hooks: {
		build: {
			before() {
				const now = new Date();
				const monthNames = [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December",
				];
				const monthYear = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;

				if (!process.env.BUILD_DATE) {
					process.env.BUILD_DATE = monthYear;
				}
			},
		},
	},
});
