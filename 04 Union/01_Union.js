"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score;
score = "100";
score = 100;
var newUser = {
    name: "John",
    id: 1,
};
console.log(newUser);
// { name: 'John', id: 1 }
newUser = {
    Username: "John"
};
console.log(newUser); // { Username: 'John' }
//----------------------------------------------------------------
function userDataBase(id) {
    // when to derive two different type of data like number or string and if you went use string method like uppercase or other that time you have you have to check using if else statement can't use directly string method. it's throw an error.
    if (typeof id === "number") {
        console.log(id * 10);
    }
    else {
        console.log(id.toUpperCase());
    }
}
userDataBase(" id : 1");
userDataBase(2);
//----------------------------------------------------------------
var data1 = [1, 2, 3, 4];
// means array all value numbers or all values  are strings.
// Here array values are numbers or strings.
var data = [1, 2, 3, "hii"];
//----------------------------------------------------------------
//Create Oen type.
//here in this array i define only three types of strings.means when ever some one use this array they can enter only three type on string "Hi" , "hello"  , ""
// can't use other string.
var arrData = ["Hi", "hello"];
arrData.push("");
console.log(arrData);
