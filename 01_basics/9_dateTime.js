let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); //output:Sat Jan 27 2024 14:57:19 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());
console.log(myDate.toDateString()); //output:Sat Jan 27 2024
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString())  //output:27/1/2024
console.log(myDate.toLocaleString())  //output:27/1/2024, 2:57:19 pm

console.log(typeof myDate)  //object

//creating date of my own choice below

let myCreatedDate1 = new Date(2024, 0, 30) //month starts from 0 in js
console.log(myCreatedDate1.toDateString()); //Tue Jan 30 2024
console.log(typeof myCreatedDate1) //object

let myCreatedDate2 = new Date(2024, 0, 30, 8, 23, 23)
console.log(myCreatedDate2.toLocaleString()); //30/1/2024, 8:23:23 am
console.log(typeof myCreatedDate2) //object

let myCreatedDate3 = new Date("2024-01-30") //in yy-mm-dd format
console.log(myCreatedDate3.toLocaleString()); //30/1/2024, 5:30:00 am

let myCreatedDate4 = new Date("01-30-2024") //in mm-dd-yy format
console.log(myCreatedDate4.toLocaleString()); //30/1/2024, 12:00:00 am


let myTimeStamp = Date.now()
console.log(myTimeStamp); //1706348754793 //time in miliseconds

console.log(myCreatedDate4.getTime()); //1706553000000 //useful in comparison like in quizes, fastest_finger_first etc

console.log(Math.round(Date.now()/1000)); //1706348942 //got a slightly smaller value in seconds

let D1 = new Date()
console.log(D1.getMonth()); //output: 0 //this means January
console.log(D1.getDay());  //output: 6 //this means Saturday

