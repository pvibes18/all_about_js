if (2 == "2")
{
    console.log ("executed");
}

//**************************************************************** */

if (2 === "2")
{
    console.log("executed");
}
else {
    console.log("Doesn't execute");
}

//******************************************************************** */

const score = 200

if (score > 100)
{
    const power = "fly"
    console.log(`user power: ${power}`); // output: user power: fly
}
//console.log(`user power: ${power}`) // throws error bcz trying to access local variable

//********************************************************************** */

const balance = 1000
if (balance > 500)
console.log("test 1") , console.log("test 2"); //implicit scope 

//***************************************************************** */

const userLog = true
const DebitCard = true
const fromGoogle = false
const fromEmail = true
money = 10000

if (userLog && DebitCard && money >= 5000000)
console.log("Allow to buy the course");

if (fromGoogle || fromEmail )
console.log("Allow to buy the course");

//************************Switch Statement******************************************** */

const month = 3

switch (month) {
    case 1: 
           console.log('January');
           break;
    case 2: 
           console.log('February');
           break;
    case 3: 
           console.log('March');
           break; 
    case 4:
           console.log(`April`);             
           break;
    default:
        console.log('Others');
        break;
}

//********************************************************************* */

const userEmail = "google@ms.com"

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("No user email found");
}

//here string value stored in the userEmail variable is considered to be true by default hence the if condition got executed and in the below code "" is considered to be false by default hence else cond got executed .Further empty array is also by default is considered to be true here


const userEmail2 = ""

if (userEmail2) {
    console.log("Got user email");
}
else {
    console.log("No user email found"); 
}

const userEmail3 = []

if (userEmail3) {
    console.log("Got user email");
}
else {
    console.log("No user email found"); 
}

// false values = false , 0, -0, BigInt 0n, "" , null, undefined, NaN

// true values = "0", 'false', " ", [], {}, function(){} 

if(userEmail3.length === 0)
{
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
}

// here in above code Object.keys(emptyObj) will return an empty array hence its length will be zero

// false==0 will return true

// false == '' will return true

// 0 == '' will also return true

//******************** */ Nullish Coalescing Operator (??) : null undefined *****************************************

let val1;
val1 = 5 ?? 10
console.log(val1); //5
val2 = null ?? 10
console.log(val2); //10
val3 = undefined ?? 15 
console.log(val3); //15
val4 = null ?? 10 ??20
console.log(val4); //10


//************************************Terniary Operator******************** */

//condition ? true : false //syntax

const coldCoffeePrice = 1000
coldCoffeePrice >= 80 ? console.log("less than 80")  : console.log("more than 80") 

//*************************************************************** */

for (let index =0; index < 10; index++) 
{
    const element = index; 
    if (element ==5 )
    console.log("5 is the best number");
    console.log(element);
}

//******************************************printing table from 1 to 10 */

for (let i = 1 ; i<=10 ; i++)
{
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10 ; j++)
    {
        console.log(i+ '*' + j + '=' + i*j);
    }
}

//************************************************************ */

let myArr = ["flash", "batman", "superman"]

for (let i =0; i< myArr.length; i++)
{
    console.log(myArr[i]);

}

//*********************break and continue******************************************* */

for(let i= 1; i<=20; i++)
{
    if (i==5){
        console.log("detected value =5 ");
        break;
    }
    console.log(`value of i is ${i}`);
}

// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// detected value =5

for(let i= 1; i<=7; i++)
{
    if (i==5){
        console.log("detected value =5 ");
        continue; // skip and return to loop
    }
    console.log(`value of i is ${i}`);
}

//***********************************while and do while loop */
let i = 1
while (i<= 10)
{   
    
    console.log(`Value of index is ${i}`);
    
    i = i+2;
}

let myArr1 =["flash", "superman"," batman"]

let arr =0
while(arr < myArr.length)
{
    console.log(myArr[arr]);
    arr = arr +1;
}

