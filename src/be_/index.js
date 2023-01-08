import { isArray } from '../isArray/index.js'
export const pending_symbol = Symbol('pending')
export function be_(key_or_val_, val_, be__opts) {
	const is_source_ = be__opts ? be__opts.is_source_ : null
	const expired_ = be__opts ? be__opts.expired_ : null
	const be = (argv__ctx, opts) => {
		if (!argv__ctx) throw `be must have a Ctx passed as an argument`
		const saved__val = saved__val_(argv__ctx, be)
		if (saved__val !== undefined && (!opts || !opts.force) && (!expired_ || !expired_(argv__ctx))) {
			return saved__val
		}
		const ctx = set__ctx_(argv__ctx, is_source_)
		if (!ctx) {
			const error_msg = `is_source_ must be true for at least one Ctx`
			console.trace(error_msg)
			throw error_msg
		}
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
			const error_msg = `be_: key '${String(key)}' has a circular dependency`
			console.trace(error_msg, { pending_value_a })
			throw error_msg
		}
		if (!val_) {
			val_ = key_or_val_
		}
		pending.set(be, key || be)
		const val = val_(argv__ctx, be, opts)
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
function set__ctx_(ctx, is_source_) {
	if (isArray(ctx)) {
		for (let i = 0; i < ctx.length; i++) {
			const i_ctx = ctx[i]
			const first__ctx = set__ctx_(i_ctx, is_source_)
			if (first__ctx) return first__ctx
		}
	} else if (!is_source_ || is_source_(ctx)) {
		return ctx
	}
}
export { be_ as _be, be_ as b_, be_ as _b, }
