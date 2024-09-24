const myNum : number[] = [1, 2, 3, 4, 5]
// Other way to declare an array....
// const num : Array<number> = [1, 2, 3, 4, 5]

// myNum.push("Hii")  //Can't push string to array
myNum.push(6)
console.log(myNum);

// ----------------------------------------------------------------

type User = {
    name: string;
    age?: number; // ? if not assigned still it works 
}
const AllUsers: User[] = []
AllUsers.push({name: "John", age: 25})
AllUsers.push({ name: ""});

console.log(AllUsers);

const RGBColor: number[][] = [
    [255 , 234 , 255],
    [255 , 234 , 255]
]
//----------------------------------------------------------------


export{}