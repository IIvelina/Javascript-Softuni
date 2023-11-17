function solve(array, step){
    let result = [];
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i= i+step) {
    let currentNumber = array[i];
    result.push(currentNumber);
    
    }
    return result;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
);