// LEVEL 1

// Exercise 1
function createPromise(isTrue) {
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  });
}

createPromise(true)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

createPromise(false)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Exercise 2
function printMessage(message) {
  console.log(message);
}
const arrowFunction = (booleanParam, callback) => {
  booleanParam ? callback("Param is true") : callback("Param is false");
};

arrowFunction(true, printMessage);
arrowFunction(false, printMessage);

// LEVEL 2

// Exercise 1
let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

function getEmployee(id) {
    return new Promise((resolve, reject) => {
        let employee = employees.find(employee => employee.id === id);
        if (employee) {
            resolve(employee);
        } else {
            reject(`Employee with id ${id} not found`);
        }
    });
}
getEmployee(1)
    .then(employee => {console.log(`Employee name is ${employee.name}`)})
    .catch(error => console.log(error));
getEmployee(99)
    .then(employee => {console.log(`Employee name is ${employee.name}`)})
    .catch(error => console.log(error));

// Exercise 2 
function getSalary(employee) {
    return new Promise((resolve, reject) => {
        let salary = salaries.find(salary => salary.id === employee.id);
        if (salary) {
            resolve(salary.salary);
        } else {
            reject(`Salary for employee with id ${employee.id} not found`);
        }
    });
}

getSalary({id: 1, name: "Linux Torvalds"})
    .then(salary => {console.log(`Employee salary is ${salary}`)})
    .catch(error => console.log(error));
getSalary({id: 28, name: "Linux Torvalds"})
    .then(salary => {console.log(`Employee salary is ${salary.name}`)})
    .catch(error => console.log(error));

// Exercise 3 and LEVEL 3 with catch clause
getEmployee(1)
    .then(employee => getSalary(employee)
        .then(salary => console.log(`Employee ${employee.name} salary is ${salary}`))
        .catch(error => console.log(`Error getting salary for employee ${employee.name}`)))
    .catch(error => console.log(error));




