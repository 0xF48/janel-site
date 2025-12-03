import React from 'react';
import { getData } from '../../getData';

export async function generateStaticParams() {
	const { pages } = await getData()
	return pages.map((page) => ({
		slug: page.slug,
	}))
}

export default async function Page({ params }: any) {
	const { pages } = await getData()
	const paramsSlug = (await params).slug
	const page = pages.find((page) => page.slug === paramsSlug)

	if (!page) return <h1>Page not found</h1>

	return (

		<div className='w-full flex flex-col md:flex-row gap-0 border-main-600 border-solid border-b-1'>
			<div className='mt-6 font-serif text-lg prose prose-invert max-w-none space-y-4'>
				{page.html}
			</div>
		</div >

	);
}