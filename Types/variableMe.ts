//Strings
let greetings: string = "chandrkishor Tiwari";
console.log(greetings.toUpperCase())


//Number
let userId:number = 334477.55
userId.toFixed()
console.log(userId)
// userId = "tiwari"; // u will get an error if u assign sting to type number
// userId.     after this dot u will get all the methods which related to the number only


//boolean
let isLoggedIn: boolean = false


//any

// let hero:string;
let hero: any;
hero = 'sakti-Maan'; // hero as string
console.log(hero)
function getHero() {
   return true //returning boolean 
}
hero = getHero()
console.log(hero)









export{}