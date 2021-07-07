import type { nullish } from '@ctx-core/function'
export function nullish_or_<Out = unknown, Val = unknown>(val:Val, or_:()=>Out):Out|nullish {
  if (val === undefined) return undefined
  if (val === null) return null
	return or_()
}
