import express from 'express';

export function getIndex(request, response) {
	response.send(request.params.id);
}

export function createServer() {
	return express()
		.get('/:id?', getIndex);
}
