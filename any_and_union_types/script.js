var a; //by default any type 
a = 10;
a = true;
a = "foo";
//can be done like this too, which'll prevent type checking
var a;
a = 10;
a = true;
a = "foot";
a = 'sdd';
//Union:
var b;
b = 10;
b = false;
b = 'frkgnk'; //error
