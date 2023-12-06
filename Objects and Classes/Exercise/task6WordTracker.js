function solve(array){

    let lineSearchWords = array[0];
    let searchWords = lineSearchWords.split(' ');

    array.shift();

    let words = [];

    count = 0;

    for (const word of searchWords) {
       for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if(current === word){
            count++;
        }   
       }
      let currentWord = {
        word: word,
        occurrences: count
      }
      words.push(currentWord);
      count=0;
    }

    words.sort((w1, w2) => w2.occurrences - w1.occurrences);

    for (const word of words) {
        console.log(`${word.word} - ${word.occurrences}`);
    }

}

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    );