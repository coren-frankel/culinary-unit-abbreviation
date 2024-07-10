import { Units } from './units';

/**
 * If the unit is plural convert it to singular form
 * unless the unit matches a key with the trailing 's'
 * @param {string} unit - The unit we are obtaining the abbreviation of
 * @returns {string} The converted unit to singular form
 */
function toSingular(unit: string): string {
  if (unit.endsWith('s') && Units[unit] === undefined) {
    return unit.slice(0, -1);
  }
  return unit;
}

/**
* Tries to retrieve the abbreviation
* @param {string} unit - The unit we are retrieving the abbr. for
* @returns {string} The matching abbreviated unit string
*/
export default function getAbbr(unit: string): string {
  let lowerUnit: string = unit.toLowerCase();
  let abbr: string | undefined = Units[lowerUnit];
  let split: string[] = lowerUnit.split(' ');
  let sameCaseSplit: string[] = unit.split(' ');
  if (abbr === undefined) {
    if (split.length > 1) {
      abbr = Units[toSingular(split[0])] ?? sameCaseSplit[0];
      let i = 1;
      while (i < split.length) {
        abbr += ' ' + (Units[toSingular(split[i])] ?? sameCaseSplit[i]);
        i++;
      }
    } else {
      abbr = Units[toSingular(lowerUnit)] ?? unit;
    }
  }
  return abbr;
}

module.exports = getAbbr;

// Allow use of default import syntax in TypeScript
module.exports.default = getAbbr;