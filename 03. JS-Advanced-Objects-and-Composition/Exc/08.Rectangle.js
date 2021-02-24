function solve(width, height, color) {
function capitalize(word) {
    return word[0].toUpperCase()+word.slice(1);

}
    let rect =
    {
        width, height, color: capitalize(color),
        calcArea () {
            return this.width*this.height;

        }
    }
    return rect;
}

console.log(solve(4, 5, 'red'));
//expected output -
// 4
// 5
// Red
// 20