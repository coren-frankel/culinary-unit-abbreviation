/** Units/Terms */
var Units = {
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
};
/**
 * If the unit is plural convert it to singular form
 * @param {string} unit - The unit we are obtaining the abbreviation of
 * @returns {string} - The converted unit to singular form
 */
function toSingular(unit) {
    if (unit.endsWith('s')) {
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
function capitalFirstLetter(unit, abbr) {
    // if (unit.split(' ').length > 0) {
    //   let split: string[] = unit.split(' ');
    //   for (let u in split) {
    //     // do this here?
    //   }
    // }
    if (unit.charAt(0) === unit.charAt(0).toUpperCase()) {
        return abbr.charAt(0).toUpperCase() + abbr.substring(1);
    }
    return abbr;
}
/**
* Tries to retrieve the abbreviation
* @param {string} unit - The unit we are retrieving the abbr. for
* @returns {string} - The abbreviation for the given unit
*/
function getAbbr(unit) {
    var abbr = Units[unit.toLowerCase()];
    if (typeof abbr === 'undefined') {
        abbr = Units[toSingular(unit.toLowerCase())];
    }
    if (typeof abbr === 'undefined') {
        if (unit.split(" ").length > 0) {
            var split = unit.split(" ");
            abbr = Units[toSingular(split[0])];
            for (var i = 1; i < split.length; i++) {
                abbr += " " + Units[toSingular(split[i])];
            }
        }
    }
    return abbr;
}
/**
* The public abbreviation conversion method
* @param {string} unit - The unit we are obtaining the abbreviation of
* @returns {string} - The abbreviation of the unit if it exists in our Units data
*/
function toAbbreviation(unit) {
    if (unit) {
        var abbr = getAbbr(unit);
        if (typeof abbr !== 'undefined') {
            return capitalFirstLetter(unit, abbr);
        }
        return "No abbreviation found for ".concat(unit, ".");
    }
    return 'No unit passed';
}
module.exports = toAbbreviation;
// Allow use of default import syntax in TypeScript
module.exports.default = toAbbreviation;
var result = toAbbreviation('half dozen quarts');
console.log(result);
result = toAbbreviation('fluid ounce');
console.log(result);
result = toAbbreviation('bacon');
console.log(result);
