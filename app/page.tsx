import { redirect } from 'next/navigation';
import React from 'react';

export default function Home() {
	redirect('/books');

	// This part won't be executed due to the redirect
	return null;
}