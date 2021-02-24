function solve(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
           this.population += Math.round(this.population * percent / 100);
        },
        applyRecession(percent) {
           this.treasury -= Math.ceil(this.treasury * percent / 100);
        },
    };
}

const result = solve('Tortuga', 7000, 15000)
result.collectTaxes();
console.log(result.treasury);
result.applyGrowth(5);
console.log(result.population);

