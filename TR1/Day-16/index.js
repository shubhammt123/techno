// This

// let user = {
//     username : "shubham",
//     age : "40",
//     getUserDetails : function(){
//         console.log(this);
//         // console.log(`Hello, My username is ${this.username} and my age is ${this.age}`);
//     }
// }

// console.log(this);

// user.getUserDetails();

// Constructors -- functions 

// function Person(name,age){
//     const personObj = {
//         username : name,
//         age : age,
//         greet : function(){
//             console.log(`Hello, my name is ${this.username} and my age is ${this.age}`);
//         }
//     }
//     return personObj;
// }

// const person1 = Person("shubham","40");
// const person2 = Person("vinay",50);
// person1.greet();
// person2.greet();

// function Person(name , age){
//     this.name = name;
//     this.age = age;
//     // this.greet = function(){
//     //     console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
//     // }
// }

// Person.prototype.greet = function(){
//     console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
// }

// const person1 = new Person("shubham","40");
// const person2 = new Person("Vinay","50");
// console.log(person1);
// console.log(person2);
// person1.greet();
// person2.greet();

// let arr = [10,20,30];
// console.log(arr);


// Classes

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
//     }    
// }

// const person1 = new Person("shubham",40);

// console.log(person1)

// class Animal{
//     constructor(name){
//         this.name =  name;
//     }

//     speak(){
//         console.log(`${this.name} makes a noise`);
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }

//     speak(){
//         console.log(`${this.name} barks`);  // function overriding , inherit , 
//     }

// }

// class Cat extends Animal{
//     constructor(name){
//         super(name);
//     }

//     speak(){
//         console.log(`${this.name} meows`);
//     }
// }

// class BankAccount{
//     #balance = 0;

//     constructor(owner){
//         this.owner = owner;
//     }

//     deposit(amount){
//         this.#balance += amount;
//         console.log(`${this.owner} deposited ${amount} , Current Balance : ${this.#balance}`)
//     }
// }

