var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num = 12;
// function foo(input:string):number{
//     return 1;
// }
// class keyword
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 23;
        this.name = "Arristar";
    }
    Person.prototype.foo = function () {
        // some inital value
        void (0);
    };
    return Person;
}());
var employee1 = {
    name: "JR",
    age: 30,
    foo: function () { return 1; }
};
// abstract class
var People = /** @class */ (function () {
    function People() {
        this.age = 23;
        this.a = "";
    }
    return People;
}());
// class can implement multiple interfaces
var FrontendTrainer = /** @class */ (function () {
    function FrontendTrainer(name, age, energy) {
        this.tech = "Angular";
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    return FrontendTrainer;
}());
// interface cannot implement another interface
// => Interface declaration cannot have 'implements' clause.
/*
interface juniorTrainer implements Trainer{

}
*/
// Inheriting values
var Human = /** @class */ (function () {
    function Human() {
        this.male = "male";
        this.female = "female";
    }
    return Human;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skill = "programming";
        return _this;
    }
    return Programmer;
}(Human));
// class cannot extend multiple classes, chain them instead
// => Classes can only extend a single class.
/*
class seniorProgrammer extends Human, Programmer{

}
*/
// chain
// Human => Programmer => seniorProgrammer
var seniorProgrammer = /** @class */ (function (_super) {
    __extends(seniorProgrammer, _super);
    function seniorProgrammer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return seniorProgrammer;
}(Programmer));
var srProgrammer = new seniorProgrammer();
// console.log(srProgrammer);
// ----------enum and type
var Country;
(function (Country) {
    Country[Country["China"] = 86] = "China";
    Country[Country["USA"] = 1] = "USA";
    Country[Country["Vietnam"] = 84] = "Vietnam";
    Country[Country["Korea"] = 85] = "Korea"; // will automatically set to 85 => plus one to the closest previous
})(Country || (Country = {}));
var data = {};
data.countryCode = 1;
// Assigning non-exist type will result in an error
// Type '"superAdmin"' is not assignable to type 'role'.
var antraShare_role = "admin";
// -------------Decorator
// design pattern
// adding onto / enhancing the original functionality
//currying
function foo() {
    // createName
    var age = 23;
    return function (name) {
        console.log(name + "is " + age + " years old.");
    };
}
foo()("Arristar");
// to use decorator, import in tsconfig.json or unable in command line
var Name = "Arristar";
// @foo() => foo()()
// AngularJS ==state management==> ReactJS 
//    ||
// TypeScript
//    ||
//    \/
// Angular 2
