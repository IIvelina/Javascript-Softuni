function solve(jsonStr){
    let obj = JSON.parse(jsonStr);

    const tuples = Object.entries(obj)
                    .forEach(([key, value]) =>
                    console.log(`${key}: ${value}`));
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');