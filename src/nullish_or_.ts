import type { nullish } from '@ctx-core/function'
export function nullish_or_<Val = unknown>(val:Val):Val|nullish {
  if (val === undefined) return undefined
  if (val === null) return null
	return val
}
