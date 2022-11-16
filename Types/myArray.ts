// const superHeros = [] // by this way type become never
// superHeros.push("spiderman") // we can not assign string to never


//* defining array type
const herosPower: number[] = []
const herosPower2:Array<number>=[] // we can also defining the array type like this

const superHeros: string[] = []
superHeros.push("spiderman")
herosPower.push(2) 
console.log(superHeros)

//* defining array of object
type User = {
   name: string
   isActive:boolean
}
const allUser: User[] = []
allUser.push({ name: "", isActive: true })
console.log(allUser)


//* defining array of array with number type
const MLModels: number[][] = [
   [255,255,255],[5,4,6,]
]

