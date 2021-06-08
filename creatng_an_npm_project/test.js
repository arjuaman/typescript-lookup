"use strict";
//npm init creates the package.json file required for creating the node artifact
// type the values asked for click enter for defaults
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(f, l) {
    }
    return Person;
}());
exports.Person = Person;
var p1 = new Person("Arju", "Aman");
//in the json file, as comments are not permitted, the indexj sfile is created as there is common convention for starting file to be index.js
// to install library and save in local directory's json, example:
// npm install lodash --save
// it'll be added in json's dependencies' key
