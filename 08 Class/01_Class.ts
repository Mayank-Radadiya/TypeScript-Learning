console.log("Typescript");

class user {
  userName: string;
  readonly password: string;
  private _id: number = 0;


// method  on Private variable
  get id(): number {
    return this._id;
  }
  set newId(value: number){
    this._id += value;
  }

  constructor(name: string, password: string) {
    this.userName = name;
    this.password = password;
    console.log(name, password);
  }
}


 
const myUser = new user("John Doe", "123456");

export {};
