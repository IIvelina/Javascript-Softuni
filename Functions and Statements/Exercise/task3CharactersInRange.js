function solve(char1, char2){

    let result = '';

    let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let end = Math.max(char1.charCodeAt(), char2.charCodeAt());
   // char1.charCodeAt(); // ot char v int

     for (let i = start + 1; i < end; i++) {
       
      let currentChar = String.fromCharCode(i); //ot int v char
     
      result += `${currentChar} `
    }

    console.log(result.trimEnd());
}

solve('a','d');
solve('#',':');
solve('C', '#');