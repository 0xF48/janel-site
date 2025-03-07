import React from "react";
import { Book } from "./publicEnums";
import { getAssetURL } from "./getAssetURL";
import { format } from 'date-fns'
import { BookAIcon, BookIcon, BookOpenIcon, HeadphonesIcon, MonitorSmartphoneIcon } from "lucide-react";
import Link from "next/link";
import { BookLinks } from "./BookLinkts";

export function BookListItem({ book }: { book: Book }) {
	return (
		<div className="w-full py-8 px-8 border-main-600 border-solid border-r-1 border-b-1 items-start flex flex-col justify-start font-mono">

			<Link href={`/books/${book.id}`} className="bg-main-750 rounded-3xl overflow-hidden p-8  w-full h-[20em] flex items-center justify-center">
				<img className='w-auto h-full min-w-[10em] rounded-md' src={getAssetURL(book.cover)} alt={book.book_title} />
			</Link>
			<div className="ml-4 mt-3 text-white font-display text-md font-bold">{book.book_title}</div>
			<div className="ml-4 mt-0 text-main-300 font-mono text-sm font-thin">{format(new Date(book.date), 'yyyy')}</div>
			<div className="w-full flex flex-col justify-end items-end gap-2 mt-4">
				<BookLinks book={book} />
			</div>
		</div>
	);
}