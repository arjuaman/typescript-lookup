//var day = "Monday";
//each variable for tue, wed, etc....

enum daysOfWeek{
    sun, mon, tue, wed, thu, fri, sat
}

let day:daysOfWeek;

day = daysOfWeek.mon;
console.log(day);

if(day === daysOfWeek.mon){
    console.log("WorkDay!!");
}

//can also manually decide enum values instead of deafult 0 to onwards

enum daysOW{
    sun=5, mon=10, tue, wed, thu, fri, sat
}

let d:daysOW;

d = daysOW.mon;
console.log(d);

if(d === 10){
    console.log("WorkDay again!!");
}