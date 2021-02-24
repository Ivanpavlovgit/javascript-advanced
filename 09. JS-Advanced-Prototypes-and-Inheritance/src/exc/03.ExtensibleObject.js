/*Create an object that can clone the functionality of another object into itself.
Implement an extend(template) function that would copy all of the properties of
template to the parent object and if the property is a function, add it to the object’s prototype instead.
Input / Output
Your code should return the extensible object instance.
 The extend() function of your object will receive a valid object as input parameter, and has no output.
*/

function solve() {
    const proto = {};
    const instance = Object.create(proto);

    instance.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
                if (typeof value == 'function') {
                  Object.getPrototypeOf(instance)[key] = value;
                } else {
                    instance[key] = value;
                }
            }
        )
    };

    return instance;
}

console.log(solve());
//expected output - 60



