function solve (argument) {
    if(typeof argument === 'number') {
        console.log((Math.PI * Math.pow(argument, 2)).toFixed(2));
    }else {
        let type = typeof argument;
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

solve(5);
solve('name');