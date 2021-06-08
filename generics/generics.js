"use strict";
// //for parametrizing types
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
exports.__esModule = true;
exports.Person = void 0;
// function echo(arg:any):any{
//     return arg;
// }
// //we want the input type to be same as return type,or else
// //even the following will be fair even though what is passed is a number and returned is astring
// var mystr:string = echo(1);
function echo(arg) {
    return arg;
}
//Now the following will give error:
//var mystr:string = echo(1);
var x;
x = echo(1);
x = echo("kdfnkd");
x = echo(true);
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.getFullName = function () {
        return this.fname + " " + this.lname;
    };
    return Person;
}());
exports.Person = Person;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Person));
var admin = new Admin('a', 'a');
var mgr = new Manager('b', 'b');
//also i want to extend to person class only 
function personEcho(person) {
    //now we can access class methods directly
    console.log(person.fname);
    return person;
}
var foo = personEcho(admin);
var bar = personEcho(mgr);
