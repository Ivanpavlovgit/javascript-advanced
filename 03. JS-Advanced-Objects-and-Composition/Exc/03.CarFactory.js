function solve(car) {
    let outputCar = {};
    outputCar.model = car.model;
    if (car.power <= 90) {
        outputCar.engine = {power: 90, volume: 1800};
    } else if (car.power <= 120) {
        outputCar.engine = {power: 120, volume: 2400};
    } else {
        outputCar.engine = {power: 200, volume: 3500};
    }



outputCar.carriage = {
    type: car.carriage,
    color: car.color
}
let d = car.wheelsize;
if (d % 2 === 0) {
    d -= 1;
}
outputCar.wheels = [d, d, d, d];
return outputCar;
}

//Small engine: { power: 90, volume: 1800 }
// Normal engine: { power: 120, volume: 2400 }
// Monster engine: { power: 200, volume: 3500 }

console.log(solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

//expected output -
// { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }