"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.omit = exports.filterUndefined = void 0;
function filterUndefined(object, omitKeys) {
    if (!object)
        return object;
    const result = {};
    for (const [key, value] of Object.entries(object)) {
        if (omitKeys?.includes(key))
            continue;
        if (value !== undefined)
            result[key] = value;
    }
    return result;
}
exports.filterUndefined = filterUndefined;
function omit(object, keys) {
    object = Object(object);
    const result = {};
    for (const [key, value] of Object.entries(object)) {
        if (!keys.includes(key)) {
            result[key] = value;
        }
    }
    return result;
}
exports.omit = omit;
function pick(object, keys) {
    object = Object(object);
    const result = {};
    for (const [key, value] of Object.entries(object)) {
        if (keys.includes(key)) {
            result[key] = value;
        }
    }
    return result;
}
exports.pick = pick;
//# sourceMappingURL=objectUtils.js.map