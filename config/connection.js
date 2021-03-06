var mysql = require("mysql");

// Export Connection ----------------------------------------
var connection = mysql.createConnection({
	host: "localhost",
	port: process.env.PORT,
	user: "root",
	password: "",
	database: "users_db"
});

// Make connection.
connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;