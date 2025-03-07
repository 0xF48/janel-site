'use client';

import React, { Suspense } from 'react';
import Confetti from 'react-confetti'





export default function NewsletterPage() {
	const [name, setName] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [subscribed, setSubscribed] = React.useState(false)

	async function subscribe() {
		const response = await fetch('/api/subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				name
			})
		});
		if (response.ok == true) {
			// alert('Subscribed Successfully')
			setSubscribed(true)
		} else {
			alert('Failed to subscribe')
		}
	}

	let confetti = null
	let form = null

	if (subscribed == true) {
		confetti = <Confetti
			width={window.innerWidth}
			height={window.innerHeight}
		/>
		form = <div className='w-full text-2xl font-bold text-center text-display p-10 h-full mt-20 text-main-200'>
			Thanks for subscribing, <span className='text-green-500'>{name}</span>
		</div>
	} else {
		form = <form className='flex flex-col space-y-6 p-10 max-w' onSubmit={(e) => {
			e.preventDefault();
			//@ts-ignore
			subscribe(e.target.name.value, e.target.email.value)
		}}>
			<div className='text-2xl font-bold text-center text-display p-10 h-full mt-0 text-main-200'>
				subsribe to my newsletter
			</div>

			<input onChange={(e) => { setName(e.target.value) }} type='text' name='name' placeholder='Your Name' className='h-12 px-6 transition-all rounded-2xl hover:bg-main-500 bg-main-600 font-bold  outline-none placeholder-main-400 hover:ring-4 ring-4 focus:ring-main-400 ring-main-500' />
			<input onChange={(e) => { setEmail(e.target.value) }} type='email' name='email' placeholder='Your Email' className='h-12 px-6 transition-all rounded-2xl hover:bg-main-500 bg-main-600 font-bold outline-none placeholder-main-400 hover:ring-4 ring-4 focus:ring-main-400 ring-main-500' />
			<button type='submit' className='h-12 px-6 flex items-center justify-center rounded-2xl bg-indigo-400 text-white font-black outline-none focus:ring-4 ring-main-400 cursor-pointer hover:bg-indigo-500'>Subscribe</button>
		</form>
	}


	return (
		<div className='flex w-full items-center justify-center'>
			{form}
			{confetti}
		</div >
	);
}