function solve(number){

     // Convert the number to a string to iterate through its digits
    let digits = String(number).split('');

    let evenSum = 0;
    let oddSum = 0;

    // Iterate through each digit
    digits.forEach(currentDigit => {
        // Convert the digit back to a number
        let num = Number(currentDigit);

        if(num % 2 === 0){
            evenSum += num;
        }else{
            oddSum += num;
        }
    });
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);