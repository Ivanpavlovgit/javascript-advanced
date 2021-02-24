{
    function solve(input) {
        let result = {};
        while (input.length) {
            let [name, price] = input.shift().split(' : ');
            let firstLetter = name[0];
            if (!result[firstLetter]) {
                result[firstLetter] = [];
            }
            result[firstLetter].push({name, price: Number(price)});
            result[firstLetter].sort((a, b) => a.name.localeCompare(b.name));
        }
        let output = [];
        Object.entries(result).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
            let values = entry[1]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(product => `  ${product.name}: ${product.price}`)
                .join('\n');
            let string = `${entry[0]}\n${values}`
            output.push(string);

        })
        return output.join('\n');
    }

    console.log(solve([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
    ));
}
//expected output -
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499