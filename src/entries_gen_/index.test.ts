import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { entries_gen_ } from '../index.js'
test('entries_gen_', ()=>{
	const date = new Date()
	const obj = {
		id: 1,
		name: 'My name',
		date
	}
	const key_a:string[] = []
	const val_a:any[] = []
	for (const [key, val] of entries_gen_(obj)) {
		key_a.push(key)
		val_a.push(val)
	}
	equal(['id', 'name', 'date'], key_a)
	equal([1, 'My name', date], val_a)
})
test.run()
