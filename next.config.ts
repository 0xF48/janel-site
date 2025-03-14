/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost', 'admin.janelcsterbentz.com'],
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
					},
				],
			},
		];
	},
	// Add any other Next.js configuration you need
};

export default nextConfig;