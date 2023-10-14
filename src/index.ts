
interface Dict<T> {
  [Key: string]: T;
}

/** Units/Terms */
const Units: Dict<string> = {

  // Generic/Vague/Texture or Container Specific
  bottle: 'btl',
  bunch: 'bn',
  bushel: 'bu',
  can: 'cn',
  clove: 'cl',
  dash: 'ds',
  dozen: 'doz',
  drop: 'dp',
  each: 'ea',
  filet: 'fil',
  handful: 'hf',
  head: 'hd',
  half: '½',
  large: 'lg',
  medium: 'md',
  package: 'pkg',
  packet: 'pkt',
  peck: 'pk',
  piece: 'pc',
  pinch: 'pn',
  quarter: '¼',
  serving: 'serv',
  sheet: 'sh',
  slice: 'sl',
  small: 'sm',
  sprig: 'sp',
  stalk: 'stlk',
  stick: 'stck',
  strip: 'stp',

  // Literals (plural distinct)
  loaf: 'lf',
  loaves: 'lvs',

  // Height/Length/Depth
  centimeter: 'cm',
  inch: 'in',
  inches: 'in',
  millimeter: 'mm',

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
  cup: 'c',
  fluid: 'fl',
  // 'fluid ounce': 'fl oz', // handled by splitting and rejoining both words abbrevs
  gallon: 'gal',
  liter: 'l',
  milliliter: 'ml',
  pint: 'pt',
  quart: 'qt',

  // Spoon Size
  dessertspoon: 'dsp',
  tablespoon: 'tbsp',
  teaspoon: 'tsp'
}

/**
 * If the unit is plural convert it to singular form
 * @param {string} unit - The unit we are obtaining the abbreviation of
 * @returns {string} - The converted unit to singular form
 */
function toSingular(unit: string): string {
  if (unit.endsWith('s') && Units[unit.slice(0, -1)] !== undefined) {
    return unit.slice(0, -1);
  }
  return unit;
}

/**
* Check if the original unit was capitalize and capitalize the first letter of the abbreviation
* @param {string} unit - The unit we are obtaining the abbreviation of
* @param {string} abbr - The abbreviation
* @returns {string} - First letter capitalized of the abbreviation
*/
function capitalFirstLetter(unit: string, abbr: string): string {
  if (unit.charAt(0) === unit.charAt(0).toUpperCase()) {
    abbr = abbr.charAt(0).toUpperCase() + abbr.substring(1);
    if (abbr.split(' ').length > 1) {
      let split: string[] = abbr.split(' ');
      for (let i = 1; i < split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].substring(1);
      }
      abbr = split.join(' ');
    }
  }
  // console.log('[capitalizeFirstLetter]: abbr = ', abbr);
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