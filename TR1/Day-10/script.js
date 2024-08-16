// "use strict"
// loops , strict mode , console types , array methods

// for , while , do while 

// let a = 20;
// b = 30;
// console.log(b);

// function sum(a,a){
//     // "use strict"
//     console.log("Sum function")
// }

// sum();


// let count = 11;

// while(count <= 10){
//     console.log(count);
//     count++
// };

// do{
//     console.log(count);
//     count++
// }while(count <=5);

// for(let i = 0;i<=10;i++){
//     console.log(i);
// }

// for(i = 10 ; i > 0 ; i--){
//     console.log(i);
// }

// let arr  = [10,20,30,40,50,60,70,80,90];

// for(let i = 0; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// for of and for in loop

// let items = ["first" , "second" , 3 , 4 , "Fifth"];

// for(let item of items){
//     console.log(item);
// }

// for(let index in items){
//     console.log(index)
//     console.log(items[index]);
// }

// Types of console

// console.log("log statement");
// console.error("This is an error console");
// console.warn("This is a warning console");

// console.assert(5>10,"5 is not grater than 10");
// console.assert(10>5,"10 is not grater than 5");

// let person = {
//     name : "shubham",
//     age : "**",
//     address : {
//         city : "jaipur",
//         zipCode : "302018"
//     },
//     hobbies : ["Riding","Travelling"]
// }

// console.dir(person);


// let data = [
//     {
//         name : "shubham",address : "jaipur",dept : "FSD"
//     },
//     {
//         name : "Vinay" , address : "Udaipur" , dept : "DS"
//     },
//     {
//         name : "Harshit",address : "Kota" , dept : "Python"
//     }
// ]

// console.table(data);

// console.group("Group");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();

// console.count("Counter");
// console.count("Counter");
// console.count("Counter");

// Array Methods

// Push ,  pop , shift , unshift

// let arr = [10,20,30,40,50,60];

// let result =  arr.push(1000);
// console.log(result);

// console.log(arr);

// console.log(arr.pop())

// console.log(arr);

// let arr = [10,20,30,40,50,60];

// console.log(arr.unshift(1000));
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// let arr1 = [10,20];
// let arr2 = [30,40];

// let result = arr2.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(result);

// Slice , splice

// let arr = [10,20,30,40,50,60];

// let slicedArr = arr.slice(2,5);

// console.log(arr);
// console.log(slicedArr);

// let arr = [10,20,30,40,50,60];

// console.log(arr.splice(2,2));
// arr.splice(2,0,"shubham","jain");
// console.log(arr);

// Includes
// let result = arr.includes(120);
// console.log(result);

// reverse
// arr.reverse();
// console.log(arr);

// let arr = [10,20,30,40,50,60];
// let result = arr.join("techno");
// console.log(result);

// let arr1 = [10,20,[30,[40]]];
// let result = arr1.flat(2);
// console.log(result);

// map , filter , reduce

let arr = [10,20,30,40,50,60];

let newArr = arr.map((item , i)=>{
    // if(item == 30){
    //     return item;
    //     // break

    // }
    return i*item;
})

// console.log(newArr);
// console.log(arr);

// map returns a new arr with the same length as original 

// forEach

let result = arr.forEach((item , i)=>{
    console.log(i)
    // return item;
})

console.log(arr);
console.log(result);