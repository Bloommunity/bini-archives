export interface SeoMetadata {
	title: string;
	description: string;
	keywords?: string[];
	image?: string;
	url?: string;
	type?: string;
}

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
					content: metadata.image || "/images/og-image.jpg",
				},
				{
					property: "og:url",
					content:
						metadata.url ||
						`${typeof window !== "undefined" ? window.location.origin : ""}${route.path}`,
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
					content: metadata.image || "/images/og-image.jpg",
				},
			],
			link: [
				{
					rel: "canonical",
					href:
						metadata.url ||
						`${typeof window !== "undefined" ? window.location.origin : ""}${route.path}`,
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
