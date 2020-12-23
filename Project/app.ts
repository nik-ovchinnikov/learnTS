function add(number1: number, number2: number): string {
    return (number1 + number2).toString();
}

const n1 = 3;
const n2 = 34;

console.log(add(n1, n2));
function showRes(num: number): void {
    console.log(num);
}
showRes(+add(3, 32));
