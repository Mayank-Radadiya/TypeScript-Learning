function addSum(a: number, b: number) {
  return a + b;
}
console.log(addSum(5, 10));


function userInfo(name: string, email: string, IsLoggedIn: boolean) {
  console.log(name, email, IsLoggedIn);
}
userInfo("Jon", "jon123@gmail.com", true);

function myInfo(name: string, IsLoggedIn: boolean = false) {
  console.log(`Name : ${name} , LoginStatus : ${IsLoggedIn}`);
}
myInfo("Tom");

// return only number .....
function addNumber(a: number, b: number): number {
  return a + b;
}
console.log(addNumber(5, 10));

// Arrow function ....

const getHello = (name: string): string => {
  return `Hello Mr.${name}`;
};
console.log(getHello("jon"));

//  on Method..

let arr = [1, 2, 3, 4, 5, 6];

const arr2 = arr.map((item) => {
  return item * 10;
});
console.log(arr2);

// don't do this way because typescript automatic understand input type and return same type

//  const arr2 = arr.map( (item : number) : number => {
//     return item*10
// })

// return nothing
// if i create any function which return nothing that time we use void parameter as return type:

function sayHello(): void {
  console.log("Hello");
  //if some one try to return any thing it's show error
  // return "Hello";
}
sayHello();

//  return type: never
// The return type of the function is never, which means the function will never successfully return a value.
function fail(msg: string): never {
  throw new Error(msg);
  //throw new Error(msg);: This line creates a new Error object with the message msg and throws it. This immediately terminates the function and propagates the error up the call stack.
}

export {};
