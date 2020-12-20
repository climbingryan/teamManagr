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
addRole();

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
addEmployee();