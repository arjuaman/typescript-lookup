//There is no concept of private in js
//But it is there in ts

class Person {
    // private fname:string;
    // private lname:string;
    constructor(protected fname:string,protected lname:string){
        //automatically declares and assigns
        //can be used with public or protected too
    }
    greet(){
        console.log("Hey there!");
    }
    get(){
        return this.fname+" "+this.lname;
    }
    set(f:string,l:string){
        this.fname = f;
        this.lname = l;
    }
}
class Programmer extends Person {
    greet(){

        console.log("greet from child class!");
    }
    greetNormal(){
        super.greet();
    }
}


var aman:Person = new Programmer("willy","wonka");
aman.greet();
//aman.fname;   //error as private