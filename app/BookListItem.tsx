import React from "react";
import { Book } from "./publicEnums";
import { getAssetURL } from "./getAssetURL";
import { format } from 'date-fns'
import { BookAIcon, BookIcon, BookOpenIcon, HeadphonesIcon, MonitorSmartphoneIcon } from "lucide-react";

export function BookListItem({ book }: { book: Book }) {
	return (
		<div className="w-full py-8 px-8 border-main-600 border-solid border-r-1 border-b-1 items-start flex flex-col justify-start font-mono">
			<div className="bg-main-800 rounded-2xl overflow-hidden p-8  w-full h-[20em] flex items-center justify-center">
				<img className='w-auto h-full min-w-[10em] rounded-md' src={getAssetURL(book.cover)} alt={book.book_title} />
			</div>
			<div className="ml-4 mt-3 text-white font-mono text-md">{book.book_title}</div>
			<div className="ml-4 mt-2 text-main-300 font-mono text-md">{format(new Date(book.date), 'yyyy')}</div>
			<div className="w-full flex flex-col justify-end items-end gap-2">
				{book.audiobook_link ? <a href={book.audiobook_link} className="transition-colors text-cyan-300 hover:text-cyan-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2">Audiobook<HeadphonesIcon size={18} strokeWidth={2} /></a> : null}
				{book.ebook_link ? <a href={book.ebook_link} className="transition-colors text-green-300 hover:text-green-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2">Ebook<MonitorSmartphoneIcon size={18} strokeWidth={2} /></a> : null}
				{book.ebook_link ? <a href={book.paperback_link} className="transition-colors text-orange-300 hover:text-orange-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2">Paperback<BookOpenIcon size={18} strokeWidth={2} /></a> : null}
				{book.hardcover_link ? <a href={book.hardcover_link} className="transition-colors text-red-300 hover:text-red-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2">Hardcover<BookIcon size={18} strokeWidth={2} /></a> : null}
			</div>
		</div>
	);
}