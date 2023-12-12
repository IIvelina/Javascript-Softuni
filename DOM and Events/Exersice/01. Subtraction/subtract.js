function subtract() {
    

let firstNum = Number(document.getElementById('firstNumber').value);
let secondNum = Number(document.getElementById('secondNumber').value);


console.log(firstNum)
console.log(secondNum)

let sum = firstNum - secondNum;

console.log(sum.toFixed(2));

document.getElementById('result').textContent = sum;
}