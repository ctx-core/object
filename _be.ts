import { assign } from './assign'
import get = Reflect.get
const pending_symbol = Symbol('pending')
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 */
export function _be<O extends unknown = unknown, C extends object = object>(
	key:string|symbol,
	_val:(ctx:C, key:(string|symbol), opts?:_be_opts_type)=>(void|O),
):(ctx:C, opts?:_be_opts_type)=>O {
	return (ctx:C, opts?)=>{
		if (!ctx.hasOwnProperty(key) || opts?.force) {
			if (!get(ctx, pending_symbol)) {
				assign(ctx, { [pending_symbol]: {} })
			}
			const pending = get(ctx, pending_symbol)
			pending[key] = true
			const val = _val(ctx, key, opts)
			if (!ctx.hasOwnProperty(key)) {
				if (val === undefined)
					throw `_be: ${String(key)}: function must return a non-undefined value or directly set the ctx with the property ${String(key)}`
				assign(ctx, { [key]: val })
			}
			delete pending[key]
		} else if (get(ctx, pending_symbol)?.[key]) {
			console.trace(`_be: key '${key.toString()}' has a circular dependency`)
			throw `_be: key '${key.toString()}' has a circular dependency`
		}
		return get(ctx, key) as O
	}
}
export type Be<O> = (ctx:object, opts?:_be_opts_type)=>O
export interface _be_opts_type {
	force?:boolean
}
export {
	_be as _b,
	Be as B,
}
