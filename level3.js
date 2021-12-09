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