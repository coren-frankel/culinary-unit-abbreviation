interface Dict<T> {
  [Key: string]: T;
}

/** Unit/Term dictionary */
export const Units: Dict<string> = {
  // Generic/Subjective
  bottle: 'btl',
  bunch: 'bn',
  bunches: 'bn',
  bushel: 'bu',
  can: 'cn',
  clove: 'cl',
  dash: 'ds',
  dashes: 'ds',
  dozen: 'doz',
  drop: 'dp',
  each: 'ea',
  filet: 'fil',
  handful: 'hf',
  head: 'hd',
  loaf: 'lf',
  loaves: 'lvs',
  package: 'pkg',
  packet: 'pkt',
  peck: 'pk',
  piece: 'pc',
  pieces: 'pcs',
  pinch: 'pn',
  pinches: 'pn',
  serving: 'serv',
  sheet: 'sh',
  slice: 'sl',
  sprig: 'sp',
  stalk: 'stlk',
  stick: 'stck',
  strip: 'stp',

  // Size
  large: 'lg',
  medium: 'md',
  small: 'sm',
  
  // Common Fractions
  half: '½',
  quarter: '¼',
  third: '⅓',
  
  // Height/Length/Depth
  centimeter: 'cm',
  centimetre: 'cm',
  inch: 'in',
  inches: 'in',
  millimeter: 'mm',
  millimetre: 'mm',

  // Weight
  gram: 'g',
  kilogram: 'kg',
  microgram: 'µg',
  milligram: 'mg',
  ounce: 'oz',
  pound: 'lb',
  pounds: 'lbs',

  // Volume/Capacity
  centiliter: 'cl',
  centilitre: 'cl',
  cup: 'c',
  fluid: 'fl',
  gallon: 'gal',
  liter: 'l',
  litre: 'l',
  milliliter: 'ml',
  millilitre: 'ml',
  pint: 'pt',
  quart: 'qt',
  quarts: 'qts',

  // Spoon Size
  dessertspoon: 'dsp',
  dessertspoons: 'dsps',
  tablespoon: 'tbsp',
  tablespoons: 'tbsps',
  teaspoon: 'tsp',
  teaspoons: 'tsps'
}
