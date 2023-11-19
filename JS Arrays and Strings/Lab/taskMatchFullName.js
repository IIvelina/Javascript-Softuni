function solve(string){
    let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/gm;

    let validName = [];

    let match; //Този ред създава променлива match, която ще се използва за 
    //съхранение на текущото съвпадение при всяко изпълнение на цикъла.

    while((match = regex.exec(string)) !== null){
        //Този ред стартира цикъл, който ще се изпълнява, докато методът exec на регулярния 
        //израз връща съвпадение (или null, когато няма повече съвпадения). 
        validName.push(match[0]);
    }

    console.log(validName.join(', '));
}

solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');