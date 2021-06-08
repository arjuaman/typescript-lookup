var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getfullname = function () {
        return this.fname + " " + this.lname;
    };
    return Foo;
}());
var arju = new Foo();
var newRandom = {
    fname: "Willy",
    lname: "Wonka",
    getfullname: function () { return "Test"; }
};
//Duck typing: as long as property matches, it's okay
arju = newRandom;
var newRandomAgain = {
    fname: "Willy",
    getfullname: function () { return "Test"; }
};
//The following line will show error as lname is missing:
//arju = newRandomAgain;
var newRandomAgainNext = {
    fname: "Willy",
    lname: "",
    foo: "",
    getfullname: function () { return "Test"; }
};
//The following line will NOT show error even though there is an extra argument:
arju = newRandomAgainNext;
//but we can't access foo from here:
//arju.foo; //error
