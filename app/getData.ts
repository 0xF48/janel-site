import { readItems, readSingleton } from '@directus/sdk';
import { GLOBAL, Schema } from './publicEnums';
import { useClient } from './useClient';
import { cache } from 'react';


// Create a cached data fetching function
export const getData = cache(async (): Promise<Schema> => {
	const { client } = useClient()

	const [books, globals] = await Promise.all([
		client.request(readItems('books', { limit: -1 })),
		client.request(readSingleton('globals'))
	]);

	return { books, globals };

});

export function getAssetURL(asset_id: string) {
	return GLOBAL.DIRECTUS_API + 'assets/' + asset_id;
}