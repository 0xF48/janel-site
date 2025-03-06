'use client';

import React, { Suspense } from 'react';
import { getData } from '../getData';
import { BookListItem } from '../BookListItem';
import { MailerLite } from './MailerLite';



export default function NewsletterPage() {
	// const { books } = await getData()


	return (
		<div className='w-full'>
			{/* <MailerLite />
			<Suspense fallback={<div className="h-96 flex items-center justify-center">Loading newsletter form...</div>}>
				<div className="ml-embedded" data-form="GPRrIi"></div>
			</Suspense> */}

		</div >


	);
}