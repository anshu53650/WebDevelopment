class Mammal {
    //parent
    constructor(name) {
        this.name = name;
        this.type = "warm.blooded";
    }
    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal {
    //child
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("woof..");
    }
}

class Cat extends Mammal {
    //child
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow..");
    }
}