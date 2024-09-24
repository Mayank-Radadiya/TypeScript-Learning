"use strict";
//tuple is like as an array,but in tuple it's value in order.
Object.defineProperty(exports, "__esModule", { value: true });
var array1 = ["hi", 112, true, false];
//Must follow order of type ...
var myTuple = [10, "Hello", true];
myTuple = [100, "", true];
//  only three elements and all must be numbers. Can't add more than three elements.
var RGBColor = [255, 123, 255];
var user1 = [120122, "Joy_123"];
console.log(user1);
//Override
user1[0] = 999999;
console.log(user1);
