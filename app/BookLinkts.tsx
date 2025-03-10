import { BookIcon, BookOpenIcon, HeadphonesIcon, MonitorSmartphoneIcon } from "lucide-react";
import { Book } from "./publicEnums";

export function BookLinks({ book }: { book: Book }) {
	return <div className='flex flex-col justify-end items-end'>
		{book.audiobook_link ? <a target='_blank' href={book.audiobook_link} className=" text-cyan-300 hover:text-cyan-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2 hover:underline focus:underline">Audiobook<HeadphonesIcon size={18} strokeWidth={2} /></a> : null}
		{book.ebook_link ? <a target='_blank' href={book.ebook_link} className=" text-green-300 hover:text-green-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2 hover:underline focus:underline">Ebook<MonitorSmartphoneIcon size={18} strokeWidth={2} /></a> : null}
		{book.ebook_link ? <a target='_blank' href={book.paperback_link} className=" text-orange-300 hover:text-orange-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2 hover:underline focus:underline">Paperback<BookOpenIcon size={18} strokeWidth={2} /></a> : null}
		{book.hardcover_link ? <a target='_blank' href={book.hardcover_link} className=" text-red-300 hover:text-red-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2 hover:underline focus:underline">Hardcover<BookIcon size={18} strokeWidth={2} /></a> : null}
	</div>

}


export function BookLinksRow({ book }: { book: Book }) {
	return <div className='flex flex-row gap-10 md flex-wrap px-10 justify-between'>
		{book.audiobook_link ? <a target='_blank' href={book.audiobook_link} className=" text-cyan-300 hover:text-cyan-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2 hover:underline focus:underline">Audiobook<HeadphonesIcon size={18} strokeWidth={2} /></a> : null}
		{book.ebook_link ? <a target='_blank' href={book.ebook_link} className=" text-green-300 hover:text-green-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2 hover:underline focus:underline">Ebook<MonitorSmartphoneIcon size={18} strokeWidth={2} /></a> : null}
		{book.ebook_link ? <a target='_blank' href={book.paperback_link} className=" text-orange-300 hover:text-orange-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2 hover:underline focus:underline">Paperback<BookOpenIcon size={18} strokeWidth={2} /></a> : null}
		{book.hardcover_link ? <a target='_blank' href={book.hardcover_link} className=" text-red-300 hover:text-red-500 font-mono text-md mt-2 ml-4 flex flex-row items-center gap-2 hover:underline focus:underline">Hardcover<BookIcon size={18} strokeWidth={2} /></a> : null}
	</div>

}