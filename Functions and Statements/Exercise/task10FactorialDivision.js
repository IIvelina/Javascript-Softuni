function calculateAndPrintDivision(num1, num2) {
    function calculateFactorial(number) {
        if (number === 0 || number === 1) {
            return 1;
        } else {
            return number * calculateFactorial(number - 1);
        }
    }

    const factorial1 = calculateFactorial(num1);
    const factorial2 = calculateFactorial(num2);

    const divisionResult = (factorial1 / factorial2).toFixed(2);

    console.log(divisionResult);
}


calculateAndPrintDivision(5, 2);
calculateAndPrintDivision(6, 2);