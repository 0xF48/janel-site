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
						value: "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline';",
					},
				],
			},
		];
	},
	// Add any other Next.js configuration you need
};

export default nextConfig;