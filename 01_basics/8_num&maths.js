const num = 23
console.log(num); //23
console.log(typeof num) //number


const num1= new Number(23.89655)
console.log(num1) //output:[Number:23]
console.log(typeof num1) //object
console.log(num1.toString()); //23.89655
console.log(typeof num1.toString()) //string
console.log(num1.toString().length) //8 //point has also been counted as it is now a string
console.log(num1.toFixed(3)) //output: 23.897 //correct to 3 decimal place

const n1= 23.238
console.log(n1.toPrecision(3)) //correct to three digits //output:23.2

const n2= 823.823
console.log(n2.toPrecision(3)) //correct to three digits //output:824

const n9= 1000000000
console.log(n9.toLocaleString()); // now zeroes will be separated by commas acc to Intl. number system // output: 1,000,000,000
console.log(n9.toLocaleString('en-IN')) //acc to Indian Number System //output: 1,00,00,00,000

//*********************** Maths****************** */

console.log(Math.abs(-23)) //change into positive value
console.log(Math.round(4.3)) //4
console.log(Math.round(4.5)) //5

console.log(Math.ceil(4.01)) //will give upper value even if it exceeds the slightest //output:5
console.log(Math.floor(3.99)) //gives the lower value even if it is slightly smaller //output:3

console.log(Math.min(87,24,23,8)) //8
console.log(Math.max(7,11,23,8)) //23

console.log(Math.random()); //values always lies between 0 and 1
console.log(Math.random()*10); //values lies bet 0 and 10
console.log((Math.random()*10) + 1); // to avoid zero added 1 //now value lies bet 1 and 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //***********important */




