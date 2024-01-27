// const marvel_heroes =["thor", "Ironman", "spiderman"]
// const dc_heroes = ["superman", "flash", "batman"]

// console.log(marvel_heroes.push(dc_heroes)) //output: 4

// console.log(marvel_heroes);  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3]);  //[ 'superman', 'flash', 'batman' ]

// console.log(marvel_heroes[3][2]); //batman

//********************************************************** //

const fruits = ["apple", "mango", "guava", "grapes", "oraange"]
const veggies = ["potato", "bitter gourd", "okra", "cauliflower", "brocooli"]

const all = fruits.concat(veggies)
console.log(all); //output below 

// [
//     'apple',        'mango',
//     'guava',        'grapes',
//     'oraange',      'potato',
//     'bitter gourd', 'okra',
//     'cauliflower',  'brocooli'
//   ]

//************************************************************** */

const a1 = ["y", "t"]
const a2 = ["z","x"]

const a3 = [...a1, ...a2]  // spread operator
console.log(a3)   //[ 'y', 't', 'z', 'x' ]

//**************************************************************** */

const g1 =[1,2,3,[4,5,6],7,[8,,9,10,[11,12]]]

const g2 = g1.flat(Infinity)
console.log(g2); //output below

// [
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//    11, 12
//  ]

//****************************************************************** */

console.log(Array.isArray("SocialMedia")); //false because it is string not array

console.log(Array.isArray([8,23]));  //true

console.log(Array.from("SocialMedia")); // output below
// [
//     'S', 'o', 'c', 'i',
//     'a', 'l', 'M', 'e',
//     'd', 'i', 'a'
//   ]

console.log(Array.from({name: "JavaScript"})); // output:[] //returns empty array because its not specified that array is to made from key or value 


//***************************************************************** */

let s1=8
let s2 = 23
let s3 = 18

console.log(Array.of(s1,s2,s3));  //[ 8, 23, 18 ]

