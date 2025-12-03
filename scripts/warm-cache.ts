/**
 * Cache warming script - Pre-fetches all assets to ensure they're cached on Vercel's CDN
 * Run this after deployment: npx tsx scripts/warm-cache.ts
 */

async function warmCache() {
	const siteUrl = process.env.SITE_URL || 'https://www.janelcsterbentz.com';
	const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_API_URL;

	if (!directusUrl) {
		console.error('NEXT_PUBLIC_DIRECTUS_API_URL not set');
		process.exit(1);
	}

	console.log('🔥 Warming cache for assets...\n');

	try {
		// Fetch all data to get asset IDs
		const dataResponse = await fetch(`${directusUrl}items/books?fields=*.*`);
		const booksData = await dataResponse.json();

		// Extract all asset IDs from books
		const assetIds = new Set<string>();

		for (const book of booksData.data || []) {
			if (book.cover) assetIds.add(book.cover);
			if (book.background_image) assetIds.add(book.background_image);
		}

		// Fetch pages to get author picture and other assets
		const pagesResponse = await fetch(`${directusUrl}items/globals`);
		const globalsData = await pagesResponse.json();

		if (globalsData.data?.author_picture) {
			assetIds.add(globalsData.data.author_picture);
		}

		console.log(`Found ${assetIds.size} unique assets to cache\n`);

		// Warm the cache by requesting each asset
		let cached = 0;
		for (const assetId of assetIds) {
			const assetUrl = `${siteUrl}/api/assets/${assetId}`;
			try {
				const response = await fetch(assetUrl, { method: 'HEAD' });
				const cacheStatus = response.headers.get('x-vercel-cache') || 'UNKNOWN';
				console.log(`✓ ${assetId.substring(0, 8)}... [${cacheStatus}]`);
				cached++;
			} catch (error) {
				console.error(`✗ ${assetId.substring(0, 8)}... [ERROR]`, error);
			}
		}

		console.log(`\n✅ Cache warming complete! ${cached}/${assetIds.size} assets cached`);
	} catch (error) {
		console.error('❌ Cache warming failed:', error);
		process.exit(1);
	}
}

warmCache();