/********************************************** */
let score1 = 1;
do {
    console.log(`score is ${score1}`);
    score1++ ;
    
} while (score1 <= 5);

// score is 1
// score is 2
// score is 3
// score is 4
// score is 5


let score2 = 11;
do {
    console.log(`score is ${score2}`);
    score1++ ;
    
} while (score2 <= 10);   //output : score is 11

//******************************for of loop (arrays)*********************** */

// ["", "", ""]  => string within array
// [{}, {}, {}]  => objects within array

const arr5 = [1,2,3,4,5]

for (const i of arr5)
{
    console.log(i);
}
//output :
// 1
// 2
// 3
// 4
// 5

const greetings = "Hello beautiful people ! Do leave a smile while reading this documentation" 
for (const greet of greetings) { 
    if (greet == " ")
    break;
    console.log(`each char is ${greet}`);
}

//output below:
// each char is H
// each char is e
// each char is l
// each char is l
// each char is o

//*******************************Maps Important**************************** */

//Map object holds key-value pairs and remember the original insertion order of the keys . Any value (both objects and primitive values) may be used either as a key or a value.

//Key in the map may occur only once (no duplicates)


const map = new Map()
map.set(`IN`, "INDIA")
map.set(`USA`, "Unites States of America")
map.set('Fr',"France")
map.set(`IN`, "INDIA")

console.log(map);

//output below: 

// Map(3) {
//     'IN' => 'INDIA',
//     'USA' => 'Unites States of America',
//     'Fr' => 'France'
//   } //note that india is not repeated again


for (const [key] of map){
    console.log(key);
} //output below

// IN
// USA
// Fr

for (const [key, value] of map) {
    console.log(key, '=>' , value);
} //output below

// IN => INDIA
// USA => Unites States of America
// Fr => France

// const myObject = {
//     'subject1' : 'DSA',
//     'subject2' : 'DCD',
//     'subject3' : 'DBMS',
//     'subject4' : 'M3',
//     'subject5' : 'PPL'
// }

// for (const [key , value] of myObject)
// {
//     console.log(key, "=>", value);

// } //output : TypeError: myObject is not iterable

//****************************for in loop (objects)********************************** */

const myNewObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myNewObject1)
{
    console.log(key);  //keys get printed
}
// output below:
// js
// cpp
// rb
// swift

const myNewObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myNewObject2)
{
    console.log(myNewObject2[key]); //values get printed
}

//output below: 
// javascript
// C++
// ruby
// swift by apple

for (const key in myNewObject2)
{
    console.log(`${key} shortcut is for ${myNewObject2[key]}`);
} //output below

// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

//*************************88888for in loop in arrays */

const prog = ["js", "cpp", "py", "java", "rb"]

for (const key in prog)
{
    console.log(key);
    
}  // output below :

// 0
// 1
// 2
// 3
// 4

for (const key in prog)
{
    console.log(prog[key]);
    
} //output below:
// js
// cpp
// py
// java
// rb

//Map is not itteratable by for in loop

//*********************************for each loop important concepts present in syntax***************** */

const coding = ["js", "ruby", "python", "java", "cpp", "c"]


//for each takes call back function in it 
//call back function do not have name


coding.forEach(function (i) {
    console.log(i);

})  //output below:

// js
// ruby
// python
// java
// cpp
// c

coding.forEach((value) => {
    console.log(value);
})  //output below:

// js
// ruby
// python
// java
// cpp
// c


//**********************************again for each loop imp concept present in syntax******** */

function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe) //pass function as reference . Do not execute it by giving parenthesis .

//output below:

// js
// ruby
// python
// java
// cpp
// c

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
}) //output below:

// js 0 [ 'js', 'ruby', 'python', 'java', 'cpp', 'c' ]
// ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp', 'c' ]
// python 2 [ 'js', 'ruby', 'python', 'java', 'cpp', 'c' ]
// java 3 [ 'js', 'ruby', 'python', 'java', 'cpp', 'c' ]
// cpp 4 [ 'js', 'ruby', 'python', 'java', 'cpp', 'c' ]
// c 5 [ 'js', 'ruby', 'python', 'java', 'cpp', 'c' ]

//*************************************************** */

// Creating objects within array

const gt =[
    {
        langName: "javascript",
        fileName: "js"
    },
    {
        langName: "python",
        fileName: "py"
    },
    {
        langName: "ruby",
        fileName: "rb"
    }
]

gt.forEach((item) => {
    console.log(item);
})

/* { langName: 'javascript', fileName: 'js' }
{ langName: 'python', fileName: 'py' }
{ langName: 'ruby', fileName: 'rb' } */

gt.forEach((item)=>{
    console.log(item.langName);
})

 /* javascript
python
ruby */

//what if i store the just above code in a variable ???


const storinggt = gt.forEach((item)=>{
    // console.log(item.langName);
    return item
})

console.log(storinggt); //output: undefined // for each is not returning anything

//***************************filter*********************************** */


const jack = [23,8,5,1,99,87]

//filter also takes call back function in it
//filter returns something but for each does not

//below writing arrow function without () =>  here no return keyword is required

const selectedValues1 = jack.filter((c1) => c1 > 5 )
console.log(selectedValues1);  // [ 23, 8, 99, 87 ]

//now writing arrow function with () => here also no return keyword is  required

const selectedValues2 = jack.filter((c1) => (c1 > 5) )
console.log(selectedValues2);  // [ 23, 8, 99, 87 ]

//now writing arrow function with {} => here  return keyword is required

const selectedValues3 = jack.filter((c1) => {
    return c1 > 5 
})
console.log(selectedValues3);  // [ 23, 8, 99, 87 ]


//******************************************************************** */

//with reference to line 505 to line 510 //getting selected values from for each

const posNum = [1,2,3,4,5,67,89,23,8]

const selectedPosNum = []

posNum.forEach((items) => {
    if (items > 5)
    {
        selectedPosNum.push(items)
    }
})

console.log(selectedPosNum); //[ 67, 89, 23, 8 ]

//**************************map (the way we studied for each and filter****************************************** */

const myOk = [1,2,3,4,5,6,7,8,9,10]

const updateMyOk = myOk.map( (item) => item+10 )
console.log(updateMyOk);

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]


//**********************************************chaining*********** */

const myOk2 = myOk
                   .map((items) => items*10 )
                   .map((items) => items+1 )

console.log(myOk2); 

/* [
    11, 21, 31, 41,  51,
    61, 71, 81, 91, 101
  ] */

  const myOk3 = myOk
  .map((items) => items*10 )
  .map((items) => items+1 )
  .filter((items) => items >=50 )
  .map ((items) => {return items + 1})

console.log(myOk3); //till line 584 output will be : [ 51, 61, 71, 81, 91, 101 ]
//till line number 585 output will be : [ 52, 62, 72, 82, 92, 102 ]

//***************************reduce method***************************************** */

const myChoice = [1,2,3]

const ch1 = myChoice.reduce(function (acc, curvalue) {
    console.log(`acc: ${acc} and curvalue : ${curvalue}`);
    return acc + curvalue
}, 3 )

//the value after comma in line 597 is initial value of accumulator

console.log(ch1); // 9

//*********writing above code using arrow function************** */

const ch2 = myChoice.reduce( (acc, curvalue) => acc+curvalue , 3)

console.log(ch2); // 9

//************************************************************ */

const shoppingCart = [
    {
        i: "sweater",
        p: 1899
        
    },
    {
        i: "cargo",
        p: 6999
    },
    {
        i: "sweatshirts",
        p: 5499
    },
    {
        i: "shoes",
        p: 8999
    },
    {
        i: "pjs",
        p: 6400
    }
    
] 

 const totPrice = shoppingCart.reduce((acc, item) => acc + item.p,0)

 console.log(totPrice); //29796