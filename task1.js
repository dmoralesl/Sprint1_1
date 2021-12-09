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

console.log(getFullName("David", "Morales"));


// LEVEL 3
// Exercise 1
let arrayFunctions = [];
for (let i = 0; i < 10; i++) {
    arrayFunctions.push(function() {
        console.log(...Array(10).keys());
    });
}

arrayFunctions.map(func => func());

// Exercise 2
(function(name) {
    console.log(name);
})('David');

function sayName(name) {
    console.log(name);
}
sayName('David');