import { assign } from './assign.js'
export const pending_symbol = Symbol('pending')
export function be_(key_or_val_, val_) {
	const be = (ctx, opts)=>{
		if (ctx.get(be) === undefined || (opts === null || opts === void 0 ? void 0 : opts.force)) {
			let pending = ctx[pending_symbol]
			if (!pending) {
				pending = new Map()
				assign(ctx, {
					[pending_symbol]: pending
				})
			}
			const key = val_ ? key_or_val_ : undefined
			if (pending.get(be)) {
				console.trace(`be_: key '${String(key)}' has a circular dependency`)
				throw `be_: key '${String(key)}' has a circular dependency`
			}
			if (!val_) {
				val_ = key_or_val_
			}
			pending.set(be, true)
			const val = val_(ctx, be, opts)
			if (ctx.get(be) === undefined) {
				if (val === undefined) throw `be_: ${String(key)}: function must return a non-undefined value or directly set the ctx with the property ${String(key)}`
				ctx.set(be, val)
			}
			if (key) {
				const key_a = ctx.get(key) || []
				key_a.push(val)
				ctx.set(key, key_a)
			}
			pending.delete(be)
		}
		return ctx.get(be)
	}
	return be
}
export { be_ as _be, be_ as b_, be_ as _b, }
