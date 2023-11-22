function solve(password){

//[a-zA-z0-9]{6,10}
    function isValidLength(text){
        return text.length >= 6 && text.length <= 10;
    }
    
    if(!isValidLength(password)){
        console.log('Password must be between 6 and 10 characters');
    }

    function isConsistOnlyLettersAndDigits(text){
        let regex = /^[a-zA-Z0-9]+$/;
        let isCorrect = regex.test(text);
       // console.log(isCorrect);
        return isCorrect;
    }

    if(!isConsistOnlyLettersAndDigits(password)){
        console.log('Password must consist only of letters and digits');
    }

    function checkDigits(text){
        let countNums = 0;

        for (const digit of text) {
            if(!isNaN(digit)){
                countNums++;
            }
        }
        return countNums >= 2;
    }

    if(!checkDigits(password)){
        console.log('Password must have at least 2 digits');
    }

    if(isValidLength(password) && isConsistOnlyLettersAndDigits(password) && checkDigits(password)){
        console.log('Password is valid');
    }
}

//solve('logIn');
//solve('MyPass123');
solve('Pa$s$s');