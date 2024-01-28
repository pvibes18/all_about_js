//singleton => if declared as constructor then always singleton but if declared as literals then never singleton

// object literals

let mySym = Symbol("key1")

const user1 ={
    name: "Selina",
    "full name": "Selina Publishers",
    [mySym]:"mykey1",
    age: 34,
    location: "California",
    email: "selina@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Friday", "Saturday"] 

} //decl of object //object literals

// object can also be created by object.create and this is known as constructor method


console.log(user1.location)
console.log(user1["location"]);
console.log(user1["full name"]);
console.log(user1[mySym]);
console.log(typeof mySym); //symbol
console.log(typeof user1);  //object

user1.email = "selina@uber.com"
//Object.freeze(user1) //no changes can be made further once the bject is freezed
user1.location = "Queensland"
console.log(user1);

user1.greeting1 = function(){
    console.log("Hello people");
}
user1.greeting2 = function(){
    console.log(`Hello people ! Please refer the book ,  ${this.name}`);
}


console.log(user1.greeting1()); //Hello people
console.log(user1.greeting2()); //Hello people ! Please refer the book ,  Selina




