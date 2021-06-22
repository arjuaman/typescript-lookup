class Parent{
    a:string;
    marks:number;
    constructor(a:string, marks:number){
        this.a = a;
        this.marks = marks;
    }
    getinfo(a:string):any
    {
        console.log(this.a);
        return this.marks;
    }
}
class Child extends Parent{
    constructor(a:string, marks:number){
        super(a, marks);
    }
    getmarks():void
    {
        console.log(this.marks);
    }
}
let c=new Child("Shruti",91);
console.log(c.a,c.marks,c.getinfo('shruti'),c.getmarks())

//why undefined is shown in output