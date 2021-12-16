// LEVEL 1

console.log((sum = (a, b) => a + b)(1, 2));


// LEVEL 2

// Exercise 1
const createObject = (attrValue) => ({attribute: attrValue});
console.log(createObject(2));

// Exercise 2
class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

const person = new Person('David');
person.sayName();


// LEVEL 3

class AbstractClass {
    
    constructor() {
        if (this.constructor == AbstractClass) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
}

function personGenerator() {
    AbstractClass.prototype.sayName = function(name) {
        console.log(name);
    }

    return AbstractClass.prototype;
    
}

personGenerator().sayName('David');
personGenerator().sayName('No David');
personGenerator().sayName('Random name');


