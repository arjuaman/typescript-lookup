var Person = /** @class */ (function () {
    // constructor(){
    //     this.fname = "";
    //     this.lname = "";
    // }
    //multiple constructors not allowed
    function Person(f, l) {
        this.fname = f;
        this.lname = l;
    }
    Person.prototype.getFullName = function () {
        return this.fname + " " + this.lname;
    };
    return Person;
}());
var arju = new Person("Willy", "Wonka");
// arju.fname = "Arju";
// arju.lname = "Aman";
console.log(arju.getFullName());
