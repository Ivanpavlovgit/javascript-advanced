{
    function solve(numbers) {
        const result = [];
        for (let num of numbers) {
            if (num < 0) {
                result.unshift(num)
            } else {
                result.push(num)
            }
        }
        return result.join("\n");
    }

    console.log(solve([7, -2, 8, 9]));
}
//expected output -
// -2
// 7
// 8
// 9