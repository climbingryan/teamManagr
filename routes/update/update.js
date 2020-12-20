const { up } = require("inquirer/lib/utils/readline");

class update {
    constructor(){

    }

    updateEmployee = () => {
        const query = connection.query(
            `UPDATE employee SET ? WHERE ?`,
            [
                {
                    role_id: 80
                 },
                 {
                    first_name: 'Billy'
                 }
            ],
            function(err, res) {
                if (err) throw err;
                console.log(res);
                console.log(res.affectedRows + ' row was affected')
            }
        );
    };

}

module.exports = update;