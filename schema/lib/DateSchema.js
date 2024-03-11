"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const assert = require("assert");
const BaseSchema_1 = require("./BaseSchema");
class DateSchema extends BaseSchema_1.default {
    constructor(config = {}) {
        super(config);
        this.typeName = 'date';
        if ((0, BaseSchema_1.isDefined)(config.future))
            assert(typeof config.future === 'boolean', 'future must be a boolean');
        if ((0, BaseSchema_1.isDefined)(config.past))
            assert(typeof config.past === 'boolean', 'past must be a boolean');
        assert(!(config.past && config.future), "can't be both past and future");
    }
    validationLogic(value, path, tracker) {
        const mDate = moment(value);
        if (!mDate.isValid()) {
            return this.incorrectType(value, path, tracker);
        }
        const config = this;
        if (config.future && !mDate.isAfter(new Date())) {
            return this.failedConstraint(value, ' Value is not a date in the future.', path, tracker);
        }
        if (config.past && !mDate.isBefore(new Date())) {
            return this.failedConstraint(value, ' Value is not a date in the past.', path, tracker);
        }
    }
}
exports.default = DateSchema;
//# sourceMappingURL=DateSchema.js.map