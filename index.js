// commands : tsc config(tsc --init), package.json(npm init -y / npm init),
// package-lock.json(npm i @types/node -d)
// Variables
// (var , let & const)
// 1: Declaring Variables (declare & initiallize)
// let name1: string = "areeba"
// // 2: Variable Reassignment
// let age: number = 21;
// age = 22;
// console.log(age);
// with const
// const age: number = 21;
// age = 22;
// console.log(age);
// 3: Type Inference
// let age = 21;
// 4: Strong typing / Type Annotation
// let fatherName: string = "M.pervaiz";
// 5: Variable Hoisting
// 6: Variable Scope (global & local scope)
var teacher = "Sir Bilal";
console.log(teacher);
function slot() {
    var student = "rubab";
    console.log(student);
    console.log(teacher);
}
slot();
// 7: Type Narrowing
function age(x) {
    // console.log(x.toUpperCase());
    console.log(x);
    if (typeof x === "string") {
        console.log(x.toUpperCase());
    }
    else {
        console.log("Not a String!");
    }
}
// age("Software Engineer Soon!")
age(21);
// age(21)
// Topic : Variables In Typescript.
// 1. Define a variable age1 and assign it the value 25. 
//What is the type of the age variable?
var age1 = 25; //variable age is a number type
console.log(age1);
// 2. Create a constant variable PI and assign it the value 3.14.
// What are the advantages of using a constant variable over a 
//regular variable in TypeScript?
var PI = 3.14;
console.log(PI); // constant variable value does not reassign and const keyword
// is used for constant value such as PI and Gravity etc.
// 3. Declare a variable myName without initializing it. What is the
// initial value and type of the name variable?
var myName;
console.log(myName); // and its initial value is undefined and its variable type is undefined.
// 4. Explain the difference between declaring a variable using let 
//and const in TypeScript. Provide examples.
var name1 = "Areeba";
name1 = "Areeba Bano";
console.log(name1); // using let keyword 
var name2 = "Hammad";
// name2 = "Hammad khan" using const keyword value is not reasssign
console.log(name2);
// here is the difference of variable declaration with let and const 
// 5. Define a variable colors and assign it an array of strings containing
//  different colors. What is the type of the colors variable?
var colors = ["red", "purple", "black"];
console.log(colors); // this is an array of strings
// 6. What is the difference between declaring a variable without a type
// annotation and with a type annotation in TypeScript?
// here is the differnce
var food = "Tikka"; // without type annotation
console.log(food);
var favFood = "Biryani";
console.log(favFood); // with type annotation
// 7. Create a variable userInfo and assign it an object with name and age 
//properties. Provide type annotations for the userInfo variable.
var userInfo = {
    name: "Areeba Hammad",
    age: 22
};
console.log(userInfo); // this is an object with type annotation
// 8. Define a variable temperature and assign it a value of 20.5. What type
// does TypeScript infer for the temperature variable?
var temperature = 20.5;
console.log(temperature); // typescript infer number type because temprature value is number type
// 9. Declare a variable isLoggedIn and assign it a boolean value true.
// Later in the code, change its value to false. Is this allowed with const
// variables in TypeScript?
var isLoggedIn = true;
// isLoggedIn = false; this is not allowed in const
console.log(isLoggedIn);
var isStudent = true;
isStudent = false;
console.log(isStudent); // this is allowed in let
// 10. Define a variable student using the let keyword and assign it an object
// with name, age, and grade properties. Later in the code, update the grade
// property to a new value. Is this allowed in TypeScript? Why or why not?
var student = {
    name: "areeba",
    age: 22,
    grade: "A"
};
student.grade = "A+";
console.log(student);
