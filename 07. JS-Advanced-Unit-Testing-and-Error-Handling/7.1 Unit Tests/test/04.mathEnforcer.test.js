const {expect} = require('chai');
const mathEnforcer = require('../src/04.mathEnforcer')
//const sum = require('../src/04.mathEnforcer').sum;
//const addFive =mathEnforcer.addFive
//const subtractTen =mathEnforcer.subtractTen
describe('mathEnforcer', function () {

    it('should return undefined if any of the parameters is not a number', function () {
        expect(mathEnforcer.sum(1,'ImNotANumber')).to.be.undefined;
    });
    it('should return undefined if any of the parameters is not a number', function () {
        expect(mathEnforcer.sum('ImNotANumber',1)).to.be.undefined;
    });
    it('should return undefined if both of the parameters are undefined', function () {
        expect(mathEnforcer.sum()).to.be.undefined;
    });
    it('should return undefined if both parameters are not a number', function () {
        expect(mathEnforcer.sum('ImNotANumber','ImNotANumber')).to.be.undefined;
    });
    it('should return correct sum if both parameters are numbers', function () {
        expect(mathEnforcer.sum(2,1)).to.equal(3);
    });
    it('should return correct sum if both parameters are floating point numbers', function () {
        expect(mathEnforcer.sum(2.2,3.2)).to.equal(5.4);
    });
    it('should return correct sum if both parameters are negative numbers', function () {
        expect(mathEnforcer.sum(-2,-3)).to.equal(-5);
    });
    it('should return correct sum if both parameters are negative floating point numbers', function () {
        expect(mathEnforcer.sum(-2.2,-3.2)).to.equal(-5.4);
    });
    it('should return correct sum if one parameter is negative number', function () {
        expect(mathEnforcer.sum(-2,5)).to.equal(3);
    });

    it('should return undefined if parameter is not a number', function () {
        expect(mathEnforcer.addFive('ImNotANumber')).to.be.undefined;
    });
    it('should return  parameter + 5 if parameter is a number', function () {
        expect(mathEnforcer.addFive(3)).to.equal(8);
    });
    it('should return  parameter + 5 if parameter is a floating point number', function () {
        expect(mathEnforcer.addFive(3.4)).to.equal(8.4);
    });
    it('should return  parameter + 5 if parameter is a negative floating point number', function () {
        expect(mathEnforcer.addFive(-3.4)).to.equal(1.6);
    });
    it('should return  parameter + 5 if parameter is a negative  number', function () {
        expect(mathEnforcer.addFive(-10)).to.equal(-5);
    });
    it('should return undefined if parameter  is undefined', function () {
        expect(mathEnforcer.addFive()).to.be.undefined;
    });

    it('should return undefined  if parameter is not a number', function () {
        expect(mathEnforcer.subtractTen('ImNotANumber')).to.be.undefined;
    });
    it('should return undefined if parameter is undefined', function () {
        expect(mathEnforcer.subtractTen()).to.be.undefined;
    });
    it('should return  parameter -10 if parameter is a number', function () {
        expect(mathEnforcer.subtractTen(3)).to.equal(-7);
    });
    it('should return  parameter -10 if parameter is a negative number', function () {
        expect(mathEnforcer.subtractTen(-3)).to.equal(-13);
    });
    it('should return  parameter -10 if parameter is a floating point number', function () {
        expect(mathEnforcer.subtractTen(3.5)).to.equal(-6.5);
    });
    it('should return  parameter -10 if parameter is a floating point number', function () {
        expect(mathEnforcer.subtractTen(13.5)).to.equal(3.5);
    });
});
