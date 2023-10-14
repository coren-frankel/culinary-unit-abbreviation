import abbr from '../src/index';

describe('index', () => {
  it('should return descriptive string when unit parameter doesn\'t exist as a key in object', () => {
    expect(abbr('bacon').match('No abbreviation found for bacon'));
  });
  it('should not return erroneous strings', () => {
    expect(abbr('bunch')).not.toMatch('pillow');
    expect(abbr('small')).not.toMatch('gal');
  });
  it('should return correct abbreviation individual strings', () => {
    expect(abbr('bottle')).toMatch('btl');
    expect(abbr('bushel')).toMatch('bu');
    expect(abbr('cup')).toMatch('c');
    expect(abbr('inches')).toMatch('in');
    expect(abbr('inch')).toMatch('in');
    expect(abbr('pounds')).toMatch('lbs');
    expect(abbr('pound')).toMatch('lb');
  });
  it('should return singular abbreviation', () => {
    expect(abbr('loaf')).toMatch('lf');
  });
  it('should return plural abbreviation', () => {
    expect(abbr('loaves')).toMatch('lvs');
  });
  it('should return corresponding abbreviation for multiple words in a string', () => {
    expect(abbr('fluid ounce')).toMatch('fl oz');
    expect(abbr('fluid ounces')).toMatch('fl oz');
    expect(abbr('half dozen')).toMatch('½ doz');
    expect(abbr('large loaves')).toMatch('lg lvs');
  });
  it('should return corresponding abbreviation for multiple words in a string despite capitalization', () => {
    expect(abbr('Small Cloves')).toMatch('Sm Cl');
    expect(abbr('Large White Gloves')).not.toMatch('Undefined Undefined Undefined');
    expect(abbr('Large White Gloves')).toMatch('No abbreviation found for Large White Gloves');
  });
  it('should not return erroneous strings for multi-word string', () => {
    expect(abbr('large package')).not.toMatch('small clove');
  });
});