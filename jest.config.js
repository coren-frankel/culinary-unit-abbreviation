module.exports = {
  transform: {'^.+\\.ts?$': ['ts-jest', {"rootDir": "./src"}]},
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};