import abbr from '../src/index';

describe('index', () => {
  it('should return descriptive string when unit parameter doesn\'t exist in Units dictionary', () => {
    expect(abbr('bacon').match('No abbreviation found for bacon'));
  });
  it('should not return erroneous strings', () => {
    expect(abbr('bunch')).not.toMatch('pillow');
    expect(abbr('small')).not.toMatch('gal');
  });
  it('should not return erroneous strings for multi-word string', () => {
    expect(abbr('large package')).not.toMatch('small clove');
  });
  it('should return singular abbreviation', () => {
    expect(abbr('bottle')).toMatch('btl');
    expect(abbr('bushel')).toMatch('bu');
    expect(abbr('cup')).toMatch('c');
    expect(abbr('loaf')).toMatch('lf');
    expect(abbr('inch')).toMatch('in');
    expect(abbr('pound')).toMatch('lb');
    expect(abbr('bunch')).toMatch('bn');
  });
  it('should return plural abbreviation', () => {
    expect(abbr('loaves')).toMatch('lvs');
    expect(abbr('inches')).toMatch('in');
    expect(abbr('pounds')).toMatch('lbs');
    expect(abbr('cups')).toMatch('c');
    expect(abbr('bottles')).toMatch('btl');
    expect(abbr('bunches')).toMatch('bn');
  });
  it('should return appropriately capitalized abbreviation for single word strings', () => {
    expect(abbr('Milliliter')).toMatch('mL');
    expect(abbr('milliliter')).toMatch('ml');
    expect(abbr('Centiliter')).toMatch('cL');
    expect(abbr('centiliter')).toMatch('cl');
    expect(abbr('Pounds')).toMatch('Lbs');
    expect(abbr('grams')).toMatch('g');
    expect(abbr('Tablespoons')).toMatch('Tbsp');
  });
  it('should return corresponding abbreviation for multiple words in a string', () => {
    expect(abbr('fluid ounce')).toMatch('fl oz');
    expect(abbr('fluid ounces')).toMatch('fl oz');
    expect(abbr('half dozen')).toMatch('½ doz');
    expect(abbr('large loaves')).toMatch('lg lvs');
  });
  it('should return corresponding abbreviation for multiple words in a string matching capitalization if first word capitalized', () => {
    expect(abbr('Small Cloves')).toMatch('Sm Cl');
    expect(abbr('Medium head')).toMatch('Md Hd');
    expect(abbr('quarter Can')).toMatch('¼ cn');
  });
  it('should return descriptive string when multi-word unit parameter doesn\'t find matches for all words', () => {
    expect(abbr('Large White Gloves')).toMatch('No abbreviation found for Large White Gloves');
  });
});