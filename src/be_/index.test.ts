import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_, Ctx, ctx_ } from '../index.js'
test('be_|Map', ()=>{
	const ctx = ctx_()
	const root_ = be_('root_', ()=>1)
	const child_ = be_('child_', ctx=>root_(ctx) + 1)
	const child1_ = be_('child1_', ctx=>root_(ctx) + child_(ctx))
	equal(root_(ctx), 1)
	equal(child_(ctx), 2)
	equal(child1_(ctx), 3)
})
test('be_|simple array', ()=>{
	const ctx0 = ctx_()
	const ctx1 = ctx_()
	const ctx = [ctx0, ctx1]
	const root_ = be_('root_', ()=>1)
	equal(root_(ctx1), 1)
	equal(root_(ctx), 1)
	equal(ctx0.has(root_), false)
	equal(ctx1.has(root_), true)
	const child_ = be_('child_', ctx=>root_(ctx) + 1)
	equal(child_(ctx), 2)
	equal(ctx0.has(child_), true)
	equal(ctx1.has(child_), false)
})
test('be_|nested array', ()=>{
	const ctx0 = ctx_()
	const ctx1 = ctx_()
	const ctx2 = ctx_()
	const ctx3 = ctx_()
	const ctx = [[[ctx0], ctx1], [ctx2, ctx3]]
	const root_ = be_('root_', ()=>1)
	equal(root_(ctx3), 1)
	equal(root_(ctx), 1)
	equal(ctx0.has(root_), false)
	equal(ctx1.has(root_), false)
	equal(ctx2.has(root_), false)
	equal(ctx3.has(root_), true)
	const child_ = be_('child_', ctx=>root_(ctx) + 1)
	equal(child_(ctx), 2)
	equal(ctx0.has(child_), true)
	equal(ctx1.has(child_), false)
	equal(ctx2.has(child_), false)
	equal(ctx3.has(child_), false)
})
test('be_|is_source_', ()=>{
	const ctx0 = ctx_()
	const ctx1 = ctx_()
	ctx1.set('matching', true)
	const ctx = [ctx0, ctx1]
	const root_ = be_('root_', ()=>1, {
		is_source_(map_ctx) {
			return !!map_ctx.get('matching')
		}
	})
	equal(root_(ctx), 1)
	equal(ctx0.has(root_), false)
	equal(ctx1.has(root_), true)
})
test('Ctx|NestedMapCtx', ()=>{
	const ctx0 = ctx_()
	const ctx1 = ctx_()
	ctx1.set('matching', true)
	const ctx = [ctx0, ctx1]
	const nested__ctx_ = be_<Ctx>('nested__ctx_', ctx=>[ctx])
	equal(nested__ctx_(ctx), [[ctx0, ctx1]])
})
test('Ctx|expired_', ()=>{
	const ctx = ctx_()
	let counter = 0
	let expired__arg_a:Ctx[][] = []
	const nested__ctx_ = be_<boolean>('nested__ctx_', ()=>{
		counter++
		return true
	}, { expired_(...argv) {
			expired__arg_a.push(argv)
			return true
		}})
	equal(counter, 0)
	equal(expired__arg_a, [])
	equal(nested__ctx_(ctx), true)
	equal(counter, 1)
	equal(expired__arg_a, [])
	equal(nested__ctx_(ctx), true)
	equal(counter, 2)
	equal(expired__arg_a, [[ctx]])
})
test.run()
