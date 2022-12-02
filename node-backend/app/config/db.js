const {Client} = require("pg");
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  port: 5433,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

module.exports = {client}