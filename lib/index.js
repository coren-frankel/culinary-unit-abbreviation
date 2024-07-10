"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getAbbr;
const units_1 = require("./units");
/**
 * If the unit is plural convert it to singular form
 * unless the unit matches a key with the trailing 's'
 * @param {string} unit - The unit we are obtaining the abbreviation of
 * @returns {string} The converted unit to singular form
 */
function toSingular(unit) {
    if (unit.endsWith('s') && units_1.Units[unit] === undefined) {
        return unit.slice(0, -1);
    }
    return unit;
}
/**
* Tries to retrieve the abbreviation
* @param {string} unit - The unit we are retrieving the abbr. for
* @returns {string} The matching abbreviated unit string
*/
function getAbbr(unit) {
    var _a, _b, _c;
    let lowerUnit = unit.toLowerCase();
    let abbr = units_1.Units[lowerUnit];
    let split = lowerUnit.split(' ');
    let sameCaseSplit = unit.split(' ');
    if (abbr === undefined) {
        if (split.length > 1) {
            abbr = (_a = units_1.Units[toSingular(split[0])]) !== null && _a !== void 0 ? _a : sameCaseSplit[0];
            let i = 1;
            while (i < split.length) {
                abbr += ' ' + ((_b = units_1.Units[toSingular(split[i])]) !== null && _b !== void 0 ? _b : sameCaseSplit[i]);
                i++;
            }
        }
        else {
            abbr = (_c = units_1.Units[toSingular(lowerUnit)]) !== null && _c !== void 0 ? _c : unit;
        }
    }
    return abbr;
}
module.exports = getAbbr;
// Allow use of default import syntax in TypeScript
module.exports.default = getAbbr;
//# sourceMappingURL=index.js.map