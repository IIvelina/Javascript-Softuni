function solve(number, type, day){

    let result;

    let priceStudentsFriday = 8.45;
    let priceStudentsSaturday = 9.80;
    let priceStudentsSunday = 10.46;

    let priceBusinessFriday = 10.90;
    let priceBusinessSaturday = 15.60;
    let priceBusinessSunday = 16;

    let priceRegularFriday = 15;
    let priceRegularSaturday = 20;
    let priceRegularSunday = 22.50;

    if(type === 'Students'){
        if(day === 'Friday'){
            result = number * priceStudentsFriday;
        }else if (day === 'Saturday'){
            result = number * priceStudentsSaturday;
        }else if (day === 'Sunday'){
            result = number * priceStudentsSunday;
        }

        if(number >= 30) {
            result = result - (result * 0.15);
        }
    }else if(type === 'Business'){
        if(number >= 100){
            number = number - 10;
        }
        
        if(day === 'Friday'){
            result = number * priceBusinessFriday;
        }else if (day === 'Saturday'){
            result = number * priceBusinessSaturday;
        }else if (day === 'Sunday'){
            result = number * priceBusinessSunday;
        }

    }else if(type == 'Regular'){
        if(day === 'Friday'){
            result = number * priceRegularFriday;
        }else if (day === 'Saturday'){
            result = number * priceRegularSaturday;
        }else if (day === 'Sunday'){
            result = number * priceRegularSunday;
        }

        if(number >= 10 && number <= 20){
            result = result - (result * 0.05);
        }
    }


    console.log('Total price: ' + result.toFixed(2));
}

solve(30, 'Students', 'Sunday');
solve(40, "Regular", "Saturday");