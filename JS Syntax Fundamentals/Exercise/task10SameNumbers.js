function solve (number){
    let lastDigit = number % 10;
    let allSameDigits = true;
    let sum = 0;

    while(number > 0){
        let currentDigit = number % 10;

        if (currentDigit != lastDigit){
            allSameDigits = false;
        }

        sum += currentDigit;
        number = Math.floor(number / 10);
    }
    
    console.log(allSameDigits);
    console.log(sum);
}

solve(2222222);