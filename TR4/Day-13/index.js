// let arr1 = [10,20,30];
// let arr2 = arr1;

// arr2.push(1000);
// console.log(arr1)
// console.log(arr2)
// console.log(arr1 === arr2);

// Spread Operator
// let arr1 = [10,20,30];
// let arr2 = [...arr1];
// arr2.push(1000);
// console.log(arr1)
// console.log(arr2);
// console.log(arr1 === arr2);

// let arr1 = [10,20,30];
// let arr2 = [30,40,50];

// let arr3 = [ 100,...arr1 , 2000 , ...arr2 , 1000];
// console.log(arr3);

let obj1 = {
    firstName : "Shubham",
    lastName : "Jain"
}

let obj2 = {
    firstName : "Vinay",
    address : "Jaipur",
    gender : "Male"
}

let obj3 = {...obj2 ,...obj1 , };
console.log(obj3);
