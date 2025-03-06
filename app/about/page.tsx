import React from 'react';
import { getData } from '../getData';
import { BookListItem } from '../BookListItem';
import { getAssetURL } from '../getAssetURL';


export default async function BooksPage() {
	const { globals } = await getData()


	return (
		<div className='grid grid-cols-2 gap-0 mb-20 border-main-600'>
			<div className='border-main-600 border-solid border-r-1 flex items-end w-full flex-row justify-end pr-10'>
				<img className='max-w-[20em] rounded-2xl border-10 border-main-800' src={getAssetURL(globals.author_picture)} alt={globals.header_name} />
			</div>
			<div
				className="prose prose-invert max-w-none pl-10"
				dangerouslySetInnerHTML={{ __html: globals.author_about }}
			/>
		</div>
	);
}