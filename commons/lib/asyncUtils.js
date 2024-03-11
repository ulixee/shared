"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = exports.first = exports.all = exports.length = exports.debounce = void 0;
function debounce(func, wait) {
    let timeout;
    return function runLater() {
        function later() {
            timeout = undefined;
            func();
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, wait).unref();
    };
}
exports.debounce = debounce;
function length(source) {
    return (async () => {
        let count = 0;
        for await (const _ of source)
            count++;
        return count;
    })();
}
exports.length = length;
function all(source) {
    return (async () => {
        const results = [];
        for await (const x of source)
            results.push(x);
        return results;
    })();
}
exports.all = all;
function first(source) {
    return (async () => {
        // eslint-disable-next-line no-unreachable-loop
        for await (const entry of source)
            return entry;
    })();
}
exports.first = first;
function last(source) {
    return (async () => {
        let item;
        for await (const entry of source)
            item = entry;
        return item;
    })();
}
exports.last = last;
//# sourceMappingURL=asyncUtils.js.map