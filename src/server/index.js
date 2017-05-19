import express from 'express';
import { html } from 'common-tags';

/**
 * @method getIndex
 * @param {Request} request
 * @param {Response} response
 */
export function getIndex(request, response) {
	const body = html`
		<!doctype html>
		<html>
			<head>
				<title>${request.params.id}</title>
			</head>
			<body>
				<p>${request.params.id}</p>
			</body>
		</html>
	`;

	response.send(body.trim());
}

/**
 * @method createServer
 * @return {Express}
 */
export function createServer() {
	return express()
		.get('/:id?', getIndex);
}
