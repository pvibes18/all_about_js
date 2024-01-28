function addTwoNumbers (num1 , num2) {
    return (num1+ num2);
}

console.log (addTwoNumbers(23, "P"))

//***************************************************************** */

function alertMsg(username){
    return `${username} just logged in`
}

console.log(alertMsg("Kohli"))

//******************************************************************* */

function multiplyTwoNumbers (m1, m2){
    if (m1 > m2)
    return (m1*m2) ;
    else 
    return "Invalid Input"
}

console.log (multiplyTwoNumbers(8,23))  
console.log (multiplyTwoNumbers(23,8))

//******************************************************************** */

function member (username = "randomUser"){
    if (undefined)
    return ;
    else 
    return (`${username} just logged in`);
}

console.log (member ()) // randomUser just logged in
console.log (member("AuthorisedUser"))   //AuthorisedUser just logged in

//**************************************************************** */

function calcCartPrice (...item1){
    return item1
}

console.log(calcCartPrice(654, 76, 890, 999));  //[ 654, 76, 890, 999 ]

//******************************************************************* */

function calcItemPrice (val1, val2, ...num1) {
    return num1
}

console.log(calcItemPrice(45, 700, 980, 6000));  // [ 980, 6000 ]

//***************************passing objects into function**************************************** */

const viewer = {
    vName : "okra",
    vPrice : 8238,
    vPlatform : "Netflix",

}

function handleObject(anyobject){
    return (`username is ${anyobject.vName} and price is ${anyobject.vPrice} for ${anyobject.vPlatform} subscription `);
}

console.log (handleObject(viewer))  //username is okra and price is 8238 for Netflix subscription



console.log (handleObject(( {

    vName : "okra",
    vPrice : 8238,
    vPlatform : "Netflix",


}))) //paasing the object directly into the function without creating it


//******************************passing arrays into functions******* */

const arr1 = [200, 400, 600]

function acceptArray (array , n){
    return array[n]
}

console.log(acceptArray(arr1, 2)) //output: 600

console.log(acceptArray(([200,400,900]), 2)) //output: 900