//var day = "Monday";
//each variable for tue, wed, etc....
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["sun"] = 0] = "sun";
    daysOfWeek[daysOfWeek["mon"] = 1] = "mon";
    daysOfWeek[daysOfWeek["tue"] = 2] = "tue";
    daysOfWeek[daysOfWeek["wed"] = 3] = "wed";
    daysOfWeek[daysOfWeek["thu"] = 4] = "thu";
    daysOfWeek[daysOfWeek["fri"] = 5] = "fri";
    daysOfWeek[daysOfWeek["sat"] = 6] = "sat";
})(daysOfWeek || (daysOfWeek = {}));
var day;
day = daysOfWeek.mon;
console.log(day);
if (day === daysOfWeek.mon) {
    console.log("WorkDay!!");
}
//can also manually decide enum values instead of deafult 0 to onwards
var daysOW;
(function (daysOW) {
    daysOW[daysOW["sun"] = 5] = "sun";
    daysOW[daysOW["mon"] = 10] = "mon";
    daysOW[daysOW["tue"] = 11] = "tue";
    daysOW[daysOW["wed"] = 12] = "wed";
    daysOW[daysOW["thu"] = 13] = "thu";
    daysOW[daysOW["fri"] = 14] = "fri";
    daysOW[daysOW["sat"] = 15] = "sat";
})(daysOW || (daysOW = {}));
var d;
d = daysOW.mon;
console.log(d);
if (d === 10) {
    console.log("WorkDay again!!");
}
