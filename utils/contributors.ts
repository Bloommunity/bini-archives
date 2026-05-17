/**
 * Utility to fetch contributor profile data from GitHub and X (Twitter)
 */

interface GitHubProfile {
	avatar_url: string;
	name: string;
	bio: string;
	public_repos: number;
	followers: number;
	company?: string;
}

interface TwitterProfile {
	profile_image_url_https: string;
	name: string;
	description: string;
	followers_count: number;
}

interface ContributorProfile {
	avatar: string;
	name: string;
	bio: string;
	followers: number;
	platform: "github" | "twitter";
	profileUrl: string;
}

/**
 * Fetch GitHub profile data
 */
export async function fetchGitHubProfile(username: string): Promise<ContributorProfile | null> {
	try {
		const response = await fetch(`https://api.github.com/users/${username}`);

		if (!response.ok) {
			console.warn(`GitHub user ${username} not found`);
			return null;
		}

		const data: GitHubProfile = await response.json();

		return {
			avatar: data.avatar_url,
			name: data.name || username,
			bio: data.bio || "GitHub Developer",
			followers: data.followers,
			platform: "github",
			profileUrl: `https://github.com/${username}`,
		};
	} catch (error) {
		console.error(`Error fetching GitHub profile for ${username}:`, error);
		return null;
	}
}

/**
 * Fetch Twitter/X profile data
 * Note: This requires authentication. For public data, we'll use a fallback approach
 */
export async function fetchTwitterProfile(username: string): Promise<ContributorProfile | null> {
	try {
		// Using a public API endpoint for Twitter profile data
		// Note: This is a fallback using a third-party service
		const response = await fetch(
			`https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics,description,profile_image_url`,
			{
				headers: {
					// In production, this should be stored securely
					Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN || ""}`,
				},
			},
		);

		if (!response.ok) {
			console.warn(`Twitter user ${username} not found`);
			return null;
		}

		const data = await response.json();
		const user = data.data;

		return {
			avatar: user.profile_image_url || `https://avatar.vercel.sh/${username}?size=400`,
			name: user.name || username,
			bio: user.description || "Twitter User",
			followers: user.public_metrics?.followers_count || 0,
			platform: "twitter",
			profileUrl: `https://twitter.com/${username}`,
		};
	} catch (error) {
		console.error(`Error fetching Twitter profile for ${username}:`, error);
		// Fallback to a generated avatar
		return {
			avatar: `https://avatar.vercel.sh/${username}?size=400`,
			name: username,
			bio: "Twitter User",
			followers: 0,
			platform: "twitter",
			profileUrl: `https://twitter.com/${username}`,
		};
	}
}

/**
 * Fetch profile data based on platform
 */
export async function fetchContributorProfile(
	username: string,
	platform: "github" | "twitter",
): Promise<ContributorProfile | null> {
	if (platform === "github") {
		return fetchGitHubProfile(username);
	} else if (platform === "twitter") {
		return fetchTwitterProfile(username);
	}
	return null;
}

/**
 * Fetch multiple contributor profiles
 */
export async function fetchMultipleProfiles(
	contributors: Array<{
		github?: string;
		twitter?: string;
		name: string;
	}>,
): Promise<ContributorProfile[]> {
	const profiles: ContributorProfile[] = [];

	for (const contributor of contributors) {
		let profile: ContributorProfile | null = null;

		if (contributor.github) {
			profile = await fetchGitHubProfile(contributor.github);
		} else if (contributor.twitter) {
			profile = await fetchTwitterProfile(contributor.twitter);
		}

		if (profile) {
			profiles.push(profile);
		}
	}

	return profiles;
}

/**
 * Get avatar URL for a contributor
 * Provides a fallback if API calls fail
 */
export function getAvatarUrl(username: string, platform: "github" | "twitter" = "github"): string {
	if (platform === "github") {
		return `https://github.com/${username}.png`;
	} else {
		return `https://avatar.vercel.sh/${username}?size=400`;
	}
}
