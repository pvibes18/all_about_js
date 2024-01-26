const name = "GitHub" //declaration of string
console.log(name)

const streak = 5

console.log(`So, I have started to use ${name} and I have maintained a streak of ${streak} days`);

const name1 = new String('Git-Hub') //declaration of string
console.log(name1);

console.log(typeof name1); //output:object

console.log(name1[4]); //output:u
console.log(name1.__proto__); //{}

console.log(name1.length); //7
console.log(name1.toUpperCase()) //GIT-HUB
console.log(name1.charAt(5)); //b
console.log(name1.indexOf('u')); //4

const newName = name1.substring(0,4) //output: Git- //4 is excluded
console.log(newName)

const newName2 = name1.slice(-6, 4)
console.log(newName2);

const newName3 = "    Kohli      "
console.log(newName3)
console.log(newName3.trim()); //remove all  the starting and end spaces

const url = "https://wwww.amazon.com"
console.log(url.replace('.','-')) //replaces the first dot only //output:https://www-amazon.com

console.log(url.includes('amazon')) //output : true

console.log(newName3.split('h')); // splits and converts into array //will not include h in the split string //will also include space while spliting //output: ['   Ko', 'li    ']

console.log(url.split('.')); //output : ['https://www', 'amazon', 'com']
console.log(url.endsWith('m')) //output: true




const a7= "   Kohli    "
console.log(a7.replace('i','V')); //ouput will be printed along with spaces
console.log(a7.endsWith('i')); //false //because a7 is ending with space




