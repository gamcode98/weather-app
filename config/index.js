require("dotenv").config();

const config = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  url: process.env.URL,
  adminUsername: process.env.ADMIN_USERNAME,
  adminPassword: process.env.ADMIN_PASSWORD,
};

module.exports = config;
