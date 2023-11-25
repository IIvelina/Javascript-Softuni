function solve(array){
    let meetings = {};

    for (const line of array) {
        let[day, name] = line.split(" ");
        //ако имам вече това име и искам да запазя първия номер:
        //ако го няма Тим ми добави неговия номер
        if(!meetings.hasOwnProperty(day)){
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);           
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
      }

}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);