/** Interface w/ Generic for custom dictionary of units */
interface Dict<T> {
  [Key: string]: T;
}

/** Units/Terms dictionary*/
const Units: Dict<string> = {
  // Generic/Subjective
  bottle: 'btl',
  bunch: 'bn',
  bunches: 'bn',
  bushel: 'bu',
  can: 'cn',
  clove: 'cl',
  dash: 'ds',
  dashes: 'ds',
  dozen: 'doz',
  drop: 'dp',
  each: 'ea',
  filet: 'fil',
  handful: 'hf',
  head: 'hd',
  loaf: 'lf',
  loaves: 'lvs',
  package: 'pkg',
  packet: 'pkt',
  peck: 'pk',
  piece: 'pc',
  pieces: 'pcs',
  pinch: 'pn',
  pinches: 'pn',
  serving: 'serv',
  sheet: 'sh',
  slice: 'sl',
  sprig: 'sp',
  stalk: 'stlk',
  stick: 'stck',
  strip: 'stp',

  // Size
  large: 'lg',
  medium: 'md',
  small: 'sm',
  
  // Common Fractions
  half: '½',
  quarter: '¼',
  third: '⅓',
  
  // Height/Length/Depth
  centimeter: 'cm',
  centimetre: 'cm',
  inch: 'in',
  inches: 'in',
  millimeter: 'mm',
  millimetre: 'mm',

  // Weight
  gram: 'g',
  kilogram: 'kg',
  microgram: 'µg',
  milligram: 'mg',
  ounce: 'oz',
  pound: 'lb',
  pounds: 'lbs',

  // Volume/Capacity
  centiliter: 'cl',
  centilitre: 'cl',
  cup: 'c',
  fluid: 'fl',
  gallon: 'gal',
  liter: 'l',
  litre: 'l',
  milliliter: 'ml',
  millilitre: 'ml',
  pint: 'pt',
  quart: 'qt',
  quarts: 'qts',

  // Spoon Size
  dessertspoon: 'dsp',
  dessertspoons: 'dsps',
  tablespoon: 'tbsp',
  tablespoons: 'tbsps',
  teaspoon: 'tsp',
  teaspoons: 'tsps'
}

/**
 * If the unit is plural convert it to singular form
 * unless the unit matches a key with the trailing 's'
 * @param {string} unit - The unit we are obtaining the abbreviation of
 * @returns {string} - The converted unit to singular form
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
* @returns {string} - First letter capitalized of the abbreviation
*/
function capitalFirstLetter(unit: string, abbr: string): string {
  if (unit.charAt(0) === unit.charAt(0).toUpperCase()) {
    if (abbr === 'ml' || abbr === 'cl') {
      abbr = abbr.slice(0, -1) + abbr.slice(-1).toUpperCase();
    } else {
      abbr = abbr.charAt(0).toUpperCase() + abbr.substring(1);
    }
    if (abbr.split(' ').length > 1) {
      let split: string[] = abbr.split(' ');
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
* @returns {string} - The abbreviation for the given unit
*/
function getAbbr(unit: string): string {
  let abbr: string = Units[unit.toLowerCase()];
  let split: string[] = unit.toLowerCase().split(' ');
  if (typeof abbr === 'undefined') {
    if (split.length > 1) {
      let split: string[] = unit.toLowerCase().split(' ');
      abbr = Units[toSingular(split[0])];
      for (let i = 1; i < split.length; i++) {
        abbr += ' ' + Units[toSingular(split[i])];
      }
    } else {
      abbr = Units[toSingular(unit.toLowerCase())];
    }
  }
  return abbr;
}

/**
* The public abbreviation conversion method
* @param {string} unit - The unit we are obtaining the abbreviation of
* @returns {string} - The abbreviation of the unit if it exists in our Units data
*/
export default function toAbbreviation(unit: string): string {
  let abbr = getAbbr(unit);
  if (typeof abbr !== 'undefined' && !abbr.toLowerCase().includes('undefined')) {
      return capitalFirstLetter(unit, abbr);
  }
  return `No abbreviation found for ${unit}.`;
}

module.exports = toAbbreviation;

// Allow use of default import syntax in TypeScript
module.exports.default = toAbbreviation;