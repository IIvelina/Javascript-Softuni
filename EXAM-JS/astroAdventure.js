function solve(array){
    let numberAstronauts = Number(array[0]);

    array.shift();

    class Astronaut{
        constructor(name, oxygen, energy){
            this.name = name;
            this.oxygen = oxygen;
            this.energy = energy;
        }
    }

    let astronauts = [];

    for (let i = 0; i < numberAstronauts; i++) {
        let currentAstronaut = array[i];
        let splitInfo = currentAstronaut.split(" ");
        let name = splitInfo[0];
        let oxygen = splitInfo[1];
        let energy = splitInfo[2];

        let newAstronaut = new Astronaut(name, oxygen, energy);

        astronauts.push(newAstronaut);
    }

    for (let i = 0; i < numberAstronauts; i++) {
        array.shift();        
    }

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let splitCurrent = current.split(' - ');
        let command = splitCurrent[0];

        if(command === "End"){
            break;
        }else if(command === "Explore"){
            let astronautName = splitCurrent[1];
            let energyNeeded = Number(splitCurrent[2]);

            //find the astronaut by name
            let astronaut = astronauts.find((a) => a.name === astronautName);

            if(astronaut.energy >= energyNeeded){
                astronaut.energy -= energyNeeded;
                console.log(`${astronautName} has successfully explored a new area and now has ${astronaut.energy} energy!`);
            }else{
                console.log(`${astronautName} does not have enough energy to explore!`);
            }

        }else if(command === "Refuel"){
            let astronautName = splitCurrent[1];
            let amount = Number(splitCurrent[2]);

            let astronaut = astronauts.find((a) => a.name === astronautName);

            let newEnergy  = Number(astronaut.energy) + amount;

            let amountRecovered = 0;

            if (newEnergy > 200){
                newEnergy = 200;
                amountRecovered = newEnergy - astronaut.energy;
            }else{
                amountRecovered = amount;
            }
            
            astronaut.energy = newEnergy;

            console.log(`${astronautName} refueled their energy by ${amountRecovered}!`);


        }else if(command === "Breathe"){
            let astronautName = splitCurrent[1];
            let amount = Number(splitCurrent[2]);

            let astronaut = astronauts.find((a) => a.name === astronautName);

            let currentAstronautOxygen = Number(astronaut.oxygen);

            let newOxygen = currentAstronautOxygen + amount;

            let recoverOxygen = 0;

            if(newOxygen > 100){
                newOxygen = 100;
                recoverOxygen = newOxygen - currentAstronautOxygen;
            }else{
                recoverOxygen = amount;
            }
            astronaut.oxygen = newOxygen;

            console.log(`${astronautName} took a breath and recovered ${recoverOxygen} oxygen!`);
        }
        
    }

    astronauts.forEach(
        (astronaut) => {
            console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`);
        }
    )
}

solve(
    [  '3',
  'John 50 120',
  'Kate 80 180',
  'Rob 70 150',
  'Explore - John - 50',
  'Refuel - Kate - 30',
  'Breathe - Rob - 20',
  'End']

);