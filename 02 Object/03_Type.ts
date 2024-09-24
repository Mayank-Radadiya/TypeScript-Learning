//read only  means only one time you can assign value like const.
// ? means if you not assign value in object still works
type user = {
  readonly __id: number;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetail?: string;
};

let MyUser : user = {
  __id: 1,
  name: "John",
  email: "john@example.com",
  isActive: true,
  // here i not give any information in credit card details but it's not show error.
}
// MyUser.__id = 2  // error message
MyUser.name = "Jem";
console.log(MyUser);


// ----------------------------------------------------------------

type name = {
  first: string;
}
type UserAge = {
  age : number;
}

type AllUser = name & UserAge & {
  id : number;
}
const newUser : AllUser = {
  first: "John",
  age: 25,
  id: 1,
}
console.log(newUser);
console.log(newUser.first);



export{}