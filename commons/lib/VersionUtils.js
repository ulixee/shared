"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextVersion = exports.isSemverSatisfied = void 0;
const semver = require("semver");
function isSemverSatisfied(version, isSatisfiedByVersion) {
    return semver.satisfies(isSatisfiedByVersion, `~${version}`, { includePrerelease: true });
}
exports.isSemverSatisfied = isSemverSatisfied;
function nextVersion(version) {
    return semver.inc(version, 'patch');
}
exports.nextVersion = nextVersion;
//# sourceMappingURL=VersionUtils.js.map