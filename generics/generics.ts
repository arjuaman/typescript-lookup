// //for parametrizing types

// function echo(arg:any):any{
//     return arg;
// }
// //we want the input type to be same as return type,or else
// //even the following will be fair even though what is passed is a number and returned is astring
// var mystr:string = echo(1);
function echo<T> (arg:T):T{
    return arg;
}

//Now the following will give error:
//var mystr:string = echo(1);

var x;
x = echo(1);
x = echo("kdfnkd");
x = echo(true);

export class Person{
    fname:string;
    lname:string;

    constructor(fname:string, lname:string){
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return this.fname+" "+this.lname;
    }
}

class Admin extends Person{

}

class Manager extends Person{

}

let admin = new Admin('a','a');
let mgr = new Manager('b','b');

//also i want to extend to person class only 
function personEcho<T extends Person>(person:T):T{
    //now we can access class methods directly
    console.log(person.fname);
    return person;
}

var foo = personEcho(admin);
var bar = personEcho(mgr);
