function solve(array){

    function isPalindrome(number){

        let numToString = String(number);

        let reversedString = numToString.split('').reverse().join('');

        return numToString === reversedString;
    }

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let result = isPalindrome(currentNum);

        console.log(result);
    }

}

solve([123,323,421,121]);
solve([32,2,232,1010]);