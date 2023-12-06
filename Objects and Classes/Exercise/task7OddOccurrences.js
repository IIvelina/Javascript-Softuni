function solve(string) {
    let splitString = string.split(' ');

    let words = {};

    for (let i = 0; i < splitString.length; i++) {
        let current = splitString[i].toLowerCase();
        words[current] = (words[current] || 0) + 1;
    }

    let oddOccurrences = [];
    for (const word in words) {
        if (words[word] % 2 !== 0) {
            oddOccurrences.push(word);
        }
    }

    console.log(oddOccurrences.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');