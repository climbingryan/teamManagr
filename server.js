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

const inquirer = require('inquirer');

function start() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'startOptions',
            message: 'What would you like to do?',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Role', 'add an Employee', 'Update an Employees Role']
        }
    ]);
};
start()