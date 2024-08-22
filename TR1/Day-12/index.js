// let arr = [10,20,30,40,50];

// let filteredArr = arr.filter((item)=>item!==100);

// console.log(filteredArr);

// Reduce
// let arr = [10,20,30,40,50];
// let sum = arr.reduce((acc , curr)=>{
//     return  acc + curr;
// },1000);

//       acc    curr
        // 1000     10     10
        //   10    20     30
        //   30    30     60
        //   60    40    100
        //   100   50    150

// console.log(sum);

// let arr = [10,20,30,40,50];
// let foundItem = arr.find(item=>item>20);
// console.log(foundItem);

// let arr = [10,20,30,40,50];

// let foundElementIndex = arr.findIndex(item=>item>30);
// console.log(foundElementIndex);

// let arr = [11,21,31,41,51];
// let hasEven = arr.some((item)=>item%2===0);
// console.log(hasEven);

// let arr = [11,20,30,40,50];

// let evenArr = arr.every((item)=>item%2===0);
// console.log(evenArr);


// Object methods

// let obj = {
//     firstName : "Shubham",
//     lastName :  "Jain"
// }

// let keys = Object.keys(obj);
// console.log(keys);

// let values = Object.values(obj);
// console.log(values);

// let entries = Object.entries(obj);
// console.log(entries);

// let obj = {
//     firstName : "Shubham",
//     lastName :  "Jain"
// }

// Object.freeze(obj);

// obj.firstName = "Vinay";
// obj.address = "Jaipur";
// console.log(obj);

// const object1 = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// object1.firstName = "vinay";
// console.log(object1);

// let obj = {
//     firstName : "Shubham",
//     lastName :  "Jain"
// }

// Object.seal(obj);

// obj.firstName = "vinay";
// obj.address = "Jaipur";
// console.log(obj);

// console.log(obj.hasOwnProperty("gender"));

// String methods

// let str = "Hello World";

// let char =  str.charAt(6);
// console.log(char);

// let str = "Hello World";
// let newStr = str.concat(" Techno");
// console.log(newStr);

// let hasWorld = str.includes("world");
// console.log(hasWorld);

// let str = "Hello World o";
// let index = str.indexOf("or");
// let index1 = str.lastIndexOf("o");
// console.log(index1);

// let str = "Hello World";
// let slicedStr = str.slice(-5);
// console.log(slicedStr);

// let subStr = str.substring(-5); // 0
// console.log(subStr);

// let str = "Hello World";
// // let newStr = str.toUpperCase();
// let newStr = str.toLowerCase();
// console.log(newStr);

// let str = "    Hello       World    ";
// console.log(str.length);
// let trimmedStr = str.trim();
// console.log(trimmedStr.length);


// let str = "Hello Wrold hjhj hjh hjjh jj hjhhj hjhj jhj hjh jhj";
// let splittedStr = str.split("");
// console.log(splittedStr);

let str = "Hello World";

let newStr = str.replace("World" , "Techno");
// console.log(newStr);

let newStrr = str.repeat(2);
// console.log(newStrr);

// Math object

// let num = Math.random();
// console.log(num);

let num = 10.5343;
console.log(Math.round(num));

console.log(Math.pow(2,3));
console.log(Math.sqrt(16));

let otp = Math.floor(1000 + Math.random()*9000 )  // 1000 - 9999