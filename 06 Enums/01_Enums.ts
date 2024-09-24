// Numeric enums
// We’ll first start off with numeric enums, which are probably more familiar if you’re coming from other languages. An enum can be defined using the enum keyword.

 const enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);
// 1 2 3 4


// Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.


 const enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}
respond("Princess Caroline", UserResponse.Yes);

export{}