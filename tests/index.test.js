"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
describe('index', () => {
    it('should return descriptive string when unit parameter doesn\'t exist in Units dictionary', () => {
        expect((0, index_1.default)('bacon').match('No abbreviation found for bacon'));
    });
    it('should return descriptive string when multi-word unit parameter doesn\'t find matches for all words', () => {
        expect((0, index_1.default)('Large White Gloves')).toMatch('No abbreviation found for Large White Gloves');
    });
    it('should not return erroneous strings', () => {
        expect((0, index_1.default)('bunch')).not.toMatch('pillow');
        expect((0, index_1.default)('small')).not.toMatch('gal');
    });
    it('should not return erroneous strings for multi-word string', () => {
        expect((0, index_1.default)('large package')).not.toMatch('small clove');
    });
    it('should return singular abbreviation', () => {
        expect((0, index_1.default)('bottle')).toMatch('btl');
        expect((0, index_1.default)('bunch')).toMatch('bn');
        expect((0, index_1.default)('bushel')).toMatch('bu');
        expect((0, index_1.default)('can')).toMatch('cn');
        expect((0, index_1.default)('cup')).toMatch('c');
        expect((0, index_1.default)('clove')).toMatch('cl');
        expect((0, index_1.default)('dash')).toMatch('ds');
        expect((0, index_1.default)('drop')).toMatch('dp');
        expect((0, index_1.default)('each')).toMatch('ea');
        expect((0, index_1.default)('filet')).toMatch('fil');
        expect((0, index_1.default)('handful')).toMatch('hf');
        expect((0, index_1.default)('head')).toMatch('hd');
        expect((0, index_1.default)('inch')).toMatch('in');
        expect((0, index_1.default)('loaf')).toMatch('lf');
        expect((0, index_1.default)('piece')).toMatch('pc');
        expect((0, index_1.default)('pound')).toMatch('lb');
    });
    it('should return plural abbreviation', () => {
        expect((0, index_1.default)('bottles')).toMatch('btl');
        expect((0, index_1.default)('bunches')).toMatch('bn');
        expect((0, index_1.default)('bushels')).toMatch('bu');
        expect((0, index_1.default)('cups')).toMatch('c');
        expect((0, index_1.default)('cans')).toMatch('cn');
        expect((0, index_1.default)('cloves')).toMatch('cl');
        expect((0, index_1.default)('dashes')).toMatch('ds');
        expect((0, index_1.default)('drops')).toMatch('dp');
        expect((0, index_1.default)('filets')).toMatch('fil');
        expect((0, index_1.default)('handfuls')).toMatch('hf');
        expect((0, index_1.default)('heads')).toMatch('hd');
        expect((0, index_1.default)('inches')).toMatch('in');
        expect((0, index_1.default)('loaves')).toMatch('lvs');
        expect((0, index_1.default)('pieces')).toMatch('pcs');
        expect((0, index_1.default)('pounds')).toMatch('lbs');
    });
    it('should return appropriately capitalized abbreviation for single word strings', () => {
        expect((0, index_1.default)('Milliliter')).toMatch('mL');
        expect((0, index_1.default)('milliliter')).toMatch('ml');
        expect((0, index_1.default)('Centiliter')).toMatch('cL');
        expect((0, index_1.default)('centiliter')).toMatch('cl');
        expect((0, index_1.default)('Pounds')).toMatch('Lbs');
        expect((0, index_1.default)('grams')).toMatch('g');
        expect((0, index_1.default)('Tablespoons')).toMatch('Tbsps');
    });
    it('should return corresponding abbreviation for multiple words in a string', () => {
        expect((0, index_1.default)('fluid ounce')).toMatch('fl oz');
        expect((0, index_1.default)('fluid ounces')).toMatch('fl oz');
        expect((0, index_1.default)('half dozen')).toMatch('½ doz');
        expect((0, index_1.default)('large loaves')).toMatch('lg lvs');
        expect((0, index_1.default)('large package')).toMatch('lg pkg');
    });
    it('should return corresponding abbreviation for multiple words in a string matching capitalization if first word capitalized', () => {
        expect((0, index_1.default)('Small Cloves')).toMatch('Sm Cl');
        expect((0, index_1.default)('Medium head')).toMatch('Md Hd');
        expect((0, index_1.default)('quarter Can')).toMatch('¼ cn');
    });
});
//# sourceMappingURL=index.test.js.map