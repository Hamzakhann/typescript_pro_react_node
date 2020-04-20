interface Named {
    readonly name: string,
}

interface Greetaable extends Named {
    greet(phrase: string): void
}

class Person implements Greetaable {
    name: string;
    age = 30;
    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + " " + this.name)
    }
}

let user = new Person("Max")
user.greet("Hello I am Hamza Khan I am not terrorist")

// interface Person {
//     name: string,
//     age: number,
//     greet(phrase: string): void
// }


// let user = {
//     name: "Max",
//     age: 26,
//     gree(phrase: string) {
//         console.log(phrase)
//     }
// }