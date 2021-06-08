// to break into multiple files
// i.e. each file can be treated as a module

// suppose I want Person class from generics folder
import {Person} from './../generics/generics'

// VVIP : importing a file means executing that file

class Admin extends Person{

}

class Manager extends Person{

}

let admin = new Admin('a','a');
let mgr = new Manager('b','b');

function personEcho<T extends Person>(person:T):T{
    console.log(person.fname);
    return person;
}

var foo = personEcho(admin);
var bar = personEcho(mgr);
