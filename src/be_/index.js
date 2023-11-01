import { isArray } from '@ctx-core/function'
import { globalThis__prop__ensure } from '../globalThis__prop__ensure/index.js'
const pending_sym = Symbol.for('pending')
const be_M_is_source_ = globalThis__prop__ensure(
	Symbol.for('be_M_is_source_'),
	()=>new WeakMap())
/** @typedef {import('./index.d.ts').Be}Be */
/** @typedef {import('./index.d.ts').Ctx}Ctx */
/** @typedef {import('./index.d.ts').MapCtx}MapCtx */
/** @typedef {import('./index.d.ts').be__params_T}be__params_T */
/** @typedef {import('./index.d.ts').be__val__T}be__val__T */
/** @typedef {import('./index.d.ts').is_source__T}is_source__T */
/**
 * Auto-memoization function for the Ctx.
 * Memoized on globalThis to allow packages being loaded multiple times, which can happen during bundling.
 *
 * Returns a function to ensure that a member id_OR_val_ is defined on a ctx object,
 * otherwise it creates the value using the val__OR_be__params factory function.
 * @param {string|be__val__T}id_OR_val_
 * @param {be__val__T|be__params_T}[val__OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {Be}
 * @private
 */
export function globalThis__be_(
	id_OR_val_,
	val__OR_be__params,
	be__params
) {
	return globalThis__prop__ensure(
		Symbol.for(id_OR_val_),
		()=>be_(
			id_OR_val_,
			val__OR_be__params,
			be__params))
}
/**
 * Auto-memoization function for the Ctx.
 *
 * Returns a function to ensure that a member id is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 * @param {string|be__val__T}id_OR_val__new
 * @param {be__val__T|be__params_T}[val__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {Be}
 * @private
 */
export function be_(
	id_OR_val__new,
	val__new_OR_be__params,
	be__params
) {
	/** @type {string} */
	const id =
		typeof id_OR_val__new === 'string'
		? id_OR_val__new
		: null
	/** @type {be__val__T} */
	const val__new =
		typeof id_OR_val__new === 'string'
		? val__new_OR_be__params
		: id_OR_val__new
	be__params =
		typeof id_OR_val__new === 'string'
		? be__params
		: val__new_OR_be__params
	const is_source_ =
		be__params
		? be__params.is_source_
		: null
	const expired_ =
		be__params
		? be__params.expired_
		: null
	const be = (argv__ctx, params)=>{
		if (!argv__ctx) {
			throw new Error(`be must have a Ctx passed as an argument`)
		}
		const saved__val = be__val_(be, argv__ctx)
		if (
			saved__val !== undefined
			&& (!params || !params.force)
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
				}: circular dependency:\n${pending_value_a.map(pending_value=>
					typeof pending_value === 'function'
					? 'Function'
					: pending_value).join('\n')}`)
		}
		pending.set(be, id || be)
		const val = val__new(argv__ctx, be, params)
		if (ctx.get(be) === undefined) {
			if (val === undefined) {
				throw new Error(
					`be_: ${
						id
						? String(id) + ': '
						: ''
					}: val_ must return a non-undefined value. ${
						id
						? ''
						: '\n' + val__new.toString()
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
	be.id = id
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
	ctx__set(ctx, be, val, be__is_source_(be))
}
/**
 * @param {Ctx}ctx
 * @param {Be|string|symbol}be_OR_id
 * @param {unknown}val
 * @param {is_source__T}[is_source_]
 * @returns {unknown}
 * @private
 */
export function ctx__set(
	ctx,
	be_OR_id,
	val,
	is_source_
) {
	if (is_source_ == null) is_source_ = ()=>true
	const source__map_ctx = source__map_ctx_(ctx, is_source_)
	if (!source__map_ctx) return
	source__map_ctx.set(be_OR_id, val)
	const { id } = be_OR_id
	if (id) {
		source__map_ctx.set(id, val)
	}
}
/**
 * @param {Be}be
 * @param {Ctx}ctx
 * @private
 */
export function be__delete(be, ctx) {
	ctx__delete(ctx, be, be__is_source_(be))
}
/**
 * @param {Ctx}ctx
 * @param {Be|string|symbol}be_OR_id
 * @param {is_source__T}[is_source_]
 */
export function ctx__delete(
	ctx,
	be_OR_id,
	is_source_
) {
	if (is_source_ == null) is_source_ = ()=>true
	if (isArray(ctx)) {
		for (let i = 0; i < ctx.length; i++) {
			if (is_source_(ctx[i], ctx)) {
				ctx__delete(ctx[i], be_OR_id)
			}
		}
	} else {
		/** @type {MapCtx} */
		const map_ctx = /** @type {any} */ctx
		if (is_source_(map_ctx, ctx)) {
			const { id } = be_OR_id
			if (id) {
				map_ctx.delete(id)
			}
			map_ctx.delete(be_OR_id)
		}
	}
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
