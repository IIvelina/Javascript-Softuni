function solve (number){
  
    let result = 0;

    while(number > 0){

        rest = number % 10;//3

        result += rest;

        number = Math.floor(number / 10); //54

    }

    console.log(result);
}

solve(543);