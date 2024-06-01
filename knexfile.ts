import type { Knex } from "knex";
const dotenv = require("dotenv");
dotenv.config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      user: process.env.USER as string,
      password: process.env.PASSWORD,
      port: 5432,
      host: "127.0.0.1",
      database: "latihan_orm"
    }
  }

};

module.exports = config;
