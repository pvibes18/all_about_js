let a = 300
if(true)
{
    let a = 10
    const b = 20
    let c = 30
    console.log(a);  //10
}

console.log(a)  //300

//************************************************************* */

if (true) {
    const username = "nvidia"
    if (username === "nvidia"){
        const company = "Dell"
        console.log(username + company); //nvidiaDell
    }
    // console.log(company); // not defined error
}
// console.log(username); //not defined error 

//child can get parent prop but not vice versa

//*************************************************************** */

function addOne (num){
    return num+1
}
console.log (addOne(23)) //24


//**********************storing function in a variable*********** */

const addTwo = function(num){
    return num+2
}
console.log (addTwo(8)) // 10 
 //but here we cannot use function before declaration but in line 28 - 31 this will not be the case



    


