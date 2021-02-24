function RGBtoHEX(...rgb) {
    if (rgb.some(e =>
        e < 0 ||
        e > 255 ||
        typeof e != 'number')) {
        return undefined;
    }
    return "#" + rgb.map(decimalToHex).join('').toUpperCase();

    function decimalToHex(n) {
        //   return  n.toString(16).padStart(2,'0'); <- also works
        return ('00' + n.toString(16)).slice(-2);
    }
}

module.exports = RGBtoHEX;