import express from 'express';

export function getIndex(request, response) {
	response.send(`
		<!doctype html>
		<html>
			<head>
				<title>${request.params.id}</title>
			</head>
			<body>
				<p>${request.params.id}</p>
			</body>
		</html>
	`);
}

export function createServer() {
	return express()
		.get('/:id?', getIndex);
}
