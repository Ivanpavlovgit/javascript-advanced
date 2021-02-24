{
    function solve(input) {
        let result = [];
        let log = {};
        while (input.length) {
            let sale = input.shift();
            let [town, product, price] = sale.split(' | ');
            if (!log[product]) {
                log[product] = {town, price: Number(price)};
            } else {
                log[product] = log[product].price <= Number(price) ? log[product] : {town, price: Number(price)};
            }

        }
        for (const product in log) {
            result.push(`${product} -> ${log[product].price} (${log[product].town})`);
        }

        return result.join('\n');
    }

    console.log(solve([
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']
    ));
}
//expected output -
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)