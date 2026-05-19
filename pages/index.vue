<template>
	<div class="relative">
		<!-- Hero Section -->
		<HeroSection />

		<!-- Search Section -->
		<SearchSection />

		<!-- Achievement Slider Section -->
		<AchievementSliderSection />

		<!-- Recent Highlights Section -->
		<RecentHighlightsSection />

		<!-- Spotify Embed Section -->
		<SpotifyEmbedSection />

		<!-- Listening Party Section -->
		<ListeningPartySection />

		<!-- Call to Action Section -->
		<CallToActionSection />
	</div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/HeroSection.vue";
import SearchSection from "~/components/SearchSection.vue";
import AchievementSliderSection from "~/components/AchievementSliderSection.vue";
import RecentHighlightsSection from "~/components/RecentHighlightsSection.vue";
import SpotifyEmbedSection from "~/components/SpotifyEmbedSection.vue";
import ListeningPartySection from "~/components/ListeningPartySection.vue";
import CallToActionSection from "~/components/CallToActionSection.vue";
import { useSeo } from "~/composables/useSeo";

const baseUrl = "https://bini-archives.vercel.app";
const { setSeoMetadata, setSeoJsonLd } = useSeo();

setSeoMetadata({
	title: "BINI Archives",
	description:
		"A fan-powered archive celebrating BINI's milestones, achievements, and community history.",
	keywords: ["BINI", "archive", "achievements", "fan project"],
	url: `${baseUrl}`,
	image: "/og-image.png",
});

setSeoJsonLd({
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: `${baseUrl}`,
	name: "BINI Archives",
	description:
		"A fan-powered archive celebrating BINI's milestones, achievements, and community history.",
});
</script>
