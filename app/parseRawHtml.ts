export function parseRawHtml(htmlContent: string): string {
	// Regex to find URLs that start with http://admin.lerp.io:3001/assets/ and capture the ID
	const regex = /http:\/\/admin\.lerp\.io:3001\/assets\/([a-zA-Z0-9_-]+)/g;

	return htmlContent.replace(regex, (match, id) => {
		// Replace the matched URL with /api/assets/ followed by the captured ID
		return `/api/assets/${id}`;
	});
}