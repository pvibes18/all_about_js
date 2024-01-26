//stack (Primitive) and Heap (Non Primitive)

let name1= "Xavier's"

let name2 = name1
name2 = "Notre Dame"

console.log(name1); //output: Xavier's
console.log(name2); //output: Notre Dame

let user1={
    email1:"user@google.com",
    userName1: "Aayan"
}

let user2 = user1
user2.email1 = "user@goldmansachs.com"

console.log(user1.email1); // output: user@goldmansachs.com
console.log(user2.email1); // output: user@goldmansachs.com

