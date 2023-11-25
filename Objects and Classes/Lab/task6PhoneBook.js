function solve(inputArray){
    let phonebook = {};
    for (const line of inputArray) {
        let[name, phoneNumber] = line.split(" ");
        phonebook[name] = phoneNumber;
    }

    for (const key in phonebook) {
      console.log(`${key} -> ${phonebook[key]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);