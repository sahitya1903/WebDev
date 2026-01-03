let arr=[1,2,3,4];
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(String.prototype);

arr.__proto__.push= n=>{        //Changed push function definition
    arr[arr.length-1]=n;
    console.log('pushed element:',n);
    console.log('Updated arr',arr);
}

arr.push(2);


//Factory Function (Not efficient)

function PersonMaker(name,age){
    const person= {
        name:name,
        age:age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        }
    };

    return person;
};

let p1=PersonMaker('Sahitya',22);  //copy of Factory function
p1.talk();

let p2=PersonMaker('Mali',20); //copy of Factory function
p2.talk();

console.log(p1.talk===p2.talk);

//Constructors (Efficient)
//don't return anything, begin with capital letter

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk=function(){
    console.log(`Hi, my name is ${this.name}`);
}

let p3=new Person('adam',21);
let p4=new Person('eve',21);
p3.talk();

console.log(p3.talk === p4.talk);

//Classes: blueprint of objects

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p5=new person('adam',21);
let p6=new person('eve',21);
p5.talk();

console.log(p5.talk===p6.talk);