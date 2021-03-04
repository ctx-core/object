/**
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 */
export declare function _extract<Type>(properties: Record<keyof Type, true>): <TActual extends Type>(value: TActual) => Type;
