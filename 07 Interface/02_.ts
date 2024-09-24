interface user{
    name: string;
    password: string;
}

interface Admin{
    username: string;
    role: string;
}

function login(info : user | Admin ){
    if ('role' in info){
        console.log(info.role);
    }else{
        console.log(info.name);
    }
}
let userinfo = login({username: "hii",role: "admin"}); 
console.log(userinfo);



//----------------------------------------------------------------


interface circle{
    kind: "circle",
    radius: number
}

interface square{
    kind: "square",
    sideLength: number
}

function calculateArea(shape : circle | square){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;

        default:
            const notDefined: never = shape
            return notDefined
    }
}

export{}