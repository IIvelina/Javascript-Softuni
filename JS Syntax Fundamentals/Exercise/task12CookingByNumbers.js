function solve(inputNumber, operation1, operation2, operation3, operation4, operation5) {
    let result = parseFloat(inputNumber);

    const operations = [operation1, operation2, operation3, operation4, operation5];

    for (let operation of operations) {
        if (operation === "chop") {
            result /= 2;
        } else if (operation === "dice") {
            result = Math.sqrt(result);
        } else if (operation === "spice") {
            result += 1;
        } else if (operation === "bake") {
            result *= 3;
        } else if (operation === "fillet") {
            result *= 0.8; 
        }

        console.log(result);
    }
}


solve("32", "chop", "chop", "chop", "chop", "chop");