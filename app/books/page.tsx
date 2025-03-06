import React from 'react';
import { getData } from '../getData';
import { BookListItem } from '../BookListItem';


export default async function BooksPage() {
	const { books } = await getData()


	return (
		<div className='grid grid-cols-4 gap-0 mb-20 border-main-600 border-solid border-l-1 '>
			{books.map((book) => <BookListItem key={book.id} book={book} />)}
			{books.map((book) => <BookListItem key={book.id} book={book} />)}
			{books.map((book) => <BookListItem key={book.id} book={book} />)}
			{books.map((book) => <BookListItem key={book.id} book={book} />)}
		</div>
	);
}