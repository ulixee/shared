"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtilities = void 0;
const assert = require("assert");
const moment = require("moment");
const Units = ['seconds', 'minutes', 'hours', 'days', 'months', 'years'];
class DateUtilities {
    constructor(config) {
        Object.assign(this, config);
        assert(config.func === 'add' || config.func === 'subtract', 'func must be add or subtract');
        assert(typeof config.quantity === 'number', 'quantity must be a number');
        assert(Units.includes(config.units), `units must be one of ${Units.join(',')}`);
    }
    evaluate(format) {
        let result;
        if (this.func === 'add') {
            result = moment().add(this.quantity, this.units);
        }
        if (this.func === 'subtract') {
            result = moment().subtract(this.quantity, this.units);
        }
        if (format === 'date')
            return result.format('YYYY-MM-DD');
        if (format === 'time')
            return result.format('HH:mm');
        return result.toDate();
    }
}
exports.DateUtilities = DateUtilities;
//# sourceMappingURL=DateUtilities.js.map