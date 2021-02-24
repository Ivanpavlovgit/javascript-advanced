function solve(arr) {
    let result=[];
        for (let i = 1; i <arr.length ; i+=2) {
            result.unshift(arr[i]*2);
        }

    return  result;
  // bellow method doesnt work when multiple occurrences of same element are present in the array
    //  arr.map(e => e * 2).filter(e => arr.indexOf(e) % 2 === 1).reverse();
}

console.log(solve([3,
    0,
    10,
    4,
    7,
    3,]));
//expected output - 50 30
