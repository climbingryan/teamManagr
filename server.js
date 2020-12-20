const mysql = require('mysql2');   
const cTable = require('console.table');
    //  START ART
var figlet = require('figlet');
        // isometric3  poison  slant  speed
figlet.text('Employee Manager', {
    font: 'isometric3',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 400,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

    // Starting sql statments
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: '$ThorianXcode&MAX2020',
  database: 'employee'
});
connection.connect(err => {
    if (err) throw err;
});

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
addDepartment();