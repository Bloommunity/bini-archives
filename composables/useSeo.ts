export interface SeoMetadata {
	title: string;
	description: string;
	keywords?: string[];
	image?: string;
	url?: string;
	type?: string;
}

const baseUrl = import.meta.env.NUXT_PUBLIC_SITE_URL || "https://bini-archives.vercel.app";

const normalizeUrl = (url?: string) => {
	if (!url) return "";
	if (url.startsWith("http://") || url.startsWith("https://")) {
		return url;
	}
	return baseUrl + (url.startsWith("/") ? url : `/${url}`);
};

export const useSeo = () => {
	const route = useRoute();

	const setSeoMetadata = (metadata: SeoMetadata) => {
		// Set page title
		useHead({
			title: metadata.title,
			meta: [
				{
					name: "description",
					content: metadata.description,
				},
				{
					name: "keywords",
					content: metadata.keywords?.join(", ") || "",
				},
				// Open Graph
				{
					property: "og:title",
					content: metadata.title,
				},
				{
					property: "og:description",
					content: metadata.description,
				},
				{
					property: "og:image",
					content: normalizeUrl(metadata.image || "/og-image.png"),
				},
				{
					property: "og:url",
					content: normalizeUrl(metadata.url || route.path),
				},
				{
					property: "og:type",
					content: metadata.type || "website",
				},
				// Twitter Card
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:title",
					content: metadata.title,
				},
				{
					name: "twitter:description",
					content: metadata.description,
				},
				{
					name: "twitter:image",
					content: normalizeUrl(metadata.image || "/og-image.png"),
				},
			],
			link: [
				{
					rel: "canonical",
					href: normalizeUrl(metadata.url || route.path),
				},
			],
		});
	};

	const setSeoJsonLd = (jsonLd: Record<string, any>) => {
		useHead({
			script: [
				{
					type: "application/ld+json",
					innerHTML: JSON.stringify(jsonLd),
				},
			],
		});
	};

	return {
		setSeoMetadata,
		setSeoJsonLd,
	};
};
