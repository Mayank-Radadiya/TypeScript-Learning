interface UserData {
    name: string;
    email: string;
    isActive: boolean;
    fetchData(): string;
    // fetchData : () => string;
    getDiscount(couponCode: string): string; 
}

//add some more properties
interface UserData{
    getGoogleAccount? : string;
}

const User1: UserData = {
    name: "John",
    email: "john@gmail.com",
    isActive: true,
    fetchData: function() {
        return `Hello ${this.name}`;
    },
    getDiscount(couponCode = "10%"){
        return `Discount is ${couponCode}`;
    },
    getGoogleAccount: "Joy12@gmail.com",
}

const userDiscount = User1.getDiscount("20%")
console.log(userDiscount);


interface Admin extends UserData{
    //here get all properties from userData
    //and we can add more properties
    role: "admin" | "manager" | "HR"
}

export{}