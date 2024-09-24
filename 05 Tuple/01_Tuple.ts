//tuple is like as an array,but in tuple it's value in order.

let array1: (number | string | boolean)[] = ["hi", 112, true, false];


//Must follow order of type ...
let myTuple: [number, string, boolean] = [10, "Hello", true];
myTuple = [100 , "" , true]

//  only three elements and all must be numbers. Can't add more than three elements.
let RGBColor :[number, number , number] = [255 , 123 , 255]

// Other Best example

type User = [number , string]

let user1: User = [120122 , "Joy_123"]
console.log(user1);  //[ 120122, 'Joy_123' ]

//Override
user1[0] = 999999
console.log(user1);// [ 999999, 'Joy_123' ]



export{}