import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { resolve } from 'path';
import { html } from 'common-tags';

const clientPath = resolve(__dirname, '../client');

/**
 * @method getIndex
 * @param {Request} request
 * @param {Response} response
 */
export function getIndex(request, response) {
	const { id } = request.params;

	response.send(html`
		<!doctype html>
		<html>
			<head>
				<title>${id}</title>
				<link rel="stylesheet" href="/styles/index.css" />
			</head>
			<body>
				<p>${id}</p>
				<script src="/scripts/index.js" />
			</body>
		</html>
	`);
}

/**
 * @method createServer
 * @return {Express}
 */
export function createServer() {
	return express()
		.use(helmet())
		.use(compression())
		.use(express.static(clientPath, { maxAge: '1d' }))
		.get('/:id?', getIndex);
}
