"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User1 = {
    name: "John",
    email: "john@gmail.com",
    isActive: true,
    fetchData: function () {
        return "Hello ".concat(this.name);
    },
    getDiscount: function (couponCode) {
        if (couponCode === void 0) { couponCode = "10%"; }
        return "Discount is ".concat(couponCode);
    },
    getGoogleAccount: "Joy12@gmail.com",
};
var userDiscount = User1.getDiscount("20%");
console.log(userDiscount);
