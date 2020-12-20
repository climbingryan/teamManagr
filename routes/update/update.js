const { up } = require("inquirer/lib/utils/readline");
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

class update {
    constructor(){

    }

    updateEmployee = (employee, role) => {
        const query = connection.query(
            `UPDATE employee SET ? WHERE ?`,
            [
                {
                    role_id: role
                 },
                 {
                    first_name: employee
                 }
            ],
            function(err, res) {
                if (err) throw err;
                console.log(res);
                console.log(res.affectedRows + ' row was affected')
            }
        );
        return query;
    };

}

module.exports = update;