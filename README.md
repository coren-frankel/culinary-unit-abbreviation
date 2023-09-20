# culinary-unit-abbreviation
A npm library that converts various culinary units or terms to their respective abbreviations

## Attention: Work In Progress...

<div align='center'>
 <img src='https://github.com/coren-frankel/culinary-unit-abbreviation/assets/104476731/036f4fcb-2eab-49f0-8971-4fbaa75713f6' alt='work in progress sign'
 height=250 width=250 />
 <p>This documentation and/or it's code is incomplete at this time. Come back soon!</p>
</div>



## Features

- Convert the most common units for Height, Length, Distance, Range, Depth, Weight, Volume, Capacity, Temperature, and Speed.
- Parses and converts the plural form of the unit to its respective abbreviation if it exists in our data.
- Passing capitalized unit returns its respective abbreviation also capitalized.
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

```js
const abbr = require('culinary-unit-abbreviation');

// Convert the unit 'kilometer' to 'km'
abbr('kilometer');

// Convert the unit 'degrees celsius' to 'C'
abbr('degrees celsius');

// Convert the unit 'Kilogram' to 'Kg'
abbr('Kilogram');

// Conver the unit 'meters' to 'm'
abbr('meters');
```

## Supported conversions

### Generic / Subjective
  * bottle
  * bunch
  * bushel
  * can
  * clove
  * dash
  * dozen
  * drop
  * each
  * filet
  * handful
  * head
  * half
  * large
  * medium
  * package
  * packet
  * peck
  * piece
  * pinch
  * quarter
  * serving
  * sheet
  * slice
  * small
  * sprig
  * stalk
  * stick
  * strip

### Literals (no abbreviation)
  * loaf
  * loaves

### Height/Length/Depth
  * centimeter
  * inch
  * inches
  * millimeter

### Weight
  * gram
  * kilogram
  * microgram
  * milligram
  * ounce
  * pound

### Volume/Capacity
  * centiliter
  * cup 
  * fluid ounce
  * gallon
  * liter
  * milliliter
  * pint
  * quart

### Spoon Size
  * dessertspoon
  * tablespoon
  * teaspoon


## Request An Abbreviation
Want to see another term and it's abbreviation? 
[Submit an Issue](https://github.com/coren-frankel/culinary-unit-abbreviation/issues) with the term, abbreviation, and an example of the term/abbreviation as it is used in culinary arts. 

## Aknowledgments
Dimitar Dimitrov - https://github.com/cranzy/unit-abbreviation

## License
MIT
