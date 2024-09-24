type bird = {
  fly: () => void;
};
type fish = {
  swim: () => void;
};

function isFish(input: bird | fish): input is fish {
  return (input as fish).swim !== undefined;
}

// Create a fish object
const myFish: fish = {
  swim: () => {
    console.log("fish swimming");
  },
};

// Use the isFish function to check if it's a fish
let value = isFish(myFish);
console.log(value); // Should

function foodCheck(input: fish | bird){
    if(isFish(input)){
        console.log("Fish can eat");
    } else {
        console.log("Bird can eat");
    }
}
 
export{}
