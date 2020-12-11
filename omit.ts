/**
 * New `obj` without `key_a1` keys.
 */
export function omit<T = unknown>(obj: T, ...key_a1: string[]) {
  if (!obj) return
  let memo = {} as T
  for (const key in obj) {
    if (!~key_a1.indexOf(key)) {
      memo[key] = obj[key]
    }
  }
  return memo
}
