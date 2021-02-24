
    // const carInfo=arr
    //       .map((line) => line.split(' | '))
    //       .reduce((storage, cars) => {
    //           let [brand, model, quantity] = cars;
    //           if (!storage.has(brand)) {
    //               storage.set(brand,new Map());
    //           }
    //           if (!storage.get(brand).has(model)) {
    //               storage.get(brand).set(model,0);
    //           }
    //           storage.get(brand).set(model,( storage.get(brand).get(model) +Number(quantity)));
    //           return storage;
    //       }, new Map);
//WITH REDUCE
console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));
//expected output - 60


//<---- INPUT ---->
// ['Audi | Q7 | 1000',
// 'Audi | Q6 | 100',
// 'BMW | X5 | 1000',
// 'BMW | X6 | 100',
// 'Citroen | C4 | 123',
// 'Volga | GAZ-24 | 1000000',
// 'Lada | Niva | 1000000',
// 'Lada | Jigula | 1000000',
// 'Citroen | C4 | 22',
// 'Citroen | C5 | 10']
//<---- OUTPUT ---->
//Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000
function solve(arr) {
    let carsMap = new Map();
    for (const line of arr) {
        let [brand, model, quantity] = line.split(' | ');
        if (!carsMap.has(brand)) {
            carsMap.set(brand, new Map());
        }
        let mapModels = carsMap.get(brand);
        if (!mapModels.has(model)) {
            mapModels.set(model, 0);
        }
        mapModels.set(model, mapModels.get(model) + Number(quantity));
    }
    for (const brand of carsMap.keys()) {
        console.log(brand);
        let mapModels = carsMap.get(brand);
        for (const model of mapModels.keys()) {
            console.log(`###${model} -> ${mapModels.get(model)}`);
        }
    }
}