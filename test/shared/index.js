import test from 'blue-tape';
import { shared } from '../../src/shared/index';

test('should shared', async (t) => {
	t.equal(await shared(), 'shared');
});

test('should not shared', async (t) => {
	t.equal(await shared(), 'shared');
});
