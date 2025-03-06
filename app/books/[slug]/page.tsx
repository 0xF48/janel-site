import React from 'react';

export default function Books({ params }: { params: { slug: string } }) {
	return (
		<div>
			<h1>book details for {params.slug}</h1>
		</div>
	);
}