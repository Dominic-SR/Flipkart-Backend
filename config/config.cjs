require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "flipkart",
    host: process.env.DB_HOST || "127.0.0.1",
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
