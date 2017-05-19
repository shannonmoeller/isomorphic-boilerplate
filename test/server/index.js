import test from 'blue-tape';
import request from 'supertest';
import { createServer } from '../../src/server/index';

test('should get foo', async (t) => {
	const http = request(createServer());
	const response = await http.get('/foo');

	t.equal(response.status, 200);
	t.ok((/<html>[\s\S]+foo/).test(response.text));
});

test('should get bar', async (t) => {
	const http = request(createServer());
	const response = await http.get('/bar');

	t.equal(response.status, 200);
	t.ok((/<html>[\s\S]+bar/).test(response.text));
});
