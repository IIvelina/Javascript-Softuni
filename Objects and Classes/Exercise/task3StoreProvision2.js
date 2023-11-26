function solve(array1, array2) {
    let objectProducts = {};

    // Combine the two arrays into one
    let combinedArray = [...array1, ...array2];

    for (let i = 0; i < combinedArray.length; i += 2) {
        let product = combinedArray[i];
        let quantity = Number(combinedArray[i + 1]);

        if (!objectProducts.hasOwnProperty(product)) {
            objectProducts[product] = quantity;
        } else {
            objectProducts[product] += quantity;
        }
    }

    for (let productName in objectProducts) {
        console.log(`${productName} -> ${objectProducts[productName]}`);
    }
}

solve(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);