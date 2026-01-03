class Person{
    constructor(name,age){
        console.log("Person class Constructor");
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("Student class Constructor");
        super(name,age);    //parent class constructor called
        this.marks=marks;
    }
}

let s1=new Student('adam',20,99);
s1.talk();


class Mammal{
    constructor(name){
        this.name=name;
        this.type='warm-blooded';
    }

    eat(){
        console.log("I'm eating");
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name);
    }

    bark(){
        console.log('woof..');
    }
    eat(){      //Method overriding
        console.log('dog is eating');
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name);
    }

    meow(){
        console.log('Meow..');
    }
}

let dog1=new Dog('Rambo');
dog1.bark();
dog1.eat();

let cat1=new Cat('Kitty');
cat1.meow();
cat1.eat();