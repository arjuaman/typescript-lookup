var Person = /** @class */ (function () {
    function Person() {
        this.name = "Arju";
    }
    return Person;
}());
var obj = new Person();
console.log(obj.name);
//obj.name = "Prowse"; //error as we can't write it, it's only readonly
//we can only write when we defien it at he time of definition or by
//using a constructor
var P2 = /** @class */ (function () {
    function P2(fname) {
        this.fname = fname;
    }
    return P2;
}());
var emp = new P2("Aman");
console.log(emp.fname);
//or use shortcut
var P3 = /** @class */ (function () {
    function P3(fname) {
        this.fname = fname;
    }
    return P3;
}());
var e1 = new P3("Astrid");
console.log(e1.fname);
