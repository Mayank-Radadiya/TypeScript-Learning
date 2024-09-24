// Type Aliases
//
//best way to take obj as parameter

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(user: User) {}
createUser({ name: "", age: 10, isActive: true });

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });


export {};
