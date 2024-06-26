"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWsCloseUnexpectedError = exports.wsSend = exports.isWsOpen = void 0;
const WebSocket = require("ws");
const IPendingWaitEvent_1 = require("@ulixee/commons/interfaces/IPendingWaitEvent");
const CLOSE_UNEXPECTED_ERROR = 1011;
function isWsOpen(ws) {
    if (!ws)
        return false;
    return ws.readyState === WebSocket.OPEN;
}
exports.isWsOpen = isWsOpen;
async function wsSend(ws, json) {
    // give it a second to breath
    await new Promise(process.nextTick);
    if (!isWsOpen(ws)) {
        throw new IPendingWaitEvent_1.CanceledPromiseError('Websocket was not open');
    }
    await new Promise((resolve, reject) => {
        ws.send(json, error => {
            if (error)
                reject(error);
            else
                resolve();
        });
    });
}
exports.wsSend = wsSend;
function sendWsCloseUnexpectedError(ws, message) {
    if (isWsOpen(ws)) {
        ws.close(CLOSE_UNEXPECTED_ERROR, JSON.stringify({ message }));
    }
}
exports.sendWsCloseUnexpectedError = sendWsCloseUnexpectedError;
//# sourceMappingURL=WsUtils.js.map