import { assign } from './assign.js'
export const pending_symbol = Symbol('pending')
export type Ctx = Map<Be<unknown>|string, unknown>
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export function be_<Out extends NonNullable<unknown>>(
	val_:be__val__T<Out>
):be__return_T<Out>
export function be_<Out extends NonNullable<unknown>>(
	key:string,
	val_:be__val__T<Out>,
):be__return_T<Out>
export function be_<Out extends NonNullable<unknown>>(
	key_or_val_:string|be__val__T<Out>,
	val_?:be__val__T<Out>,
):be__return_T<Out> {
	const be = (ctx:Ctx, opts?:be_opts_T)=>{
		if (!ctx.has(be) || opts?.force) {
			let pending:Map<Be<Out>, boolean> = (ctx as any)[pending_symbol]
			if (!pending) {
				pending = new Map<Be<Out>, boolean>()
				assign(ctx, { [pending_symbol]: pending })
			}
			const key = val_ ? key_or_val_ : undefined
			if (pending.get(be)) {
				console.trace(`be_: key '${String(key)}' has a circular dependency`)
				throw `be_: key '${String(key)}' has a circular dependency`
			}
			if (!val_) {
				val_ = key_or_val_ as be__val__T<Out>
			}
			pending.set(be, true)
			const val = val_(ctx, be, opts)
			if (!ctx.has(be)) {
				if (val === undefined)
					throw `be_: ${String(key)}: function must return a non-undefined value or directly set the ctx with the property ${String(key)}`
				ctx.set(be, val)
			}
			if (key) {
				const key_a = (ctx.get(key as string) || []) as Out[]
				key_a.push(val)
				ctx.set(key as string, key_a)
			}
			pending.delete(be)
		}
		return ctx.get(be) as Out
	}
	return be
}
export type be__return_T<Out extends NonNullable<unknown>> = (ctx:Ctx, opts?:be_opts_T)=>Out
export type Be<Out extends NonNullable<unknown>> = (ctx:Ctx, opts?:be_opts_T)=>Out
export type B<Out extends NonNullable<unknown>> = Be<Out>
export type be_T<Out extends NonNullable<unknown>> = Be<Out>
export type be__val__T<Out extends NonNullable<unknown>> = (ctx:Ctx, key:Be<Out>, opts?:be_opts_T)=>Out
export interface be_opts_T {
	force?:boolean
}
export {
	be_ as _be,
	be_ as b_,
	be_ as _b,
}
