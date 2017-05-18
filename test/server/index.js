import test from 'blue-tape';
import request from 'supertest';
import { createServer } from '../../src/server/index';

const http = request(createServer());

test('should get empty', async (t) => {
	const response = await http.get('/');

	t.equal(response.status, 200);
	t.equal(response.text, '');
});

test('should get foo', async (t) => {
	const response = await http.get('/foo');

	t.equal(response.status, 200);
	t.equal(response.text, 'foo');
});

test('should get bar', async (t) => {
	const response = await http.get('/bar');

	t.equal(response.status, 200);
	t.equal(response.text, 'bar');
});
