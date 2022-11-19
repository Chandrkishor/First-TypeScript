// defining score which can we number  or string or boolean 
let score: number | string | boolean = 33
console.log(score)

score = true // no error 
console.log(score)

let score1: number | string | boolean = 33
score1 = "32"


type Users = {
   name: string;
   id:number
}
type Admin = {
   userName: string;
   id: number;
}
//*defining type with 2 diff type
let tiwari: Users | Admin = {
   name: "Tiwari", id: 78545
}
tiwari = { userName: 'ck', id: 3489 }// here we are using name and some time userName just because this fine, we are using 2 diff type

function getDbId(id: number | string) {
   console.log(`DB id is ${id}`);
   // id.toLowerCase()// this will gives error just because id could be number
   if(typeof id==="string")id.toLowerCase() // now it will work
   // if(typeof id==="number")id.toLowerCase() // it will give error
}
console.log(getDbId(3))
console.log(getDbId("3"))


// array
const data: number[] = [8, 3, 5, 6, 3, 4]
const data1: string[] = ["8", "3", "5", "6",]
// const data2: string[] | number[] = [1, "3", "5", "6",] // will gives error
const data2: (string | number)[] = [1, 7, "5", "6",] // will work now
console.log(data, 'data', data1, "data1", data2, "data2")


let seatAllotment: 'aisle' | "middle" | "window"
// seatAllotment="test"    // this will gives an error just because here in seatAllotment we fixed the type so seatAllotment only we any of them,

// seatAllotment="start" // will gives an error just because here we have choose in between which is defined.



export{}
