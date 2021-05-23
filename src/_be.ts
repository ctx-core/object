import { assign } from './assign'
export const pending_symbol = Symbol('pending')
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 */
export function _be</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
/*@formatter:off*/>(
	key:Key,
	_val:(ctx:Ctx, key:Key, opts?:_be_opts_T)=>Out,
):Be<Ctx, Key, Out> {
	return (ctx:Ctx, opts?:_be_opts_T)=>{
		if (!ctx.hasOwnProperty(key) || opts?.force) {
			let pending = (ctx as any)[pending_symbol]
			if (!pending) {
				pending = {}
				assign(ctx, { [pending_symbol]: pending })
			}
			if (pending[key]) {
				console.trace(`_be: key '${key.toString()}' has a circular dependency`)
				throw `_be: key '${key.toString()}' has a circular dependency`
			}
			pending[key] = true
			const val = _val(ctx, key, opts)
			if (!ctx.hasOwnProperty(key)) {
				if (val === undefined)
					throw `_be: ${String(key)}: function must return a non-undefined value or directly set the ctx with the property ${String(key)}`
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
		opts?:_be_opts_T
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
export interface _be_opts_T {
	force?:boolean
}
export {
	_be as _b,
}
