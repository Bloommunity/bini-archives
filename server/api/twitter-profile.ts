/**
 * Server-side API route to fetch Twitter/X profile data without CORS issues
 */

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const username = query.username as string;

	if (!username) {
		throw createError({
			statusCode: 400,
			statusMessage: "Username is required",
		});
	}

	try {
		// Use a public service that can fetch Twitter profile images
		// fixtweet.com API provides access to Twitter profile data
		const response = await fetch(`https://api.fixtweet.com/user/${username}`, {
			signal: AbortSignal.timeout(3000),
		});

		if (response.ok) {
			const data = await response.json();
			if (data.profile_image_url) {
				return {
					avatar: data.profile_image_url,
					followers: data.followers_count || 0,
				};
			}
		}
	} catch (error) {
		console.warn(`fixtweet API failed for ${username}:`, error);
	}

	try {
		// Fallback: Try Nitter API from a specific instance
		const response = await fetch(
			`https://nitter.privacydev.net/api/user/by/username/${username}`,
			{ signal: AbortSignal.timeout(3000) },
		);

		if (response.ok) {
			const data = await response.json();
			if (data.profile_image_url) {
				return {
					avatar: data.profile_image_url,
					followers: data.followers_count || 0,
				};
			}
		}
	} catch (error) {
		console.warn(`Nitter API failed for ${username}:`, error);
	}

	// Final fallback: Construct URL using unavatar.io with fallback disabled
	return {
		avatar: `https://unavatar.io/twitter/${username}?fallback=404`,
		followers: 0,
	};
});
