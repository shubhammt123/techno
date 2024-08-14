// Conditional Statements
// if else , switch , ternary operators

// functions
// Array , object
// Loops

// let count =30;

// if(count==20){
//     console.log("The count is 20");
// }else{
//     console.log("The count is not 20");
// }

// if(count==20){
//     console.log("The count is 20");
// }else if(count > 20){
//     console.log("The count is grater than 20");
// }else{
//     console.log("The count is less than 20");
// }


// let firstNumber = prompt("Enter the first number");

// console.log(firstNumber);


// Prompt the user to enter their  username and password.
// if username is "admin" and password is 123 in numbers
// if both condition is true then display "Auth Successful" else "Auth Failed"

// let userName = prompt("Enter username");
// let password = +prompt("Enter Password");

// if(userName === "admin" && password === 123){
//     console.log("Auth Successful")
// }else{
//     console.log("Auth Failed")
// }

// if(userName === "admin"){
//     if(password === 123){
//         console.log("Auth Successful")
//     }else{
//         console.log("Auth Failed")
//     }
// }else{
//     console.log("Auth Failed")
// }

// Ternary Operator


// let count = 20;

// count === 20 ? console.log("The count is 20") : count >  20 ? console.log("The count is grater than 20") : console.log("The count is less than 20");

// let userName = prompt("Enter username");
// let password = +prompt("Enter Password");

// (userName === "admin" && password === 123) ? console.log("Auth Successful") : console.log("Auth Failed");

// Switch Cases

let dayNumber = 3;
let dayName;

switch(dayNumber){
    case 1:
        dayName  = "Monday";
        break;
    case 2:
        dayName =   "Tuesday";
        break;
    case 3 :
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thrusday";
        break;
    case 5 :
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Inavlid Day Number"
}

// console.log(dayName);

// Functions

// function decleration

// function sum(){
//     console.log("This is sum function");
// }

// function expression

// let sum = function(){
//     console.log("This is function expression");
// }
// Arrow functions

// let sum = ()=>{
//     console.log("This is Arrow function")
// }


// sum();

// let add = (a,b)=>a+b;

// let result = add(2,5);
// console.log(result);

// 2nd Difference between var let const

// global scope / local scope or functional scope
// Es6 - block scope

// var - global scope variable but in case of function it becomes local scope variable 
// let & const - block scope variable

// {
//     var a = 20;
// }

// {
//     // let a = "Shubham";
//     // console.log(a);
// }

// // console.log(a);

// function sum(){
//     var a = 20;
//     return a;
// }

// console.log(a);

// Arrays and objects
        //    0   1  2  3  4
let arr = [10,20,30,40,50];

console.log(arr[arr.length - 1]);

let nestedArr = [10,20,30,[1,2,3,4],[20,30,40,["aaa","aab",[true , false]]]];
let newArr1 = nestedArr[nestedArr.length-1];
let newArr2 = newArr1[newArr1.length-1];
let newArr3 = newArr2[newArr2.length-1];
console.log(newArr3[0]);
// let newArr = nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1][nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1].length-1][0];
// console.log(newArr);

// console.log(arr.length)

// arr[arr.length] = "Shubham";
// console.log(arr);

// Objects

let obj = {
    "firstName" : "Shubham",
    "lastName" : "Jain"
}

// obj.lastName = "Mittal";
obj.section = "FSD";

// console.log(obj);

let firstName = "section";

let keyName = "Address";

obj[keyName] = "Jaipur";

console.log(obj);



