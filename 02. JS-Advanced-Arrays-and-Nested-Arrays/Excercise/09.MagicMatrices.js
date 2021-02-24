{
    function solve(matrix) {

        let flatMatrix = matrix.concat(...[]);
       // let magicNumber = sumArr(flatMatrix[0]);

        function sumArr(arr) {
            return arr.reduce((a, b) => a + b, 0);
        }

        /*let filter = flatMatrix.filter(arr=>sumArr(arr)!==magicNumber);
        if (filter.length>=1){
            return 'false';
        }else{
    /!*
        for (let i = 0; i <flatMatrix.length; i++) {
            if(sumArr(flatMatrix[i])!==magicNumber){
                return 'false';
            }
        }
    *!/
    */
     return    flatMatrix.every(value => sumArr(value)===sumArr(flatMatrix[0]));
    /*    if (flatMatrix.some(arr => sumArr(arr) !== magicNumber)) {
            return 'false';
        } else {
            return 'true';
        }*/
    }

    console.log(solve([
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]]
    ));
//expected output - true
    console.log(solve([
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]]
    ));
}
//expected output - false