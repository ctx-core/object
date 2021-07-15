import { assign } from './assign.js'
export const pending_symbol = Symbol('pending')
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export function be_</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
 	/*@formatter:off*/>(
	key:Key,
	val_:be__val__T<Ctx, Key, Out>,
):(ctx:Ctx, opts?:be_opts_T)=>Out /* Duplicated to avoid error TS2742 */ {
	return (ctx:Ctx, opts?:be_opts_T)=>{
		if (!ctx.hasOwnProperty(key) || opts?.force) {
			let pending = (ctx as any)[pending_symbol]
			if (!pending) {
				pending = {}
				assign(ctx, { [pending_symbol]: pending })
			}
			if (pending[key]) {
				console.trace(`be_: key '${key.toString()}' has a circular dependency`)
				throw `be_: key '${key.toString()}' has a circular dependency`
			}
			pending[key] = true
			const val = val_(ctx, key, opts)
			if (!ctx.hasOwnProperty(key)) {
				if (val === undefined)
					throw `be_: ${String(key)}: function must return a non-undefined value or directly set the ctx with the property ${String(key)}`
				assign(ctx, { [key]: val })
			}
			delete pending[key]
		}
		return (ctx as any)[key] as Out
	}
}
export type Be</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/> =
	(
		ctx:Ctx,
		opts?:be_opts_T
	)=>Out
export type B</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/> =
	Be<Ctx, Key, Out>
export type be_T</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/> =
	Be<Ctx, Key, Out>
export type be__val__T</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/> = (ctx:Ctx, key:Key, opts?:be_opts_T)=>Out
export interface be_opts_T {
	force?:boolean
}
export {
	be_ as _be,
	be_ as b_,
	be_ as _b,
}
