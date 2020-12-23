function add(number1: number, number2: number): string {
    return (number1 + number2).toString();
}

const n1 = 3;
const n2 = 34;

console.log(add(n1, n2));
function showRes(num: number): void {
    console.log(num);
}
// showRes(+add(3, 32));

let combinedValues: Function;
let combinedValues2: (a: number, b: number) => number;


function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);

}

addAndHandle(34, 34, (num) => {console.log(num);});
