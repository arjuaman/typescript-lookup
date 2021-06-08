class Person {
    fname:string;
    lname:string;
    greet(){
        console.log("Hey there!");
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
var arju = new Programmer();
arju.greetNormal();

var aman:Person = new Programmer();
//aman.greetNormal(); //Error: Property 'greetNormal' does not exist on type 'Person'.
aman.greet();  //runs child class greet