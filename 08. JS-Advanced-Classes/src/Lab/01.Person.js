/*1.	Person
Write a class that represents a personal record. It has the following properties, all set from the constructor:
•	firstName
•	lastName
•	age
•	email
And a method toString(), which prints a summary of the information. See the example for formatting details.
Input
The constructor function will receive valid parameters.
Output
The toString()method should return a string in the following format:
"{firstName} {lastName} (age: {age}, email: {email})"
Submit the class definition as is, without wrapping it in any function.
*/
function getPersons() {
    class Person {
        constructor(firstName, LastName, age, email) {
            this.firstName = firstName;
            this.lastName = LastName;
            this.age = age;
            this.email = email;

        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25,),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ]
}

console.log(mySelf);
//expected output - 60
