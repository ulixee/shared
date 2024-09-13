"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventUtils_1 = require("@ulixee/commons/lib/eventUtils");
require("@ulixee/commons/lib/SourceMapSupport");
class EmittingTransportToCore extends eventUtils_1.TypedEventEmitter {
    constructor() {
        super(...arguments);
        this.host = 'direct';
        this.isConnected = true;
    }
    send(message) {
        this.emit('outbound', message);
        return Promise.resolve();
    }
}
exports.default = EmittingTransportToCore;
//# sourceMappingURL=EmittingTransportToCore.js.map