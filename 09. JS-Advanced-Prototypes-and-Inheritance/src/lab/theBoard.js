const myCollection = {};

Object.defineProperty(myCollection, 'size', {
    enumerable: false,
    get: function () {
        return Object.keys(this).length;
    }
});

myCollection['Jan'] = '+359-321-553-000';
myCollection['Clod'] = '+359-321-553-001';
myCollection['Van'] = '+359-321-553-222';
myCollection['Damme'] = '+359-321-553-333';
console.log(Object.getOwnPropertyNames(myCollection));
console.log(myCollection['Jan']);
Object.freeze(myCollection);//makes all properties writable:false
myCollection['Jan']='421421';
console.log(myCollection['Jan']);
console.log(Object.getOwnPropertyDescriptor(myCollection,'Jan'));
Object.seal(myCollection);//makes all properties configurable:false
console.log(Object.getOwnPropertyDescriptor(myCollection,'Jan'));