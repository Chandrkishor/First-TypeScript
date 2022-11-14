"use strict";
exports.__esModule = true;
//Strings
var greetings = "chandrkishor Tiwari";
console.log(greetings.toUpperCase());
//Number
var userId = 334477.55;
userId.toFixed();
console.log(userId);
userId = "tiwari"; // u will get an error if u assign sting to type number
// userId.     after this dot u will get all the methods which related to the number only
//boolean
var isLoggedIn = false;
//any
var hero;
console.log(hero);
function getHero() {
    return "Sakti-maan";
}
hero = getHero();
console.log(hero);
