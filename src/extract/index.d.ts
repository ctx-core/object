export declare function extract<
	Type,
	TActual extends Type = Type
>(
	value:TActual,
	properties:Record<keyof Type, true>
):Type
