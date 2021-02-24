{
    function solve(strings) {
        let firstNumber = Number(strings.shift());
        let lastNumber = Number(strings.pop());
        return firstNumber + lastNumber;
    }
}

console.log(solve(['20', '30', '40']));
//expected output - 60