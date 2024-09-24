"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isFish(input) {
    return input.swim !== undefined;
}
// Create a fish object
var myFish = {
    swim: function () {
        console.log("fish swimming");
    },
};
// Use the isFish function to check if it's a fish
var value = isFish(myFish);
console.log(value); // Should
function foodCheck(input) {
    if (isFish(input)) {
        console.log("Fish can eat");
    }
    else {
        console.log("Bird can eat");
    }
}
