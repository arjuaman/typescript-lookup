interface Person{
    fname: string;
    lname: string;
    getfullname(): string;
}

class Foo implements Person{
    fname: string;
    lname: string;
    getfullname(): string {
        return this.fname+" "+this.lname;
    }
}

let arju:Person = new Foo();

let newRandom = {
    fname: "Willy",
    lname: "Wonka",
    getfullname:()=>"Test"
}
//Duck typing: as long as property matches, it's okay
arju = newRandom;



let newRandomAgain = {
    fname: "Willy",
    getfullname:()=>"Test"
}
//The following line will show error as lname is missing:
//arju = newRandomAgain;



let newRandomAgainNext = {
    fname: "Willy",
    lname: "",
    foo:"",
    getfullname:()=>"Test"
}
//The following line will NOT show error even though there is an extra argument:
arju = newRandomAgainNext;
//but we can't access foo from here:
//arju.foo; //error