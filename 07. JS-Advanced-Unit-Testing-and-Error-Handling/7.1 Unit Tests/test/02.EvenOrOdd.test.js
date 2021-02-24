const {expect}=require('chai');
const isOddOrEven=require('../src/02.EvenOrOdd');
describe('evenOrOdd', function () {
    it('should return undefined if input is not a string', function () {
        expect(isOddOrEven(2)).to.be.undefined;
    });
    it('should return odd if input length is odd', function () {
        expect(isOddOrEven('oddly')).to.equal('odd');
    });
    it('should return even if input is not a string', function () {
        expect(isOddOrEven('evenly')).to.equal('even');
    });
});