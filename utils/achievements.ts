export interface Achievement {
	title: string;
	slug: string;
	description: string;
	icon: string;
	date: string;
	category: string;
	details: string;
	thumbnail: string;
	contributor?: string;
	tags?: string[];
	hallOfFame?: boolean;
	reference?: string;
	seo?: {
		keywords: string[];
		description: string;
	};
}

// Load achievement by slug from year/month/day folders
export async function loadAchievement(slug: string): Promise<Achievement | null> {
	const allAchievements = await loadAllAchievements();
	return allAchievements.find((a) => a.slug === slug) || null;
}

// Load all achievements from achievements/year/month/day folder structure
export async function loadAllAchievements(): Promise<Achievement[]> {
	const achievements: Achievement[] = [];

	try {
		// Recursively load all JSON files from achievements year/month/day folders
		const modules = import.meta.glob<{ default: Achievement }>(
			"~/data/achievements/**/*.json",
			{
				eager: true,
			},
		);

		for (const [path, module] of Object.entries(modules)) {
			// Only load individual achievement files that match the pattern: {slug}.json
			// Exclude combined achievements.json files
			if (
				module.default &&
				path.includes("data/achievements") &&
				!path.includes("achievements.json") &&
				/\/[\w-]+\.json$/.test(path)
			) {
				achievements.push(module.default);
			}
		}
	} catch (error) {
		console.error("Failed to load achievements:", error);
	}

	return achievements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAchievementRoutePath(achievement: Achievement): string {
	const date = new Date(achievement.date);
	const year = date.getFullYear().toString();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `/achievements/${year}/${month}/${day}/${achievement.slug}`;
}

export function computeAchievementTags(achievement: Achievement): string[] {
	return achievement.tags?.length ? achievement.tags : (achievement.seo?.keywords ?? []);
}

export async function loadRelatedAchievements(
	currentAchievement: Achievement,
	maxResults = 4,
): Promise<Achievement[]> {
	const allAchievements = await loadAllAchievements();
	const currentTags = new Set(
		computeAchievementTags(currentAchievement).map((tag) => tag.toLowerCase()),
	);

	return allAchievements
		.filter((achievement) => achievement.slug !== currentAchievement.slug)
		.map((achievement) => ({
			achievement,
			matchingTags: computeAchievementTags(achievement).filter((tag) =>
				currentTags.has(tag.toLowerCase()),
			).length,
		}))
		.filter((item) => item.matchingTags > 0)
		.sort((a, b) => {
			if (b.matchingTags !== a.matchingTags) {
				return b.matchingTags - a.matchingTags;
			}
			return new Date(b.achievement.date).getTime() - new Date(a.achievement.date).getTime();
		})
		.slice(0, maxResults)
		.map((item) => item.achievement);
}

// Load achievements by year
export async function loadAchievementsByYear(year: string): Promise<Achievement[]> {
	const allAchievements = await loadAllAchievements();
	return allAchievements.filter((a) => new Date(a.date).getFullYear().toString() === year);
}

// Load achievements by category
export async function loadAchievementsByCategory(category: string): Promise<Achievement[]> {
	const allAchievements = await loadAllAchievements();
	return allAchievements.filter((a) => a.category === category);
}

// Get all unique years from achievements
export async function getAchievementYears(): Promise<string[]> {
	const allAchievements = await loadAllAchievements();
	const years = [
		...new Set(allAchievements.map((a) => new Date(a.date).getFullYear().toString())),
	];
	return years.sort((a, b) => Number.parseInt(b, 10) - Number.parseInt(a, 10));
}

// Get all unique categories from achievements
export async function getAchievementCategories(): Promise<string[]> {
	const allAchievements = await loadAllAchievements();
	const categories = [...new Set(allAchievements.map((a) => a.category))];
	return categories.sort((a, b) => a.localeCompare(b));
}
