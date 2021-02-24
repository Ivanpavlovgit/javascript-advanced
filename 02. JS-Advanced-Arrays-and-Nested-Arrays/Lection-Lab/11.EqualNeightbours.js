function solve(matrix) {
    let result = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                result++;
            }
            if (matrix[row][col] === matrix[row][col + 1]) {
                result++;
            }
            if (row === matrix.length - 2 && matrix[row + 1][col] === matrix[row + 1][col + 1]) {
                result++;
            }
        }
    }
    return result;
}

console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));
//expected output - 1