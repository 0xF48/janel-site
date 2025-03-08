import React from 'react';
import { getData } from '../../getData';
import { getAssetURL } from '../../getAssetURL';
import BookList from '../BookList';
import { format } from 'date-fns';
import { BookLinks, BookLinksRow } from '../../BookLinkts';

export default async function BookDetails({ params }: any) {
	const { books } = await getData()
	const paramsSlug = (await params).slug
	const book = books.find((book) => Number(book.id) === Number(paramsSlug))
	if (!book) return <h1>Book not found</h1>


	return (
		<>
			<div className='w-full flex flex-col md:flex-row gap-0 border-main-600 border-solid border-b-1'>
				<div className='overflow-hidden h-[20em] md:h-[50em] relative w-full md:w-[20rem] shrink-0 flex items-start justify-center py-10  border-main-600 border-solid border-r-1'>
					<img className="h-[15em] md:h-[20em] rounded-xl" src={getAssetURL(book.cover)} alt={book.book_title} />

					<img
						style={{ filter: 'blur(20px) opacity(0.5)' }}
						className="h-full w-auto absolute left-1/2 -translate-x-1/2 top-0 -z-10 max-w-none scale-125" src={getAssetURL(book.background_image)} />

					<div
						className="absolute inset-0 -z-5 pointer-events-none left-0 top-0 w-full h-full"
						style={{
							background: 'linear-gradient(to bottom, transparent 0%, rgba(19,35,67,0.0) 0%, var(--color-main-700) 100%)'
						}}
					></div>


				</div>
				<div className='p-10  bg-main-800'>
					<div>
						<h1 className='text-4xl font-gloock'>{book.book_title}</h1>
						<h4 className='text-md text-main-400  font-mono mt-2 text-sm'>published on {format(new Date(book.date), 'PP')}</h4>

					</div>
					<div
						className='mt-6 font-serif text-lg prose prose-invert max-w-none space-y-4'
						dangerouslySetInnerHTML={{ __html: book.description }} />
				</div>
			</div >
			<div className='w-full items-start justify-center flex flex-row gap-5 py-10 border-main-600 border-solid border-b-1'>
				<BookLinksRow book={book} />
			</div>



			<BookList skip={book.id} />
		</>
	);
}