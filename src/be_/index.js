import { isArray } from '@ctx-core/function'
const pending_sym = Symbol.for('pending')
const be_M_is_source__sym = Symbol.for('be_M_is_source_')
if (!globalThis[be_M_is_source__sym]) globalThis[be_M_is_source__sym] = new WeakMap()
const be_M_is_source_ = globalThis[be_M_is_source__sym]
const be_M_id_sym = Symbol.for('be_M_id')
if (!globalThis[be_M_id_sym]) globalThis[be_M_id_sym] = new WeakMap()
const be_M_id = globalThis[be_M_id_sym]
/** @typedef {import('./index.d.ts').Be}Be */
/** @typedef {import('./index.d.ts').Ctx}Ctx */
/** @typedef {import('./index.d.ts').MapCtx}MapCtx */
/** @typedef {import('./index.d.ts').be__opts_T}be__opts_T */
/** @typedef {import('./index.d.ts').be__val__T}be__val__T */
/** @typedef {import('./index.d.ts').is_source__T}is_source__T */
/**
 * Auto-memoization function for the Ctx.
 *
 * Returns a function to ensure that a member id is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 * @param {string|be__val__T}id_or_val_
 * @param {be__val__T|be__opts_T}[val_]
 * @param {be__opts_T}[be__opts]
 * @returns {Be}
 * @private
 */
export function be_(
	id_or_val_,
	val__or_be__opts,
	be__opts
) {
	/** @type {string} */
	const id = typeof id_or_val_ === 'string' ? id_or_val_ : null
	/** @type {be__val__T} */
	const val_ = typeof id_or_val_ === 'string' ? val__or_be__opts : id_or_val_
	be__opts = typeof id_or_val_ === 'string' ? be__opts : val__or_be__opts
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
		if (!ctx) {
			throw new Error(
				`be: ${
					String(id)
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
				`be_: ${
					String(id)
				}: circular dependency:\n${pending_value_a.join('\n')}`)
		}
		pending.set(be, id || be)
		const val = val_(argv__ctx, be, opts)
		if (ctx.get(be) === undefined) {
			if (val === undefined) {
				throw new Error(
					`be_: ${
						String(id)
					}: function must return a non-undefined value or directly set the ctx with the property ${
						String(id)
					}`)
			}
			ctx.set(be, val)
		}
		if (id) {
			ctx.set(id, val)
		}
		pending.delete(be)
		return val
	}
	be_M_is_source_.set(be, is_source_)
	if (id) {
		if (be_M_id.has(id)) {
			throw new Error(`be_: ${
				String(id)
			}: already registered to another Be`)
		}
		be_M_id.set(be, id)
	}
	return be
}
export {
	be_ as _be,
	be_ as b_,
	be_ as _b,
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
	const id = be_M_id.get(be)
	if (id) {
		source__map_ctx.set(id, val)
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
		const id = be_M_id.get(be)
		if (id) {
			map_ctx.delete(id)
		}
		map_ctx.delete(be)
	}
}
export {
	be__delete as ctx__delete,
}
/**
 * @param {Be|string}be_or_id
 * @param {Ctx}argv__ctx
 * @returns {unknown}
 * @private
 */
export function be__val_(be_or_id, argv__ctx) {
	if (isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			const ctx = argv__ctx[i]
			const saved__val = be__val_(be_or_id, ctx)
			if (saved__val !== undefined) return saved__val
		}
	} else {
		/** @type {MapCtx} */
		const map_ctx = /** @type {any} */argv__ctx
		return map_ctx.get(be_or_id)
	}
}
/**
 * @param {Ctx}ctx
 * @param {is_source__T}is_source_
 * @returns {unknown}
 * @private
 */
export function source__map_ctx_(ctx, is_source_) {
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
