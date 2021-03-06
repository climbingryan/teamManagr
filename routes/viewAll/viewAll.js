const mysql = require('mysql2');   
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: '',
    database: 'employee'
  });


class viewAll {

    viewAllDepartments() {
        const query = connection.query(
            `SELECT * FROM department`,
            function(err, res) {
                if (err) throw err;
                return console.table(res);
            }
        );
        return query;
    };
    
    viewAllRoles() {
        const query = connection.query(
            `SELECT * FROM role`,
            function(err, res) {
                if (err) throw err;
                return console.table(res);
            }
        );
        return query;
    };
    
    viewAllEmployees() {
        const query = connection.query(
            `SELECT * FROM employee`,
            function(err, res) {
                if (err) throw err;
                return console.table(res);
            }
        );
        return query;
    };
}

module.exports = viewAll;
