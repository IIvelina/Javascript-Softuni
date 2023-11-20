function solve(string, countToRepeat){

    let result = "";

    for (let i = 0; i < countToRepeat; i++) {
       
        result+= string;
        
    }

    return result;
}

solve("abc", 3);
solve("String", 2);