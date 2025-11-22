import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	// Get the secret token from the request
	const secret = request.nextUrl.searchParams.get('secret');

	// Check for secret to confirm this is a valid request
	if (secret !== process.env.REVALIDATE_SECRET) {
		return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
	}

	try {
		// Revalidate the cache for all Directus data
		revalidateTag('directus-data');

		return NextResponse.json({ revalidated: true, now: Date.now() });
	} catch (err) {
		return NextResponse.json(
			{ message: 'Error revalidating', error: err },
			{ status: 500 }
		);
	}
}
