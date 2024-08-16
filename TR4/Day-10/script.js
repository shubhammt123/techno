"use strict"
// loops , strict mode , console types , array methods

// while , do while , for 

// let count = 10;

// while(count <= 10){
//     console.log(count);
//     count++
// }

// do{
//     console.log(count);
//     count++;
// }while(count < 10);

// for(let i = 10;i>0;i--){
//     console.log(i);
// }

// break and continue

// for(let i = 0 ; i < 10 ; i++){
//     if(i == 6){
//         continue;
//     }
//     console.log(i);
// }

// let arr = [10,20,30,40,50,60,70];

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]*10);
// }

// for of and for in loop

// let arr = [10,20,30,40,50,60,70];

// for(let element of arr){
//     console.log(element)
// }

// for(let index in arr){
//     console.log(index);
// }

// let items = ["first" , "second",3,4,"fifth"];

// for(let item of items){
//     console.log(item);
// }

let a = 20;
// b = 30;
// console.log(b);

// function sum(a,a){
//     // "use strict"
//     console.log("sum function")
// }

// sum();

// Types of console

// console.log("Hello Techno")
// console.error("This is an error console")
// console.warn("This is a warning console")
// console.assert(5 > 10, "5 is not grater than 10")
// console.assert(10 > 5, "10 is not grater than 5")


let person = {
    name: "shubham",
    age: "**",
    address: {
        city: "Jaipur",
        pinCode: "302018"
    },
    hobbies: ["Riding", "Travelling"]
}

// console.dir(person);

let data = [
    {
        name: "shubham", city: "Jaipur", dept: "FSD"
    },
    {
        name : "Vinay" , city : "Udaipur" , dept : "DS"
    },
    {
        name : "Harshit" , city : "Kota" , dept : "Ui/Ux"
    }
]

// console.table(data);

// console.group("Group1");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();

// console.count("Counter")
// console.count("Counter")
// console.count("Counter")

// Array Methods

// let arr = [10,20,30,40,50,60];

// push , pop , shift , unshift

// let result = arr.push(1000);
// console.log(result);
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// shift , unshift

// let arr = [10,20,30,40,50,60];

// arr.unshift(1000);

// console.log(arr);

// arr.shift();

// console.log(arr);

// Concat

// let arr1 = [10,20];
// let arr2 = [30,40];

// let result = arr1.concat(arr2);
// console.log(result);
// console.log(arr1);
// console.log(arr2);

// slice and splice

// let arr = [10,20,30,40,50,60];

// let slicedArr = arr.slice(2, 5);

// console.log(slicedArr);
// console.log(arr);

// let result = arr.splice(2 , 0 , "shubham" , "jain");
// console.log(result);
// console.log(arr);

// includes  , reverse , join , flat

// let result = arr.includes(400);

// console.log(result);

// let arr = [10,20,30,40,50,60];

// arr.reverse();
// console.log(arr);

// let joinedStr = arr.join("%");
// console.log(joinedStr);

// let arr = [10,20,[30,[40]]];

// let result = arr.flat(2);

// console.log(result);

// map , filter , reduce  , forEach

let arr = [10,20,30,40,50,60,];



// callback functions
// Higher order functions

// let newArr  = arr.map((item , i)=>{
//     // if(item > 30){
//     //     return item * 10;
//     // }
//     return item * i;
// })

// console.log(newArr);
// console.log(arr);

// map return new array with the same length as original  

// forEach

// let newArr =  arr.forEach((item , i)=>{
//     console.log(i);
//     return item*10
// })

// console.log(newArr);
// console.log(arr);
