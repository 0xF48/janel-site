'use cache';

import { readItems, readSingleton } from '@directus/sdk';
import { GLOBAL, Schema } from './publicEnums';
import { useClient } from './useClient';
import { cacheLife, cacheTag } from 'next/cache';


// Create a cached data fetching function with revalidation
export async function getData(): Promise<Schema> {
	cacheLife('max'); // Use max cache profile for stale-while-revalidate
	cacheTag('directus-data'); // Tag for on-demand revalidation

	const { client } = useClient()

	const [books, globals, pages] = await Promise.all([
		client.request(readItems('books', { limit: -1 })),
		client.request(readSingleton('globals')),
		client.request(readItems('pages', { limit: -1 }))
	]);

	return { books, globals, pages };
}