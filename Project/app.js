function add(number1, number2) {
    return (number1 + number2).toString();
}
var n1 = 3;
var n2 = 34;
console.log(add(n1, n2));
function showRes(num) {
    console.log(num);
}
// showRes(+add(3, 32));
var combinedValues;
var combinedValues2;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// console.log(combinedValues(8, 8));
addAndHandle(34, 34, function (num) { console.log(num); });
