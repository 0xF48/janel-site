import React from 'react';
import { getData } from '../getData';
import { BookListItem } from '../BookListItem';
import { getAssetURL } from '../getAssetURL';


export default async function BooksPage() {
	const { globals } = await getData()


	return (

		<div className='w-full flex flex-col md:flex-row gap-0 border-main-600 border-solid border-b-1'>
			<div className='w-[20rem] shrink-0 h-full flex items-start justify-center py-10 relative border-main-600 border-solid border-r-1'>
				<img className="h-[20em] rounded-xl" src={getAssetURL(globals.author_picture)} alt={globals.header_name} />
			</div>
			<div className='p-10  bg-main-800'>

				<p className='mt-6 font-serif text-lg prose prose-invert max-w-none space-y-4'
					dangerouslySetInnerHTML={{ __html: globals.author_about }} />
			</div>
		</div>


	);
}