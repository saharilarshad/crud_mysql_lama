import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rill",
  database: "crud",
});

export default db;

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';