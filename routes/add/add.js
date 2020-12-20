const mysql = require('mysql2');
const cTable = require('console.table');
class add {
    constructor() {

    }
    addRole = () => {
        const query = connection.query(
            `INSERT INTO role SET ?`,
            {
                title: 'testMAN',
                salary: 50.000,
                department_id: 5
            },
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + ' row was affected and has an id of ' + res.insertId);
            }
        );
    };

    addEmployee = () => {
        const query = connection.query(
            `INSERT INTO employee SET ?`,
            {
            first_name: 'HappyConsole',
            last_name: 'Gamer',
            role_id: 9,
            manager_id: 55 
            },
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + ' row was affected and has an id of ' + res.insertId)
            }
        );
    };

    addDepartment = () => {
        const query = connection.query(
            `INSERT INTO department SET ?`,
            {
            name: 'HappyConsoleGamer',
            },
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + ' row was affected and has an id of ' + res.insertId)
            }
        );
    };
}

module.exports = add;