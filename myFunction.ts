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


function singUpUser(name:string, email:string, isPaid:boolean) {}
singUpUser("Ram","ram.email.com",true)

let loginUser = (name:string, email:string, isPaid:boolean) => {}
loginUser("tiwari", "email.com")







export {}