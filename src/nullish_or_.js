export function nullish_or_(val, or_) {
	if (val === undefined) return undefined
	if (val === null) return null
	return or_()
}

