/**
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 */
export declare function _extract<T>(properties: Record<keyof T, true>): <TActual extends T>(value: TActual) => T;
