import test from 'ava'
import { has_key_ } from '..'
test('_has_key', t=>{
	t.true(has_key_({ foo: 'bar' }, 'foo'))
	t.false(has_key_({ foo: 'bar' }, 'not-inside'))
})
