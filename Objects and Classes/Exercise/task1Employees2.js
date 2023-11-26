function solve(array){
    //правим си обекта
    let employees = {};

    for (const employee of array) {
        //в обекта employees, поставяме първия employee -> employees[employee] и стойноста employee.length;
        employees[employee] = employee.length;
    }

    //с този цикъл обикаляме обекта employees
    for (const key in employees) {
        //${key} -> връща employee
        //${employees[key]} -> връща стойноста с/у съответното employee
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );