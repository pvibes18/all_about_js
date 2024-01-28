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

function calcCartPrice (){
    return item1
}