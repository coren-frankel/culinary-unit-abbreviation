# culinary-unit-abbreviation
A npm library that converts various culinary units or terms to their respective abbreviations, in TypeScript & JavaScript.


[![published npm version](https://img.shields.io/npm/v/culinary-unit-abbreviation)](https://www.npmjs.com/package/culinary-unit-abbreviation) [![codecov](https://codecov.io/gh/coren-frankel/culinary-unit-abbreviation/graph/badge.svg?token=EDSMT8ZK96)](https://codecov.io/gh/coren-frankel/culinary-unit-abbreviation) [![npm monthly downloads](https://img.shields.io/npm/dm/culinary-unit-abbreviation)](https://www.npmjs.com/package/culinary-unit-abbreviation) [![type definitions](https://img.shields.io/npm/types/culinary-unit-abbreviation)](https://www.npmjs.com/package/culinary-unit-abbreviation) [![license](https://img.shields.io/npm/l/culinary-unit-abbreviation)](https://www.npmjs.com/package/culinary-unit-abbreviation)

## Features

- Convert common & niche culinary units for Height, Length, Depth, Weight, Volume, Capacity, Size, and Spoons to matching abbreviations.
- Parses and converts the plural form of the unit to its respective abbreviation if it exists in our data.
- Passing capitalized unit returns its respective abbreviation also capitalized (in *multi-worded strings*, only if the first word was capitalized).
- Handles international & American spelling of units like (non-exclusive):
  * centimetre & centimeter
  * litre & liter
- Returns a verbose string when no match exists in our data (or in *multi-worded strings*, if at least one word lacks a match). i.e. input: 'yellow' returns: `No abbreviation found for yellow.`


## Prerequisites 

You need npm installed.
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

// Convert the unit 'Millilitre' to 'mL'
abbr('Millilitre');

// Convert the unit 'Pounds' to 'Lbs'
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
Dimitar Dimitrov - [unit-abbreviation](https://github.com/cranzy/unit-abbreviation) - library structure & README boilerplate inspiration
Basarat Ali Syed - "That TypeScript Guy" - [TypeScript for Professionals - 2023 Edition](https://www.udemy.com/course/typescript-for-professionals/) Udemy course

## License
MIT
