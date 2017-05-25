var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pw",
    database: "burgers_db"
});
// schema:
// CREATE TABLE burgers
// (
// id int NOT NULL AUTO_INCREMENT,
// burger_name varchar(255) NOT NULL,
// devoured  BOOLEAN DEFAULT FALSE,
// created TIMESTAMP,
// PRIMARY KEY (id)
// );


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});
module.exports = connection;