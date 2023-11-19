function solve(word, text){

    let wordsArray = text.toLowerCase().split(' ');
    word = word.toLowerCase();

    let output = `${word} not found!`;

    for (let i = 0; i < wordsArray.length; i++) {
       let current = wordsArray[i];
        if(current === word){
        output = current;
        }
    }
    console.log(output);
}

solve('javascript','JavaScript is the best programming language');

solve('python','JavaScript is the best programming language');