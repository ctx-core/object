import test from 'ava';
import { extract } from '..';
test('extract', t => {
    const obj = {
        id: 1,
        name: 'My name',
        date: new Date(),
    };
    t.deepEqual(extract(obj, { id: true, name: true }), { id: 1, name: 'My name' });
});
//# sourceMappingURL=../src/test/extract.test.js.map