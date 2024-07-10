# culinary-unit-abbreviation
A package that converts various culinary unit or term strings to their respective abbreviated strings, in TypeScript & JavaScript.


[![published npm version](https://img.shields.io/npm/v/culinary-unit-abbreviation)](https://www.npmjs.com/package/culinary-unit-abbreviation) [![codecov](https://codecov.io/gh/coren-frankel/culinary-unit-abbreviation/graph/badge.svg?token=EDSMT8ZK96)](https://codecov.io/gh/coren-frankel/culinary-unit-abbreviation) [![npm monthly downloads](https://img.shields.io/npm/dm/culinary-unit-abbreviation)](https://www.npmjs.com/package/culinary-unit-abbreviation) [![type definitions](https://img.shields.io/npm/types/culinary-unit-abbreviation)](https://www.npmjs.com/package/culinary-unit-abbreviation) [![license](https://img.shields.io/npm/l/culinary-unit-abbreviation)](https://www.npmjs.com/package/culinary-unit-abbreviation)

## Features

- Convert common (and niche) culinary units for Height, Length, Depth, Weight, Volume, Capacity, Size, and Spoons to matching abbreviations.
- Parses and converts the plural form of a unit string to its respective abbreviation, if it exists in our data.
- Handles American & British English spelling of units including (non-exclusive):
  * centimetre & centimeter
  * litre & liter
- Modifies the input string, returning any matched words abbreviated and all else preserved.

### Removed
- ~~Passing capitalized unit returns its respective abbreviation also capitalized (in *multi-worded strings*, only if the first word was capitalized).~~ Inconsistent with preserved string logic.

### Coming Soon...
- Optional parameters for customization (i.e. custom units)

### Is Something Missing?
[Create an issue](https://github.com/coren-frankel/culinary-unit-abbreviation/issues/new) to share what would make this library more useful.

## Prerequisites 

You need `npm` installed (or another package manager; instructions follow for npm).
```bash
$ npm install npm@latest -g
```

## Installing

Using npm:

```bash
$ npm install culinary-unit-abbreviation
```

## Example

```ts
import abbr from 'culinary-unit-abbreviation'; // as ES module

// Convert the unit 'tablespoons' to 'tbsps'
abbr('tablespoons');

// Convert the unit 'large clove' to 'lg cl'
abbr('large clove');

// Convert the unit 'fluid ounces' to 'fl oz'
abbr('fluid ounces');
```

```js
const abbr = require('culinary-unit-abbreviation'); // as CommonJS script

// Convert the unit 'half dozen' to '½ doz'
abbr('half dozen');

// Convert the unit 'Millilitre' to 'ml'
abbr('Millilitre');

// Convert the unit 'Pounds' to 'lbs'
abbr('Pounds');
```

## Supported conversions

### Generic/Subjective
  * bottle(s)
  * bunch(es)
  * bushel(s)
  * can(s)
  * clove(s)
  * dash(es)
  * dozen(s)
  * drop(s)
  * each
  * filet(s)
  * handful(s)
  * head(s)
  * loaf/loaves
  * package(s)
  * packet(s)
  * peck(s)
  * piece(s)
  * pinch(es)
  * serving(s)
  * sheet(s)
  * slice(s)
  * sprig(s)
  * stalk(s)
  * stick(s)
  * strip(s)

### Size
  * large
  * medium
  * small

### Common Fractions
  * half
  * quarter
  * third

### Height/Length/Depth
  * centimeter(s)/centimetre(s)
  * inch(es)
  * millimeter(s)/millimetre(s)

### Weight
  * gram(s)
  * kilogram(s)
  * microgram(s)
  * milligram(s)
  * ounce(s)
  * pound(s)

### Volume/Capacity
  * centiliter(s)/centilitre(s)
  * cup(s)
  * fluid ounce(s)
  * gallon(s)
  * liter(s)/litre(s)
  * milliliter(s)/millilitre(s)
  * pint(s)
  * quart(s)

### Spoon Size
  * dessertspoon(s)
  * tablespoon(s)
  * teaspoon(s)


## Request An Abbreviation
Want to see another unit or measurement term and it's abbreviation? Think another abbreviation should replace another? 
[Submit an Issue](https://github.com/coren-frankel/culinary-unit-abbreviation/issues) with the term, abbreviation, and an example of the term/abbreviation as it is used in culinary arts. 

## Aknowledgments
Dimitar Dimitrov - [unit-abbreviation](https://github.com/cranzy/unit-abbreviation) - library boilerplate

## License
MIT
