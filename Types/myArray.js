// const superHeros = [] // by this way type become never
// superHeros.push("spiderman") // we can not assign string to never
//* defining array type
var herosPower = [];
var herosPower2 = []; // we can also defining the array type like this
var superHeros = [];
superHeros.push("spiderman");
herosPower.push(2);
console.log(superHeros);
var allUser = [];
allUser.push({ name: "", isActive: true });
console.log(allUser);
