import { assign } from './assign'
export const pending_symbol = Symbol('pending')
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 */
export function _be<Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx>(
	key:Key,
	_val:(ctx:Ctx, key:Key, opts?:_be_opts_T)=>(void|Ctx[Key]),
):Be<Ctx, Key> {
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
		return (ctx as any)[key] as NonNullable<Ctx[Key]>
	}
}
export type Be<Ctx extends object = object, Key extends keyof Ctx = keyof Ctx> =
	(
		ctx:Ctx,
		opts?:_be_opts_T
	)=>NonNullable<Ctx[Key]>
export type B<Ctx extends object = object, Key extends keyof Ctx = keyof Ctx> =
	Be<Ctx, Key>
export type be_T<Ctx extends object = object, Key extends keyof Ctx = keyof Ctx> =
	Be<Ctx, Key>
export interface _be_opts_T {
	force?:boolean
}
export {
	_be as _b,
}
