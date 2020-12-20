const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: '$ThorianXcode&MAX2020',
  database: 'ice_creamDB'
});


viewAllDepartments = () => {
    const query = connection.query(
        `SELECT * FROM department`,
        function(err, res) {
            if (err) throw err;
            console.table(res);
        }
    );
};
viewAllDepartments();


viewAllRoles = () => {
    const query = connection.query(
        `SELECT * FROM role`,
        function(err, res) {
            if (err) throw err;
            console.table(res);
        }
    );
};
viewAllRoles();

