//functions with arrays and objects as arguments

const myArray=[1,2,3,4]

function myfunc(arr){
    return arr[1];
}

console.log(myfunc(myArray));

const obj ={
    name:"abhijith",
    age: 22
}

function objFun(myObj) {
    return `My name is ${myObj.name} and i am ${myObj.age} years old`;
}

console.log(objFun(obj));