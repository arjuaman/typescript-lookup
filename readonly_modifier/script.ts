class Person{
    readonly name = "Arju";
}

var obj = new Person();
console.log(obj.name);
//obj.name = "Prowse"; //error as we can't write it, it's only readonly

//we can only write when we defien it at he time of definition or by
//using a constructor

class P2{
    readonly fname;
    constructor(fname:string){
        this.fname = fname;
    }
}

var emp = new P2("Aman");
console.log(emp.fname);

//or use shortcut
class P3{
    constructor(readonly fname:string){

    }
}
var e1 = new P3("Astrid");
console.log(e1.fname);