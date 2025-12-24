
const mysym = Symbol()

const JsUser = {
    name:"Abhi",
    "full name":"Abhijith",
    [mysym] : "mykey1",
    age:22
}

// console.log(JsUser.name);
// console.log(JsUser['name']);
// console.log(JsUser['full name']);
// console.log(typeof(JsUser[mysym]))
// console.log(JsUser[mysym])
// console.log(typeof JsUser.age);

JsUser.greetings = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(JsUser.greetings());