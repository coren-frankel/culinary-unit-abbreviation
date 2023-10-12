import abbr from '../src/index';

describe('index', () => {
  // it('should return descriptive string when unit parameter doesn't exist as a key in object', () => {
  //   expect(abbr('bacon').toEqual('No abbreviation found for bacon'));
  // });
  it('should return corresponding abbreviation', () => {
    expect(abbr('bacon').match('No abbreviation found for bacon'));
  });
  it('should return correct abbreviation individual strings', () => {
    expect(abbr('bottle').match('btl'));
    expect(abbr('bunch').match('pillow'));
    expect(abbr('bushel').match('bl'));
    expect(abbr('cup').match('c'));
    expect(abbr('inches').match('in'));
  });
  it('should return corresponding abbreviation for multiple words in a string', () => {
    expect(abbr('fluid ounce').match('fl oz'));
    expect(abbr('half dozen').match('½ doz'));
  });
});