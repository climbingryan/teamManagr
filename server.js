const inquirer = require('inquirer');
    // EXPORT MODULES
const add = require('./routes/add/add');
const viewAll = require('./routes/viewAll/viewAll');
const update = require('./routes/update/update');

//     //  START ART
// var figlet = require('figlet');
//         // isometric3  poison  slant  speed
// figlet.text('Employee Manager', {
//     font: 'isometric3',
//     horizontalLayout: 'default',
//     verticalLayout: 'default',
//     width: 400,
//     whitespaceBreak: true
// }, function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

function start() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'startOptions',
            message: 'What would you like to do?',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employees Role']
        }
    ]).then(data => {
            // view FUNCTIONS
        if (data.startOptions === 'View all Departments') {
            return viewDepartments();
        } else if (data.startOptions === 'View all Roles') {
            return viewRoles();
        } else if (data.startOptions === 'View all Employees') {
            return viewEmployees();
        }   // ADD FUNCTIONS
        else if (data.startOptions === 'Add a Department') {
            return addDepartment()
        } else if(data.startOptions === 'Add a Role') {
            return addRole();
        } else if (data.startOptions === 'Add an Employee') {
            return addEmployee();
        }    // UPDATE FUNCTIONS 
        else if (data.startOptions === 'Update an Employees Role') {
            return updateEmployee();
        }
    });
};
    // View All functions
function viewDepartments() {
    const view = new viewAll();
    view.viewAllDepartments();
}
function viewRoles() {
    const view = new viewAll();
    view.viewAllRoles();
}
function viewEmployees() {
    const view = new viewAll();
    view.viewAllEmployees();
}

function addDepartment() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'addDepartmentName',
            message: 'Please the name of the department'
        },
        {
            type: 'confirm',
            name: 'backToStart',
            message: 'Would you like to go back to the starting menu?'
        }
    ]).then( data => {
        const adder = new add();
        adder.addDepartment(data.addDepartmentName)
        if (data.backToStart) {
            return start()
        } 
    });
};
function addRole() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'addRoleName',
            message: 'Please enter the name of the role'
        },
        {
            type: 'text',
            name: 'addRolesalary',
            message: 'What is the salary of the role'
        },
        {
            type: 'text',
            name: 'addRoleDepartment',
            message: 'Please enter the department of the role'
        },
        {
            type: 'confirm',
            name: 'backToStart',
            message: 'Would you like to go back to the starting menu?'
        }
    ]).then( data => {
        if (data.backToStart) {
            return start()
        } 
    });
};
function addEmployee() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'addEmployeeFirstName',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'text',
            name: 'addEmployeeLastName',
            message: 'What is the last name of the employee?'
        },
        {
            type: 'text',
            name: 'addEmployeeRole',
            message: 'What is the role of the employee?'
        },
        {
            type: 'text',
            name: 'addEmployeeManager',
            message: 'What is the manager of the employee?'
        },
        {
            type: 'confirm',
            name: 'backToStart',
            message: 'Would you like to go back to the starting menu?'
        }
    ]).then( data => {
        if (data.backToStart) {
            return start()
        } 
    });
};

function updateEmployee() {
    
}

start();
