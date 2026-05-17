/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	darkMode: "class",
	theme: {
		screens: {
			xs: "475px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			colors: {
				// Modern primary brand colors
				primary: {
					50: "#f0fdf4",
					100: "#e6fde8",
					200: "#c8fcc8",
					300: "#8efb8f",
					400: "#4ded55",
					500: "#22c55e",
					600: "#16a34a",
					700: "#15803d",
					800: "#166534",
					900: "#145231",
				},
				// Modern teal accent
				accent: {
					50: "#f0fdfc",
					100: "#ccfbf1",
					200: "#99f6e4",
					300: "#5eead4",
					400: "#2dd4bf",
					500: "#14b8a6",
					600: "#0d9488",
					700: "#0f766e",
					800: "#115e59",
					900: "#134e4a",
				},
				// Neutral modern palette
				slate: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b",
					900: "#0f172a",
				},
				// Legacy colors (kept for reference)
				"bini-teal": "#0f766e",
				"bini-neon": "#14b8a6",
				"bini-black": "#0f172a",
				"bini-white": "#f8fafc",
				"bini-dark-teal": "#115e59",
			},
			fontFamily: {
				sans: ["Inter", "Lexend", "system-ui", "sans-serif"],
				heading: ["Montserrat", "system-ui", "sans-serif"],
			},
			animation: {
				"infinity-pulse": "infinity-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"fade-in": "fade-in 0.5s ease-in-out",
				"slide-up": "slide-up 0.6s ease-out",
				"scale-in": "scale-in 0.4s ease-out",
			},
			keyframes: {
				"infinity-pulse": {
					"0%, 100%": { transform: "scale(1)", opacity: "1" },
					"50%": { transform: "scale(1.1)", opacity: "0.9" },
				},
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				"slide-up": {
					from: { transform: "translateY(20px)", opacity: "0" },
					to: { transform: "translateY(0)", opacity: "1" },
				},
				"scale-in": {
					from: { transform: "scale(0.95)", opacity: "0" },
					to: { transform: "scale(1)", opacity: "1" },
				},
			},
			boxShadow: {
				soft: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
				"md-soft": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
				"lg-soft": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
				"xl-soft":
					"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
				"accent-glow":
					"0 0 20px rgba(20, 184, 166, 0.3), 0 0 40px rgba(20, 184, 166, 0.15)",
				"glow-teal": "0 0 20px rgba(77, 247, 247, 0.5), 0 0 40px rgba(0, 129, 129, 0.3)",
				"glow-neon": "0 0 30px rgba(77, 247, 247, 0.6)",
			},
			spacing: {
				safe: "max(1rem, env(safe-area-inset-bottom))",
			},
			transitionDuration: {
				"300": "300ms",
				"350": "350ms",
			},
		},
	},
	plugins: [],
};
