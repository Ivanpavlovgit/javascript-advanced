/*1. Write a JS function that takes one string parameter and prints on two lines the length
of the parameter and then the unchanged parameter itself.*/
{
    const stringForThisTask = "useThisString";

    function solveTask1(stringForFunction) {

        console.log(stringForFunction.length);
        console.log(stringForFunction);
    }

    solveTask1(stringForThisTask);
}
/*2.Write a JS function that takes three string arguments as an input.
Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
The input comes as three string arguments passed to your function.
The output should be printed on the console on two lines.*/
{
    function solveTask2(p1, p2, p3) {
        const totalStringsLength = (p1.length + p2.length + p3.length);
        console.log(totalStringsLength);
        console.log(Math.floor(totalStringsLength / 3));
    }

    solveTask2("I", "am", "here");
}
/*3.Write a function that takes three number arguments as an input and find the largest of them.
Print the following text on the console:  'The largest number is {number}.'.
The input comes as three number arguments passed to your function.
The output should be printed to the console.*/
{
    function solveTask3(n1, n2, n3) {
        let maxNumber = Math.max(n1, n2, n3);
        console.log('The largest number is ' + maxNumber + ".");

    }

    solveTask3(1, 2, 3);
}
/*4.Write a function that takes a single argument as an input.
Check the type of the input argument.
If it is a number, assume it is the radius of a circle and calculate the circle area.
Print the area rounded to two decimal places.
If the argument type is NOT a number, print the following text on the console:
'We can not calculate the circle area, because we receive a {type of argument}.'
The input comes as a single argument passed to your function.
The output should be printed on the console.*/
{
    function solveTask4(radius) {
        let inputType = typeof (radius);
        if (inputType === 'number') {
            console.log((radius ** 2 * Math.PI).toFixed(2));
        } else {
            console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
        }
    }
}
/* 5.Write a JS function that takes two inputElement and a string as an input.

    The string may be one of the following: '+', '-', '*', '/', '%', '**'.

    Print on the console the result of the mathematical operation between both inputElement and the operator you receive as a string.
    The input comes as two inputElement and a string argument passed to your function.
The output should be printed on the console.
*/
{
    function solveTask5(n1, n2, operator) {
        switch (operator) {
            case '+':
                return n1 + n2;

            case '-':
                return n1 - n2;

            case '*':
                return n1 * n2;

            case '/':
                return n1 / n2;

            case '%':
                return n1 % n2;

            case '**':
                return n1 ** n2;
        }
    }

    console.log(solveTask5(2, 3, '**'));
}
/* 6.Write a JS function that takes two inputElement n and m as an input and prints the sum of all inputElement from n to m.
The input comes as two string elements that need to be parsed as inputElement.
The output should return the sum.*/
{
    function solveTask6(stringNumber1, stringNumber2) {
        let parsedNumber1 = Number(stringNumber1);
        let parsedNumber2 = Number(stringNumber2);
        let sumOfTheNumbers = 0;
        for (let currentNumber = parsedNumber1; currentNumber <= parsedNumber2; currentNumber++) {
            sumOfTheNumbers += currentNumber;
        }
        console.log(sumOfTheNumbers);
    }
}
/* 7.Write a function that prints a number between 1 and 7 when a day of the week is passed
to it as a string and an error message if the string is not recognized.
The input comes as a single string argument.
The output should be returned as a result.*/
{
    function solveTask7(dayOfWeek) {
        switch (dayOfWeek) {
            case"Monday":
                return 1;
            case"Tuesday":
                return 2;
            case"Wednesday":
                return 3;
            case"Thursday":
                return 4;
            case"Friday":
                return 5;
            case"Saturday":
                return 6;
            case"Sunday":
                return 7;
            default:
                return 'error';
        }
    }
}
/*8.Write a function that prints a rectangle made of stars with variable size, depending on an input parameter.
 If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
   The input comes as a single number argument.
   The output is a series of lines printed on the console, forming a rectangle of variable size.
*/
{
    function solveTask8(param) {
        let sizeOfStarsRectangle = Number(param);

        for (let i = 0; i < sizeOfStarsRectangle; i++) {
            let output = '';
            for (let j = 0; j < sizeOfStarsRectangle; j++) {
                output += '* ';
            }
            console.log(output.trim())
        }
    }
}
/*
 9.Write a program that performs different operations on an array of elements. 
Implement the following operations:
•Sum(ai) - calculates the sum all elements from the input array
•Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
•Concat(ai) - concatenates the string representations of all elements from the array
The input comes as an array of number elements.
The output should be printed on the console on a new line for each of the operations.
*/
{
    function solveTask9(input) {
        let sum = 0;
        let sum1 = 0;
        let concat = '';
        for (let inputElement of input) {
            sum += inputElement;
            sum1 += 1 / inputElement;
            concat += inputElement;
        }
        console.log(sum);
        console.log(sum1);
        console.log(concat);
    }

    solveTask9([1, 2, 3]);
}