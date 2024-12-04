var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        console.log("Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var alice = new Person("Alice", 30);
console.log(alice.name);
alice.getName(); // Hi, my name is Alice and I am 30 years old.
