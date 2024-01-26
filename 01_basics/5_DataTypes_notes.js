//On the basis of how data are stored in the memory and how they are accessed , DataType is categorised into two types

//Primitive and Non-Primitive

//primitive=> Call by value => change is made in the copy => 7 types: String, Number, Boolean, null , undefined, Symbol, BigInt

const s1 = 100
const s2 = 100.3
const outsideTemp = null
const isLogIn = false
let userAddress;

const id = Symbol('123')
const SId = Symbol('123')

//Even the values are same but Symbol keyword is making them unique

console.log(id == SId) //false though values are same*******

const bigNum = 36474485787547657n


//Non-Primitive or Reference Type => Array, Objects, Functions

const heroes = ["Virat Kohli" , "Darshan Raval","AB DeVillliers" ]
let myObj = {
    name: "VK",
    age: 35,
    // within curly braces we have objects which can be of any data type
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNum)
console.log(typeof outsideTemp); // type of null is object 
console.log(typeof myFunction);  //type of function is function but it is said as object function







