class Animal {
    constructor(protected name: string, protected species: string) {}

    makeSound(): void {
        console.log(`Animal make some sound`);
    }
}

class Cat extends Animal {
    constructor(name: string, protected breed: string) {
        super(name, 'Cat');
    }

    makeSound(): void {
        console.log(`Meow`);
    }
}

class Dog extends Animal {
    constructor(name: string, protected breed: string) {
        super(name, 'Dog');
    }

    makeSound(): void {
        console.log(`Woof`);
    }
}

const cat = new Cat('Whiskers','Siamese');
cat.makeSound(); // Output: "Meow"

const dog = new Dog('Fido','Golden Retriever');
dog.makeSound(); // Output: "Woof"