function solve (typeOfDay, age){
    let price0to18Weekday = 12 + '$';
    let price18to64Weekday = 18 + '$';
    let price64to122Weekday = 12 + '$';

    let price0to18Weekend = 15 + '$';
    let price18to64Weekend = 20 + '$';
    let price64to122Weekend = 15 + '$';

    let price0to18Holiday = 5 + '$';
    let price18to64Holiday = 12 + '$';
    let price64to122Holiday = 10 + '$';

    let result;

    if(typeOfDay=='Weekday'){
        if(age >= 0 && age <= 18){
            result = price0to18Weekday;
        }else if(age > 18 && age <= 64){
            result = price18to64Weekday; 
        }else if(age > 64 && age <= 122){
            result = price64to122Weekday;
        }else {
            result = 'Error!';
        }
    }else if(typeOfDay=='Weekend') {
        if(age >= 0 && age <= 18){
            result =  price0to18Weekend;
        }else if(age > 18 && age <= 64){
            result = price18to64Weekend; 
        }else if(age > 64 && age <= 122){
            result = price64to122Weekend;
        }else {
            result = 'Error!';
        }
    }else if(typeOfDay=='Holiday') {
        if(age >= 0 && age <= 18){
            result =  price0to18Holiday;
        }else if(age > 18 && age <= 64){
            result = price18to64Holiday; 
        }else if(age > 64 && age <= 122){
            result = price64to122Holiday;
        }else {
            result = 'Error!';
        }
    }
    console.log(result);
}

solve ('Holiday', 123);

