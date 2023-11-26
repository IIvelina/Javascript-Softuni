function solve(array){

    Object.entries(
    array.reduce((data, employee) => {
        data[employee] = employee.length;
        return data;
    }, {})
    ).forEach(([employee, length]) => {
        console.log(`Name: ${employee} -- Personal Number: ${length}`);
    })
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );