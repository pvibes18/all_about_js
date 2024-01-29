// Immediately Invoked Function Expressions (IIFE) => to remove the pollution of global scope


(function coffee(){
    console.log(`DB Connected`);
}) ();

// 1st () => function defination
// 2nd () => function execution

//*****************writing above function as arrow function******** */

(() => {
    username = "coffee"
    console.log(this.username); //output: undefined
    console.log(this);  //output : {}
    console.log(username) // output: coffee
}) ();

//***************************************************************** */

((name) => {
    console.log(`DB Connected to ${name}`);
}) ('Coffee');  //DB Connected to Coffee

((num1, num2) => {
    console.log(num1 + num2 );
}) (8, 23); //output: 31 // also known as unnamed IIFE
