function add(number1, number2) {
    return (number1 + number2).toString();
}
var n1 = 3;
var n2 = 34;
console.log(add(n1, n2));
function showRes(num) {
    console.log(num);
}
showRes(+add(3, 32));
