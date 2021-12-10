let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


// LEVEL 1

// Exercise 1

const getEmployee = async (id) => {
        let employee = employees.find(employee => employee.id === id);
        if (!employee) {
            throw new Error('Employee not found');
        }
        return employee;
}

const getSalary = async (employee) => {
        let salary = salaries.find(salary => salary.id === employee.id);
        if (!salary) {
            throw new Error('Salary not found');
        }
        return salary.salary;
}

// Exercise 2 
const getFullEmployeeInfo = async (id) => {
    let employee;
    let salary;
    try {
        employee = await getEmployee(id);
    } catch (error) {
        console.log(error.message);
        return; // Void return to not execute the rest of the code
    }
    try {
        salary = await getSalary(employee);
    } catch (error) {
        console.log(error.message);
        return; // Void return to not execute the rest of the code
    }
    
    console.log(`${employee.name} has salary of ${salary}`);
}

getFullEmployeeInfo(1);



// LEVEL 2
function dummyFunction() {
    
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
         resolve("I got invoked 2 seconds ago");
        }, 2000);
    });
}

async function callDummyFunction() {
    try {
        console.log(await dummyFunction());
    } catch (error) {
        console.log(`Error calling dummy function: ${error.message}`);
    }
}

callDummyFunction();

// LEVEL 3
// Already applied in the previous code