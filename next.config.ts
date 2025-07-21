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
			{
				source: '/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: 'http://admin.lerp.io:3001' },
					{ key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
					{ key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
				],
			},
		];
	},
	// Add any other Next.js configuration you need
};

export default nextConfig;