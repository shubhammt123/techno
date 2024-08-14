// var x = "Shubham Jain";
// console.log("Hello Techno");

// alert("Hello TR-4");

// var let const

// var firstVar = 20;

// console.log(firstVar);

// Datatypes-- Primitive Types , Reference Type Data type

// Primitive Type - string,number,boolean,undefined,symbol,bigInt
// Reference Type - Array , Object , Date , null

// var str = "I'm a full Stack 'Developer'";

// console.log(str);
// console.log(typeof str)

// var a = -20.11;
// console.log(typeof a);

// var a = false;
// console.log(typeof a);

// var a = undefined;
// console.log(typeof a);

// var a;
// console.log(a);

// var a = [10,20,true ,"shubham",undefined,[],[],{}];
// console.log(a);
// console.log(typeof a);
// var a = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// [{},{},{}] -- Json--JS object notation

// console.log(a);

// var date = new Date();
// console.log(typeof date);

// var a = null;
// console.log(typeof a);

// var x = true; 

// Var , let , const

// ECMA script

// 2015 -- ES06

// var b = 20;

// var b = 40;
// Variable with var can be redecleared or can be re assigned

// let c = 100;

// c = 200;
// Variable with let cannot be redecleared but can be re assigned

// const d = 1000;
// d = 2000;

// Variable with const cannot be redecleared or re-assigned

// Operators

// Arithematic Operator

let a = 10;
let b = 20;
let sum = a + b;
let sub =  a - b;
let mul =   a * b;
let div = a / b;
let exp = a ** b;
let rem = a % b;
// console.log(sum , sub , mul , div , exp  , rem);

// Addition Assignment

let x = 10;
// x = x + 20;
x += 20; // x = x + 20 -- addition Assignement
x -= 20; // x = x - 20 -- Sub Assignement
x *= 20; // x = x * 20 -- Mul Assignement
x /= 20; // x = x / 20 -- Div Assignement
x **= 20; // x = x ** 20 -- Exp Assignement
x %= 20; // x = x % 20 -- Rem Assignement
// console.log(x);

// Comparision Operator

let num1 = 50;
let num2 = "50";

// console.log(num1 === +num2); //type coersion
console.log(num1 !== num2); //type coersion

console.log(5-'5');

let firstName = "Shubham";
let lastName = "Jain";

console.log(firstName+" " +lastName);

// Logical Operators

let isLoggedIn = 10;
let isAdmin = 20;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);

