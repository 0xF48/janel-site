import React from "react";
import { Book } from "./publicEnums";
import { getAssetURL } from "./getAssetURL";
import { format } from 'date-fns'
import { BookAIcon, BookIcon, BookOpen, BookOpenIcon, EllipsisIcon, HeadphonesIcon, MonitorSmartphoneIcon } from "lucide-react";
import Link from "next/link";
import { BookLinks } from "./BookLinkts";

export function BookListItem({ book }: { book: Book }) {
	return (
		<div className="w-full py-8 px-8 border-main-600 border-solid border-r-1 border-b-1 items-center flex flex-col justify-start font-mono ">

			<Link href={`/books/${book.id}`} className="transition-all hover:bg-main-500 bg-main-600 max-w-[15em]  rounded-2xl flex-col overflow-hidden p-2  w-full h-[23em] gap-2 flex items-center justify-center ring-4 ring-main-500 hover:ring-main-400">
				<img className='max-h-[15em] max-w-full object-contain rounded-md' src={getAssetURL(book.cover)} alt={book.book_title} />
				<button className="flex flex-row items-center gap-2 mt-2 bg-main-500 text-white cursor-pointer px-4 rounded-2xl py-2">
					<BookOpenIcon size={18} strokeWidth={2} />
					preview
				</button>
			</Link>
			<Link href={`/books/${book.id}`} className="flex flex-col items-start justify-start w-full my-2 group px-10 md:px-0">
				<div className="ml-4 mt-3 text-white font-display text-md font-bold underline decoration-white group-hover:decoration-yellow-500">{book.book_title}</div>
				<div className="ml-4 mt-0 text-main-300 font-mono text-sm font-thin ">{format(new Date(book.date), 'yyyy')}</div>
			</Link>


			<div className="w-full flex flex-col justify-end items-end gap-2 mt-4">
				<BookLinks book={book} />
			</div>
		</div>
	);
}