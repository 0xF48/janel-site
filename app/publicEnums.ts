import { createDirectus, rest } from "@directus/sdk";
import { useMemo } from "react";

// Define your Schema type here (or import it)


export const navOptions = [
	{
		label: 'My Books',
		href: '/books'
	},
	// {
	// 	label: 'About',
	// 	href: '/about'
	// },
	{
		label: 'Newsletter',
		href: '/newsletter'
	},
]

export type Book = {

	book_title: string;
	date: string;
	id: number;
	cover: string;
	description: string;
	date_created: string;
	ebook_link?: string;
	hardcover_link?: string;
	paperback_link?: string;
	audiobook_link?: string;
	background_image: string;

}

export type Globals = {
	header_name: string;
	author_about: string;
	author_picture: string;
	header_description: string;
}

export type Schema = {
	// Define your collections and their types
	globals: Globals
	books: Book[]
	// ...other collections
}

export const enum GLOBAL {
	DIRECTUS_API = "http://admin.janelcsterbentz.com:3001/",
}