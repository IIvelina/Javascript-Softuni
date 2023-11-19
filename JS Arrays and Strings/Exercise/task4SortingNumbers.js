function solve(array){

    let result = [];
    


    while (array.length > 1) {
        let smallest = Math.min(...array);
        let indexOfSmallest = array.indexOf(smallest);
        array.splice(indexOfSmallest, 1);

        let max = Math.max(...array);
        let indexOfMax = array.indexOf(max);
        array.splice(indexOfMax, 1);

        result.push(smallest, max);
    }

    if (array.length === 1) {
        result.push(array[0]);
    }

   return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);