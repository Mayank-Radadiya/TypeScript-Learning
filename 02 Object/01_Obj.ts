//Create Obj

const info = {
  name: "John",
  age: 30,
  city: "New York",
};

// pass object as parameter.
function personInfo(person: { name: string; age: number; city: string }) {
  console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}
personInfo({ name: "john", age: 20, city: "New York" });
personInfo(info);

//function return an object
function personInfo2(): { name: string; age: number; city: string } {
  return {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
  };
}

export {};
