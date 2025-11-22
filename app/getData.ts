import { readItems, readSingleton } from '@directus/sdk';
import { GLOBAL, Schema } from './publicEnums';
import { useClient } from './useClient';
import { unstable_cache } from 'next/cache';


// Create a cached data fetching function with revalidation
export const getData = unstable_cache(
	async (): Promise<Schema> => {
		const { client } = useClient()

		const [books, globals, pages] = await Promise.all([
			client.request(readItems('books', { limit: -1 })),
			client.request(readSingleton('globals')),
			client.request(readItems('pages', { limit: -1 }))
		]);

		return { books, globals, pages };
	},
	['directus-data'], // Cache key
	{
		revalidate: 60, // Revalidate every 60 seconds (adjust as needed)
		tags: ['directus-data'] // Tag for on-demand revalidation
	}
);