function sort(arr, typeOfSort) {
    const map = {

        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a,

    }

    return arr.sort(map[typeOfSort]);
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));
//expected output - [6, 7, 8, 14, 17]
console.log(sort([14, 7, 17, 6, 8], 'desc'));
//expected output - [17, 14, 8, 7, 6]