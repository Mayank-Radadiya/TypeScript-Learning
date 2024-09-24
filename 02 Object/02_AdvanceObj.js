"use strict";
// Type Aliases
//
//best way to take obj as parameter
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) { }
createUser({ name: "", age: 10, isActive: true });
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
