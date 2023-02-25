import { isArray } from '../isArray/index.js'
const be_M_label_sym = Symbol.for('be_M_label')
const pending_sym = Symbol.for('pending')
const be_M_is_source__sym = Symbol.for('be_M_is_source_')
if (!globalThis[be_M_is_source__sym]) globalThis[be_M_is_source__sym] = new WeakMap()
const be_M_is_source_ = globalThis[be_M_is_source__sym]
/** @typedef {import('./index.d.ts').Be}Be */
/** @typedef {import('./index.d.ts').Ctx}Ctx */
/** @typedef {import('./index.d.ts').MapCtx}MapCtx */
/** @typedef {import('./index.d.ts').be__opts_T}be__opts_T */
/** @typedef {import('./index.d.ts').be__val__T}be__val__T */
/** @typedef {import('./index.d.ts').is_source__T}is_source__T */
/**
 * @param {string|be__val__T}label_or_val_
 * @param {be__val__T|be__opts_T}[val_]
 * @param {be__opts_T}[be__opts]
 * @returns {Be}
 * @private
 */
export function be_(
	label_or_val_,
	val_,
	be__opts
) {
	const is_source_ =
		be__opts
		? be__opts.is_source_
		: null
	const expired_ = be__opts ? be__opts.expired_ : null
	const be = (argv__ctx, opts)=>{
		if (!argv__ctx) {
			throw new Error(`be must have a Ctx passed as an argument`)
		}
		const saved__val = be__val_(be, argv__ctx)
		if (
			saved__val !== undefined
			&& (!opts || !opts.force)
			&& (!expired_ || !expired_(argv__ctx))
		) {
			return saved__val
		}
		const ctx = source__map_ctx_(argv__ctx, is_source_)
		const label = val_ ? label_or_val_ : undefined
		if (!ctx) {
			throw new Error(
				`be: ${
					String(label)
				}: is_source_ must be true for at least one Ctx`)
		}
		let pending = ctx.get(pending_sym)
		if (!pending) {
			pending = new Map()
			ctx.set(pending_sym, pending)
		}
		if (pending.get(be)) {
			const pending_value_a = []
			for (const value of pending.values()) {
				pending_value_a.push(value)
			}
			throw new Error(
				`be_: label '${
					String(label)
				}' has a circular dependency:\n${pending_value_a.join('\n')}`)
		}
		if (!val_) {
			val_ = label_or_val_
		}
		pending.set(be, label || be)
		const val = val_(argv__ctx, be, opts)
		if (ctx.get(be) === undefined) {
			if (val === undefined) {
				throw new Error(
					`be_: ${
						String(label)
					}: function must return a non-undefined value or directly set the ctx with the property ${
						String(label)
					}`)
			}
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
	be_M_is_source_.set(be, is_source_)
	return be
}
export {
	be_ as _be,
	be_ as b_,
	be_ as _b,
}
/**
 * @param {MapCtx}ctx
 * @returns {WeakMap<Be, string>}
 * @private
 */
function be_M_label_(ctx) {
	if (!ctx.has(be_M_label_sym)) {
		ctx.set(be_M_label_sym, new WeakMap())
	}
	return /** @type {WeakMap<Be, string>} */ctx.get(be_M_label_sym)
}
/**
 * @param {Be}be
 * @returns {is_source__T}
 * @private
 */
export function be__is_source_(be) {
  return be_M_is_source_.get(be)
}
/**
 * @param {Be}be
 * @param {Ctx}ctx
 * @param {unknown}val
 * @returns {unknown}
 * @private
 */
export function be__set(be, ctx, val) {
	const source__map_ctx = source__map_ctx_(ctx, be__is_source_(be))
	if (!source__map_ctx) return
	source__map_ctx.set(be, val)
	const be_M_label = be_M_label_(source__map_ctx)
	if (be_M_label) {
		source__map_ctx.set(be_M_label.get(be), val)
	}
}
export {
	be__set as ctx__set,
}
/**
 * @param {Be}be
 * @param {Ctx}argv__ctx
 * @private
 */
export function be__delete(be, argv__ctx) {
	if (isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			be__delete(be, argv__ctx[i])
		}
	} else {
		/** @type {MapCtx} */
		const map_ctx = /** @type {any} */argv__ctx
		const be_M_label = map_ctx.get(be_M_label_sym)
		if (be_M_label) {
			const label = be_M_label.get(be)
			if (label) {
				/** @type {import('./index.d.ts').be__label__value__Map_T} */
				const _be_M_label = map_ctx.get(label)
				if (_be_M_label) {
					_be_M_label.delete(be)
					if (!_be_M_label.length) map_ctx.delete(label)
				}
				be_M_label.delete(be)
			}
		}
		map_ctx.delete(be)
	}
}
export {
	be__delete as ctx__delete,
}
/**
 * @param {Be|string}be_or_label
 * @param {Ctx}argv__ctx
 * @returns {unknown}
 * @private
 */
export function be__val_(be_or_label, argv__ctx) {
	if (isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			const ctx = argv__ctx[i]
			const saved__val = be__val_(be_or_label, ctx)
			if (saved__val !== undefined) return saved__val
		}
	} else {
		/** @type {MapCtx} */
		const map_ctx = /** @type {any} */argv__ctx
		return map_ctx.get(be_or_label)
	}
}
/**
 * @param {Ctx}ctx
 * @param {is_source__T}is_source_
 * @returns {unknown}
 * @private
 */
function source__map_ctx_(ctx, is_source_) {
	if (isArray(ctx)) {
		for (let i = 0; i < ctx.length; i++) {
			const i_ctx = ctx[i]
			const first__ctx = source__map_ctx_(i_ctx, is_source_)
			if (first__ctx) return first__ctx
		}
	} else if (!is_source_ || is_source_(/** @type {MapCtx} */ctx, ctx)) {
		return ctx
	}
}
