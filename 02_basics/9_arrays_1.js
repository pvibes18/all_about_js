// Array => stores multiple items k/a elements in a single variable
// js arrays are resizable 

const myArr= [0, 1, 2, 3, 4, 5, true, "GitHub"] //can contain a mixture of diff data types

console.log(myArr[6]); //TO ACCESS ITS ELEMENTS

// Shallow copy of an object is a copy whose properties share the same reference 

// JS array-copy operations create shallow copies *********imp********

const myArr2= ["Virat Kohli", "Darshan Raval", ,"AB DeVillers" , "David Warner","Quinton DeCock" ]

const myArr3 = new Array(1, 2, 3, 4, 5)
console.log(myArr3[0]);

// Array Methods

myArr.push(23) //***Method_1******
console.log(myArr);  //[0, 1, 2, 3, 4, 5, true, "GitHub", 23]

myArr.pop() //****Method_2***** 
console.log(myArr)   //[0, 1, 2, 3, 4, 5, true, 'GitHub'] //last element removed

myArr.unshift(8)  //*****Method_3**** 
console.log(myArr); //[8, 0, 1, 2, 3, 4, 5, true, 'GitHub'] //element gets placed at the starting

myArr2.shift() //********Method_4****** 
console.log(myArr2); //below is the output //1st element is removed

// [
//     'Darshan Raval',
//     <1 empty item>,
//     'AB DeVillers',
//     'David Warner',
//     'Quinton DeCock'
//   ]


myArr3.shift()
console.log(myArr3);  //[ 2, 3, 4, 5 ]

console.log(myArr3.includes(1));  //false //******Method_5*** 
console.log(myArr3.indexOf(4));   //2    //******Method_6*** 
console.log(myArr3.indexOf(23))   //-1 //this means does not exist  ////******Method_7*** 
console.log(myArr3[-1])  //undefined  //******Method_8**** 


let newArr = myArr3.join()

console.log(newArr) //2,3,4,5 //adds into string dataType
console.log(myArr3);  //[ 2, 3, 4, 5 ] //still in array form
console.log(typeof myArr3);  //object
console.log(typeof newArr);   //string


//******Method_9 and Method_10*********** 

//slice(): => original array does not gets changed whether it is defined as let or constant
 
//slice(5,9) => this means slice the array from 5th index to 8th index and return the same that is array from 5th to 8th index

const z1 = [100, 8, 23, 823, 9, 73]
console.log("A", z1);   //A [ 100, 8, 23, 823, 9, 73 ]

const z2 = z1.slice(1,4)
console.log(z2);         //[ 8, 23, 823 ]
console.log(z1);         //[ 100, 8, 23, 823, 9, 73 ]
console.log("B", z1);    //B [ 100, 8, 23, 823, 9, 73 ]

console.log(" ");

// splice(): original array is affected if splice is done whether even if it defined as constant

// splice(5,9): it means splice the array from 5th index to 9th index and return it . But now if you print the  original array it will not include the spliced elements that is elements from 5th to 9th index will be removed

const y1 = [94, 67, 90, 43, 77, 33]
console.log("C", y1)  //C [ 94, 67, 90, 43, 77, 33 ]

const y2 = y1.splice(1,4)
console.log(y2);          //[ 67, 90, 43, 77 ]
console.log(y1);          //[ 94, 33 ]
console.log("D", y1);     //D [ 94, 33 ]








