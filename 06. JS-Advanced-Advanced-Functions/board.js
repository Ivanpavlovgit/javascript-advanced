function createRect(width, height) {
    return {
        getWidth,
        getHeight,
        getArea,
        setHeight
    }

    function getWidth() {
        return width;
    }

    function getHeight() {
        return height;
    }

    function setHeight(value) {
        height = value;
    }

    function getArea() {
        return height * width;
    }
}

const myRect = createRect(2, 3);
console.log(myRect);
console.log(myRect.getArea());
console.log(myRect.getHeight());
console.log(myRect.getWidth());
myRect.height = 6;
myRect.setHeight(25);
console.log(myRect.getHeight());
console.log(myRect);


/*
function A() {
    let myVarA = 5;
    console.log('Inside A', myVarA);
    B();
    function B() {
        let myVarB =  3;
        console.log('Inside A', myVarB,myVarA);
    }
}
A();
*/
//CLOSURE look up
/*function A() {
    let myVarA = 5;
    console.log('Inside A', myVarA);
    B();
}

function B() {
    let myVarB =  5;
    console.log('Inside A', myVarB);
    C();
}

function C() {
    let myVarC = 5;
    console.log('Inside A', myVarC);
}

A();*/
/*
const myObj = {
    name: 'pesho',
   myMethod(){
       console.log(' My name is '+this.name);
   }
};
function myFunc(a,b){
    console.log(a,b)
}
const name=myObj.myMethod.bind(myObj);
//document.querySelector('button').addEventListener('click',name);
const boundFunc=myFunc.bind(myObj);
console.log(myObj);*/
