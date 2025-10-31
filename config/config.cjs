require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
    production: {
    username: "root",
    password: "",
    database: "testdb_prod",
    host: "localhost",
    dialect: "mysql"
  }
};
