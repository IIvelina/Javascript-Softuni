function solve(array){

    class Town{
        constructor(town, latitude, longitude){
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    let arrayTowns = [];

    for (let i = 0; i < array.length; i++) {
        let [town, latitude, longitude] = array[i].split(" | ");
        let townNew = new Town(town, (Number(latitude).toFixed(2)), (Number(longitude)).toFixed(2));
        arrayTowns.push(townNew);
    }

    arrayTowns.forEach((t) =>{
        console.log(`{ town: '${t.town}', latitude: '${t.latitude}', longitude: '${t.longitude}' }`);
    });

}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);