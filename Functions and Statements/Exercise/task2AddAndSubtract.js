function solve(n1,n2,n3){

    let sum = (n1,n2) =>{
        return n1 + n2;
    };

    let subtract = (sum, n3) => {
        return sum - n3;
    };

    console.log(subtract(sum(n1,n2), n3));
}

solve(23,6,10);