{
    function solve(arr) {
        return arr.reduce(function (result, currentValue) {
            if (currentValue >= result[result.length - 1] || result.length === 0) {
                result.push(currentValue);

            }
            return result;
        }, []);
    }

    console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
    console.log(solve([20, 3, 2, 15, 6, 1]));
    console.log(solve([1, 2, 3, 4]));
}

//expected output - 60

/*function solve(arr) {
    let result=[];
    let biggestNumber=0;
    for (let i = 0; i <arr.length; i++) {
        if(arr[i]>=biggestNumber){
            biggestNumber=arr[i];
            result.push(biggestNumber);
        }
    }
    return result;
}*/


//expected output - [1, 3, 8, 10, 12, 24]
/*
function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let element=arr[i];
        if(element>=result[result.length-1]||result.length===0){
            result.push(element);
        }
    }
    return result;
}*/
