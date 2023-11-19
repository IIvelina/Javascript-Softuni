function solve(text) {

    let regex = /#[A-Za-z]+/gm;

    let matches = text.match(regex);

    for (let word of matches) {
        let specialWord = word.slice(1);
        console.log(specialWord);
    }
}


solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');