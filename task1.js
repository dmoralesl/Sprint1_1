// LEVEL 1

function getName(name) {
    console.log(name);
}

getName('David');


// LEVEL 2

// Exercise 1
const name = "David";
const surname = "Morales";

console.log(`${name} ${surname}`);

// Exercise 2
function getFullName(name, surname) {
    return `${name} ${surname}`
}

console.log(`Hello, my name is: ${getFullName('David', 'Morales')}`);


// LEVEL 3
// Exercise 1
let arrayFunctions = [];
for (let i = 0; i < 10; i++) {
    arrayFunctions.push(function() {
        [...Array(10)].map((_, n) => console.log(n));
    });
}

arrayFunctions.map(func => func());

// Exercise 2
sayName = (function(name) {
    console.log(name);
})('David');

sayName;