const {expect} = require('chai');
const rgbToHexColor = require('../src/06.RGB_TO_HEX');
describe('RGB_TO_HEX', function () {
    it('convert black to hex ', function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('convert white to hex ', function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('convert red to hex ', function () {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });
    it('convert green to hex ', function () {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });
    it('convert blue to hex ', function () {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });
    it('return undefined for String params ', function () {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
    });
    it('return undefined for negative R param ', function () {
        expect(rgbToHexColor(-3, 255, 255)).to.be.undefined;
    });
    it('return undefined for param R over 255 ', function () {
        expect(rgbToHexColor(300, 255, 255)).to.be.undefined;
    });
    it('return undefined for negative param G ', function () {
        expect(rgbToHexColor(255, -255, 255)).to.be.undefined;
    });
    it('return undefined for param G over 255 ', function () {
        expect(rgbToHexColor(255, 355, 255)).to.be.undefined;
    });
    it('return undefined for negative B params ', function () {
        expect(rgbToHexColor(255, 222, -255)).to.be.undefined;
    });
    it('return undefined for param B over 255 ', function () {
        expect(rgbToHexColor(255, 255, 455)).to.be.undefined;
    });
    it('convert purple to hex ', function () {
        expect(rgbToHexColor(179, 21, 223)).to.equal('#B315DF');
    });
});