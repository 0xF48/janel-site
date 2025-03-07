import React from 'react';
import { getData } from '../getData';
import { BookListItem } from '../BookListItem';


export default async function BookList({ skip }: { skip?: number }) {
	let { books } = await getData()


	if (skip) {
		books = books.filter((book) => Number(book.id) !== Number(skip))
	}

	return (
		<div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-0 mb-20 '>
			{books.map((book) => <BookListItem key={book.id} book={book} />)}
		</div>
	);
}