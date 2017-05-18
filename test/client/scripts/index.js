import test from 'blue-tape';
import { client } from '../../../src/client/scripts/index';

test('should client', async (t) => {
	t.equal(await client(), 'client');
});

test('should not client', async (t) => {
	t.equal(await client(), 'client');
});
