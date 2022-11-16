
const User = {
   name: "Tiwari",
   email: "tiwari@email.com",
   isActive:true,
}
const User1 = {
   name: "Tiwari",
   isActive:true,
}

//* object in a function argument
function createUser({ name: string, isPaid: boolean }) {}
// createUser() // this will complain that the argument is not bind
// createUser(User1)// here we will con error as well just because name and isActive type is any
createUser({ name: "tiwari", isPaid: true })

//* this means this function type is object and have to return an Object
function createObj(): {}{
   return {}
}

function createObj1({sub: string,price:number}): { }{
   // return {}// now this will give an error that u are missing following properties which u defined earlier
   return { sub: "math", price: 2 }
}
let newObj={sub: "math",price:2,isNaN:false}
//* here by using variable we are passing more value from requirement
createObj1(newObj)


//! defining type in septate file and import where we need to use
type User = {
   name: string
   email: string
   isActive: boolean
   creditCardDetails?:number // ? questing mark make it optional
}

function CreateUser(U: User) { }

let UserVal = {
   name: "Tiwari",
   email:"tiwari@gmail.com",
   isActive:true,
}
type __exModule= boolean;

// export.__esModule = true;

//* to accessing which is not defined
// will gives and error just because IsActive is a boolean and we are assigning string
// User.isActive = "t@gmail.com"
// UserVal.name = true

type cardNumber = {
   cardNumber:string
}
type CardDate = {
   cardDate:string
}

//* here we are defining new type base on the previous type and adding one more type along with them
type cardDetails= cardNumber & CardDate & {cvv:number}



export{}