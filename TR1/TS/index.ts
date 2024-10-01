let isActive:boolean = true
console.log(isActive)

let hobbies:string[] = ["travelling" , "football"];

// Tuples

// let person : [string , number];

// person = ["shubham",100]

let id : number | string;

id = "abcd"
id =  20;

let someValue:any = "this is a string";

let strLength:number = (someValue as string).length;

// let add = (x:number,y : number):number=>{
//     return x+y;
// }

// console.log(add(2,3))

// interface Person {
//     firstName : string,
//     lastName : string
// }

// let person:Person = {
//     firstName : "shubham",
//     lastName : "Jain"
// }

class Animal {
    name : string

    constructor(name:string){
        this.name =  name
    }

    move(distance:number){
        console.log(`${this.name} moved ${distance}m`)
    }
}

const dog = new Animal("Dog")
dog.move(10)

class Person{


    constructor( public name : string , private age : number){
        this.name = name;
        this.age =  age;
    }

    get getAge():number{
        return this.age
    }

    set setAge(number:number){
        this.age = number
    }
}

let person = new Person("shubham" , 100);

console.log(person.name);
console.log(person.getAge);
person.setAge  = 100;


function add(a:number ,  b:number):number;
function add(a:string , b:string):string;
function add(a:any , b: any):any{
    return a+b
}

let a : null = null;
let b : undefined = undefined;