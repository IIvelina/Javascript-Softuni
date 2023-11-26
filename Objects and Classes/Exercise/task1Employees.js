function solve(array){

    let people = {};

    for (const name of array) {
        let personalNumber = name.length;
        people[name] = personalNumber;
    }

    let tuples = Object.entries(people)
    .forEach(([key, value]) => 
    console.log(`Name: ${key} -- Personal Number: ${value}`));
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );