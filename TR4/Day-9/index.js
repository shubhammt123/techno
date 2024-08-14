// Conditional Statements
// if else , switch , ternary operators
// {
//     var a  = 20;
//     {
//         console.log(a);
//     }
// }
// console.log(a)

// functions
// Array , object
// Loops


let count = 10;

// if(count === 20){
//     console.log("The count is 20");
// }else{
//     console.log("The count is not 20");
// };

if(count === 20){
    console.log("The count is 20")
    console.log(a);
}else if(count > 20){
    console.log("The count is grater than 20")
}else{
    console.log("The count is less than 20")
}

// let firstNum = prompt("Enter the first number");

// console.log(firstNum);

// Prompt the user to enter their  username and password.
// if username is "admin" and password is 123 in numbers
// if both condition is true then display "Auth Successful" else "Auth Failed"
 
// let userName = prompt("Enter User name");
// let password = +prompt("Enter password");

// if(userName === "admin" && password === 123){
//     console.log("Auth Successful");
// }else{
//     console.log("Auth Failed");
// }

// if(userName === "admin"){
//     if(password === 123){
//         console.log("Auth Success");
//     }else{
//         console.log("Invalid Password")
//     }
// }else{
//     console.log("Invalid Username")
// }

// Ternary operator

// (userName === "admin" && password === 123) ? console.log("Auth Successful") : console.log("Auth Failed");

// count === 20 ? console.log("The count is 20") : count > 20 ? console.log("Count is grater than 20") : console.log("The count is less than 20");

// if(count===20){
//     console.log("The count is 20");
// }

// count === 20 ? console.log("The count is 20") 

// Switch Cases

let dayNumber = 3;
let dayName;

switch(dayNumber){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thrusday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid Day";
}

// console.log(dayName);

// functions

// Function decleration
// function expression
// arrow functions

// function sum(){
//     console.log("This is sum function")
// }

// // sum();

// const sum = function(){
//     console.log("This is function sum");
// }

// sum();

// const sum = ()=>{
//     console.log("This is arrow function")
// }


function sum(a,b){
    return a+b;
}
console.log(sum(3,4))

const add = (a,b)=>a+b;

// 2nd Difference between var let const

// scope - global scope , local scope or functional scope

// es6 - let , const , block scope

// var -- global scope but in case of function it acts like a local scope variable
// let , const -- block scope


// console.log(a);

// function sum(){
//     var a = 20;
//     console.log(a);
// }

// sum();

// console.log(a);

// var a = 20;

// {
//     let a = "shubham";
//     console.log(a)
// }

// console.log(a)

// Arrays and objects
        //  0  1  2  3  4
let arr = [10,20,30,40,50];

console.log(arr[arr.length - 1]);

arr[2] = "Techno";
console.log(arr);

let nestedArr = [10,20,30,[1,2,3,4],[20,30,40,["aaa","aab",[true , false]]]];

// let newArr = nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1][nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1].length-1][nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1][nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1].length-1].length-1]

// console.log(newArr);

// let newArr1 = nestedArr[nestedArr.length-1];
// let newArr2 = newArr1[newArr1.length-1];
// let newArr3 = newArr2[newArr2.length-1];
// let ele = newArr3[newArr3.length-1];
// console.log(ele);  

// Objects

let obj = {
    "firstName" : "Shubham",
    lastName : "Jain"
};

obj.firstName = "Vinay"
obj.section = "FSD";

let firstName = "section";

let keyName = "address"

obj[keyName] = "Jaipur"


console.log(obj);