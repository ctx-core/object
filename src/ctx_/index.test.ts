import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { ctx_, is_ctx_ } from '../index.js'
test('is_ctx_', ()=>{
	const ctx0 = ctx_()
	const ctx1 = ctx_()
	const ctx2 = ctx_()
	const not_ctx = {}
	equal(is_ctx_(ctx0), true)
	equal(is_ctx_([ctx0, [ctx1], [[ctx2]]]), true)
	equal(is_ctx_([[[ctx0]]]), true)
	equal(is_ctx_([ctx0, [ctx1], [[[]]]]), true)
	equal(is_ctx_(not_ctx), false)
	equal(is_ctx_([ctx0, [ctx1], [[ctx2]], [not_ctx]]), false)
})
test.run()
