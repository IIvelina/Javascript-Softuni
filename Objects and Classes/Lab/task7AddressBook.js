function solve(array){

    let addressBook = {};

    for(const line of array){
        let[name, address] = line.split(':');

        if(!addressBook.hasOwnProperty(name)){
            addressBook[name] = address;
        }else{
           // If you receive the same name twice just replace the address
           addressBook[name] = address;
        }
    }

    let entries = Object.entries(addressBook);
    let sortedByName = entries.sort((p1, p2) =>{
    let p1Name = p1[0];
    let p2Name = p2[0];
    return p1Name.localeCompare(p2Name);
});

for (const [name, address] of sortedByName) {
    console.log(`${name} -> ${address}`);
}

}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);