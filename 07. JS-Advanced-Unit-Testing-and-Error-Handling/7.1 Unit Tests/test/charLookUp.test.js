const {expect} = require('chai');
const lookupChar = require('../src/charLookUp')
describe('charLookUp', function () {
    it('should return undefined if first parameter is not a string', function () {
        expect(lookupChar(1, 2)).to.be.undefined;
    });
    it('should return undefined if first parameter is not  there', function () {
        expect(lookupChar(2)).to.be.undefined;
    });
    it('should return undefined if second parameter is not there', function () {
        expect(lookupChar('1')).to.be.undefined;
    });
    it('should return undefined if second parameter is not a number', function () {
        expect(lookupChar('i am a string', 'im not a number')).to.be.undefined;
    });
    it('should return undefined if second parameter is floating point', function () {
        expect(lookupChar('i am a string', 2.25)).to.be.undefined;
    });
    it('should return -Incorrect index- if second parameter is negative', function () {
        expect(lookupChar('MyLengthIs12', -5)).to.equal('Incorrect index');
    });
    it('should return -Incorrect index- if second parameter greater than length of first parameter', function () {
        expect(lookupChar('MyLengthIs12', 13)).to.equal('Incorrect index');
    });
    it('should return -Incorrect index- if second parameter is equal to the length of first parameter', function () {
        expect(lookupChar('MyLengthIs12', 12)).to.equal('Incorrect index');
    });
    it('should return correct char if both parameters are correct', function () {
        expect(lookupChar('I should return I at 0 index ', 0)).to.equal('I');
    });
    it('should return correct char if both parameters are correct again', function () {
        expect(lookupChar('I should return s at 2 index ', 2)).to.equal('s');
    });
});