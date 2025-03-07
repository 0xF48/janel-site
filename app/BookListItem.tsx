import React from "react";
import { Book } from "./publicEnums";
import { getAssetURL } from "./getAssetURL";
import { format } from 'date-fns'
import { BookAIcon, BookIcon, BookOpenIcon, EllipsisIcon, HeadphonesIcon, MonitorSmartphoneIcon } from "lucide-react";
import Link from "next/link";
import { BookLinks } from "./BookLinkts";

export function BookListItem({ book }: { book: Book }) {
	return (
		<div className="w-full py-8 px-8 border-main-600 border-solid border-r-1 border-b-1 items-center flex flex-col justify-start font-mono ">

			<Link href={`/books/${book.id}`} className="hover:bg-main-500 bg-main-600 max-w-[15em]  rounded-3xl flex-col overflow-hidden p-8  w-full h-[20em] flex items-center justify-center ring-4 ring-main-500">
				<img className='max-h-[15em] max-w-full object-contain rounded-md' src={getAssetURL(book.cover)} alt={book.book_title} />

			</Link>
			<div className="flex flex-col items-start justify-start w-full ">
				<div className="ml-4 mt-3 text-white font-display text-md font-bold">{book.book_title}</div>
				<div className="ml-4 mt-0 text-main-300 font-mono text-sm font-thin">{format(new Date(book.date), 'yyyy')}</div>
			</div>

			<div className="w-full flex flex-col justify-end items-end gap-2 mt-4">
				<BookLinks book={book} />
			</div>
		</div>
	);
}