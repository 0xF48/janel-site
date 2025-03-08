import React from 'react';
import { getData } from '../getData';
import { BookListItem } from '../BookListItem';
import { BOOK_GENRE } from '../publicEnums';
import { ChevronDownIcon } from 'lucide-react';


export default async function BookList({ skip }: { skip?: number }) {
	let { books } = await getData()

	const fiction = books.filter((book) => book.genre === BOOK_GENRE.Fiction)
	const nonFiction = books.filter((book) => book.genre === BOOK_GENRE.NonFiction)

	// console.log(fiction, nonFiction)

	if (skip) {
		books = books.filter((book) => Number(book.id) !== Number(skip))
	}

	return (
		<div>
			<div className='px-6 w-full items-start justify-start flex flex-row gap-5 py-4 border-main-600 border-solid border-b-1'>
				<ChevronDownIcon size={24} strokeWidth={1} className=' text-main-400' />
				<span className='font-mono text-main-400'>fiction</span>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-0 '>

				{fiction.map((book) => <BookListItem key={book.id} book={book} />)}
			</div>
			<div className='px-6 w-full items-start justify-start flex flex-row gap-5 py-4 border-main-600 border-solid border-b-1'>
				<ChevronDownIcon size={24} strokeWidth={1} className=' text-main-400' />
				<span className='font-mono text-main-400'>non-fiction</span>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-0 '>
				{nonFiction.map((book) => <BookListItem key={book.id} book={book} />)}
			</div>
		</div>


	);
}