/**
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 */
export declare function extract_<Type>(properties:Record<keyof Type, true>):<TActual extends Type>(value:TActual)=>Type;
export { extract_ as _extract, }
