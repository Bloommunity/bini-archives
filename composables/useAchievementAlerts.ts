import { onMounted, ref } from "vue";
import alertsData from "~/data/alerts";
import {
	loadAllAchievements,
	getAchievementRoutePath,
	type Achievement,
} from "~/utils/achievements";

interface AlertConfig {
	slug: string;
	title?: string;
	message: string;
	image?: string;
	snoozeDays?: number;
}

interface AchievementAlert {
	achievement: Achievement;
	route: string;
	title: string;
	message: string;
	image?: string;
	snoozeDays: number;
}

const selectedAlert = ref<AchievementAlert | null>(null);
const DAY_MS = 24 * 60 * 60 * 1000;

const getStorageKey = (slug: string) => `achievement-alert-hidden-until:${slug}`;

const isAlertHidden = (slug: string) => {
	if (!process.client) return false;
	const hiddenUntil = Number(localStorage.getItem(getStorageKey(slug)) || "0");
	return hiddenUntil > Date.now();
};

const setAlertHiddenUntil = (slug: string, untilMs: number) => {
	if (!process.client) return;
	localStorage.setItem(getStorageKey(slug), String(untilMs));
};

const loadAlerts = async () => {
	const achievements = await loadAllAchievements();

	const available = alertsData
		.map((config: AlertConfig) => {
			const achievement = achievements.find((item) => item.slug === config.slug);
			if (!achievement) return null;
			return {
				achievement,
				route: getAchievementRoutePath(achievement),
				title: config.title || achievement.title,
				message: config.message,
				image: config.image,
				snoozeDays: config.snoozeDays ?? 1,
			};
		})
		.filter((item): item is AchievementAlert => item !== null)
		.filter((item) => !isAlertHidden(item.achievement.slug))
		.sort(
			(a, b) =>
				new Date(b.achievement.date).getTime() - new Date(a.achievement.date).getTime(),
		);

	selectedAlert.value = available[0] || null;
};

const closeAlert = () => {
	selectedAlert.value = null;
};

const snoozeAlert = (days: number) => {
	if (!selectedAlert.value) return;
	setAlertHiddenUntil(selectedAlert.value.achievement.slug, Date.now() + days * DAY_MS);
	selectedAlert.value = null;
};

export const useAchievementAlerts = () => {
	onMounted(() => {
		loadAlerts();
	});

	return {
		selectedAlert,
		closeAlert,
		snoozeAlert,
	};
};
