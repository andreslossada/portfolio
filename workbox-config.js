module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{jsx,svg,png,jpg,css,scss}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};