function add (n1: number, n2: number, showResult: boolean, printPhrase: string) {
    if(showResult) console.log(printPhrase + n1 + n2);
    else return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const printPhrase = "The result is: "

const result = add(number1, number2, printResult, printPhrase);
console.log(result);