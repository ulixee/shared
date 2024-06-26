"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIpcSocketPath = void 0;
const os = require("os");
function createIpcSocketPath(name) {
    if (os.platform() === 'win32') {
        return `\\\\.\\pipe\\${name}`;
    }
    return `${os.tmpdir()}/${name}.sock`;
}
exports.createIpcSocketPath = createIpcSocketPath;
//# sourceMappingURL=IpcUtils.js.map