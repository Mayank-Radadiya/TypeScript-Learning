"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addSum(a, b) {
    return a + b;
}
console.log(addSum(5, 10));
function userInfo(name, email, IsLoggedIn) {
    console.log(name, email, IsLoggedIn);
}
userInfo("Jon", "jon123@gmail.com", true);
function myInfo(name, IsLoggedIn) {
    if (IsLoggedIn === void 0) { IsLoggedIn = false; }
    console.log("Name : ".concat(name, " , LoginStatus : ").concat(IsLoggedIn));
}
myInfo("Tom");
// return only number .....
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(5, 10));

// Arrow function ....
var getHello = function (name) {
    return "Hello Mr.".concat(name);
};


console.log(getHello("jon"));
//  on Method..
var arr = [1, 2, 3, 4, 5, 6];
var arr2 = arr.map(function (item) {
    return item * 10;
});
console.log(arr2);

// don't do this way because typescript automatic understand input type and return same type
//  const arr2 = arr.map( (item : number) : number => {
//     return item*10
// })
// return nothing
// if i create any function which return nothing that time we use void parameter as return type:

function sayHello() {
    console.log("Hello");
    //if some one try to return any thing it's show error
    // return "Hello";
}
sayHello();
//  return type: never
// The return type of the function is never, which means the function will never successfully return a value.
function fail(msg) {
    throw new Error(msg);
    //throw new Error(msg);: This line creates a new Error object with the message msg and throws it. This immediately terminates the function and propagates the error up the call stack.
}
