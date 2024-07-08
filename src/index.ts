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
* Check if the original unit was capitalize and capitalize the first letter of the abbreviation
* unless 'ml' or 'cl' was given -- exceptions that capitalize the last letter i.e. 'mL' or 'cL'
* @param {string} unit - The unit we are obtaining the abbreviation of
* @param {string} abbr - The abbreviation
* @returns {string} First letter capitalized of the abbreviation
*/
function capitalFirstLetter(unit: string, abbr: string): string {
  if (unit.charAt(0) === unit.charAt(0).toUpperCase()) {
    if (abbr === 'ml' || abbr === 'cl') {
      abbr = abbr.slice(0, -1) + abbr.slice(-1).toUpperCase();
    } else {
      abbr = abbr.charAt(0).toUpperCase() + abbr.substring(1);
    }
    let split: string[] = abbr.split(' ');
    if (split.length > 1) {
      for (let i = 1; i < split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].substring(1);
      }
      abbr = split.join(' ');
    }
  }
  return abbr;
}

/**
* Tries to retrieve the abbreviation
* @param {string} unit - The unit we are retrieving the abbr. for
* @returns {string} The matching abbreviated unit string
*/
function getAbbr(unit: string): string {
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

/**
* The public abbreviation conversion method
* @param {string} unit - The unit we are obtaining the abbreviation of
* @returns {string} The abbreviation of the unit if it exists in our Units data
*/
export default function toAbbreviation(unit: string): string {
  let abbr = getAbbr(unit);
  return capitalFirstLetter(unit, abbr);
}

module.exports = toAbbreviation;

// Allow use of default import syntax in TypeScript
module.exports.default = toAbbreviation;