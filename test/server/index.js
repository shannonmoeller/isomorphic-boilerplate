import test from 'blue-tape';
import request from 'supertest';
import { createServer } from '../../src/server/index';

const http = request(createServer());

test('should get foo', async (t) => {
	const response = await http.get('/foo');

	t.equal(response.status, 200);
	t.ok((/html[^]+foo/).test(response.text));
});

test('should get bar', async (t) => {
	const response = await http.get('/bar');

	t.equal(response.status, 200);
	t.ok((/html[^]+bar/).test(response.text));
});
