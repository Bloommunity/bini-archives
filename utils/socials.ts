import type { SocialsData } from "./socials-types";

const officialModules = import.meta.glob("../data/socials/official/*.json", {
	eager: true,
}) as Record<string, { default: SocialsData["official"][number] }>;
const fanbaseModules = import.meta.glob("../data/socials/fanbases/*.json", {
	eager: true,
}) as Record<string, { default: SocialsData["fanbases"][number] }>;

const official = Object.keys(officialModules)
	.sort()
	.map((key) => officialModules[key].default);
const fanbases = Object.keys(fanbaseModules)
	.sort()
	.map((key) => fanbaseModules[key].default);

export default {
	official,
	fanbases,
};
