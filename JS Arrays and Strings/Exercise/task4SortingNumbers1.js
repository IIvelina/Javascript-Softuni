function solve(array) {
    let result = [];

    // Клониране на масива преди сортирането
    let sortedArray = array.slice().sort((a, b) => a - b);
    let arrayLength = sortedArray.length;

    for (let i = 0; i < arrayLength; i += 2) {
        let first = sortedArray.shift();
        result.push(first);

        let last = sortedArray.pop();
        result.push(last);
    }

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);