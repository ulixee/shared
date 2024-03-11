"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteApiSchemas = void 0;
const zod_1 = require("zod");
const INote_1 = require("../types/INote");
exports.NoteApiSchemas = {
    'Note.get': {
        args: zod_1.z.object({
            noteHash: INote_1.NoteSchema.shape.noteHash,
        }),
        result: zod_1.z.object({ note: INote_1.NoteSchema }),
    },
    'Note.create': {
        args: zod_1.z.object({
            note: INote_1.NoteSchema,
        }),
        result: zod_1.z.object({
            accepted: zod_1.z.boolean(),
        }),
    },
};
//# sourceMappingURL=NoteApis.js.map