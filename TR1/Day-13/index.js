// Date , rest , spread , Dom

// let date = new Date();

// console.log(typeof date)
// console.log(date.getDate());
// console.log(date.getDay()); // 1-7
// console.log(date.getMonth()); // 0 - 11
// console.log(date.getFullYear());
// console.log(date.getTime());
// console.log(date.getHours());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleTimeString());

// let firstName = "Vinay";

// Destructuring

// let arr = [10 , 20];

// let num = arr[2]

// let [num1 , num2=100] = arr; //rest
// console.log(num1 , num2 );

// Object desturucturing

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain",
//     gender : "Male"
// }

// let { firstName:a , address } = obj;

// console.log(a);

// let obj1 = {};
// obj1[firstName] = "xyz"
// obj1[address] = "abc"
// console.log(obj1);

// let arr1 = [10,20,30];
// let arr2 = arr1;

// arr2.push(1000);

// console.log(arr1);
// console.log(arr2);

// let num1 = 20;
// let num2 = num1;

// num2 =+ 10;

// console.log(num1 === num2);

// let arr1 = [10,20,30];
// let arr2 = [10,20,30];

// arr2.push(1000);

// console.log(arr1 === arr2);

// Spread operator

// let arr1 = [10,20,30];
// let arr2 = [...arr1];

// arr2.push(1000);

// console.log(arr1);
// console.log(arr2);


// let arr1 = [10,20,30];
// let arr2 = [30,40,50];

// let arr3 = [...arr1 ,100 , ...arr2 , 20 , 1000 ];
// console.log(arr3);

// let obj1 = {
//     firstName : "shubham",
//     lastName : "Jain",
// }

// let obj2 = {
//     firstName : "Vinay",
//     address : "Jaipur",
//     gender : "Male"
// }

// let obj3 = {...obj2 ,...obj1 ,  section : "FSD"};
// console.log(obj3);

// DOM -- Document object model

