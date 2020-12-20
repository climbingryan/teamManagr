const mysql = require('mysql2');   
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: '$ThorianXcode&MAX2020',
    database: 'employee'
  });

class add {
    constructor() {

    }
    addRole = (name, salary, department) => {
        const query = connection.query(
            `INSERT INTO role SET ?`,
            {
                title: name,
                salary: salary,
                department_id: department
            },
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + ' row was affected and has an id of ' + res.insertId);
            }
        );
        return query;
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

    addDepartment = (name) => {
        const query = connection.query(
            `INSERT INTO department SET ?`,
            {
            name: name,
            },
            function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + ' row was affected and has an id of ' + res.insertId)
            }
        );
        return query;
    };
}

module.exports = add;