"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanHomeDir = exports.safeOverwriteFile = exports.readFileAsJson = exports.copyDir = exports.existsAsync = void 0;
const fs_1 = require("fs");
const Os = require("os");
const crypto = require("crypto");
async function existsAsync(path) {
    try {
        await fs_1.promises.access(path);
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.existsAsync = existsAsync;
async function copyDir(fromDir, toDir) {
    await fs_1.promises.mkdir(toDir, { recursive: true });
    for (const file of await fs_1.promises.readdir(fromDir, { withFileTypes: true })) {
        const path = `${fromDir}/${file.name}`;
        if (file.isDirectory())
            await copyDir(path, `${toDir}/${file.name}`);
        else
            await fs_1.promises.copyFile(path, `${toDir}/${file.name}`);
    }
}
exports.copyDir = copyDir;
async function readFileAsJson(path) {
    const buffer = await fs_1.promises.readFile(path, 'utf8').catch(() => null);
    if (!buffer)
        return null;
    return JSON.parse(buffer);
}
exports.readFileAsJson = readFileAsJson;
// Nodejs doesn't guarantee it will complete writing to the file if multiple processes are writing and/or the process shuts down.
async function safeOverwriteFile(path, body) {
    if (await existsAsync(path)) {
        const tempId = crypto.randomBytes(16).toString('hex');
        const tmpPath = `${path}.${tempId}`;
        await fs_1.promises.writeFile(tmpPath, body);
        await fs_1.promises.rename(tmpPath, path);
    }
    else {
        await fs_1.promises.writeFile(path, body);
    }
}
exports.safeOverwriteFile = safeOverwriteFile;
const homeDirReplace = new RegExp(Os.homedir(), 'g');
function cleanHomeDir(str) {
    return str.replace(homeDirReplace, '~');
}
exports.cleanHomeDir = cleanHomeDir;
//# sourceMappingURL=fileUtils.js.map