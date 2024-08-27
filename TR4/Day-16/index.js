// Constructors
// This

// let user = {
//     username : "shubham",
//     age : "abc",
//     greet : function (){
//         console.log(this);
//         // console.log(`Hello, my username is ${this.username} and my age is ${this.age}`)
//     }
// }

// console.log(this);

// function sum(){
//     console.log(this);
// }

// Constructor

// function Person(name,age){
//     const personObj = {
//         username : name,
//         age : age,
//         greet :   function (){
//             console.log(`Hello, my username is ${this.username} and my age is ${this.age}`)
//         }
//     }
//     return personObj;
// }

// let person1 = Person("shubham","abc");
// let person2 = Person("vinay","xyz");
// person1.greet();
// person2.greet();
// Date , Promise , Array , Object , Number , Boolean , String

// function Person(name , age){
//     this.name = name;
//     this.age = age;
//     // this.greet = function(){
//     //     console.log(`Hello, my username is ${this.name} and my age is ${this.age}`)
//     // }
// }

// Person.prototype.greet = function(){
//         console.log(`Hello, my username is ${this.name} and my age is ${this.age}`)
//     }

// let person1 = new Person("shubham","abc");
// let person2 = new Person("vinay","xyz");
// person1.greet();
// console.log(person2.greet());
// console.log(person1.greet());
// console.log(person2)

// let arr = [1,2,3] //new Array()
// console.log(arr)

// Classes

// class Person{
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log(`Hello, my username is ${this.name} and my age is ${this.age}`);
//     }
// }

// let person1 = new Person("shubham","abc");
// let person2 = new Person("vinay","xyz");

// console.log(person1)
// console.log(person2)

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     speak(){
//         console.log(`${this.name} makes noise`)    
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }

//     speak(){
//         console.log(`${this.name} Barks`);
//     }
// }

// const animal1 = new Animal("dog");
// const animal2 = new Dog("dog");

// console.log(animal1.speak());
// console.log(animal2.speak());

class BankAccount{
    #balance = 0;

    constructor(owner){
        let _owner = owner;
        this.get_owner_name = ()=> _owner
    }

    deposite(amount){
        this.#balance += amount;
        console.log(`${this._owner} deposited ${amount}, Current Balance : ${this.#balance}`);
    }
}

const customer1 = new BankAccount("shubham");

// customer1._owner = "Harshit";
console.log(customer1.get_owner_name())