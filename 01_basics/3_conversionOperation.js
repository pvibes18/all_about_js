let score1 = "23pal" 

console.log(typeof score1)
console.log(typeof (score1)); //we can write it as a function also

let valueInNumber1 = Number(score1)
console.log(score1)
console.log(valueInNumber1)
console.log(typeof valueInNumber1)

let score2 = null

let valueInNumber2 = Number(score2)
console.log(score2) //output : null
console.log(valueInNumber2) //output : 0
console.log(typeof valueInNumber2) //number

let score3 = undefined

let valueInNumber3 = Number(score3)
console.log(score3) //output : undefined
console.log(valueInNumber3) //output : NaN
console.log(typeof valueInNumber3) //number

let score4 = true

let valueInNumber4 = Number(score4)
console.log(score4) //output : true
console.log(valueInNumber4) //output : 1
console.log(typeof valueInNumber4) //number
console.log(typeof score4) //boolean

let isLoggedIn = 1

let intoBoolean = Boolean(isLoggedIn)
console.log(typeof isLoggedIn) //number
console.log(typeof intoBoolean) //boolean
console.log(isLoggedIn); //1
console.log(intoBoolean) //true

//similarly boolean value of "" => false
//and boolean value of any "documentation" => true

console.log(typeof null) //output: object
console.log(typeof undefined) //output: undefined

let num = 23
let intoString= String(num)
console.log(intoString) //23
console.log(typeof num) //number
console.log(typeof intoString) //string

// ********************** Opeerations *****************************

let value =3
let negValue = -value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*3);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 ="hello"
let str2 ="peeps"

let str3 = str1 +" "+ str2 //********* string concat ************ 
console.log(str3);

console.log("1"+ 2);
console.log(1 +"2");
console.log("1"+ 2 +2); //********** output : 122 ***************
console.log(1+2+"2");   //********** output : 32 I************** 

console.log(+true); // output : 1
console.log(+"");   // output : 0

let num1 = num2= num3=4
console.log(num1+num2+num3); //12

let gameCounter = 100
gameCounter++;

console.log(gameCounter); //101


