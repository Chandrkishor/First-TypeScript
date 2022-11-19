// const users:(string|number)[]=['he',"sh",1 ]

// if we want place some data on the specific place, we can use tuple
let users:[string, number, boolean] //here where ever we define the tuple we have to put the data according to the order. alway use let 

// users=["ram",true, 54] // this is will gives an error just because order is not same 
users=["ram", 54, true] // this is in correct order

let rgb:[number, number, number]=[255,65,56]

// or
type User = [number, string]
const newUser:User=[123,"Ram"]

newUser[1] = "hc" // here numUser array index no 1 is a sting so we can define string like this as well

newUser.push("true") //here we are overweighting the number or string place  with each other, so I case of push/shift/unshift/popup tuple won't work
