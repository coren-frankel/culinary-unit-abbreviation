"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
describe('index', () => {
    // it('should return descriptive string when unit parameter doesn't exist as a key in object', () => {
    //   expect(abbr('bacon').toEqual('No abbreviation found for bacon'));
    // });
    it('should return corresponding abbreviation', () => {
        expect((0, index_1.default)('bacon').toEqual('No abbreviation found for bacon'));
    });
    it('should return corresponding abbreviation for multiple words, () => {, expect((0, index_1.default)('fluid ounce').toEqual('fl oz')));
    expect((0, index_1.default)('half').toEqual('dozen'));
});
;
//# sourceMappingURL=index.test.js.map