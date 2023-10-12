import abbr from '../src/index';

describe('index', () => {
  // it('should return descriptive string when unit parameter doesn't exist as a key in object', () => {
  //   expect(abbr('bacon').toEqual('No abbreviation found for bacon'));
  // });
  it('should return corresponding abbreviation', () => {
    expect(abbr('bacon').match('No abbreviation found for bacon'));
  });
  it('should return corresponding abbreviation for multiple words', () => {
    expect(abbr('fluid ounce').match('fl oz'));
    expect(abbr('half dozen').match('½ doz'));
  });
});