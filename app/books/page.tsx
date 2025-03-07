import React from 'react';
import BookList from './BookList';
import { AboutPage } from '../AboutPage';

export default async function BooksPage() {
	return (
		<>
			<BookList />
			<div className='w-full items-start justify-center flex flex-row gap-5 py-10 border-main-600 border-solid border-b-1'>
				<span className='font-mono text-main-400'>about the author</span>
			</div>
			<AboutPage />
		</>

	);
}