let score: number | string;

score = "100";
score = 100;

//----------------------------------------------------------------

type User = {
    name: string;
    id: number | string;
}
type Admin = {
    Username: string; 
}

let  newUser : User | Admin = {
    name: "John",
    id: 1,
}
console.log(newUser);
// { name: 'John', id: 1 }
newUser = {
    Username : "John"  
}
console.log(newUser);  // { Username: 'John' }


//----------------------------------------------------------------



function userDataBase(id: number | string){
  // when to derive two different type of data like number or string and if you went use string method like uppercase or other that time you have you have to check using if else statement can't use directly string method. it's throw an error.

  if (typeof id === "number") {
    console.log(id * 10);
  } else {
    console.log(id.toUpperCase());
  }
}
userDataBase(" id : 1")

userDataBase(2)

//----------------------------------------------------------------

let data1: number[] | string[] = [1,2,3,4]
// means array all value numbers or all values  are strings.

// Here array values are numbers or strings.
let data: (number | string)[] =[1,2,3,"hii"]


//----------------------------------------------------------------

//Create Oen type.
//here in this array i define only three types of strings.means when ever some one use this array they can enter only three type on string "Hi" , "hello"  , ""
// can't use other string.
let arrData: ("Hi" | "hello" | "")[] = ["Hi", "hello"];

arrData.push("");

console.log(arrData);  //[ 'Hi', 'hello', '' ]

export{}