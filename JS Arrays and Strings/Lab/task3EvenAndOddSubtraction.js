function solve(array){
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if(current % 2 == 0){
            evenSum += current;
        }else {
            oddSum += current;
        }        
    }

    console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);