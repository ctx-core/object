import test from 'ava'
import { _has_key } from '..'
test('_has_key', t=>{
	t.true(_has_key({ foo: 'bar' }, 'foo'))
	t.false(_has_key({ foo: 'bar' }, 'not-inside'))
})

