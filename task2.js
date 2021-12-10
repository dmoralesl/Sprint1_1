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
function* personGenerator(name) {
    // First yield is "default" name to demonstrate how generators
    // can stop in the middle of the execution of the function and wait
    // for next call to continue from that point
    yield new Person('Default');
    // This yield gonna use the name provided in function call
    // to create the new person
    yield new Person(name);
}
const generator = personGenerator('My awesome name');

console.log(generator.next().value);
console.log(generator.next().value);

