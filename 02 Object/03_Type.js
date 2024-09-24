"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyUser = {
    __id: 1,
    name: "John",
    email: "john@example.com",
    isActive: true,
    // here i not give any information in credit card details but it's not show error.
};
// MyUser.__id = 2  // error message
MyUser.name = "Jem";
console.log(MyUser);
var newUser = {
    first: "John",
    age: 25,
    id: 1,
};
console.log(newUser);
console.log(newUser.first);
