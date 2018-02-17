const mysql = require("mysql");

var connection = mysql.createConnection({
    port: process.env.PORT || 3000,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect((err) => {
    if(err){
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;