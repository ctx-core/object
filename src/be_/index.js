import { isArray } from '../isArray/index.js'
const be_M_label_symbol = Symbol.for('be_M_label')
const be_M_is_source__symbol = Symbol.for('be_M_is_source__')
const pending_symbol = Symbol.for('pending')
export function be_(label_or_val_, val_, be__opts) {
	const is_source_ = be__opts ? be__opts.is_source_ : null
	const expired_ = be__opts ? be__opts.expired_ : null
	const be = (argv__ctx, opts) => {
		if (!argv__ctx) {
			let error_msg = `be must have a Ctx passed as an argument`
			console.trace(error_msg)
			throw error_msg
		}
		be_M_is_source__set(argv__ctx, be, is_source_)
		const saved__val = saved__val_(argv__ctx, be)
		if (saved__val !== undefined && (!opts || !opts.force) && (!expired_ || !expired_(argv__ctx))) {
			return saved__val
		}
		const ctx = source__map_ctx_(argv__ctx, is_source_)
		const label = val_ ? label_or_val_ : undefined
		if (!ctx) {
			const error_msg = `be: ${String(label)}: is_source_ must be true for at least one Ctx`
			console.trace(error_msg)
			throw error_msg
		}
		let pending = ctx.get(pending_symbol)
		if (!pending) {
			pending = new Map()
			ctx.set(pending_symbol, pending)
		}
		if (pending.get(be)) {
			const pending_value_a = []
			for (const value of pending.values()) {
				pending_value_a.push(value)
			}
			const error_msg = `be_: label '${String(label)}' has a circular dependency`
			console.trace(error_msg, { pending_value_a })
			throw error_msg
		}
		if (!val_) {
			val_ = label_or_val_
		}
		pending.set(be, label || be)
		const val = val_(argv__ctx, be, opts)
		if (ctx.get(be) === undefined) {
			if (val === undefined) throw `be_: ${String(label)}: function must return a non-undefined value or directly set the ctx with the property ${String(label)}`
			ctx.set(be, val)
		}
		if (label) {
			be_M_label_(ctx).set(be, label)
			if (!ctx.has(label)) ctx.set(label, new Map())
			/** @type {import('./index.d.ts').be__label__value__Map_T} */
			const be_M_val = ctx.get(label)
			be_M_val.set(be, val)
		}
		pending.delete(be)
		return val
	}
	return be
}
function be_M_label_(ctx) {
	if (!ctx.has(be_M_label_symbol)) {
		ctx.set(be_M_label_symbol, new WeakMap())
	}
	return ctx.get(be_M_label_symbol)
}
function be_M_is_source__(ctx) {
	if (!ctx.has(be_M_is_source__symbol)) {
		ctx.set(be_M_is_source__symbol, new WeakMap())
	}
	return ctx.get(be_M_is_source__symbol)
}
function be_M_is_source__set(argv__ctx, be, is_source_) {
	if (isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			be_M_is_source__set(argv__ctx[i], be)
		}
	} else {
		be_M_is_source__(argv__ctx).set(be, is_source_)
	}
}
function be__is_source__(argv__ctx, be) {
	if (isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			const be__is_source_ = be__is_source__(argv__ctx[i], be)
			if (be__is_source_) return be__is_source_
		}
	} else {
		return be_M_is_source__(argv__ctx).get(be)
	}
}
export function be__set(ctx, be, val) {
	const source__map_ctx = source__map_ctx_(ctx, be__is_source__(ctx, be))
	if (!source__map_ctx) return
	return source__map_ctx.set(be, val)
}
export function be__delete(argv__ctx, be) {
	if (isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			be__delete(argv__ctx[i], be)
		}
	} else {
		const be_M_label = argv__ctx.get(be_M_label_symbol)
		if (be_M_label) {
			const label = be_M_label.get(be)
			if (label) {
				/** @type {import('./index.d.ts').be__label__value__Map_T} */
				const _be_M_label = argv__ctx.get(label)
				if (_be_M_label) {
					_be_M_label.delete(be)
					if (!_be_M_label.length) argv__ctx.delete(label)
				}
				be_M_label.delete(be)
			}
		}
		argv__ctx.delete(be)
	}
}
function saved__val_(argv__ctx, be) {
	if (isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			const ctx = argv__ctx[i]
			const saved__val = saved__val_(ctx, be)
			if (saved__val !== undefined) return saved__val
		}
	} else {
		return argv__ctx.get(be)
	}
}
function source__map_ctx_(ctx, is_source_) {
	if (isArray(ctx)) {
		for (let i = 0; i < ctx.length; i++) {
			const i_ctx = ctx[i]
			const first__ctx = source__map_ctx_(i_ctx, is_source_)
			if (first__ctx) return first__ctx
		}
	} else if (!is_source_ || is_source_(ctx)) {
		return ctx
	}
}
export { be_ as _be, be_ as b_, be_ as _b, }
