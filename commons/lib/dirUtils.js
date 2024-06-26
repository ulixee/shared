"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProjectPathAsync = exports.findProjectPathSync = exports.cleanHomeDir = exports.getDataDirectory = void 0;
const Fs = require("fs");
const os = require("os");
const Path = require("path");
const envUtils_1 = require("./envUtils");
const fileUtils_1 = require("./fileUtils");
function getDataDirectory() {
    if (process.env.ULX_DATA_DIR) {
        return (0, envUtils_1.parseEnvPath)(process.env.ULX_DATA_DIR);
    }
    if (process.platform === 'linux') {
        return process.env.XDG_DATA_HOME || Path.join(os.homedir(), '.local', 'share');
    }
    if (process.platform === 'darwin') {
        return Path.join(os.homedir(), 'Library', 'Application Support');
    }
    if (process.platform === 'win32') {
        return process.env.LOCALAPPDATA || Path.join(os.homedir(), 'AppData', 'Local');
    }
    throw new Error(`Unsupported platform: ${process.platform}`);
}
exports.getDataDirectory = getDataDirectory;
const homeDirReplace = new RegExp(os.homedir(), 'g');
function cleanHomeDir(str) {
    return str.replace(homeDirReplace, '~');
}
exports.cleanHomeDir = cleanHomeDir;
function findProjectPathSync(startingDirectory) {
    let last;
    let path = Path.resolve(startingDirectory);
    do {
        last = path;
        if (Fs.existsSync(Path.join(path, 'package.json'))) {
            return path;
        }
        path = Path.dirname(path);
    } while (path && path !== last);
    return path;
}
exports.findProjectPathSync = findProjectPathSync;
async function findProjectPathAsync(startingDirectory) {
    let last;
    let path = Path.resolve(startingDirectory);
    do {
        last = path;
        if (await (0, fileUtils_1.existsAsync)(Path.join(path, 'package.json'))) {
            return path;
        }
        path = Path.dirname(path);
    } while (path && path !== last);
    return path;
}
exports.findProjectPathAsync = findProjectPathAsync;
//# sourceMappingURL=dirUtils.js.map