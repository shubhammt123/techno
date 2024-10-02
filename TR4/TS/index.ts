let greeting:string = "Hello, World";
console.log(greeting);

let age:number = 20;
let isActive:boolean =  true;
let a:null = null;
let b:undefined = undefined;

let arr:string[] = ["Shubham","Jain"];

// let person:[string ,  number];

// person = ["shubham",100];

let x : string | number = "Hello";

let someValue:any = "This is a string";

let strLength:number = (someValue as string).length;

const add = (x:number,y:number):number=>{
    return x+y;
}

console.log(add(2,5));

interface Person {
    firstName : string,
    lastName :  string
}

let person:Person = {
    firstName : "shubham",
    lastName : "Jain",
}