import { isArray } from '../isArray/index.js'
export const pending_symbol = Symbol('pending')
export function be_(key_or_val_, val_) {
	const be = (argv__ctx, opts) => {
		const saved__val = saved__val_(argv__ctx, be)
		if (saved__val !== undefined && (!opts || !opts.force)) return saved__val
		const ctx = first__Map__ctx_(argv__ctx)
		let pending = ctx.get(pending_symbol)
		if (!pending) {
			pending = new Map()
			ctx.set(pending_symbol, pending)
		}
		const key = val_ ? key_or_val_ : undefined
		if (pending.get(be)) {
			const pending_value_a = []
			for (const value of pending.values()) {
				pending_value_a.push(value)
			}
			console.trace(`be_: key '${String(key)}' has a circular dependency`, { pending_value_a })
			throw `be_: key '${String(key)}' has a circular dependency`
		}
		if (!val_) {
			val_ = key_or_val_
		}
		pending.set(be, key || be)
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
		return val
	}
	return be
}
function saved__val_(argv__ctx, be) {
	if (isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			const ctx = argv__ctx[i]
			const saved__val = saved__val_(ctx, be)
			if (saved__val) return saved__val
		}
	} else {
		return argv__ctx.get(be)
	}
}
function first__Map__ctx_(ctx) {
	if (isArray(ctx)) {
		for (let i = 0; i < ctx.length; i++) {
			const i_ctx = ctx[i]
			const first__be = first__Map__ctx_(i_ctx)
			if (first__be) return first__be
		}
	} else {
		return ctx
	}
}
export { be_ as _be, be_ as b_, be_ as _b, }
