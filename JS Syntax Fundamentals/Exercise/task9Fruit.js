function solve(fruit, grams, pricePerKilogram) {
    const kilograms = grams / 1000;
    const price = kilograms * pricePerKilogram;

    console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);