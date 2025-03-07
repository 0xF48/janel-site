import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
	try {
		// Parse the request body
		const body = await request.json();

		// Extract email and name from the request
		const { email, name } = body;


		// Validate the email
		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			return NextResponse.json(
				{ success: false, message: 'Valid email is required' },
				{ status: 400 }
			);
		}

		// Call MailerLite API
		const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
			},
			body: JSON.stringify({
				email,
				fields: {
					name: name || '',
				},
				status: 'active'
			})
		});



		const data = await response.json();

		if (response.ok) {
			return NextResponse.json({
				success: true,
				message: 'Subscription successful'
			});
		} else {
			return NextResponse.json(
				{ success: false, message: data.message || 'Failed to subscribe' },
				{ status: response.status }
			);
		}
	} catch (error: any) {
		console.error('MailerLite API error:', error);

		return NextResponse.json({
			success: false,
			message: 'Server error',
		}, { status: 500 });
	}
}