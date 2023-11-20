function solve(numOne, numTwo, operator){

    const multiply = (numOne, numTwo) => numOne * numTwo;
    const divide = (numOne, numTwo) => numOne / numTwo;
    const add = (numOne, numTwo) => numOne + numTwo;
    const subtract = (numOne, numTwo) => numOne - numTwo;


    switch(operator){
        case 'multiply':
            console.log(multiply(numOne, numTwo));
            break;
        case 'divide':
                console.log(divide(numOne, numTwo));
                break;    
        case 'add':
                console.log(add(numOne, numTwo));
                break;  
        case 'subtract':
                console.log(subtract(numOne, numTwo));
                break;                    
    }
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(12, 19, 'add');
solve(50, 13, 'subtract');
