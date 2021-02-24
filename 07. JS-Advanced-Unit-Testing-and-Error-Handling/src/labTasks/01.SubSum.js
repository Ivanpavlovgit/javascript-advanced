function solve(arr, start, end) {
    if (start < 0) {
        start = 0;
    }
    if (Array.isArray(arr) === false) {
        return NaN
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    return arr.slice(start, end + 1).reduce((a, c) => a + Number(c), 0);
}

function demoTest(id, actual, expected) {
    if (actual == expected) {
        console.log(`Test ${id} Passed`);
    } else {
        console.error(`Test ${id} failed`);
    }
}
demoTest(1,solve([10, 20, 30, 40, 50, 60], 3, 300),150);
demoTest(2,solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(2),3.3);
//test(3,solve([10, 'twenty', 30, 40], 0, 2),Number.NaN);
demoTest(4,solve([], 1, 2),0);
//test(5,solve('text', 0, 2),Number.NaN);

console.log('---------------------------------------------------------');
console.log('Case 1');
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300) === 150);
console.log('Case 2');
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(2) == 3.3);
console.log('Case 3');
console.log(Number.isNaN(solve([10, 'twenty', 30, 40], 0, 2)));
console.log('Case 4');
console.log(solve([], 1, 2) === 0);
console.log('Case 5');
console.log(Number.isNaN(solve('text', 0, 2)));
//expected output -
//150
//3.3
//NaN
//0
//NaN