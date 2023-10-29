function solve (number) {
    let numToString = number.toString(); //Преобразува числото number в низ, използвайки метода toString(), и го записва в променливата numToString
    let result = 0;

    for (let i = 0; i < numToString.length; i++) {
        result += parseInt(numToString[i], 10); 
        //Взема текущата цифра от низа, преобразува я в число, използвайки parseInt
        //Числото 10, което се подава като втори аргумент на parseInt, указва в каква бройна система (основа) трябва да бъде интерпретирана стойността. В случая, това е десетична бройна система (десятична основа).
    }

    console.log(result);
}

solve(543);