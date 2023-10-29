function solve(speed, area){
    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;

    let result = '';

    if(area === 'city'){
        if(speed <= city){
            //`Driving {speed} km/h in a {speed limit} zone`
            result = `Driving ${speed} km/h in a ${city} zone`
        }else if (speed <= city + 20){
            let faster = speed - city;
            let status = 'speeding';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${city} - ${status}`;
            //`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
            //speeding
        }else if (speed <= city + 40){
            let faster = speed - city;
            let status = 'excessive speeding';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${city} - ${status}`;
            //`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
            //excessive speeding
        }else {
            let faster = speed - city;
            let status = 'reckless driving';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${city} - ${status}`;
            //`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
            //reckless driving
        }
    }else if (area === 'motorway'){
        if(speed <= motorway){
           
            result = `Driving ${speed} km/h in a ${motorway} zone`
        }else if (speed <= motorway + 20){
            let faster = speed - motorway;
            let status = 'speeding';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${motorway} - ${status}`;
         
        }else if (speed <= motorway + 40){
            let faster = speed - motorway;
            let status = 'excessive speeding';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${motorway} - ${status}`;
       
        }else {
            let faster = speed - motorway;
            let status = 'reckless driving';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${motorway} - ${status}`;
       
        }
    }else if (area === 'interstate'){
        if(speed <= interstate){
           
            result = `Driving ${speed} km/h in a ${interstate} zone`
        }else if (speed <= interstate + 20){
            let faster = speed - interstate;
            let status = 'speeding';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${interstate} - ${status}`;
         
        }else if (speed <= interstate + 40){
            let faster = speed - interstate;
            let status = 'excessive speeding';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${interstate} - ${status}`;
       
        }else {
            let faster = speed - interstate;
            let status = 'reckless driving';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${interstate} - ${status}`;
       
        }
    }else if (area === 'residential'){
        if(speed <= residential){
           
            result = `Driving ${speed} km/h in a ${residential} zone`
        }else if (speed <= residential + 20){
            let faster = speed - residential;
            let status = 'speeding';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${residential} - ${status}`;
         
        }else if (speed <= residential + 40){
            let faster = speed - residential;
            let status = 'excessive speeding';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${residential} - ${status}`;
       
        }else {
            let faster = speed - residential;
            let status = 'reckless driving';
            result = `The speed is ${faster} km/h faster than the allowed speed of ${residential} - ${status}`;
       
        }
    }
    console.log(result);
}

solve(40, 'city');
solve(200, 'motorway');
solve(120, 'interstate');
solve(21, 'residential');