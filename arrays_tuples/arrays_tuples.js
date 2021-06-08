var arr;
arr = [];
arr = [1, 2];
//error: arr=["1"];
arr.push(1);
//error: arr.push("1");
arr.push(undefined);
arr.push(null);
//error :arr.push(true);
console.log(arr);
//now we want both string and array in number
//we use:
//Tuple
var num;
num = [1, true];
//error: num = [true,1];
//error: num = [1];
num = [undefined, undefined];
num = [null, null];
//error: num=[1,1];
