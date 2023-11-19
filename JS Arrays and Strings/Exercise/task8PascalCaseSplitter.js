function solve (string){

    let wordsRegex = /[A-Z][a-z]*/gm;

    let wordsArray = string.match(wordsRegex);

    let resultString = wordsArray.join(', ');

    console.log(resultString);
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');