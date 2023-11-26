function solve(array1, array2){

    let productsObject = {};


    for (let i = 0; i < array1.length; i+=2) {
       
        let productName = array1[i];
   
        let productQuantity = Number(array1[i + 1]);

        productsObject[productName] = productQuantity;
    }

    for (let i = 0; i < array2.length; i+=2) {

    let productName = array2[i];
   
    let productQuantity = Number(array2[i + 1]);

    if(!productsObject.hasOwnProperty(productName)){
        productsObject[productName] = productQuantity;
    }else{
        productsObject[productName] += productQuantity;
    }
    }

    for (let productName in productsObject) {
    console.log(`${productName} -> ${productsObject[productName]}`);
    }

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );