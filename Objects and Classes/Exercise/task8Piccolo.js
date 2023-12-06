function solve(array){

    let carStatus = {};

    for (let i = 0; i < array.length; i++) {
        
        let current = array[i];
        let [direction, carNumber] = current.split(', ');

        if (direction === 'IN') {
            carStatus[carNumber] = true;
        } else if (direction === 'OUT') {
            delete carStatus[carNumber];
        }
    }

    let sortedCarNumbers = Object.keys(carStatus).sort();

    if (sortedCarNumbers.length > 0) {
        console.log(sortedCarNumbers.join('\n'));
        
    } else {
        console.log('Parking Lot is Empty');
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);