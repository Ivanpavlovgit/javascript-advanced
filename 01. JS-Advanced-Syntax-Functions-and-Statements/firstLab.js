// 1.Write a function that calculates how much money you need to buy fruit.
// You will receive a string for the type of fruit you want to buy,
// a number for weight in grams and another number for the price per kilogram.
// Print the following text on the console:
// 'I need ${money} to buy {weight} kilograms {fruit}.'
// Print the weight and the money rounded to two decimal places.
// The input comes as three arguments passed to your function.
// The output should be printed on the console.
{
    function solveTask1(fruit, weightGrams, price) {
        const weight = weightGrams / 1000;
        const money = price * weight;

        return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
    }

    console.log(solveTask1('orange', 2500, 1.80));
}
/* 2.Write a function that takes two positive numbers as input and compute the greatest common divisor.
The input comes as two positive integer numbers.
The output should be printed on the console*/
{
    function solveTask2(x, y) {

        while (y>0) {
            let temporary = y;
            y = x % y;
            x = temporary;
        }
        return x;
    }

    console.log(solveTask2(15, 5));

}
/* 3.Write a function that takes an integer number as an input and
check if all the digits in a given number are the same or not.
Print on the console true if all numbers are same and false if not.
On the next line print the sum of all digits.
The input comes as an integer number.*/
{
    function solveTask3(inputNumber) {
        let result = 'true';
        let sumOfDigits = 0;
        let numberAsString = inputNumber.toString();
        let digit = numberAsString[0];
        for (let i = 0; i < numberAsString.length; i++) {
            if (digit !== numberAsString[i]) {
                result = 'false';
            }
            sumOfDigits += Number(numberAsString[i]);
        }


        return `${result}\n${sumOfDigits}`;
    }

    console.log(solveTask3(1234));

}
/* 4.Write a function that calculates how long it takes a student to get to university.
The function takes three numbers:
•The first is the number of steps the student takes from their home to the university
•Тhe second number is the length of the student's footprint in meters
•Тhe third number is the student speed in km/h
Every 500 meters the student rests and takes a 1 minute break.
Calculate how long the student walks from home to university
 and print on the console the result in the following format: 'hours:minutes:seconds'.
The input comes as three numbers.
The output should be printed on the console.
*/
{
    function solveTask4(numberOFSteps, lengthOfFootInMeters, speedKMHr) {
        const speed = speedKMHr * 5 / 18;
        const distance = numberOFSteps * lengthOfFootInMeters;
        const breaks = Math.floor(distance / 500) * 60;
        const timeInSeconds = Math.ceil(distance / speed + breaks);
        const hrsDisplay = (Math.floor(timeInSeconds / 3600)).toString().padStart(2, "0");
        const minuteDisplay = Math.floor(timeInSeconds % 3600 / 60).toString().padStart(2, "0");
        const secondsDisplay = Math.floor(timeInSeconds % 3600 % 60).toString().padStart(2, "0");

        const result = `${hrsDisplay}:${minuteDisplay}:${secondsDisplay}`
        return result;
    }
}
/* 5.Write a function that determines whether a driver is within the speed limit.
You will receive the speed and the area. Each area has a different limit:
•On the motorway the limit is 130 km/h
•On the interstate the limit is 90 km/h
•In the city the limit is 50 km/h
•Within a residential area the limit is 20 km/h
If the driver is within the limits, there should be printed speed and the speed limit.
`Driving {speed} km/h in a {speed limit} zone`
If the driver is over the limit, however,
your function should print the severity of the infraction and the difference in speeds.
`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
For speeding up to 20 km/h over the limit, speeding should be printed
For anything else, reckless driving should be printed
The input comes as 2 string parameters. The first element is the current speed (number),zthe second element is the area.
The output should be printed on the console.
*/
{
    function solveTask5(speed, areaType) {
        const v = speed;
        const area = areaType;
        let limit = 0;
        switch (area) {
            case 'motorway':
                limit = 130;
                break;
            case 'interstate':
                limit = 90;
                break;
            case 'city':
                limit = 50;
                break;
            case 'residential':
                limit = 20;
                break;
        }
        let speeding = v - limit;
        let result;
        if (speeding <= 0) {
            return `Driving ${v} km/h in a ${limit} zone`;
        } else if (speeding <= 20) {
            result = `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - speeding`;
        } else if (speeding <= 40) {
            result = `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - excessive speeding`;
        } else {
            result = `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - reckless driving `;
        }
        return result;
    }


    console.log(solveTask5(40, 'city'));
    console.log(solveTask5(21, 'residential'));
    console.log(solveTask5(120, 'interstate'));
    console.log(solveTask5(200, 'motorway'));
}
/* 6.Write a program that receives 6 parameters which are a number and a list of five operations.
Perform the operations sequentially by starting with the input number and
using the result of every operation as starting point for the next one. Print the result of every operation in order.
The operations can be one of the following:
•chop - divide the number by two
•dice - square root of number
•spice - add 1 to number
•bake - multiply number by 3
•fillet - subtract 20% from number
The input comes as 6 string elements. The first element is the starting point and must be parsed to a number.
The remaining 5 elements are the names of the operations to be performed.
The output should be printed on the console.
*/
{
    function solve(number, command1, command2, command3, command4, command5) {
        let output = Number(number);
        const arr = [command1, command2, command3, command4, command5];
        for (const cmd of arr) {
            switch (cmd) {
                case 'chop':
                    output /= 2;
                    break;
                case 'dice':
                    output = Math.sqrt(output);
                    break;
                case 'spice':
                    output++;
                    break;
                case 'bake':
                    output *= 3;
                    break;
                case 'fillet':
                    output *= 0.8;
                    break;
            }
            console.log(output);
        }
    }

    solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
}
/* 7. Write a program that receives total of 4 parameters in the format x1, y1, x2, y2.
Check if the distance between each point and the start of the cartesian coordinate system (0, 0) is valid.
A distance between two points is considered valid, if it is an integer value.
In case a distance is valid, print"{x1, y1} to {x2, y2} is valid"
If the distance is invalid, print "{x1, y1} to {x2, y2} is invalid"
The order of comparisons should always be first {x1, y1} to {0, 0},
 then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
The input consists of two points given as 4 numbers.
For each comparison print either "{x1, y1} to {x2, y2} is valid" if the distance is valid,
 or "{x1, y1} to {x2, y2} is invalid" if it is invalid.
*/
{
    function solveTask7(x1, y1, x2, y2) {
        function isPointWithValidDistance(x1, y1, x2, y2) {
            let sideALength = Math.abs(x1 - x2);
            let sideBLength = Math.abs(y1 - y2);
            let distanceBetweenPoints = Math.sqrt(sideALength ** 2 + sideBLength ** 2);
            return Number.isInteger(distanceBetweenPoints) ? 'valid' : 'invalid';
        }

        return `{${x1}, ${y1}} to {0, 0} is ${isPointWithValidDistance(x1, y1, 0, 0)}
{${x2}, ${y2}} to {0, 0} is ${isPointWithValidDistance(x2, y2, 0, 0)}
{${x1}, ${y1}} to {${x2}, ${y2}} is ${isPointWithValidDistance(x1, y1, x2, y2)}`;
    }

    /* console.log(  solveTask7(3, 0, 0, 4));
     console.log(  solveTask7(2, 1, 1, 1));*/
}
/* 8.Write a program that extracts all words from a passed in string and converts them to upper case.
The extracted words in upper case must be printed on a single line separated by ", ".
The input comes as a single string argument - the text to extract and convert words from.
The output should be a single line containing the converted string. [a-zA-Z]+
*/
{
    function solveTask8(text) {
        console.log
        (Array.from(text
            .toString()
            .toUpperCase()
            .matchAll(/[a-zA-Z]+/gm))
            .join(', ')
            .trim());
    }

    solveTask8('Hi, how are you?');
    solveTask8('hello');
}