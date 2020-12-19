CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED NOT NULL,
    manager_id INTEGER UNSIGNED,
    PRIMARY KEY (id)
);
CREATE TABLE role (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (6,3) UNSIGNED NOT NULL,
    department_id INTEGER UNSIGNED Not Null,
    PRIMARY KEY (id)
);