import React from 'react';
import { getData } from '../../getData';
import { getAssetURL } from '../../getAssetURL';
import BookList from '../BookList';
import { format } from 'date-fns';
import { BookLinks } from '../../BookLinkts';

export default async function BookDetails({ params }: any) {
	const { books } = await getData()
	const book = books.find((book) => Number(book.id) === Number(params.slug))
	if (!book) return <h1>Book not found</h1>
	return (

		<>
			<div className='w-full grid grid-cols-2 gap-0 border-main-600 border-solid border-b-1'>
				<div className='w-full h-full flex items-start justify-center pt-10 relative border-main-600 border-solid border-r-1'>
					<img className="h-[20em] absolute left-1/2 -translate-x-1/2 top-20 rounded-xl" src={getAssetURL(book.cover)} alt={book.book_title} />
				</div>
				<div className='p-10  bg-main-800'>
					<div>

						<h1 className='text-4xl font-gloock'>{book.book_title}</h1>
						<h4 className='text-md text-main-400  font-mono mt-2 text-sm'>published on {format(new Date(book.date), 'PP')}</h4>
					</div>
					<p className='mt-6 font-serif text-lg prose prose-invert max-w-none space-y-4' dangerouslySetInnerHTML={{ __html: book.description }} />

				</div>
			</div>
			<div className='w-full items-start justify-center flex flex-row gap-5 py-10 border-main-600 border-solid border-b-1'>
				<BookLinks book={book} />
			</div>
			<BookList skip={book.id} />
		</>


	);
}