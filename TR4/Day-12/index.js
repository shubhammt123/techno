// let arr = [10,20,30,40,50,60];

// let filteredArr = arr.filter(item=>item>20);
// console.log(filteredArr);

// let arr = [10,20,30,40,50,60];

// let sum = arr.reduce((acc, curr)=>{
//     return acc + curr;
// } , 1000);
// //  acc    curr
//     0      10   10
//     10      20   30
//     30      30   60
//     60      40   100
//     100     50   150
//     150     60   210
// console.log(sum);


// let arr = [10,20,30,40,50,60];

// let foundItem = arr.find((item)=>item === 30);
// console.log(foundItem);
// let foundItemIndex = arr.findIndex((item)=>item === 30);
// console.log(foundItemIndex);


// let arr = [10,20,30,40,50,61];
// let hasEven = arr.some((item)=>item%2===0);
// console.log(hasEven);
// let everyEven = arr.every((item)=>item%2===0);
// console.log(everyEven);

// Object Methods

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// let keys = Object.keys(obj);

// console.log(keys);

// let values = Object.values(obj);
// console.log(values);

// let entries = Object.entries(obj);
// console.log(entries);

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// Object.freeze(obj);

// obj.firstName = "vinay";
// obj.address = "Jaipur";
// console.log(obj);

// const num = {
//     firstName  : "shubham",
//     lastName : "jain"
// }

// num.firstName = "vinay"
// console.log(num);


// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// Object.seal(obj);

// obj.firstName =  "vinay";
// obj.address = "Jaipur";
// console.log(obj);

// console.log(obj.hasOwnProperty("address"));

// String methods

// let str = "Hello World";
// let char = str.charAt(6);
// console.log(char);

// let newStr = str.concat(" Techno");
// console.log(newStr);


// let str = "Hello World";
// let hasStr = str.includes("World");
// console.log(hasStr);


// let str = "Hello World";

// let index= str.indexOf("World");
// console.log(index);
// let index= str.lastIndexOf("l");
// console.log(index);


// let str = "Hello World";
// let newStr = str.slice(-5);
// console.log(newStr);
// let newStr1 = str.substring(-5); // 0
// console.log(newStr1);
// console.log(str)


// let str = "Hello World";

// let newStr = str.toUpperCase();
// let newStr = str.toLowerCase();
// console.log(newStr);

// let str = "Hello World bgghg ghgh hgh ghgh ghg hgh gh gh gh ghg hgh  ghgvgf   g";
// let splittedStr =  str.split(" ");
// console.log(splittedStr);

// let str = "    Hello        World    ";
// console.log(str.length)
// let trimmedStr  = str.trim();
// console.log(trimmedStr.length)
// console.log(trimmedStr);

// let str = "Hello World";
// let newStr = str.replace("World" , "Techno")
// console.log(newStr);

// let newStr1 = str.repeat(3);
// console.log(newStr1);

// // Date methods
// let date = new Date();
// console.log(typeof date);

// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getTime())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getFullYear())
// // console.log(date.getMonth())
// let date = new Date();
// console.log(date.toLocaleTimeString());


// Math Object

let num = Math.random();  // 0 - 0.9999999...
// console.log(num);

let floatNum = 10.534;
// console.log(Math.floor(floatNum));
// console.log(Math.ceil(floatNum));
// console.log(Math.round(floatNum));
// console.log(Math.pow(2,5));
// console.log(Math.sqrt(16));
// console.log(Math.min(100,20,40,500));
// console.log(Math.max(100,20,40,500));


// let otp = Math.floor(1000 + Math.random()*9000); // 1000 - 9999
// console.log(otp);

// Destructuring

// let arr = [10,100];

// const [ num1 , num2=20 ] = arr;

// console.log(num1 , num2)


// Object Destructuring

let obj = {
    firstName : "shubham",
    lastName : "Jain",
    address : "Jaipur",
    gender : "Male"
}

let { firstName ,  gender:a , age = "xx" , ...newObj } = obj; 

// console.log(firstName)
// console.log(a)
// console.log(age)
// console.log(newObj);