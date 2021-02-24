{
    function solve(matrix) {
        let mainDiag = 0;
        let secDiag = 0;
        for (let i = 0; i < matrix.length; i++) {
            mainDiag += matrix[i][i];
        }
        for (let i = 0; i < matrix.length; i++) {
            secDiag += matrix[i][matrix.length - i - 1];
        }


        return `${mainDiag} ${secDiag}`;
    }
}
console.log(solve([[20, 40], [10, 60]]));
//expected output - 80 50
