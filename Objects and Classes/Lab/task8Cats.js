function solve(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    array.forEach(catInfo => {
        let [name, age] = catInfo.split(' ');
        let cat = new Cat(name, Number(age)); // Convert age to a number
        cat.meow();
    });
}

solve(['Mellow 2', 'Tom 5']);