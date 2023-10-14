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

```ts
import abbr from 'culinary-unit-abbreviation';

// Convert the unit 'package' to 'pkg'
abbr('package');

// Convert the unit 'fluid ounces' to 'fl oz'
abbr('fluid ounces');

// Convert the unit 'Milliliter' to 'mL'
abbr('Milliliter');

// Convert the unit 'pint' to 'pt'
abbr('pint');
```

## Supported conversions

### Generic / Subjective
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
  * half
  * large
  * loaf/loaves
  * medium
  * package(s)
  * packet(s)
  * peck(s)
  * piece(s)
  * pinch(es)
  * quarter
  * serving(s)
  * sheet(s)
  * slice(s)
  * small
  * sprig(s)
  * stalk(s)
  * stick(s)
  * strip(s)

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
Want to see another term and it's abbreviation? 
[Submit an Issue](https://github.com/coren-frankel/culinary-unit-abbreviation/issues) with the term, abbreviation, and an example of the term/abbreviation as it is used in culinary arts. 

## Aknowledgments
Dimitar Dimitrov - https://github.com/cranzy/unit-abbreviation - project & README boilerplate
Basarat Ali Syed - That TypeScript Guy - 'TypeScript for Professionals - 2023 Edition' inspiration

## License
MIT
