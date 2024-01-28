const tinder = new Object() //singelton object
const tinder1 = {} //non singleton object

console.log(tinder); //{} // this means object is empty

//******************************************************** */

const indianCric1 = {}

indianCric1.id = "VK18"
indianCric1.name = "Virat Kohli"
indianCric1.inTeam = true

console.log(indianCric1); //{ id: 'VK18', name: 'Virat Kohli', inTeam: true }

//************************************************************ */

const indianCric2 = {
    full_name : {
        crickfullname: {
            firstname : "Mahendra",
            middlename : "Singh",
            lastname : "Dhoni",
        }
    },
    email : "MSDhoni@indianCrick.com",
}

console.log(indianCric2.full_name);  //output below

// {
//     crickfullname: { firstname: 'Mahendra', middlename: 'Singh', lastname: 'Dhoni' }
//   }

console.log(indianCric2.full_name.crickfullname.lastname); //accessing objects within objects //output: Dhoni

//******************************************************************* */

const target = {1:"a", 2:"b"}
const source =  {2:"c", 3:"d"}

const finalTarget = Object.assign(target, source)

console.log(finalTarget);  //{ '1': 'a', '2': 'c', '3': 'd' }
console.log(target);       // same as above
console.log(finalTarget == target);   //true

//**************************************************** */

const o1 = {1:"a", 2:"b"}
const o2 =   {2:"c", 3:"d"}

const o3 = {...o1, ...o2} //spread
console.log(o3);  //{ '1': 'a', '2': 'c', '3': 'd' }

//******************************************************* */

console.log(Object.keys(indianCric1))  // [ 'id', 'name', 'inTeam' ] //array type output

console.log(Object.values(indianCric1));  //[ 'VK18', 'Virat Kohli', true ]

console.log(Object.entries(indianCric1)); // [ [ 'id', 'VK18' ], [ 'name', 'Virat Kohli' ], [ 'inTeam', true ] ]

console.log(indianCric1.hasOwnProperty('id'));  //true







