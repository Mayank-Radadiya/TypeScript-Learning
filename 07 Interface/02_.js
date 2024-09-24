"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function login(info) {
    if ('role' in info) {
        console.log(info.role);
    }
    else {
        console.log(info.name);
    }
}


var userinfo = login({ username: "hii", role: "admin" });
console.log(userinfo);
function isFish(input) {
    return input.swim !== undefined;
}
// Create a fish object
var myFish = {
    swim: function () {
        console.log("fish swimming");
    }
};
// Use the isFish function to check if it's a fish
var value = isFish(myFish);
console.log(value); //  true
