export interface SocialPlatform {
	handle: string;
	platform: string;
	url: string;
	avatar?: string;
	followers?: number;
}

export interface SocialAccount {
	id: number;
	name: string;
	description?: string;
	platforms: SocialPlatform[];
}

export interface Fanbase {
	id: number;
	name: string;
	description?: string;
	platforms: SocialPlatform[];
}

export interface SocialsData {
	official: SocialAccount[];
	fanbases: Fanbase[];
}
