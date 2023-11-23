function solve(numOne, numTwo, operator) {
    const operators = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b
    };

    const operation = operators[operator];

    if (operation) {
        console.log(operation(numOne, numTwo));
    }
}

solve(5, 3, 'add');   