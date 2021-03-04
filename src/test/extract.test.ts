import test from 'ava'
import { extract } from '..'
test('extract', t=>{
	const obj:ExtractTestObj = {
		id: 1,
		name: 'My name',
		date: new Date(),
	}
	t.deepEqual(
		extract<ExtractTestSubObj>(obj, { id: true, name: true }),
		{ id: 1, name: 'My name' }
	)
})
export interface ExtractTestObj extends ExtractTestSubObj {
	date:Date
}
export interface ExtractTestSubObj {
	id:number
	name:string
}
