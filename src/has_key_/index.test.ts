import { test } from 'uvu'
import { is } from 'uvu/assert'
import { has_key_ } from '../index.js'
test('has_key_', ()=>{
	is(true, has_key_({ foo: 'bar' }, 'foo'))
	is(false, has_key_({ foo: 'bar' }, 'not-inside'))
})
test.run()