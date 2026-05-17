import { ref, readonly, onMounted } from "vue";

const isDark = ref(false);
let darkModeInitialized = false;

const applyDarkClass = (value: boolean) => {
	if (process.client) {
		document.documentElement.classList.toggle("dark", value);
	}
};

const initDarkMode = () => {
	if (!process.client || darkModeInitialized) {
		return;
	}

	darkModeInitialized = true;
	const saved = localStorage.getItem("darkMode");

	if (saved !== null) {
		isDark.value = saved === "true";
	} else if (globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches) {
		isDark.value = true;
	} else {
		isDark.value = false;
	}

	applyDarkClass(isDark.value);
};

export const useDarkMode = () => {
	const toggleDarkMode = () => {
		isDark.value = !isDark.value;
		if (process.client) {
			applyDarkClass(isDark.value);
			localStorage.setItem("darkMode", isDark.value.toString());
		}
	};

	onMounted(() => {
		initDarkMode();
	});

	return {
		isDark: readonly(isDark),
		toggleDarkMode,
	};
};
