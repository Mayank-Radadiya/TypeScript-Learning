"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Typescript");
var user = /** @class */ (function () {
    function user(name, password) {
        this._id = 0;
        this.userName = name;
        this.password = password;
        console.log(name, password);
    }
    Object.defineProperty(user.prototype, "id", {
        // method  on Private variable
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "newId", {
        set: function (value) {
            this._id += value;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
var myUser = new user("John Doe", "123456");
