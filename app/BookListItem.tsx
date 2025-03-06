import React from "react";
import { Book } from "./publicEnums";
import { getAssetURL } from "./getAssetURL";
import { format } from 'date-fns'

export function BookListItem({ book }: { book: Book }) {
	return (
		<div className="py-8 px-8 border-main-600 border-solid border-r-1 border-b-1 items-start flex flex-col justify-start font-mono">
			<div className="bg-main-800 rounded-2xl h-[20em] overflow-hidden py-4 px-4">
				<img className='w-auto h-full rounded-md' src={getAssetURL(book.cover)} alt={book.book_title} />
			</div>

			<div className="ml-4 mt-3 text-white font-mono text-md">{book.book_title}</div>
			<div className="ml-4 mt-2 text-main-300 font-mono text-md">{format(new Date(book.date), 'yyyy')}</div>
		</div>
	);
}