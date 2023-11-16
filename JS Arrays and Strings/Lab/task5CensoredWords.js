function solve(text, word){

    let censored = text.replace(new RegExp(word, 'g'), function (match) {
        return '*'.repeat(match.length);
    });

    console.log(censored);

}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');
