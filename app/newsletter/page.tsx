import React from 'react';
import { getData } from '../getData';
import { BookListItem } from '../BookListItem';


export default async function BooksPage() {
	const { books } = await getData()


	return (


		<form className='w-full flex flex-col gap-2'>
			<div>subscribe to the newsletter</div>
			<input type='text' placeholder='name' />
			<input type='email' placeholder='email' />
			<input type='message' placeholder='message' />
			<button type='submit'>Subscribe</button>
		</form>

	);
}