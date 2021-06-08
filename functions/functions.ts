function add(a,b){
    return a+b;
}

var sum = add(1,2);
console.log(sum);

sum = add("foo",2);
console.log(sum);


//error: 
// sum = add2("foo",3);
// console.log(sum);

//error
// sum = concat(1);
// console.log(sum);

// sum = add(2);  //error in ts, not in js
// console.log(sum);


//ts provides optional argument option so as the flexibility of js is not lost
function product(a: number,b: number,c?: undefined){
    return a*b;
}

//optional argument at end only

console.log(product(3,4));

//OR USE DEFAULT VALUES
function foo(a,b,c:number=0,d=1){
    return (a*b+c)/d;
}

console.log(foo(1,2));


//TO SPECIFY RETURN TYPE
function foo1(a,b,c:number=0,d=1):number{
    return (a*b+c)/d;
}