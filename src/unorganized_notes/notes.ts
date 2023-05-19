const num : number = 12;

// function foo(input:string):number{
//     return 1;
// }

// class keyword
class Person {
    name: string
    age: number = 23
    foo(){
        // some inital value
        void(0);
    }
    constructor(name: string){
        this.name = "Arristar"
    }
}

// interface
interface Employee {
    name: string
    age: number
    foo: ()=>{}
}

const employee1: Employee = {
    name: "JR",
    age: 30,
    foo: ()=>{return 1}
}

// abstract class
abstract class People{
    name: string | undefined;
    age: number = 23;
    a: string = "";
}


// Inheritance
interface Trainer {
    name: string
    age: number
}

interface Teenage {
    energy: boolean
}

// class can implement multiple interfaces
class FrontendTrainer implements Trainer, Teenage {
    tech: string = "Angular";
    /*
    name = "JR";
    age = 30;
    energy = true;
    */

    // or use a constructor
    name: string;
    age: number;
    energy: boolean;
    constructor(name: string, age: number, energy: boolean){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
}

// interface cannot implement another interface
// => Interface declaration cannot have 'implements' clause.
/* 
interface juniorTrainer implements Trainer{

} 
*/

// Inheriting values
class Human {
    male: string = "male";
    female: string = "female";
}

class Programmer extends Human{
    skill: string = "programming";
}

// class cannot extend multiple classes, chain them instead
// => Classes can only extend a single class.
/*
class seniorProgrammer extends Human, Programmer{

}
*/

// chain
// Human => Programmer => seniorProgrammer
class seniorProgrammer extends Programmer {
    // all properties
}

const srProgrammer = new seniorProgrammer();
// console.log(srProgrammer);


// ----------enum and type

enum Country {
    China = 086,
    USA = 1,
    Vietnam = 084,
    Korea // will automatically set to 85 => plus one to the closest previous
}

const data: any = {};
data.countryCode = 1;

// if(data.countryCode === Country.China)

type role = "admin" | "user" | "superUser" | undefined | {name: "Arristar"}
type gender = "male" | "female"

// Assigning non-exist type will result in an error
// Type '"superAdmin"' is not assignable to type 'role'.
const antraShare_role: role = "admin"

// -------------Decorator
// design pattern
// adding onto / enhancing the original functionality

//currying
function foo(){
    // createName
    let age = 23;
    return function(name: string){
        console.log(name + "is " + age + " years old.");
    }
}

foo()("Arristar")
// to use decorator, import in tsconfig.json or unable in command line
const Name = "Arristar";
// @foo() => foo()()

// AngularJS ==state management==> ReactJS 
//    ||
// TypeScript
//    ||
//    \/
// Angular 2