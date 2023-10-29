function solve (number1, number2){
    let result = 0;
    let numbers = [];
    for (let i = number1; i <= number2; i++){
        numbers.push(i);
       result+= i;
    }
    console.log(numbers.join(' '));
    console.log('Sum: ' + result);
}

solve(5, 10);