import abbr from '../src/index';

describe('testing index file', () => {
  test('unrecognized string should return descriptive fault string', () => {
    expect(abbr('bacon').toEqual('No abbreviation found for bacon'));
  });
});