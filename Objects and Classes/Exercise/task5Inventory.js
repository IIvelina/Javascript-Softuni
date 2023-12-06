function solve(array){

    let heroes = [];

    for (const line of array) {
        let splitData = line.split(" / ");
        let heroName = splitData[0];
        let heroLevel = Number(splitData[1]);
        let heroItems = splitData[2].split(", ");

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroes.push(hero);
    }

    heroes.sort((h1,h2) => h1.level - h2.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );