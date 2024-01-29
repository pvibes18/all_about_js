const user = { 
    username : "okra",
    price: 999,

    welcomeMsg: function (){
        console.log(`${this.username} welcome to website`);
        console.log(this);

    }
}
user.welcomeMsg()
user.username = "sam"
user.welcomeMsg()

console.log(this); //output : {} // refers to node here

//within browser the global object is window object

//************************************************************ */

function code(){
    let username = "virat"
    console.log(this.username); //output: undefined //cant use this function within functions
}
code() 

//********************************************************** */

const husn = function() {
    let username = "weber"
    console.log(this.username); //output: undefined 
}

husn()

//*************************Arrow Function************************************ */

const coffee = () => {
    let username = "coldCoffeeAddict"
    console.log(this.username);  //output: undefined
    console.log(this);  // output: {}
}

coffee()

//*************************Explicit Return************************************** */

const addTwo = (num1, num2) => {
    return num1+num2
} //write return when using curly braces

console.log(addTwo(8,23)); //31

//**************************implicit return************************************** */

const multTwo = (n1,n2) => (n1*n2)  //do not write return keyword when using parenthesis

console.log(multTwo(8,23)); //184

//*************return object using implicit function**************** */

const multiTwo = (details) => ({username : "coldCoffee"})


console.log(multiTwo("likings"));

//********************************************************* */







