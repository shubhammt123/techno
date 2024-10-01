var isActive = true;
console.log(isActive);
var hobbies = ["travelling", "football"];
// Tuples
// let person : [string , number];
// person = ["shubham",100]
var id;
id = "abcd";
id = 20;
var someValue = "this is a string";
var strLength = someValue.length;
var add = function (x, y) {
    return x + y;
};
console.log(add(2, 3));
var person = {
    firstName: "shubham",
    lastName: "Jain"
};
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log("".concat(this.name, " moved ").concat(distance, "m"));
    };
    return Animal;
}());
var dog = new Animal("Dog");
dog.move(10);
