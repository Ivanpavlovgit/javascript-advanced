function solve(arr,numberOfRotations) {
    for (let i = 0; i <numberOfRotations ; i++) {
        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}

console.log(solve(['1',
        '2',
        '3',
        '4'],
    2
));
//expected output - 3 4 1 2