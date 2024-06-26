"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashObject = exports.sortedJsonStringify = exports.sha256 = exports.hashMessagePrefix = void 0;
const crypto_1 = require("crypto");
const TypeSerializer_1 = require("./TypeSerializer");
exports.hashMessagePrefix = '\x18Ulixee Signed Message:\n';
function sha256(data) {
    return (0, crypto_1.createHash)('sha256').update(data).digest();
}
exports.sha256 = sha256;
function sortedJsonStringify(obj, ignoreProperties = []) {
    if (!obj) {
        return '{}';
    }
    if (Array.isArray(obj) && !obj.length) {
        return '[]';
    }
    return TypeSerializer_1.default.stringify(obj, { ignoreProperties, sortKeys: true });
}
exports.sortedJsonStringify = sortedJsonStringify;
function hashObject(obj, options) {
    // sort keys for consistent hash
    const json = sortedJsonStringify(obj, options?.ignoreProperties);
    let buffer = Buffer.from(`${exports.hashMessagePrefix}${json.length}${json}`);
    if (options?.prefix)
        buffer = Buffer.concat([options.prefix, buffer]);
    return sha256(buffer);
}
exports.hashObject = hashObject;
//# sourceMappingURL=hashUtils.js.map