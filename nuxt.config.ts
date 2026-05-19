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
	app: {
		head: {
			title: "BINI Archives",
			htmlAttrs: { lang: "en" },
			meta: [
				{
					name: "description",
					content:
						"A fan-powered archive celebrating BINI's achievements, milestones, and community history.",
				},
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ property: "og:type", content: "website" },
				{ property: "og:site_name", content: "BINI Archives" },
				{ property: "og:title", content: "BINI Archives" },
				{
					property: "og:description",
					content:
						"A fan-powered archive celebrating BINI's achievements, milestones, and community history.",
				},
				{ property: "og:image", content: "https://bini-archives.vercel.app/og-image.png" },
				{ property: "og:url", content: "https://bini-archives.vercel.app" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:site", content: "@BINIBloomingLegacy" },
				{ name: "twitter:title", content: "BINI Archives" },
				{
					name: "twitter:description",
					content:
						"A fan-powered archive celebrating BINI's achievements, milestones, and community history.",
				},
				{ name: "twitter:image", content: "https://bini-archives.vercel.app/og-image.png" },
			],
		},
	},
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
