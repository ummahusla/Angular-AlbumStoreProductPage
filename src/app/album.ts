import { Track } from './track';

export interface Album {
	publicName: string;
	releaseDate: string;
	coverImage: string;
	tracks: Track[];
}
