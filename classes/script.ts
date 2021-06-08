class Person {
    fname:string;
    lname:string;

    // constructor(){
    //     this.fname = "";
    //     this.lname = "";
    // }
    //multiple constructors not allowed
    constructor(f:string,l:string){
        this.fname = f;
        this.lname = l;
    }

    getFullName(){
        return this.fname+" "+this.lname;
    }
}

var arju = new Person("Willy","Wonka");
// arju.fname = "Arju";
// arju.lname = "Aman";
console.log(arju.getFullName());