export function extract(value, properties) {
    let result = {
    };
    for (const property of Object.keys(properties)){
        result[property] = value[property];
    }
    return result;
}

//# sourceMappingURL=index.js.map