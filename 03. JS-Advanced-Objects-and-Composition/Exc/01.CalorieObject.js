{
    function solve(arr) {
        let result = {};
        let product = []
        let calories = []
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 1) {
                calories.push(arr[i]);
            } else {
                product.push(arr[i]);
            }
        }
        for (let i = 0; i < product.length; i++) {
            let name = product[i];
            result[name] = Number(calories[i]);
        }
        return result;
    }

    console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));}
//expected output - { Yoghurt: 48, Rise: 138, Apple: 52 }