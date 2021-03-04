/**
 * _extract takes an array of keys of Type
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 */
export declare function _extract<Type>(properties: [...(keyof Type)[]]): <TActual extends Type>(value: TActual) => Type;
