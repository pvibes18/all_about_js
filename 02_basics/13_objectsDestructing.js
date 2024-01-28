const course = {
    courseName : "JavaScript",
    courseFee : "999",
    courseInstructor : "Documentation",

}

console.log(course.courseInstructor);  //accessing values from object course

const {courseInstructor : teacher} = course //i want to call courseInstructor key as teacher so we can use a colon to destructure the previous one 
console.log(teacher);  //output: Documentation

//************************APIs in brief********************************** */

// {
//     "name": "GitHub",
//     "id": "git123",
//     "refNo" : "123",
// } // string keys and string values in apis

// it can also be in the format of "objects within arrays"

// [
//     {},
//     {},
//     {},
// ]

