import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_, be__delete, be__set, type Ctx, ctx_ } from '../index.js'
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
test('be__set', ()=>{
	const ctx0 = ctx_()
	const val_ = be_<number>('val_', ()=>0, {
		is_source_: map_ctx=>map_ctx === ctx0
	})
	be__set(ctx0, val_, 1)
	equal(val_(ctx0), 1)
	const ctx1 = ctx_()
	const ctx_a = [ctx1, ctx0]
	be__set(ctx_a, val_, 2)
	equal(val_(ctx_a), 2)
	equal(val_(ctx0), 2)
	equal(ctx1.has(val_), false)
})
test('be__delete', ()=>{
	const ctx0 = ctx_()
	const val_ = be_<boolean>('val_', ()=>true)
	be__delete(ctx0, val_)
	equal(ctx0.has(val_), false)
	equal(ctx0.has('val_'), false)
	equal(val_(ctx0), true)
	equal(ctx0.get(val_), true)
	equal(ctx0.get('val_'), new Map([[val_, true]]))
	be__delete(ctx0, val_)
	equal(ctx0.has(val_), false)
	equal(ctx0.has('val_'), false)
	const ctx1 = ctx_()
	const nested__ctx = [ctx0, ctx1]
	equal(val_(ctx0), true)
	equal(val_(ctx1), true)
	equal(val_(nested__ctx), true)
	equal(ctx0.get('val_'), new Map([[val_, true]]))
	equal(ctx1.get('val_'), new Map([[val_, true]]))
	be__delete(nested__ctx, val_)
	equal(ctx0.has(val_), false)
	equal(ctx0.has('val_'), false)
	equal(ctx1.has(val_), false)
	equal(ctx1.has('val_'), false)
})
test('be_|Ctx generic type', ()=>{
	const valid_ctx = ctx_() as test_ctx_T
	const val_ = be_<boolean, test_ctx_T>('val_', ()=>true)
	val_(valid_ctx)
	// val_(ctx_()) // type error
})
test.run()
declare const test_ctx_sym:unique symbol
type test_ctx_T = Ctx&{ [test_ctx_sym]:any }
