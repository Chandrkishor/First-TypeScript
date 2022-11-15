
//!NOTE to convert ts file into js cmd- "tsc filename.ts" then run node filename.js 

//function
function addTwo(num: number) {
   console.log(num+2)
}
// addTwo("5") // will gives an error just because we are passing string instead of number
addTwo(5)


function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("tiwari")

//* normal functions
function singUpUser(name:string, email:string, isPaid:boolean) {}
singUpUser("Ram","ram.email.com",true)

//* how to pass arguments
let loginUser = (name:string, email:string, isPaid:boolean) => {}
// loginUser("tiwari", "email.com") // give an error that u are not providing isPaid argument
 loginUser("tiwari", "email.com", true)

 //* map function
const heros=["saktimaan", "Hanuman", "Ram", "shiva"]
heros.map((item): string => {
  // return 1 // if we try to return 1 then it will give us error that we are returning No. instead of string 
  return `Our heros are ${item}`
})
 
//* here function void not return any-thing. if we try to return anything then it will receive an error.
function consoleError(error: string): void {
  console.log(error)
  // return "1"
}

//* here we are using never it's also never return a value as void but we can get/throw the error like this 
function handleError(error: string): never {
  throw new Error (error) // never return type means that the functions throw an exceptions or terminates execution of the program
}


export {}