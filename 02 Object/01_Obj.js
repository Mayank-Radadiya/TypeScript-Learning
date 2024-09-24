"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var info = {
    name: "John",
    age: 30,
    city: "New York"
};
function personInfo(person) {
    console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", City: ").concat(person.city));
}
personInfo({ name: "john", age: 20, city: "New York" });
personInfo(info);

function personInfo2() {
    return {
        name: "Jane",
        age: 25,
        city: "Los Angeles"
    };
}
