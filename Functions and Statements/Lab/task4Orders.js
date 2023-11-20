function solve(product, quantity){
    let priceCoffee = 1.50;
    let priceWater = 1.00;
    let priceCoke = 1.40;
	let priceSnacks = 2.00;

    let result = 0;
   
    if(product === "coffee"){
        result = quantity*priceCoffee;
    }else if(product === "coke"){
        result = quantity*priceCoke;
    }else if(product === "water"){
        result = quantity * priceWater;
    }else if(product === "snacks"){
        result = quantity * priceSnacks;
    }

    console.log(result.toFixed(2));
}

solve("water", 5);
solve("coffee", 2);