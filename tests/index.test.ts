import abbr from '../src/index';

describe('index', () => {
  it('should return descriptive string when unit parameter doesn\'t exist in Units dictionary', () => {
    expect(abbr('bacon').match('No abbreviation found for bacon'));
  });
  it('should return descriptive string when multi-word unit parameter doesn\'t find matches for all words', () => {
    expect(abbr('Large White Gloves')).toMatch('No abbreviation found for Large White Gloves');
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
    expect(abbr('bunch')).toMatch('bn');
    expect(abbr('bushel')).toMatch('bu');
    expect(abbr('can')).toMatch('cn');
    expect(abbr('cup')).toMatch('c');
    expect(abbr('clove')).toMatch('cl');
    expect(abbr('dash')).toMatch('ds');
    expect(abbr('drop')).toMatch('dp');
    expect(abbr('each')).toMatch('ea');
    expect(abbr('filet')).toMatch('fil');
    expect(abbr('handful')).toMatch('hf');
    expect(abbr('head')).toMatch('hd');
    expect(abbr('inch')).toMatch('in');
    expect(abbr('loaf')).toMatch('lf');
    expect(abbr('piece')).toMatch('pc');
    expect(abbr('pound')).toMatch('lb');
  });
  it('should return plural abbreviation', () => {
    expect(abbr('bottles')).toMatch('btl');
    expect(abbr('bunches')).toMatch('bn');
    expect(abbr('bushels')).toMatch('bu');
    expect(abbr('cups')).toMatch('c');
    expect(abbr('cans')).toMatch('cn');
    expect(abbr('cloves')).toMatch('cl');
    expect(abbr('dashes')).toMatch('ds');
    expect(abbr('drops')).toMatch('dp');
    expect(abbr('filets')).toMatch('fil');
    expect(abbr('handfuls')).toMatch('hf');
    expect(abbr('heads')).toMatch('hd');
    expect(abbr('inches')).toMatch('in');
    expect(abbr('loaves')).toMatch('lvs');
    expect(abbr('pieces')).toMatch('pcs');
    expect(abbr('pounds')).toMatch('lbs');
  });
  it('should return appropriately capitalized abbreviation for single word strings', () => {
    expect(abbr('Milliliter')).toMatch('mL');
    expect(abbr('milliliter')).toMatch('ml');
    expect(abbr('Centiliter')).toMatch('cL');
    expect(abbr('centiliter')).toMatch('cl');
    expect(abbr('Pounds')).toMatch('Lbs');
    expect(abbr('grams')).toMatch('g');
    expect(abbr('Tablespoons')).toMatch('Tbsps');
  });
  it('should return corresponding abbreviation for multiple words in a string', () => {
    expect(abbr('fluid ounce')).toMatch('fl oz');
    expect(abbr('fluid ounces')).toMatch('fl oz');
    expect(abbr('half dozen')).toMatch('½ doz');
    expect(abbr('large loaves')).toMatch('lg lvs');
    expect(abbr('large package')).toMatch('lg pkg');
  });
  it('should return corresponding abbreviation for multiple words in a string matching capitalization if first word capitalized', () => {
    expect(abbr('Small Cloves')).toMatch('Sm Cl');
    expect(abbr('Medium head')).toMatch('Md Hd');
    expect(abbr('quarter Can')).toMatch('¼ cn');
  });
});