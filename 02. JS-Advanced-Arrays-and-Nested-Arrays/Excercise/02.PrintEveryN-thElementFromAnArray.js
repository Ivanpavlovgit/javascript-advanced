{
    function solve(arr, step) {
        let result = [];
        for (let i = 0; i < arr.length / step; i++) {
            result[i] = arr[i * step];
        }

        return result;
    }

    console.log(solve(['5',
            '20',
            '31',
            '4',
            '20'],
        2
    ));
}
//expected output - ['5', '31', '20']